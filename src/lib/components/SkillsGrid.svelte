<script>
	import SkillCard from './SkillCard.svelte';

	const skills = [
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>',
			title: 'Data Modeling',
			description: 'OMOP common data model, clinical data harmonization, linking multimodal research data for precision medicine.'
		},
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
			title: 'FAIR & Open Science',
			description: 'Implementing FAIR principles for research data. Training researchers in open science practices, reproducibility, and data management.'
		},
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
			title: 'Statistical Analysis',
			description: 'Time series analysis with Fourier and wavelet methods. Bayesian inference applied to astrophysical data and signal processing.'
		},
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>',
			title: 'Scientific Software',
			description: 'Python scientific stack, package development, and publishing. Building research tools with NumPy, SciPy, Pandas, and Astropy.'
		},
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
			title: 'AI Workflows',
			description: 'Integrating generative AI into research and development processes. Training others in responsible and effective use of AI tools.'
		},
		{
			icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
			title: 'Training & Communication',
			description: 'Designing and delivering workshops on programming, data management, and text mining. Scientific communication across disciplines.'
		}
	];
</script>

<section id="skills" class="skills-section">
	<div class="galaxy">
		<div class="stars stars-1"></div>
		<div class="stars stars-2"></div>
		<div class="stars stars-3"></div>
		<div class="skills-grid">
			{#each skills as skill}
				<SkillCard {...skill} />
			{/each}
		</div>
	</div>
</section>

<style>
	.skills-section {
		padding: 0;
		position: relative;
	}

	.galaxy {
		position: relative;
		padding: 5rem 2rem 4rem;
		background: var(--color-bg);
		overflow: hidden;
	}

	.skills-grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		gap: 2.5rem 1rem;
		max-width: 800px;
		margin: 0 auto;
	}

	/* --- Stars --- */
	.stars {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	/* Bright stars — white and blue-white, large (mag 1-2) */
	.stars-1 {
		background-image:
			radial-gradient(2.2px 2.2px at 4% 10%, rgba(200,220,255,0.7) 50%, transparent 100%),
			radial-gradient(2px 2px at 15% 75%, rgba(255,255,255,0.6) 50%, transparent 100%),
			radial-gradient(2.4px 2.4px at 28% 18%, rgba(180,210,255,0.65) 50%, transparent 100%),
			radial-gradient(2px 2px at 42% 88%, rgba(255,240,220,0.6) 50%, transparent 100%),
			radial-gradient(2.2px 2.2px at 55% 6%, rgba(255,255,255,0.7) 50%, transparent 100%),
			radial-gradient(2px 2px at 68% 65%, rgba(200,220,255,0.55) 50%, transparent 100%),
			radial-gradient(2.4px 2.4px at 82% 30%, rgba(255,230,200,0.6) 50%, transparent 100%),
			radial-gradient(2px 2px at 93% 82%, rgba(180,210,255,0.65) 50%, transparent 100%),
			radial-gradient(2.2px 2.2px at 72% 92%, rgba(255,255,255,0.55) 50%, transparent 100%),
			radial-gradient(2px 2px at 8% 48%, rgba(255,200,180,0.5) 50%, transparent 100%),
			radial-gradient(2.4px 2.4px at 37% 42%, rgba(200,220,255,0.6) 50%, transparent 100%),
			radial-gradient(2px 2px at 88% 12%, rgba(255,255,240,0.65) 50%, transparent 100%);
	}

	/* Medium stars — mixed colors (mag 3-4) */
	.stars-2 {
		background-image:
			radial-gradient(1.3px 1.3px at 2% 22%, rgba(255,255,255,0.4) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 6% 60%, rgba(180,200,255,0.35) 50%, transparent 100%),
			radial-gradient(1.4px 1.4px at 10% 38%, rgba(255,220,180,0.38) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 17% 85%, rgba(255,255,255,0.32) 50%, transparent 100%),
			radial-gradient(1.3px 1.3px at 21% 15%, rgba(200,220,255,0.4) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 25% 55%, rgba(255,240,200,0.35) 50%, transparent 100%),
			radial-gradient(1.4px 1.4px at 30% 78%, rgba(255,255,255,0.38) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 35% 8%, rgba(180,210,255,0.35) 50%, transparent 100%),
			radial-gradient(1.3px 1.3px at 40% 68%, rgba(255,200,170,0.32) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 45% 25%, rgba(255,255,255,0.4) 50%, transparent 100%),
			radial-gradient(1.4px 1.4px at 50% 50%, rgba(200,220,255,0.35) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 55% 92%, rgba(255,230,200,0.38) 50%, transparent 100%),
			radial-gradient(1.3px 1.3px at 60% 35%, rgba(255,255,255,0.32) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 65% 72%, rgba(180,210,255,0.4) 50%, transparent 100%),
			radial-gradient(1.4px 1.4px at 70% 10%, rgba(255,210,180,0.35) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 75% 52%, rgba(255,255,255,0.38) 50%, transparent 100%),
			radial-gradient(1.3px 1.3px at 80% 88%, rgba(200,220,255,0.32) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 85% 20%, rgba(255,255,240,0.4) 50%, transparent 100%),
			radial-gradient(1.4px 1.4px at 90% 62%, rgba(255,255,255,0.35) 50%, transparent 100%),
			radial-gradient(1.2px 1.2px at 95% 40%, rgba(180,200,255,0.38) 50%, transparent 100%),
			radial-gradient(1.3px 1.3px at 98% 75%, rgba(255,220,190,0.32) 50%, transparent 100%);
	}

	/* Faint stars — dim, numerous (mag 5-6) */
	.stars-3 {
		background-image:
			radial-gradient(0.7px 0.7px at 1% 30%, rgba(255,255,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 3% 72%, rgba(200,215,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 5% 15%, rgba(255,240,220,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 8% 88%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 12% 42%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 16% 65%, rgba(255,255,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 19% 5%, rgba(255,230,210,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 22% 50%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 26% 82%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 29% 28%, rgba(255,255,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 33% 58%, rgba(255,240,220,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 36% 95%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 39% 12%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 43% 45%, rgba(255,255,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 47% 75%, rgba(255,220,200,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 51% 20%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 54% 62%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 58% 38%, rgba(255,255,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 62% 85%, rgba(255,240,220,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 66% 8%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 69% 55%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 73% 32%, rgba(255,255,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 77% 70%, rgba(255,230,200,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 81% 48%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 84% 92%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 87% 18%, rgba(255,255,255,0.12) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 91% 58%, rgba(255,240,220,0.13) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 94% 82%, rgba(255,255,255,0.11) 50%, transparent 100%),
			radial-gradient(0.7px 0.7px at 97% 25%, rgba(200,215,255,0.14) 50%, transparent 100%),
			radial-gradient(0.6px 0.6px at 99% 65%, rgba(255,255,255,0.12) 50%, transparent 100%);
	}

@media (max-width: 768px) {
		.skills-section {
			margin-top: 0;
			padding: var(--section-padding);
		}

		.galaxy {
			padding: 2rem 1rem;
			background: none;
		}

		.skills-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}

		.stars {
			display: none;
		}
	}
</style>
