<script>
  let routes = [
    {
      route: '/pokemon',
      title: 'Pokemon'
    },
    {
      route: '/berries',
      title: 'Berries'
    },
    {
      route: '/games',
      title: 'Games'
    },
    {
      route: '/items',
      title: 'Items'
    },
    {
      route: '/locations',
      title: 'Locations',
    },
    {
      route: '/machines',
      title: 'Machines'
    },
    {
      route: '/moves',
      title: 'Moves'
    }
  ]
</script>
<header class="flex items-center justify-center py-4">
  <nav class="flex gap-2">
    {#each routes as {route, title} }
    <a href={route}>{title}</a>
    {/each}
  </nav>
</header>