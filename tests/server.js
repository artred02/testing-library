import {setupServer} from 'msw/node'
import {rest} from 'msw'

export const handlers = [
  rest.post('/greeting', (req, res, ctx) =>
    res(ctx.json({data: {greeting: `Hello ${req.body.subject}`}})),
  ),
  rest.post('/form', (req, res, ctx) => {
    // Si food |drink est vide
    if (!req.body.food || !req.body.drink) {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: 'Veuillez renseigner les champs',
        }),
      )
    } else {
      return res(
        ctx.json({
          data: {
            food: req.body.food,
            drink: req.body.drink,
          },
        }),
      )
    }
  }),
  rest.post('/post/:id', (req, res, ctx) => {
    if (!req.body.title) {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: 'Format invalide, veuillez renseigner le titre',
        }),
      )
    }
    return res(ctx.json({data: req.body}))
  }),
]

export const server = setupServer(...handlers)
