<script>
  import {onMount} from "svelte";
  import {browser} from "$app/environment";
  import {updateUser, user} from '$lib/stores/user.js'

  let tgData;

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
    data = await res.json()
    updateUser(data)
  }

  onMount(() => {
    if (browser && $user.userId === -1){
      // tgData = retrieveLaunchParams();
      tgData = retrieveLaunchParamsFromWindow();
      login()
    }
  })
</script>

<button on:click={login}>Login</button>
<div>{tgData != null ? "TG Data loaded" : "Loading ..."}</div>
<pre>{JSON.stringify($user,null,2)}</pre>