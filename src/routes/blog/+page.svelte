<script>
	import { base } from '$app/paths';

	let { data } = $props();

	function formatDate(dateStr) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog - Stefano Rapisarda</title>
</svelte:head>

<div class="blog-listing">
	<nav class="blog-nav">
		<a href="{base}/" class="home-link">&larr; Home</a>
	</nav>

	<header class="blog-header">
		<h1 class="blog-title">
			<svg class="title-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<circle cx="16" cy="16" r="2.5" fill="var(--color-accent)" />
				<circle cx="6" cy="8" r="1.2" fill="var(--color-accent)" opacity="0.7" />
				<circle cx="26" cy="6" r="1.5" fill="var(--color-accent)" opacity="0.5" />
				<circle cx="28" cy="22" r="1" fill="var(--color-accent)" opacity="0.6" />
				<circle cx="8" cy="26" r="1.3" fill="var(--color-accent)" opacity="0.4" />
				<circle cx="22" cy="28" r="0.8" fill="var(--color-accent)" opacity="0.5" />
				<circle cx="4" cy="17" r="0.7" fill="var(--color-accent)" opacity="0.3" />
				<line x1="6" y1="8" x2="16" y2="16" stroke="var(--color-accent)" stroke-width="0.4" opacity="0.3" />
				<line x1="16" y1="16" x2="26" y2="6" stroke="var(--color-accent)" stroke-width="0.4" opacity="0.3" />
				<line x1="16" y1="16" x2="28" y2="22" stroke="var(--color-accent)" stroke-width="0.4" opacity="0.3" />
				<line x1="16" y1="16" x2="8" y2="26" stroke="var(--color-accent)" stroke-width="0.4" opacity="0.3" />
			</svg>
			Notebook
		</h1>
		<p class="blog-intro">
			Reflections at the intersection of data, code, science, and the questions that keep me up at night.
		</p>
	</header>

	<div class="posts">
		{#each data.posts as post}
			<a href="{base}/blog/{post.slug}" class="post-link">
				<article class="post">
					{#if post.image}
						<div class="post-image">
							<img src="{base}{post.image}" alt={post.title} />
						</div>
					{/if}
					<div class="post-body">
						<div class="post-meta">
							<time datetime={post.date}>{formatDate(post.date)}</time>
							<span class="sep">/</span>
							<span class="category">{post.category}</span>
							<span class="sep">/</span>
							<span>{post.readingTime}</span>
						</div>
						<h2 class="post-title">{post.title}</h2>
						<p class="post-subtitle">{post.subtitle}</p>
					</div>
				</article>
			</a>
		{/each}
	</div>

	<footer class="blog-footer">
		<p>More to come.</p>
	</footer>
</div>

<style>
	.blog-listing {
		max-width: 700px;
		margin: 0 auto;
		padding: 4rem 1.5rem 4rem;
	}

	.blog-nav {
		margin-bottom: 3rem;
	}

	.home-link {
		font-size: 0.85rem;
		color: var(--color-muted);
		text-decoration: none;
		transition: color 0.2s;
	}

	.home-link:hover {
		color: var(--color-accent);
	}

	.blog-header {
		margin-bottom: 3rem;
	}

	.blog-title {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		font-size: 2.5rem;
		font-weight: 300;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-heading);
		margin-bottom: 1rem;
	}

	.title-icon {
		width: 2rem;
		height: 2rem;
		flex-shrink: 0;
	}

	.blog-intro {
		font-size: 1rem;
		color: var(--color-muted);
		line-height: 1.7;
		font-style: italic;
	}

	.posts {
		display: flex;
		flex-direction: column;
	}

	.post-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.post {
		padding: 2rem 0;
		border-top: 1px solid var(--color-border);
		transition: opacity 0.2s;
	}

	.post-link:hover .post {
		opacity: 0.7;
	}

	.post-link:last-child .post {
		border-bottom: 1px solid var(--color-border);
	}

	.post-image {
		margin-bottom: 1rem;
	}

	.post-image img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: var(--radius);
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: var(--color-muted);
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.sep {
		opacity: 0.4;
	}

	.category {
		color: var(--color-accent);
	}

	.post-title {
		font-size: 1.5rem;
		font-weight: 500;
		color: var(--color-text-heading);
		margin-bottom: 0.4rem;
		line-height: 1.3;
	}

	.post-subtitle {
		font-size: 0.95rem;
		color: var(--color-muted);
		line-height: 1.6;
	}

	.blog-footer {
		margin-top: 2.5rem;
		text-align: center;
	}

	.blog-footer p {
		font-size: 0.9rem;
		color: var(--color-muted);
		font-style: italic;
	}
</style>
