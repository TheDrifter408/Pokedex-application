<script lang="ts">
  import type { PokemonResponse } from "$lib/types";

  let { results }: PokemonResponse = $props();
  console.log('Results: ', results);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Pokemon list</h2>
<ul>
  {#each results as { name, url }}
  <li>
    {name}
  </li>
  {/each}
</ul>