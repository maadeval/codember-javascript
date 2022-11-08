import { bootstrap } from './bootstrap.js'

const main = async () => {
  try {
    bootstrap()
  } catch (err) {
    console.error(err.message)
  }
}

main()
