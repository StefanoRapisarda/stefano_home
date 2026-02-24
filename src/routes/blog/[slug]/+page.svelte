<script>
	import { base } from '$app/paths';

	let { data } = $props();
	const { content: PostContent, metadata } = data;

	const siteUrl = 'https://stefanorapisarda.github.io/stefano_home';

	let toc = $state([]);
	let activeId = $state('');
	let progress = $state(0);
	let showBackToTop = $state(false);
	let articleEl;
	let pullquoteTop = $state(0);
	let pullquoteLeftTop = $state(0);
	let pullquoteRight2Top = $state(0);
	let pullquoteLeft2Top = $state(0);
	let pullquoteRight3Top = $state(0);
	let pullquoteLeft3Top = $state(0);

	function formatDate(dateStr) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function slugify(text) {
		return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
	}

	// Build TOC + assign heading IDs after mount
	$effect(() => {
		if (!articleEl) return;

		const headings = articleEl.querySelectorAll('h1, h2');
		const items = [];
		headings.forEach((h) => {
			const id = slugify(h.textContent);
			h.id = id;
			items.push({ id, text: h.textContent, level: h.tagName === 'H1' ? 1 : 2 });
		});
		toc = items;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{ rootMargin: '-80px 0px -70% 0px' }
		);
		headings.forEach((h) => observer.observe(h));

		return () => observer.disconnect();
	});

	// Position pull quote circles next to target paragraphs
	$effect(() => {
		if (!articleEl) return;
		const paragraphs = articleEl.querySelectorAll('p');
		for (const p of paragraphs) {
			if (p.textContent.includes('I would like to tell myself')) {
				pullquoteTop = p.offsetTop + p.offsetHeight / 2 - 140;
			}
			if (p.textContent.includes('In about 15 minutes')) {
				pullquoteLeftTop = p.offsetTop + p.offsetHeight / 2 - 140;
			}
			if (p.textContent.includes('One thing was certain')) {
				pullquoteRight2Top = p.offsetTop + p.offsetHeight / 2 - 140;
			}
			if (p.textContent.includes('The irony is beautiful')) {
				pullquoteLeft2Top = p.offsetTop + p.offsetHeight / 2 - 140;
			}
			if (p.textContent.includes('This is a trajectory that should concern')) {
				pullquoteRight3Top = p.offsetTop + p.offsetHeight / 2 - 140;
			}
			if (p.textContent.includes('must learn to oscillate deliberately')) {
				pullquoteLeft3Top = p.offsetTop + p.offsetHeight / 2 - 140;
			}
		}
	});

	// Scroll progress + back-to-top visibility
	$effect(() => {
		function onScroll() {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
			showBackToTop = scrollTop > 600;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function activeLabel() {
		const item = toc.find((t) => t.id === activeId);
		return item ? item.text : '';
	}
</script>

<svelte:head>
	<title>{metadata.title} - Stefano Rapisarda</title>
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.subtitle} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="{siteUrl}/blog/{metadata.slug}" />
	{#if metadata.image}
		<meta property="og:image" content="{siteUrl}{metadata.image}" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.subtitle} />
	{#if metadata.image}
		<meta name="twitter:image" content="{siteUrl}{metadata.image}" />
	{/if}
</svelte:head>

<!-- Progress bar -->
<div class="progress-bar" style="transform: scaleX({progress})"></div>

<!-- Sticky section title -->
{#if activeId && showBackToTop}
	<div class="sticky-section">
		<span class="sticky-label">{activeLabel()}</span>
	</div>
{/if}

<!-- Sidebar TOC (desktop only) -->
{#if toc.length > 0}
	<nav class="toc-sidebar" aria-label="Table of contents">
		<h2 class="toc-title">Contents</h2>
		<ol class="toc-list">
			{#each toc as item}
				<li class="toc-item" class:toc-active={activeId === item.id}>
					<a href="#{item.id}" class="toc-link">{item.text}</a>
				</li>
			{/each}
		</ol>
	</nav>
{/if}

<div class="blog-post">
	<a href="{base}/blog" class="back-link">&larr; Notebook</a>

	{#if metadata.image}
		<figure class="hero-image">
			<img src="{base}{metadata.image}" alt={metadata.imageAlt || metadata.title} />
			{#if metadata.imageAlt}
				<figcaption>{metadata.imageAlt}</figcaption>
			{/if}
		</figure>
	{/if}

	<header class="post-header">
		<div class="post-meta">
			<time datetime={metadata.date}>{formatDate(metadata.date)}</time>
			<span class="sep">/</span>
			<span class="category">{metadata.category}</span>
			<span class="sep">/</span>
			<span>{metadata.readingTime}</span>
		</div>
		<h1 class="post-title">{metadata.title}</h1>
		<p class="post-subtitle">{metadata.subtitle}</p>
	</header>

	<!-- Pull quote circles (wide screens only) -->
	<div class="pullquote-circle pullquote-right" style="top: {pullquoteTop}px">
		<p class="pullquote-text">"I would like to tell myself that the time spent dealing with that software has been a painful, and yet valuable experience, that let me understand how to code, that made me a better programmer or made me understand the algorithmic logic. For a little part, yes, but mostly not."</p>
	</div>
	<div class="pullquote-circle pullquote-left" style="top: {pullquoteLeftTop}px">
		<p class="pullquote-text">"In about 15 minutes and some key pressing, Claude generated a fully functional webapp. Of course several features had not been implemented as intended, but still, the app worked. The following three months have been just... fun."</p>
	</div>
	<div class="pullquote-circle pullquote-right" style="top: {pullquoteRight2Top}px">
		<p class="pullquote-text">"One thing was certain, to use a cliché, the genie had left its bottle and there was no way to put it back. The second certain thing is that I could never compete with AI at software development. AI is already writing better software than I ever had, thousands of times faster."</p>
	</div>
	<div class="pullquote-circle pullquote-left" style="top: {pullquoteLeft2Top}px">
		<p class="pullquote-text">"The irony is beautiful: In the age of AI, the most important thing a programmer can write is not code, but prose."</p>
	</div>
	<div class="pullquote-circle pullquote-right" style="top: {pullquoteRight3Top}px">
		<p class="pullquote-text">"This is a trajectory that should concern anyone. In the near future, software may become so complex that only AI can edit the code, and at that point, you are no longer the owner of your project, you are its curator, dependent on a tool that you do not fully understand and cannot fully control."</p>
	</div>
	<div class="pullquote-circle pullquote-left" style="top: {pullquoteLeft3Top}px">
		<p class="pullquote-text">"The software developer of the AI age, I believe, must learn to oscillate deliberately between these two paces. Fast to explore, slow to consolidate. Fast to generate possibilities, slow to choose among them."</p>
	</div>

	<article class="post-content" bind:this={articleEl}>
		<PostContent />
	</article>

	<footer class="post-footer">
		<a href="{base}/blog" class="back-link">&larr; Notebook</a>
	</footer>
</div>

<!-- Back to top -->
{#if showBackToTop}
	<button class="back-to-top" onclick={scrollToTop} aria-label="Back to top">
		&uarr;
	</button>
{/if}

<style>
	/* Progress bar */
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: var(--color-accent);
		transform-origin: left;
		z-index: 100;
	}

	/* Sticky section title */
	.sticky-section {
		position: fixed;
		top: 3px;
		left: 0;
		width: 100%;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		z-index: 99;
		padding: 0.5rem 1.5rem;
		text-align: center;
	}

	.sticky-label {
		font-size: 0.75rem;
		color: var(--color-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	/* Sidebar TOC */
	.toc-sidebar {
		position: fixed;
		top: 25%;
		transform: translateY(-50%);
		right: calc((100vw - 700px) / 2 - 220px - 3rem);
		width: 200px;
		z-index: 50;
		background: var(--color-bg);
		padding: 1rem 1.2rem;
		border-radius: 8px;
	}

	.toc-title {
		font-size: 0.7rem;
		color: var(--color-muted);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-weight: 500;
		margin-bottom: 0.8rem;
	}

	.toc-list {
		list-style: none;
		padding: 0;
		margin: 0;
		border-left: 1px solid var(--color-border);
	}

	.toc-item {
		padding-left: 1rem;
		margin-bottom: 0.15rem;
		position: relative;
	}

	.toc-item::before {
		content: '';
		position: absolute;
		left: -1px;
		top: 0;
		height: 100%;
		width: 1px;
		background: transparent;
		transition: background 0.2s;
	}

	.toc-active::before {
		background: var(--color-accent);
	}

	.toc-link {
		font-size: 0.78rem;
		color: var(--color-muted);
		text-decoration: none;
		transition: color 0.2s;
		line-height: 1.7;
		display: block;
	}

	.toc-link:hover {
		color: var(--color-text);
	}

	.toc-active .toc-link {
		color: var(--color-accent);
	}

	/* Hide sidebar TOC on narrow screens */
	@media (max-width: 1200px) {
		.toc-sidebar {
			display: none;
		}
	}

	/* Back to top */
	.back-to-top {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--color-border);
		background: var(--color-bg-card);
		color: var(--color-accent);
		font-size: 1.1rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s, border-color 0.2s;
		z-index: 90;
	}

	.back-to-top:hover {
		border-color: var(--color-accent);
	}

	/* Main layout */
	.blog-post {
		position: relative;
		max-width: 700px;
		margin: 0 auto;
		padding: 4rem 1.5rem 4rem;
		line-height: 1.8;
	}

	/* Pull quote circles */
	.pullquote-circle {
		position: absolute;
		width: 280px;
		height: 280px;
		border-radius: 50%;
		border: 1px solid rgba(224, 190, 153, 0.25);
		background: var(--color-bg);
		box-shadow:
			0 0 8px 1px rgba(224, 190, 153, 0.08),
			0 0 20px 2px rgba(224, 190, 153, 0.04),
			inset 0 0 15px 2px rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px;
		transition: box-shadow 0.4s ease, border-color 0.4s ease;
	}

	.pullquote-circle::before {
		content: '';
		position: absolute;
		top: -3px;
		left: -3px;
		right: -3px;
		bottom: -3px;
		border-radius: 50%;
		background: conic-gradient(
			from 0deg,
			transparent 0%,
			transparent 60%,
			rgba(224, 190, 153, 0.7) 75%,
			rgba(224, 190, 153, 0.3) 85%,
			transparent 95%
		);
		z-index: -1;
		opacity: 0;
		transition: opacity 0.4s ease;
		animation: orbit 3s linear infinite;
	}

	.pullquote-circle:hover::before {
		opacity: 1;
	}

	.pullquote-circle:hover {
		border-color: rgba(224, 190, 153, 0.5);
		box-shadow:
			0 0 20px 4px rgba(224, 190, 153, 0.15),
			0 0 50px 10px rgba(224, 190, 153, 0.08),
			inset 0 0 20px 3px rgba(0, 0, 0, 0.4);
	}

	@keyframes orbit {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	.pullquote-right {
		left: calc(100% + 2rem);
	}

	.pullquote-left {
		right: calc(100% + 2rem);
	}

	.pullquote-text {
		font-size: 0.72rem;
		font-style: italic;
		color: var(--color-muted);
		text-align: center;
		line-height: 1.5;
		margin: 0;
	}

	@media (max-width: 1300px) {
		.pullquote-circle {
			display: none;
		}
	}

	.back-link {
		display: inline-block;
		font-size: 0.85rem;
		color: var(--color-muted);
		text-decoration: none;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: var(--color-accent);
	}

	/* Hero image */
	.hero-image {
		margin: 2rem 0 2.5rem;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		border-radius: var(--radius);
	}

	.hero-image figcaption {
		font-size: 0.78rem;
		color: var(--color-muted);
		margin-top: 0.6rem;
		font-style: italic;
	}

	/* Header */
	.post-header {
		margin-bottom: 2.5rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--color-border);
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: var(--color-muted);
		margin-bottom: 1.2rem;
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
		font-size: 2.2rem;
		font-weight: 300;
		color: var(--color-text-heading);
		line-height: 1.25;
		margin-bottom: 0.8rem;
	}

	.post-subtitle {
		font-size: 1.05rem;
		color: var(--color-muted);
		line-height: 1.65;
		font-style: italic;
	}

	/* Markdown content */
	.post-content {
		font-size: 1.05rem;
	}

	.post-content :global(h1) {
		font-size: 1.6rem;
		font-weight: 400;
		color: var(--color-text-heading);
		margin: 3rem 0 1rem;
		padding-top: 1rem;
	}

	.post-content :global(h2) {
		font-size: 1.3rem;
		font-weight: 400;
		color: var(--color-text-heading);
		margin: 2.5rem 0 1rem;
		padding-top: 0.8rem;
	}

	.post-content :global(h3) {
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-text-heading);
		margin: 2rem 0 0.8rem;
	}

	.post-content :global(p) {
		margin-bottom: 1.4rem;
		color: var(--color-text);
	}

	.post-content :global(strong) {
		color: var(--color-text-heading);
		font-weight: 600;
	}

	.post-content :global(em) {
		font-style: italic;
	}

	.post-content :global(a) {
		color: var(--color-accent);
		text-decoration: none;
	}

	.post-content :global(a:hover) {
		color: var(--color-accent-hover);
	}

	/* Pull quotes */
	.post-content :global(blockquote) {
		font-size: 1.2rem;
		font-style: italic;
		color: var(--color-text-heading);
		border-left: 2px solid var(--color-accent);
		margin: 2rem 0;
		padding: 0.5rem 0 0.5rem 1.5rem;
		line-height: 1.6;
	}

	.post-content :global(blockquote p) {
		color: var(--color-text-heading);
		margin-bottom: 0;
	}

	/* Section breaks */
	.post-content :global(hr) {
		border: none;
		text-align: center;
		margin: 2.5rem 0;
		color: var(--color-muted);
		font-size: 1rem;
		letter-spacing: 0.5em;
	}

	.post-content :global(hr::after) {
		content: '* * *';
	}

	/* Lists */
	.post-content :global(ul),
	.post-content :global(ol) {
		margin-bottom: 1.4rem;
		padding-left: 1.5rem;
		color: var(--color-text);
	}

	.post-content :global(li) {
		margin-bottom: 0.4rem;
	}

	/* Code */
	.post-content :global(code) {
		font-family: 'SF Mono', Menlo, Consolas, monospace;
		background: var(--color-bg-card);
		padding: 0.15rem 0.35rem;
		border-radius: 3px;
		font-size: 0.85em;
		color: var(--color-accent);
	}

	.post-content :global(pre) {
		background: var(--color-bg-card);
		padding: 1.2rem;
		border-radius: var(--radius);
		overflow-x: auto;
		margin-bottom: 1.4rem;
		border: 1px solid var(--color-border);
	}

	.post-content :global(pre code) {
		background: none;
		padding: 0;
		color: var(--color-text);
	}

	/* Images and figures */
	.post-content :global(img) {
		max-width: 100%;
		height: auto;
		margin: 1rem 0;
		border-radius: var(--radius);
	}

	.post-content :global(figure) {
		margin: 2rem 0;
		text-align: center;
	}

	.post-content :global(figcaption) {
		font-size: 0.78rem;
		color: var(--color-muted);
		font-style: italic;
		margin-top: 0.5rem;
	}

	.post-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}
</style>
