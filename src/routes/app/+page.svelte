<script>
  import {onMount} from "svelte";
  import {browser} from "$app/environment";

  let tgData;
  let user;

  function retrieveLaunchParamsFromWindow(){
    const initDataRaw = window.Telegram?.WebApp?.initData
    const initData = window.Telegram?.WebApp?.initDataUnsafe
    return {initData, initDataRaw}
  }

  async function login(){
    const {initDataRaw, initData} = tgData
    const res = await fetch("/api/tg/login", {
      method: "POST",
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify({initDataRaw, initData})
    })
    user = await res.json()
  }

  onMount(() => {
    if (browser){
      // tgData = retrieveLaunchParams();
      tgData = retrieveLaunchParamsFromWindow();
      login()
    }
  })
</script>

<button on:click={login}>Login</button>
<div>{tgData != null ? "TG Data loaded" : "Loading ..."}</div>
<pre>{JSON.stringify(user,null,2)}</pre>