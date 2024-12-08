import {writable} from 'svelte/store'

export const user = writable({
  userId: -1,
  username: null,
  name: null,
})

export function updateUser(data){
  user.update(it => {
    return {
      ...it,
      userId: data.userId,
      username: data.username,
      name: data.name,
    }
  })
}


