import {json, error} from '@sveltejs/kit';
import {validate} from '@telegram-apps/init-data-node';
import {TG_BOT_TOKEN} from "$env/static/private";
import {addUserFromUserTelegram, addUserTelegram, getUserByTelegramId, updateLastLogin} from "$lib/directus";


/** @type {import('./$types').RequestHandler} */
export const POST = async ({request}) => {
  const {initDataRaw, initData} = await request.json()

  try {
    validate(initDataRaw, TG_BOT_TOKEN)
  } catch (e) {
    return error(401, e.message || "Invalid Telegram token")
  }


  let user = await getUserByTelegramId(initData.user.id)
  if (user == null) {
    await addUserTelegram({user: initData.user})
    await addUserFromUserTelegram(initData.user.id)
    user = await getUserByTelegramId(initData.user.id)
  }

  await updateLastLogin(user.id)

  // TODO return JWT token

  return json({
    username: user.user_telegram.username,
    name: user.user_telegram.name,
  })
}