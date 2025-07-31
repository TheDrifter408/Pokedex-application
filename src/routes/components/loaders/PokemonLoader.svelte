<script lang="ts">
   const types = Array.from({ length: 2 } , (_, i) => i);
   const abilities = Array.from({ length: 2 }, (_, i) => i);
   const sprites = Array.from({ length: 2 }, (_, i) => i);
</script>

<div class="shadow-md rounded-xl px-4 py-3 space-y-2">
  <h1 class="text-center font-bold capitalize w-full animate-pulse" />
  <article class="flex gap-1">
    <p>Types: </p>
    <ul class="flex items-center gap-2">
      {#each types as t (t)}
       	<li class="px-3 py-1 rounded-lg animate-pulse" /> 
      {/each}
    </ul>
  </article>
  <!--Abilities-->
  <article class="flex gap-1">  
     <p>Abilities: </p>
     <ul class="flex items-center gap-2">
      {#each abilities as ability (ability)}
      <li class="rounded-md px-2 shadow animate-pulse" />
      {/each}
    </ul>
  </article>
  <!--Sprites-->
  <h2 class="text-center font-bold capitalize w-full animate-pulse" />  
    <article class="flex gap-2 justify-center">
    {#each sprites as sprite (sprite) }
    <div class="max-h-20 animate-pulse" />
    {/each}
  </article>
</div>
