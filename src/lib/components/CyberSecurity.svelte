<!-- src/lib/components/CyberSecurity.svelte -->
<script>
  export let title;
  export let desc;
  export let slug;
</script>

<a href={`/projects/${slug}`} class="card">
  <h2>{title}</h2>
  <p>{desc}</p>
</a>