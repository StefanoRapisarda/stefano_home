import type { RequestHandler } from './$types';

const siteUrl = 'https://stefanorapisarda.github.io/stefano_home';

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const prerender = true;

export const GET: RequestHandler = async () => {
	const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true });

	const posts = Object.entries(postFiles)
		.map(([path, post]) => {
			const { metadata } = post as { metadata: Record<string, any> };
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			return { ...metadata, slug };
		})
		.filter((post) => post.draft !== 'true' && post.draft !== true)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const items = posts
		.map(
			(post) => `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${siteUrl}/blog/${post.slug}</link>
			<guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
			<description>${escapeXml(post.subtitle)}</description>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
			<category>${escapeXml(post.category)}</category>
		</item>`
		)
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Stefano Rapisarda - Blog</title>
		<link>${siteUrl}/blog</link>
		<description>Reflections at the intersection of data, code, science, and the questions that keep me up at night.</description>
		<language>en</language>
		<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
	</channel>
</rss>`;

	return new Response(rss.trim(), {
		headers: {
			'Content-Type': 'application/rss+xml'
		}
	});
};
