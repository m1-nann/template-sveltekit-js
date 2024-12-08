<script>
  import Header from "$lib/layout/Header.svelte";
  import {onMount} from "svelte";
  import {loadWalletFromLocalStorage} from "$lib/stores/wallet.js";

  console.log('loyout')
  onMount(() =>{
    console.log('Mount')
    loadWalletFromLocalStorage()
  })

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