<script>
  import WalletIcon from "$lib/icon/WalletIcon.svelte";
  import {connectWallet, listWallets} from 'ds-cardano-wallet'
  import {onMount} from "svelte";
  import FullscreenPopup from "$lib/layout/FullscreenPopup.svelte";
  import SimpleLoader from "$lib/loaders/SimpleLoader.svelte";
  import ConnectWalletButton from "$lib/components/ConnectWalletButton.svelte";

  /**@type {string[]}*/
  let wallets = []

  let open = false

  onMount(() => {
    console.log("Mounted")
    wallets = listWallets().filter(wallet => ['nami', 'eternl', 'vespr'].includes(wallet))
  })
</script>

<button class="flex items-center gap-1 p-2"
        on:click={() => open = true}>
  <WalletIcon style="height: 16px"/>
  <div class="bold">CONNECT</div>
</button>

<FullscreenPopup
    title="Connect Wallet"
    bind:open>
  {#if wallets.length > 0}
    <div class="flex gap-2">
      {#each wallets as wallet}
        <ConnectWalletButton
            provider={wallet}
        />
      {/each}
    </div>
  {/if}
  <div>No wallets found</div>
</FullscreenPopup>


<style>
</style>
