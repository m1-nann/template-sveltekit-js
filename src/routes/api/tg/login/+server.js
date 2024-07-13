import { json, error } from '@sveltejs/kit';
import { validate } from '@telegram-apps/init-data-node';
import {TG_BOT_TOKEN} from "$env/static/private";
import {addUserTelegram} from "$lib/directus/index.js";


/** @type {import('./$types').RequestHandler} */
export const POST = async ( {request}) => {
  const {initDataRaw, initData} = await request.json()

  try {
    validate(initDataRaw, TG_BOT_TOKEN)
  }
  catch (e) {
    return error(401, e.message || "Invalid Telegram token")
  }

  await addUserTelegram({user: initData.user})

  return json({
    initData,
  })
}