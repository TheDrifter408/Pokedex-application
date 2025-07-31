<script lang="ts">
import type { SinglePokemon } from '$lib/types';
import PokemonLoader from './loaders/PokemonLoader.svelte';
import Pokemon from './Pokemon.svelte';

let { loading, error, pokemon }: { loading: boolean, error: string | null, pokemon: SinglePokemon | null }  = $props();

</script>

<article class="mt-4">
   <div class="">
      {#if loading}
	<PokemonLoader />        
      {:else if error}
	<div>
         <p class="text-slate-500">Could not find anything</p>
	</div>
      {:else if pokemon}
	<Pokemon {...pokemon} />
      {:else }
	<p>Please input a pokemon's name to start</p>
      {/if}
    </div>
</article>

