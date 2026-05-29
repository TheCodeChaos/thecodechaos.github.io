import type { APIRoute } from 'astro';
import { MEMBERS_PAGE } from '../../config';
import { generateOgImageForPage } from '../../utils/generateOgImages';

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      MEMBERS_PAGE.heading,
      MEMBERS_PAGE.description,
      MEMBERS_PAGE.eyebrow
    ),
    {
      headers: { 'Content-Type': 'image/png' },
    }
  );
