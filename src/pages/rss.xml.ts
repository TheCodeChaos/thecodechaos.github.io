import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${SITE.title} Blog`,
    description: SITE.description,
    site: context.site ?? SITE.website,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
};
