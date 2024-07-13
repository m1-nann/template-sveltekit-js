<script>
  import PigIcon from "$lib/icon/PigIcon.svelte";
  import WalletIcon from "$lib/icon/WalletIcon.svelte";
  import ConnectButton from "$lib/components/ConnectButton.svelte";
</script>

<div class="Header grid gap-2 items-center">
  <div></div>
  <PigIcon style="height: 36px"/>
  <div class="flex w-full">
    <div class="flex-1"/>
    <ConnectButton/>
  </div>
</div>

<style>
  .Header {
    padding: 0.375rem 1rem;
    color: var(--brand);
    grid-template-columns: 1fr auto 1fr;
  }
</style>