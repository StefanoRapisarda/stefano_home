<svelte:head>
	<title>About - Stefano Rapisarda</title>
</svelte:head>

<div class="page-content">
	<div class="container">
		<div class="under-construction">
			<svg class="construction-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<rect x="8" y="44" width="48" height="6" rx="1" stroke="var(--color-accent)" stroke-width="2" />
				<rect x="12" y="38" width="40" height="6" rx="1" stroke="var(--color-accent)" stroke-width="2" />
				<polygon points="32,8 44,32 20,32" stroke="var(--color-accent)" stroke-width="2" fill="none" />
				<line x1="32" y1="16" x2="32" y2="24" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" />
				<circle cx="32" cy="27" r="1" fill="var(--color-accent)" />
			</svg>
			<h1 class="construction-title">Under Construction</h1>
			<p class="construction-text">This page is being rebuilt. Check back soon.</p>
		</div>
	</div>
</div>

<style>
	.page-content {
		padding: 8rem 0 4rem;
	}

	.under-construction {
		max-width: 480px;
		margin: 0 auto;
		text-align: center;
		padding: 4rem 1.5rem;
	}

	.construction-icon {
		width: 80px;
		height: 80px;
		margin-bottom: 2rem;
		opacity: 0.7;
	}

	.construction-title {
		font-size: 1.5rem;
		font-weight: 300;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-text-heading);
		margin-bottom: 1rem;
	}

	.construction-text {
		font-size: 1rem;
		color: var(--color-muted);
		line-height: 1.6;
	}
</style>
