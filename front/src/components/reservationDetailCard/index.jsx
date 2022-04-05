import { Card, CardImg } from "react-bootstrap";
import StarRating from "../../components/avaliationStars";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services";

export const ReservationDetailCard = () => {

    const [produtos, setProdutos] = useState({  
        "id": null,
        "name": "",
        "description": "",
        "category": {
            "id": null,
            "title": "",
            "description": "",
            "imageUrl": "",
            "totalProducts": null
        },
        "city": {
            "id": null,
            "name": "",
            "country": ""
        },
        "images": [
            {
                "id": null,
                "title": "",
                "url": ""
            },
            {
                "id": null,
                "title": "",
                "url": ""
            },
            {
                "id": null,
                "title": "",
                "url": ""
            },
            {
                "id": null,
                "title": "",
                "url": ""
            },
            {
                "id": null,
                "title": "",
                "url": ""
            }
        ],
        "characteristics": [
            {
                "id": null,
                "name": "",
                "icon": ""
            }
        ]
    });
    
    const { id } = useParams();

    useEffect(() => {
        api.get(`/products/${id}`).then(response => {
            setProdutos(response.data);
        })
    }, [id]);

    return (
        <>
            <Card className="w-md-50 h-100 mx-sm-3">
                <Card.Title className="p-1 text-center ">
                    Detalhes da Reserva
                </Card.Title>
                
                <CardImg src={produtos.images[0].url} />

                <Card.Body>
                    <Card.Subtitle className="mb-1 d-flex flex-row align-items-center fw-bold" style={{ fontSize: '12px' }}>{produtos.category.title}</Card.Subtitle>
                    <Card.Title className="fw-bold">{produtos.name}</Card.Title>
                    <StarRating/>
                </Card.Body>
                <Card.Body>
                    <Card.Subtitle className="">{produtos.city.name}</Card.Subtitle>
                    <Card.Text className="my-2">Check-in </Card.Text>
                    <Card.Text className="">Check-out </Card.Text>
                    <Card.Link className="mt-4 border btn w-100 decoration-none" style={{ backgroundColor: '#1DBEB4', border: '#1DBEB4' }}>Confirmar Reserva</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}