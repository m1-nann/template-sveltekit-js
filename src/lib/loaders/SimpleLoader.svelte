<script>
  export let style = undefined
</script>

<div class="loading-wrapper" style={style}>
</div>

<style lang="scss">
  .loading-wrapper {
    --loading-color: var(--brand);
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 2px solid var(--loading-color);
    border-bottom-color: transparent;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
