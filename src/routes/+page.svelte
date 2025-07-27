<script lang="ts">
  import Header from './components/Header.svelte';

  // Data from server side
  let { data } = $props();
</script>
<Header />
<section class="flex flex-col items-center">
  <h1 class="text-3xl font-bold">Pokemon list</h1>
  <ul>
    {#each data.results as { name, id }}
      <li>
        <a href="/pokemon/{id}">{name}</a>
      </li>
    {/each}
  </ul>
</section>
