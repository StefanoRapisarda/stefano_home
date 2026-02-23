import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true });

	const posts = Object.entries(postFiles)
		.map(([path, post]) => {
			const { metadata } = post as { metadata: Record<string, string> };
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			return { ...metadata, slug };
		})
		.filter((post) => post.draft !== 'true' && post.draft !== true)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
