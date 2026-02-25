import type { RequestHandler } from './$types';

const siteUrl = 'https://stefanorapisarda.github.io/stefano_home';

const staticPages = [
	{ path: '', priority: '1.0', changefreq: 'monthly' },
	{ path: '/blog', priority: '0.9', changefreq: 'weekly' },
	{ path: '/about', priority: '0.7', changefreq: 'monthly' },
	{ path: '/cv', priority: '0.7', changefreq: 'monthly' },
	{ path: '/contact', priority: '0.6', changefreq: 'yearly' },
	{ path: '/publications', priority: '0.7', changefreq: 'monthly' },
	{ path: '/teaching', priority: '0.7', changefreq: 'monthly' }
];

export const prerender = true;

export const GET: RequestHandler = async () => {
	const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true });

	const posts = Object.entries(postFiles)
		.map(([path, post]) => {
			const { metadata } = post as { metadata: Record<string, any> };
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			return { ...metadata, slug };
		})
		.filter((post) => post.draft !== 'true' && post.draft !== true);

	const staticEntries = staticPages
		.map(
			(page) => `
	<url>
		<loc>${siteUrl}${page.path}</loc>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
		)
		.join('');

	const blogEntries = posts
		.map(
			(post) => `
	<url>
		<loc>${siteUrl}/blog/${post.slug}</loc>
		<lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.8</priority>
	</url>`
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticEntries}${blogEntries}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
