<script lang="ts">
  // Data from server side
  let { data } = $props();
</script>

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
