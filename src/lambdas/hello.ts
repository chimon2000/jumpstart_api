import { api } from '@nitric/sdk'

const helloApi = api('lambdas')

helloApi.get('/hello/:name', async (ctx) => {
  const { name } = ctx.req.params
  ctx.res.body = `Hello ${name}`
  return ctx
})

// Let's add a 'goodbye' route to the API, like this:
helloApi.get('/goodbye/:name', async (ctx) => {
  const { name } = ctx.req.params
  ctx.res.body = `Goodbye ${name}`
  return ctx
})
