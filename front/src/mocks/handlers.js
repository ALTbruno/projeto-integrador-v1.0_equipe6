// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  /*   rest.get('/categories', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          login: [{email: 'david@email.com', senha: '1234567'}]
        })
      )
    }), */
  rest.post('/test', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          hoteis: {
            "id": 13,
            "title": "Hotéis",
            "description": "teste de Mock",
            "imageUrl": "https://images2.imgbox.com/26/8b/L7yjUChE_o.jpg",
            "totalProducts": 7
          }
        }
      )
    )
  }),
]