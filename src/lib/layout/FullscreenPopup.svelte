<script>
  import XIcon from "$lib/icon/XIcon.svelte";
  import {createEventDispatcher} from "svelte";

  export let open = false
  export let title = "Fullscreen Popup"

</script>
{#if open}
  <div class="FullscreenPopup">
    <div class="top-bar absolute top-0 p-2 flex border-box items-center">
      <h2 class="font-bold">{title}</h2>
      <div class="flex-1"/>
      <button on:click={() => open = false}>
        <XIcon style="width: 1rem; height: 1rem"/>
      </button>
    </div>
    <slot/>
  </div>
{/if}

<style lang="scss">
  .FullscreenPopup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-0);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top-bar {
    width: calc(100% - 2rem);

    border-bottom: 1px solid var(--gray);
    color: var(--text);
  }

  button {
    color: var(--text);
    padding: 1rem;
    display: flex;
  }
</style>

