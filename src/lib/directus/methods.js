import {DIRECTUS_API_TOKEN, DIRECTUS_URL} from "$env/static/private";

export async function POST(path, data) {
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
    return {
      status: res.status,
      data: await res.json()
    }
  } catch (e) {
    console.error(`Failed to POST to Directus at ${url}`)
    throw e
  }
}

export async function PATCH(path, data) {
  const url = `${DIRECTUS_URL}${path}`
  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${DIRECTUS_API_TOKEN}`
      },
      body: JSON.stringify(data),
    })
    return {
      status: res.status,
      data: await res.json()
    }
  } catch (e) {
    console.error(`Failed to POST to Directus at ${url}`)
    throw e
  }
}

export async function GET(path) {
  const url = `${DIRECTUS_URL}${path}`
  console.log(url)
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${DIRECTUS_API_TOKEN}`
      },
    })
    return {
      status: res.status,
      data: await res.json()
    }
  } catch (e) {
    console.error(`Failed to GET to Directus at ${url}`)
    throw e
  }
}