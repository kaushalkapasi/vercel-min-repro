import { initialize } from '@devcycle/nodejs-server-sdk'

export const defaultUser = {
  user_id: 'vercel-min-repro-api',
  isAnonymous: true,
}

export const dvcClient = initialize(
  process.env.DC_SERVER_TOKEN || '',
  { enableCloudBucketing: false }
)

export const getDVCVariable = async (key, defaultValue, user) => {
  await dvcClient.onClientInitialized()
  return dvcClient.variable(user || defaultUser, key, defaultValue)
}
