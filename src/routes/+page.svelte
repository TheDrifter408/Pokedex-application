<script lang="ts">
  // Data from server side
  let { data } = $props();

</script>

<h1>Pokemon list</h1>
<ul>
  {#each data.results as { name, id }}
  <li>
    <a href="/pokemon/{id}">{name}</a>
  </li>
  {/each}
</ul>