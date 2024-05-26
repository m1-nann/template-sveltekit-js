<script>
  import './style.scss'
  import './tw-layout.scss'

  const MENUS = [
    {label: 'home', href: '/'},
    '/dynamic-path/p1/p2',
  ]
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Reddit+Mono:wght@200..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="page grid">
  <div class="flex flex-col">
    {#each MENUS as it}
      {#if typeof it === 'object'}
        <a href={it.href}>{it.label}</a>
      {:else}
        <a href={it}>{it}</a>
      {/if}
    {/each}
  </div>
  <div>
    <slot/>
  </div>
</div>

<style>
  .page {
    grid-template-columns: 120px 1fr;
  }

  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
  }
  a:hover {
    background-color: #f0f0f0;
  }
</style>