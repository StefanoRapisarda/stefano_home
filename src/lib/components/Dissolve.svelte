<script>
	import { base } from '$app/paths';

	// Seeded pseudo-random
	function seededRandom(seed) {
		let s = seed;
		return () => {
			s = (s * 16807 + 0) % 2147483647;
			return s / 2147483647;
		};
	}

	const rand = seededRandom(42);
	const numDots = 600;

	// Generate circle data: random x/y, size gradient (big top, small bottom)
	const dots = [];
	for (let i = 0; i < numDots; i++) {
		const x = rand() * 100;
		const yPct = rand() * 100;
		const t = yPct / 100; // 0 = top, 1 = bottom
		const maxR = 24 * (1 - t) + 1;
		const r = (rand() * 0.5 + 0.5) * maxR;
		dots.push({ x, yPct, d: Math.round(r * 2) });
	}

	const imgUrl = `${base}/images/simulated_bh.jpeg`;
</script>

<div class="dissolve-zone">
	{#each dots as dot}
		<div
			class="dot"
			style="
				left: {dot.x}%;
				top: {dot.yPct}%;
				width: {dot.d}px;
				height: {dot.d}px;
				background-image: url('{imgUrl}');
			"
		></div>
	{/each}
</div>

<style>
	.dissolve-zone {
		position: relative;
		height: 5vh;
		margin-top: -5vh;
		overflow: hidden;
		pointer-events: none;
		z-index: 1;
	}

	.dot {
		position: absolute;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		background-size: cover;
		background-position: 38% center;
		background-attachment: fixed;
		background-repeat: no-repeat;
	}

</style>
