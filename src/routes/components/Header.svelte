<script>
  let routes = [
    {
      route: '/pokemon',
      title: 'Pokemon'
    }
  ]
</script>
<header>
  <nav>
    {#each routes as {route, title} }
    <a href={route}>{title}</a>
    {/each}
  </nav>
</header>