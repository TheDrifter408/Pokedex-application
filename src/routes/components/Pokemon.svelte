<script lang="ts">
  import type { SinglePokemon } from "$lib/types";
  import Type from './Type.svelte';
  let pokemon: SinglePokemon = $props();
  // Extract the sprites pokemon into a key-value array
  const sprites = [...Object.entries(pokemon.sprites), ...Object.entries(pokemon.sprites['other'])].filter(([key, value]) => {
    if (key === 'front_default' || key === 'front_shiny' && value !== null) {
      return [key, value];
    }
  });
</script>

<div class="shadow-md rounded-xl px-4 py-3 space-y-2">
  <h1 class="text-center font-bold capitalize">{pokemon.name}</h1>
  <!--Types of the Pokemon-->
  <article class="flex gap-1">
    <p>Types: </p>
    <ul class="flex items-center gap-2">
      {#each pokemon.types as { slot, type } (slot)}
       	<Type {...type} /> 
      {/each}
    </ul>
  </article>
  <!--Abilities-->
  <article class="flex gap-1">  
     <p>Abilities: </p>
     <ul class="flex items-center gap-2">
      {#each pokemon.abilities as { ability, is_hidden, slot} (slot)}
      <li class="rounded-md px-2 shadow">
	<span>{ability.name}</span>
      </li>
      {/each}
    </ul>
  </article>
  <!--Sprites-->
  <h2 class="text-center font-bold capitalize">Sprites</h2>
  <article class="flex gap-2 justify-center">
    {#each sprites as [key, value] (key) }
    <div class="">
      <img src={value} alt="sprite for {pokemon.name}" />
      <p class="text-center capitalize w-full font-semibold">{key.split('_')[1]}</p>
    </div>
    {/each}
  </article>
</div>
