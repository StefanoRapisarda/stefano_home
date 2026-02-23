<script>
	import { browser } from '$app/environment';

	const initial = browser ? localStorage.getItem('theme') !== 'light' : true;
	let dark = $state(initial);

	$effect(() => {
		const theme = dark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	});

	function toggle() {
		dark = !dark;
	}
</script>

<button
	class="theme-toggle"
	onclick={toggle}
	aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
	title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
>
	{#if dark}
		<!-- Sun icon -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="12" cy="12" r="5"/>
			<line x1="12" y1="1" x2="12" y2="3"/>
			<line x1="12" y1="21" x2="12" y2="23"/>
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
			<line x1="1" y1="12" x2="3" y2="12"/>
			<line x1="21" y1="12" x2="23" y2="12"/>
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
		</svg>
	{:else}
		<!-- Planet icon (Saturn-like) -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="12" cy="12" r="6"/>
			<ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-30 12 12)"/>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 999;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: 1px solid var(--color-border);
		background: var(--color-bg-card);
		color: var(--color-accent);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
	}

	.theme-toggle:hover {
		border-color: var(--color-accent);
		transform: scale(1.1);
	}

	.theme-toggle svg {
		width: 22px;
		height: 22px;
	}

	:global([data-theme="light"]) .theme-toggle {
		background: var(--color-bg-card);
	}
</style>
