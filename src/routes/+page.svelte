<script lang="ts">
  import Header from "./components/Header.svelte";

  let search = $state('');
  let pokemon = $state([]);

  const onSearch = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('firing');
      if (!search.trim()) return;

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`);
        const result = await response.json();
        // Todo Fix the issue search results not turning up in the UI
        console.log('Results', result);
        pokemon = result.results;
      } catch (e) {
        console.error('Not found');
      }
    }
  }
</script>

<Header />
<section class="flex flex-col items-center">
  <h1 class="text-3xl font-bold">Pokedex</h1>
  <article>
    <form method="GET">
      <div class="border rounded-xl w-full">
        <input name="search" bind:value={search} onkeydown={onSearch} />
      </div>
    </form>
    <div class="grid grid-cols-3">
      {#each pokemon as { name, id} (id)}
      <div>{name}</div>
      {/each}
    </div>
  </article>
</section>
