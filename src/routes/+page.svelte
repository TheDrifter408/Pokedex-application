<script lang="ts">
  import type { SinglePokemon } from "$lib/types";
  import Header from "./components/Header.svelte";
  import Pokemon from "./components/Pokemon.svelte";

  let search = $state("");
  let pokemon = $state<SinglePokemon | null>(null);

  const onSearch = async (e: SubmitEvent) => {
    e.preventDefault();
    console.log("firing");
    if (!search.trim()) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase().trim()}/`
      );
      const result = await response.json();
      // Todo Fix the issue search results not turning up in the UI
      console.log("Results", result);
      pokemon = result;
    } catch (e) {
      console.error("Not found");
    }
  };
</script>

<Header />
<section class="border border-red-500 flex flex-col items-center w-[80%] mx-auto">
  <h1 class="text-3xl font-bold">Pokedex</h1>
  <article>
    <form method="GET" onsubmit={onSearch}>
      <div class="border rounded-lg w-full ring-slate-300 focus-within:ring-1">
        <input class='w-full focus:none' name="search" type="search" bind:value={search} />
      </div>
    </form>
    <div class="py-2 mt-2 border border-green-500">
      {#if pokemon}
        <Pokemon {...pokemon} />
      {:else}
        <p>Please input either a pokemon's name or their id</p>
      {/if}
    </div>
  </article>
</section>
