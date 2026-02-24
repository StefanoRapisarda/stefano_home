<script>
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Stefano Rapisarda</title>
	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="d1a35506-6105-48b7-ad59-4df5f850630e"
	></script>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: 100vh;
	}
</style>
