import { getDVCVariable } from '../../utils/backend'

export default async function handler(req, res) {
  const testBugVariable = await getDVCVariable('test-bug', 'test bug')

  console.log(testBugVariable)

  res.status(200).json({
    name: 'Vercel Min Repro',
    value: testBugVariable.value,
    isDefault: testBugVariable.isDefaulted
  })
}