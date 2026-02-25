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
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": "https://stefanorapisarda.github.io/stefano_home/#website",
				"url": "https://stefanorapisarda.github.io/stefano_home/",
				"name": "Stefano Rapisarda",
				"description": "Personal website of Stefano Rapisarda — researcher, software developer, and data scientist.",
				"inLanguage": "en"
			},
			{
				"@type": "Person",
				"@id": "https://stefanorapisarda.github.io/stefano_home/#person",
				"name": "Stefano Rapisarda",
				"url": "https://stefanorapisarda.github.io/stefano_home/",
				"jobTitle": "Database Coordinator",
				"worksFor": {
					"@type": "Organization",
					"name": "Karolinska Institutet / SciLifeLab"
				},
				"alumniOf": [
					{
						"@type": "EducationalOrganization",
						"name": "Anton Pannekoek Institute for Astronomy, University of Amsterdam"
					},
					{
						"@type": "EducationalOrganization",
						"name": "Università degli Studi di Catania"
					}
				],
				"sameAs": [
					"https://github.com/StefanoRapisarda",
					"https://orcid.org/0000-0002-6751-6453",
					"https://www.linkedin.com/in/stefanorapisarda/",
					"https://www.scilifelab.se/people/stefano-rapisarda/",
					"https://www.researchgate.net/profile/Stefano-Rapisarda"
				]
			}
		]
	})}</script>`}
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
