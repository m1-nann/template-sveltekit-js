import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  return json({
    items: [
      {id: "abcd89", name: "Bachelor of Engineering in Computer Science"},
    ]
  })
}