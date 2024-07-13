import {GET, POST} from "$lib/directus/methods.js";

export async function getUserTelegram(id) {
  const {status, data} = await GET(`/items/user_telegram/${id}`)
  if (status !== 200) return null
  return data;
}

export async function addUserTelegram({user}) {
  const exists = await getUserTelegram(user.id)
  if (exists != null) return
  const {status, data} = await POST("/items/user_telegram", {
    id: user.id,
    username: user.username,
    language_code: user.languageCode,
    name: (user.firstName + " " + user.lastName).trim(),
    initData: user
  })
  if (status !== 200) throw new Error("Failed to add user_telegram")

}