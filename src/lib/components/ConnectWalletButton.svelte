<script>
  import {createEventDispatcher} from "svelte";
  import {connectWallet} from 'ds-cardano-wallet'
  import SimpleLoader from "$lib/loaders/SimpleLoader.svelte";
  import {formatAda} from "$lib/utils/format.js"
  import {Buffer} from 'buffer'

  export let provider
  let loading = false;
  let balance = undefined;

  const dispatch = createEventDispatcher()

  async function connect() {
    loading = true
    const wallet = await connectWallet(provider)
    const walletBalance = await wallet.getBalance()
    dispatch('connected')
    loading = false
  }
  async function verify(){
    loading = true
    const wallet = await connectWallet(provider)
    const {address} = await wallet.getCurrentAddress()
    await wallet.signText(address, 'Sign to verify your wallet')
    dispatch('verified')
    loading = false
  }
</script>
<div class="grid">
  <button class="wallet-button px-6 py-2 grid rounded-2"
          on:click={connect}>
    <div class:loading={loading} class="relative">
      <div class="loader absolute right-0">
        <SimpleLoader style="font-size: 1rem"/>
      </div>
      <div class="text"> {provider} </div>
    </div>
  </button>
  <div style="white-space: pre; text-align: center">{formatAda(balance, ' ')}</div>
</div>

<style>
  .loader {
    opacity: 0;
    transition: 0.3s transform ease;
  }

  .text {
    transition: 0.3s transform ease;
  }

  .loading .loader {
    opacity: 1;
    transform: translate(1rem, 0);
  }

  .loading .text {
    transform: translate(-0.5rem, 0);
  }

  button {
    font-size: 3rem;


  }
</style>