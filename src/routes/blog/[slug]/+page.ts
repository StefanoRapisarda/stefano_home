import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const posts = import.meta.glob('/src/content/blog/*.md', { eager: true });

	for (const [path, post] of Object.entries(posts)) {
		const slug = path.split('/').pop()?.replace('.md', '');
		if (slug === params.slug) {
			const { default: content, metadata } = post as {
				default: any;
				metadata: Record<string, string>;
			};
			return { content, metadata };
		}
	}

	throw new Error(`Post not found: ${params.slug}`);
};
