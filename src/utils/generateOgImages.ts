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
  const safeTitle = escapeXml(title);
  const safeDescription = escapeXml(description);
  const safeEyebrow = escapeXml(eyebrow);

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
  <text x="70" y="230" fill="#F1F4FF" font-size="74" font-family="Arial Black, Arial, Helvetica, sans-serif" font-weight="900">${safeTitle}</text>
  <text x="70" y="300" fill="#B6C0E6" font-size="34" font-family="Arial, Helvetica, sans-serif">${safeDescription}</text>
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
