import { ENTRIES } from '../constants/entries.js'

export const validateEntry = (userInfo) =>
  ENTRIES.every((entry) => userInfo.includes(entry))
