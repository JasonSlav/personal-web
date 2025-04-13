<script>
    import { projects } from '$lib/data/projects.js';
    import { error } from '@sveltejs/kit';
  
    export let params;
    const project = projects.find(p => p.slug === params.slug);
  
    if (!project) throw error(404, 'Project not found');
  </script>
  
  <h1>{project.title}</h1>
  <p><i>{project.desc}</i></p>
  
  <h2>🛠️ Teknologi:</h2>
  <ul>
    {#each project.tech as t}
      <li>{t}</li>
    {/each}
  </ul>
  
  <h2>📁 GitHub</h2>
  <a href={project.github} target="_blank">{project.github}</a>
  
  <h2>📄 Detail:</h2>
  {@html project.content}
  