<script>
	import { base } from '$app/paths';
</script>

<section class="hero" style="background-image: url('{base}/images/simulated_bh.jpeg')">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<h1 class="hero-name">Stefano Rapisarda</h1>
		<p class="hero-tagline">
			Database Coordinator, Software Developer, quasi-periodic Astronomer
		</p>
		<hr class="hero-divider" />
		<nav class="hero-nav">
			<a href="{base}/#skills">Skills</a>
			<a href="{base}/cv">CV</a>
			<a href="{base}/publications">Publications</a>
			<a href="{base}/teaching">Teaching</a>
			<a href="{base}/blog">Blog</a>
			<a href="{base}/about">About</a>
			<a href="{base}/contact">Contact</a>
		</nav>
	</div>
</section>

<style>
	.hero {
		position: relative;
		height: 100dvh;
		height: 100vh; /* fallback for older browsers */
		height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: 38% center;
		overflow: hidden;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at center, var(--hero-overlay-inner) 0%, var(--hero-overlay-outer) 100%);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 2rem;
		max-width: 800px;
	}

	.hero-name {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		color: var(--hero-heading, white);
		margin-bottom: 0.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.hero-tagline {
		font-size: clamp(1rem, 2.5vw, 1.5rem);
		color: var(--hero-text, rgba(255, 255, 255, 0.85));
		margin-bottom: 1.5rem;
		line-height: 1.4;
	}

	.hero-divider {
		border: none;
		border-top: 1px solid var(--hero-divider, rgba(255, 255, 255, 0.3));
		width: 60%;
		margin: 0 auto 1.5rem;
	}

	.hero-nav {
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.hero-nav a {
		color: var(--hero-link, rgba(255, 255, 255, 0.75));
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: color 0.2s ease;
	}

	.hero-nav a:hover {
		color: var(--hero-heading, white);
	}

</style>
