<script>

  import {wallet} from "$lib/stores/wallet.js";


</script>

<main class="p-2">
  {#if $wallet}
    <div>{$wallet.provider} wallet</div>
    <div>{$wallet.balance.toFixed(2)} ADA</div>
    <div>{$wallet.nike} $NIKE </div>
  {/if}

</main>
