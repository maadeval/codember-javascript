import { USERS_URL } from './constants/urls.js'
import { validateEntry } from './lib/validateEntry.js'

export const bootstrap = async () => {
  try {
    const res = await fetch(USERS_URL)
    const listOfUsers = await res.text()

    const usersSeparating = listOfUsers.split('\n\n')
    const totalUsers = usersSeparating.filter((user) => validateEntry(user))

    const lastUserData = totalUsers.at(-1)
    const lastUserName = [...lastUserData.split(' ')][0].split(':')[1]
    const totalUsersLength = totalUsers.length

    console.log(`Resultado: ${totalUsersLength}${lastUserName}`)
  } catch (err) {
    console.error(err.message)
  }
}
