<script>
  import Header from "$lib/layout/Header.svelte";
</script>

<Header/>
<div>
  <slot/>
</div>

<style>
  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
  }

  a:hover {
    background-color: #f0f0f0;
  }

  @media (min-width: 768px) {
  }
</style>