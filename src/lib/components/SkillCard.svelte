<script>
	let { icon, title, description } = $props();

	let active = $state(false);

	function handleTap() {
		active = !active;
	}

</script>

<svelte:document onclick={(e) => {
	if (active && !e.target.closest('[data-skill-wrap]')) active = false;
}} />

<div
	class="skill-wrap"
	data-skill-wrap
	onmouseenter={() => (active = true)}
	onmouseleave={() => (active = false)}
	onclick={(e) => { e.stopPropagation(); handleTap(); }}
	onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleTap(); }}
	role="button"
	tabindex="0"
>
	<div class="skill-circle" class:active>
		<span class="skill-icon">{@html icon}</span>
		<span class="skill-title">{title}</span>
	</div>
	<div class="overlay" class:active>
		<span class="overlay-title">{title}</span>
		<p class="description">{description}</p>
	</div>
</div>

<style>
	.skill-wrap {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.skill-circle {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		border: 1px solid rgba(224, 190, 153, 0.25);
		background: var(--color-bg);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		box-shadow:
			0 0 8px 1px rgba(224, 190, 153, 0.08),
			0 0 20px 2px rgba(224, 190, 153, 0.04),
			inset 0 0 15px 2px rgba(0, 0, 0, 0.3);
		transition: border-color 0.4s ease, box-shadow 0.4s ease;
	}

	.skill-circle.active {
		border-color: rgba(224, 190, 153, 0.8);
		box-shadow:
			0 0 15px 4px rgba(224, 190, 153, 0.35),
			0 0 40px 10px rgba(224, 190, 153, 0.15),
			0 0 80px 20px rgba(224, 190, 153, 0.08),
			inset 0 0 20px 3px rgba(0, 0, 0, 0.4);
	}

	.skill-icon {
		width: 36px;
		height: 36px;
		color: var(--color-accent);
		flex-shrink: 0;
	}

	.skill-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.skill-title {
		font-size: 0.85rem;
		color: var(--color-text);
		text-align: center;
		line-height: 1.2;
		padding: 0 0.5rem;
	}

	.overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		width: 260px;
		background: var(--color-bg-card);
		border: 1px solid var(--color-accent);
		border-radius: 12px;
		padding: 1.2rem 1.4rem;
		opacity: 0;
		transition: opacity 0.3s ease, transform 0.3s ease;
		z-index: 20;
		pointer-events: none;
	}

	.overlay.active {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
		box-shadow:
			0 0 12px 2px rgba(224, 190, 153, 0.15),
			0 0 30px 6px rgba(224, 190, 153, 0.08);
	}

	.overlay-title {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-accent);
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.description {
		font-size: 0.85rem;
		color: var(--color-text);
		text-align: center;
		line-height: 1.6;
		margin: 0;
	}

	@media (max-width: 768px) {
		.skill-circle {
			width: 140px;
			height: 140px;
		}

		.skill-icon {
			width: 28px;
			height: 28px;
		}

		.skill-title {
			font-size: 0.72rem;
		}

		.overlay {
			width: 220px;
			padding: 1rem 1.2rem;
		}

		.overlay-title {
			font-size: 0.78rem;
		}

		.description {
			font-size: 0.75rem;
			line-height: 1.5;
		}
	}
</style>
