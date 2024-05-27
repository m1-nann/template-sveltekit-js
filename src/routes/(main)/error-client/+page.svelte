<script>
  import {onMount} from "svelte";

  onMount(() => {
    throw new Error('This is an error')
  })
</script>

<h1>Error on client</h1>