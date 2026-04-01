import type { APIRoute } from 'astro';
import { EVENTS_PAGE } from '../../config';
import { generateOgImageForPage } from '../../utils/generateOgImages';

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      EVENTS_PAGE.heading,
      EVENTS_PAGE.description,
      EVENTS_PAGE.eyebrow
    ),
    {
      headers: { 'Content-Type': 'image/png' },
    }
  );
