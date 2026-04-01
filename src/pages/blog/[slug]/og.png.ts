import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImageForPost } from '../../../utils/generateOgImages';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props.post), {
    headers: { 'Content-Type': 'image/png' },
  });
