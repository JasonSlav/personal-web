<!-- src/routes/+page.svelte -->
<script>
	import Hero from '$lib/components/Hero.svelte';
	import CyberSecurity from '$lib/components/CyberSecurity.svelte';
	import { projects } from '$lib/data/projects';

	// ambil kategori unik
	const categories = [...new Set(projects.map((p) => p.category))];

	// kelompokkan project berdasarkan kategori
	const grouped = Object.fromEntries(
		categories.map((cat) => [cat, projects.filter((p) => p.category === cat)])
	);
</script>
<div class="container">
<Hero />

<h1>🎓 Portofolio Saya</h1>

{#each Object.entries(grouped) as [category, items]}
	<section>
		<h2>{category}</h2>
		<div class="grid">
			{#each items as project}
				<CyberSecurity {...project} />
			{/each}
		</div>
	</section>
{/each}
</div>