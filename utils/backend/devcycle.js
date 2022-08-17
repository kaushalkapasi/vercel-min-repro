import { initialize } from '@devcycle/nodejs-server-sdk'
import '@devcycle/bucketing-assembly-script'

export const defaultUser = {
  user_id: 'vercel-min-repro-api',
  isAnonymous: true,
}

export const dvcClient = initialize(
  process.env.DC_SERVER_TOKEN || 'server-c15e7e29-ea2f-4ffa-a479-ae76eed63526',
  { enableCloudBucketing: false }
)

export const getDVCVariable = async (key, defaultValue, user) => {
  await dvcClient.onClientInitialized()
  return dvcClient.variable(user || defaultUser, key, defaultValue)
}
