const { Magic } = require('@magic-sdk/admin')

export const magic = new Magic(process.env.MAGIC_LIVE_SECRET_KEY)
