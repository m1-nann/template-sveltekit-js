<script>
  import WalletIcon from "$lib/icon/WalletIcon.svelte";
  import {connectWallet, listWallets} from 'ds-cardano-wallet'
  import {onMount} from "svelte";
  import FullscreenPopup from "$lib/layout/FullscreenPopup.svelte";
  import SimpleLoader from "$lib/loaders/SimpleLoader.svelte";
  import ConnectWalletButton from "$lib/components/ConnectWalletButton.svelte";
  import {wallet, updateWallet} from '$lib/stores/wallet'

  /**@type {string[]}*/
  let wallets = []
  let selectedWallet = undefined

  let open = false

  onMount(() => {
    wallets = listWallets().filter(wallet => ['nami', 'eternl', 'vespr'].includes(wallet))
  })
</script>

<div></div>

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
            on:connected={() => {
              updateWallet(wallet)
              open = false
            }}
            provider={wallet}
        />
      {/each}
    </div>
  {/if}
  <div>No wallets found</div>
</FullscreenPopup>


<style>
</style>
