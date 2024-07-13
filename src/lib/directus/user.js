import {GET, PATCH, POST} from "$lib/directus/methods.js";

export async function getUserByTelegramId(id) {
  const query = [
    `filter[user_telegram][id][_eq]=${id}`,
    "fields=*,user_telegram.*"
  ]
  const {status, data} = await GET(`/items/user?${query.join("&")}`)
  console.log(data)
  if (status !== 200) return null
  if (data.data.length === 0) return null
  return data.data[0];
}

export async function addUserFromUserTelegram(telegramId) {
  const {status, data} = await POST("/items/user", {
    user_telegram: telegramId,
    status: "Active"
  })
  if (status !== 200) {
    console.error(data)
    throw new Error("Failed to add user")
  }
}

export async function updateLastLogin(userId) {
  const {status, data} = await PATCH(`/items/user/${userId}`, {
    last_login: new Date().toISOString()
  })
  if (status !== 200) {
    console.error(data)
    throw new Error("Failed to update last login")
  }
}
