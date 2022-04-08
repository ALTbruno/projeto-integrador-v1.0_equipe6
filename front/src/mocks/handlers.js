import { rest } from 'msw';

export const handlers = [
/*     rest.get('http://ec2-3-223-123-204.compute-1.amazonaws.com:8080/api/products/', (req, res, ctx) => {
        return res(ctx.json({
            id: 1,
            name: "Copacabana Palace",
            description: "Hotel na praia de Copabacana, com visão para a praia de Copacabana",
            category: {
                id: 1,
                title: "Hotéis",
                description: "testes",
                imageUrl: "https://images2.imgbox.com/26/8b/L7yjUChE_o.jpg",
                totalProducts: null
            },
            city: {
                id: 1,
                name: "cidade dos Testes",
                country: "Brasil"
            },
            images: [
                {
                    id: 1,
                    title: "copacabana-palace sala",
                    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/22/d7/cop-acc-sui.jpg?w=1200&h=-1&s=1"
                }
            ],
            characteristics: [
                {
                    id: 1,
                    name: "Piscina",
                    icon: "https://images2.imgbox.com/dd/82/WrPPtwSW_o.png"
                }
            ]
        }
        ))
    }) */
    rest.get('http://ec2-3-223-123-204.compute-1.amazonaws.com:8080/api/cities', (req, res, ctx)=>{
        return res(ctx.status(200))
    })
]