<script lang="ts">
  import type { SinglePokemon } from "$lib/types";

  let { data }: { data: SinglePokemon } = $props();
  // Extract the sprites data into a key-value array
  const sprites = [...Object.entries(data.sprites), ...Object.entries(data.sprites['other'])].filter(([key, value]) => {
    if (key === 'front_default' || key === 'front_shiny' && value !== null) {
      return [key, value];
    }
  });
</script>

<section>
  <h1>{data.name}</h1>
  <!--Types of the Pokemon-->
  <h2>Types:</h2>
  <article>
    <div class="flex gap-2">
      {#each data.types as { slot, type } (slot)}
        <span>{type.name}</span>
      {/each}
    </div>
  </article>
  <!--Abilities-->
  <h2>Abilities</h2>
  <article>
    <div>
      {#each data.abilities as { ability, is_hidden, slot} (slot)}
      <p>{ability.name}</p>
      {/each}
    </div>
  </article>
  <!--Sprites-->
  <h2>Sprites</h2>
  <article class="flex">
    {#each sprites as [key, value] (key) }
    <div>
      <img src={value} alt="sprite for {data.name}" />
      <span class="capitalize">{key.split('_').join(' ')}</span>
    </div>
    {/each}
  </article>
</section>

<style>
  .capitalize {
    text-transform: capitalize;
  }
  .flex {
    display: flex;
  }
  .gap-2 {
    gap: 0.5rem;
  }
</style>
