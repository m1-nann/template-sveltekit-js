/** @type {import('./$types').PageServerLoad} */
export async function load({params, fetch}) {
  const data = await fetch('/api/item')
    .then(r => r.json())
  return {
    data
  }
}