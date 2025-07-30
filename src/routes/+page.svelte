<script lang="ts">
  import type { SinglePokemon } from "$lib/types";
  import Header from "./components/Header.svelte";
  import Pokemon from "./components/Pokemon.svelte";

  let search = $state("");
  let pokemon = $state<SinglePokemon | null>(null);

  const onSearch = async (e: SubmitEvent) => {
    e.preventDefault();
    console.log("firing");
    if (!search.trim()) {
      pokemon = null;
      return;
    };

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase().trim()}/`
      );
      const result = await response.json();
      pokemon = result;
    } catch (e) {
      console.error("Not found");
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
  <article class="mt-4">
   <div class="">
      {#if pokemon}
        <Pokemon {...pokemon} />
      {:else}
	<div>
         <p class="text-slate-500">Please input either a pokemon's name or their ID</p>
	</div>
      {/if}
    </div>
  </article>
</section>
