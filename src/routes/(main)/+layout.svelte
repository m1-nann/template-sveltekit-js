<script>
  const MENUS = [
    {label: 'home', href: '/'},
    '/dynamic-path/p1/p2',
    '/not-found',
    '/error',
    '/error-client',
  ]
</script>

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

  @media (min-width: 768px){
    .page {
      grid-template-columns: 200px 1fr;
    }
  }
</style>