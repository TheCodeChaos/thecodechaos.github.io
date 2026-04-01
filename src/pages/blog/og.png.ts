import type { APIRoute } from 'astro';
import { BLOG_PAGE } from '../../config';
import { generateOgImageForPage } from '../../utils/generateOgImages';

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      BLOG_PAGE.heading,
      BLOG_PAGE.description,
      BLOG_PAGE.eyebrow
    ),
    {
      headers: { 'Content-Type': 'image/png' },
    }
  );
