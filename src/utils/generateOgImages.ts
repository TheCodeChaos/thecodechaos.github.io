import { Resvg } from '@resvg/resvg-js';
import { SITE } from '../config';

type PostLike = {
  data: {
    title: string;
    description?: string;
  };
};

const WIDTH = 1200;
const HEIGHT = 630;
const CONTENT_X = 70;
const CONTENT_WIDTH = 1060;

const estimateCharWidth = (char: string, fontSize: number) => {
  if (char === ' ') return fontSize * 0.32;
  if (/[WM@#%&]/.test(char)) return fontSize * 0.9;
  if (/[A-Z]/.test(char)) return fontSize * 0.72;
  if (/[a-z0-9]/.test(char)) return fontSize * 0.56;
  if (/[.,:;!?]/.test(char)) return fontSize * 0.35;
  return fontSize * 0.62;
};

const estimateTextWidth = (text: string, fontSize: number) =>
  [...text].reduce((sum, char) => sum + estimateCharWidth(char, fontSize), 0);

const withEllipsis = (text: string, maxWidth: number, fontSize: number) => {
  const ellipsis = '...';
  if (estimateTextWidth(text, fontSize) <= maxWidth) return text;

  let trimmed = text.trimEnd();
  while (trimmed.length > 0) {
    const candidate = `${trimmed}${ellipsis}`;
    if (estimateTextWidth(candidate, fontSize) <= maxWidth) return candidate;
    trimmed = trimmed.slice(0, -1).trimEnd();
  }

  return ellipsis;
};

const wrapText = (
  rawText: string,
  maxWidth: number,
  fontSize: number,
  maxLines: number
) => {
  const text = rawText.replace(/\s+/g, ' ').trim();
  if (!text) return [''];

  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;

    if (estimateTextWidth(candidate, fontSize) <= maxWidth) {
      current = candidate;
      continue;
    }

    if (current) {
      lines.push(current);
    }

    if (estimateTextWidth(word, fontSize) <= maxWidth) {
      current = word;
      continue;
    }

    let chunk = '';
    for (const char of [...word]) {
      const chunkCandidate = `${chunk}${char}`;
      if (estimateTextWidth(chunkCandidate, fontSize) <= maxWidth) {
        chunk = chunkCandidate;
      } else {
        if (chunk) lines.push(chunk);
        chunk = char;
      }
    }

    current = chunk;
  }

  if (current) lines.push(current);

  if (lines.length <= maxLines) return lines;

  const clamped = lines.slice(0, maxLines);
  clamped[maxLines - 1] = withEllipsis(
    clamped[maxLines - 1],
    maxWidth,
    fontSize
  );
  return clamped;
};

const renderMultilineText = ({
  lines,
  x,
  y,
  fill,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
}: {
  lines: string[];
  x: number;
  y: number;
  fill: string;
  fontSize: number;
  fontFamily: string;
  fontWeight?: string;
  lineHeight: number;
  letterSpacing?: number;
}) => {
  const letterSpacingAttr =
    typeof letterSpacing === 'number'
      ? ` letter-spacing="${letterSpacing}"`
      : '';

  const tspans = lines
    .map((line, index) => {
      const escaped = escapeXml(line);
      if (index === 0) return `<tspan x="${x}" y="${y}">${escaped}</tspan>`;
      return `<tspan x="${x}" dy="${lineHeight}">${escaped}</tspan>`;
    })
    .join('');

  const weightAttr = fontWeight ? ` font-weight="${fontWeight}"` : '';

  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${fontSize}" font-family="${fontFamily}"${weightAttr}${letterSpacingAttr}>${tspans}</text>`;
};

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const toPngBuffer = (svg: string) => {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: WIDTH,
    },
  });
  const pngData = resvg.render();
  return new Uint8Array(pngData.asPng());
};

const buildSvg = (title: string, description: string, eyebrow: string) => {
  const safeEyebrow = escapeXml(eyebrow);
  const titleLines = wrapText(title, CONTENT_WIDTH, 74, 3);
  const descriptionLines = wrapText(description, CONTENT_WIDTH, 34, 2);

  const titleStartY = 230;
  const titleLineHeight = 82;
  const titleBottomY =
    titleStartY + (Math.max(titleLines.length, 1) - 1) * titleLineHeight;

  const descriptionStartY = Math.min(titleBottomY + 64, 415);
  const descriptionLineHeight = 44;

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0C1025"/>
      <stop offset="1" stop-color="#1D2A55"/>
    </linearGradient>
    <radialGradient id="orbA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(970 80) rotate(90) scale(280 280)">
      <stop stop-color="#51E7D5" stop-opacity="0.33"/>
      <stop offset="1" stop-color="#51E7D5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orbB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130 610) rotate(-90) scale(320 320)">
      <stop stop-color="#FF6A3D" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#FF6A3D" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#orbA)"/>
  <rect width="1200" height="630" fill="url(#orbB)"/>
  <text x="70" y="110" fill="#51E7D5" font-size="26" font-family="Arial, Helvetica, sans-serif" letter-spacing="3" font-weight="700">${safeEyebrow}</text>
  ${renderMultilineText({
    lines: titleLines,
    x: CONTENT_X,
    y: titleStartY,
    fill: '#F1F4FF',
    fontSize: 74,
    fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
    fontWeight: '900',
    lineHeight: titleLineHeight,
  })}
  ${renderMultilineText({
    lines: descriptionLines,
    x: CONTENT_X,
    y: descriptionStartY,
    fill: '#B6C0E6',
    fontSize: 34,
    fontFamily: 'Arial, Helvetica, sans-serif',
    lineHeight: descriptionLineHeight,
  })}
  <rect x="70" y="500" width="1060" height="1" fill="rgba(255,255,255,0.2)"/>
  <text x="70" y="560" fill="#FF6A3D" font-size="34" font-family="Arial, Helvetica, sans-serif" font-weight="700">${escapeXml(SITE.title)}</text>
</svg>
`;
};

export const generateOgImageForSite = async () =>
  toPngBuffer(
    buildSvg(SITE.title, SITE.description, 'Open Coding Club for Students')
  );

export const generateOgImageForPage = async (
  title: string,
  description: string,
  eyebrow = 'CodeChaos Page'
) => toPngBuffer(buildSvg(title, description, eyebrow));

export const generateOgImageForPost = async (post: PostLike) =>
  toPngBuffer(
    buildSvg(
      post.data.title,
      post.data.description ?? SITE.description,
      'CodeChaos Blog'
    )
  );
