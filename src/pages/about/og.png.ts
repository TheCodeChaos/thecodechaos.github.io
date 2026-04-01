import type { APIRoute } from 'astro';
import { ABOUT_PAGE } from '../../config';
import { generateOgImageForPage } from '../../utils/generateOgImages';

export const GET: APIRoute = async () =>
	new Response(
		await generateOgImageForPage(ABOUT_PAGE.heading, ABOUT_PAGE.description, ABOUT_PAGE.eyebrow),
		{
			headers: { 'Content-Type': 'image/png' },
		}
	);
