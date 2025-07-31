<script lang="ts">
  import type { SinglePokemon } from "$lib/types";
  import Header from "./components/Header.svelte";
  import SearchResult from "./components/SearchResult.svelte";

  let search = $state("");
  let error = $state<string | null>(null);
  let loading = $state(false);
  let pokemon = $state<SinglePokemon | null>(null);

  const onSearch = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!search.trim()) {
      pokemon = null;
    };
    loading = true;	
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase().trim()}/`
      );
      const result = await response.json();
      pokemon = result;
    } catch (e) {
      error = 'There was an error';
      console.error("Not found");
    } finally {
      loading = false;
    }
  };
</script>
<Header />
<section class="flex flex-col items-center">
  <h1 class="text-3xl font-bold">Pokedex</h1>
  <article>
    <form method="GET" onsubmit={onSearch}>
      <div class="border rounded-lg w-full px-2 ring-slate-300 focus-within:ring-1">
        <input class='w-full focus:ring-0 focus:outline-0 focus:bg-transparent bg-transparent border-0' name="search" type="search" bind:value={search} />
      </div>
    </form>
  </article>
  <SearchResult {loading} {error} {pokemon}  />
</section>
