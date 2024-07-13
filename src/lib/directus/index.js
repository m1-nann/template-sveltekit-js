import {DIRECTUS_URL, DIRECTUS_API_TOKEN} from "$env/static/private";

async function POST(path, data) {
  const url = `${DIRECTUS_URL}${path}`
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${DIRECTUS_API_TOKEN}`
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  }
  catch (e) {
    console.error(`Failed to POST to Directus at ${url}` )
    throw e
  }
}

export async function addUserTelegram({user}) {
  return await POST("/items/user_telegram", {
    id: user.id,
    username: user.username,
    language_code: user.languageCode,
    name: (user.firstName + " " + user.lastName).trim(),
    initData: user
  })
}