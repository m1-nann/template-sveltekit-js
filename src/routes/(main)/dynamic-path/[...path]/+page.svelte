<script>
  export let data;
</script>

{#if data}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}