import type { APIRoute } from 'astro';
import { JOIN_PAGE } from '../../config';
import { generateOgImageForPage } from '../../utils/generateOgImages';

export const GET: APIRoute = async () =>
	new Response(
		await generateOgImageForPage(JOIN_PAGE.heading, JOIN_PAGE.description, JOIN_PAGE.eyebrow),
		{
			headers: { 'Content-Type': 'image/png' },
		}
	);
