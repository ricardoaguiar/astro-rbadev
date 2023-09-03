import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

export const prerender = true;
const parser = new MarkdownIt();

export async function get(context: AstroConfig) {
	const blog = await getCollection('blog');

	return rss({
		title: 'My Blog',
		description: 'A blog about stuff',
		site: context.site!,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/blob/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body)),
		})),
	});
}
