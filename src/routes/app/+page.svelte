<script>
  import {onMount} from "svelte";
  import {browser} from "$app/environment";
  import { retrieveLaunchParams } from '@telegram-apps/sdk';

  let tgData;


  async function login(){
    const {initDataRaw, initData} = tgData
    await fetch("/api/tg/login", {
      method: "POST",
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify({initDataRaw, initData})
    })
  }

  onMount(() => {
    if (browser){

      tgData = retrieveLaunchParams();
    }
  })
</script>

<button on:click={login}>Login</button>
<pre>
  {JSON.stringify(tgData, null, 2)}
</pre>