import { rest } from 'msw';

export const handlers = [
/*     rest.get("/api/categories", (req, res, ctx) => {
        return res(ctx.json(
            {
                id: 1,
                title: "Teste",
                description: "Teste mock, msw",
                imageUrl: "https://images2.imgbox.com/26/8b/L7yjUChE_o.jpg",
                totalProducts: null
            }

        ))
    }),
    rest.get("/api/cities", (req, res, ctx) => {
        return res(ctx.json(
            {
                id: 1,
                name: "Cidade do teste",
                country: "Brasil"
            }
        ))
    }),
    rest.get("/api/products/", (req, res, ctx) => {
        return res(ctx.json(
            {
                id: 1,
                name: "Teste Produto",
                description: "Teste mock, msw",
                category: {
                    id: 1,
                    title: "Teste",
                    description: "Teste mock, msw",
                    imageUrl: "https://images2.imgbox.com/26/8b/L7yjUChE_o.jpg",
                    totalProducts: null
                },
                city: {
                    id: 2,
                    name: "Cidade do teste",
                    country: "Brasil"
                },
            }

        ))
    }) */
]