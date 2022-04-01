import { rest } from "msw"

export const handlers = [
    rest.get("http://localhost:3000/produtos", (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    "id": 1,
                    "name": "Copacabana Palace",
                    "description": "Hotel na praia de Copabacana, com visão para a praia de Copacabana",
                    "category": {
                        "id": 1,
                        "title": "Hotéis",
                        "description": "Comodidade e facilidade para conhecer a região",
                        "imageUrl": "https://images2.imgbox.com/26/8b/L7yjUChE_o.jpg",
                        "totalProducts": null
                    },
                    "city": {
                        "id": 2,
                        "name": "Rio de Janeiro",
                        "country": "Brasil"
                    },
                    "images": [
                        {
                            "id": 1,
                            "title": "copacabana-palace",
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/21/e4/belmond-copacabana-palace.jpg?w=1200&h=-1&s=1"
                        },
                        {
                            "id": 4,
                            "title": "copacabana-palace pscina",
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/21/e6/hotel-cipriani-restaurant.jpg?w=1200&h=-1&s=1"
                        },
                        {
                            "id": 3,
                            "title": "copacabana-palace sala",
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/22/d7/cop-acc-sui.jpg?w=1200&h=-1&s=1"
                        },
                        {
                            "id": 2,
                            "title": "copacabana-palace quarto",
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/22/db/cop-acc-sui.jpg?w=1200&h=-1&s=1"
                        },
                        {
                            "id": 5,
                            "title": "copacabana-palace banheiro",
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c8/fb/7a/guest-room-amenity.jpg?w=1200&h=-1&s=1"
                        }
                    ],
                    "characteristics": [
                        {
                            "id": 4,
                            "name": "TV",
                            "icon": "https://images2.imgbox.com/62/0b/7pQMfTbf_o.png"
                        },
                        {
                            "id": 2,
                            "name": "Piscina",
                            "icon": "https://images2.imgbox.com/dd/82/WrPPtwSW_o.png"
                        },
                        {
                            "id": 1,
                            "name": "Wi-Fi",
                            "icon": "https://images2.imgbox.com/5f/56/D8z4Arzi_o.png"
                        },
                        {
                            "id": 3,
                            "name": "Pet Friendly",
                            "icon": "https://images2.imgbox.com/58/a0/u0Hmag7Q_o.png"
                        }
                    ]
                },
            ])
        )
    })
]