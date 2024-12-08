import {writable} from 'svelte/store'
import {connectWallet} from 'ds-cardano-wallet'
import {NIKE} from "$lib/constants/tokens"
import {browser} from "$app/environment";

export const wallet = writable(null)

wallet.subscribe(value => {
  browser && value != null && localStorage.setItem('wallet', JSON.stringify(value))
})

export function loadWalletFromLocalStorage(){
  if (browser){
    const value = localStorage.getItem('wallet')
    console.log('load', value)
    if (value) {
      wallet.set(JSON.parse(value))
    }
  }
}

export async function updateWallet(provider){
  const instance = await connectWallet(provider)
  const balance = await instance.getBalance()
  const nike = balance.tokens[NIKE]
  wallet.set({
    provider: provider,
    balance: balance.balance / 1000000,
    nike,
  })
}