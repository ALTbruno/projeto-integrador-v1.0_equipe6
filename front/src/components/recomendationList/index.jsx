import { useState, useEffect } from "react";
import { Row, Card, CardGroup } from "react-bootstrap";
import { MdRoom, MdWifi, MdPool } from "react-icons/md";
import StarRating from "../avaliationStars";
import api from '../../services/index';
import Classification from "../classification";
import FavoriteHeart from "../favoriteHeart";
import { Link } from 'react-router-dom';
import React from 'react'



const RecomendationList = () => {


    const [produtos, setProdutos] = useState([{
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
            }
        ],
        "characteristics": [
            {
                "id": null,
                "name": "icon",
                "icon": ""
            }
        ]
    }]);
    

    useEffect(() => {
        api.get(`/products/`).then(response => {
            setProdutos(response.data.slice(0, 6));
        })
    }, []);

    return (
        <>
            <section className="">
                <h3 className="my-3 ms-5 fw-bold ">Recomendações</h3>
                <Row className="justify-content-center">
                    {produtos.map((item) => (

                        <Card key={item.id} value={item.name} className="shadow rounded m-3 p-0 d-flex flex-md-row justify-content-md-center " style={{ maxWidth: '40rem' }}>

                            <Card.Body className="m-0 p-0 d-flex position-relative" style={{ width: "640px", height: "300px" }}>
                                <Card.Img className="w-100" style={{ objectFit: "cover" }} src={item.images[0].url ? item.images[0].url : ''} />
                                <FavoriteHeart />
                            </Card.Body>

                            <Card.Body className="p-3 my-auto">

                                <Card.Body className="d-flex flex-row justify-content-sm-between w-100 mb-2 p-0">
                                    <Card.Title className="mb- fw-bold">
                                        <Card.Subtitle className="mb-1 d-flex flex-row align-items-center fw-bold" style={{ fontSize: '12px' }}>
                                            {item.category.title}
                                            <StarRating />
                                        </Card.Subtitle>
                                        {item.name}
                                    </Card.Title>
                                    <Classification />
                                </Card.Body>

                                <Card.Text className="mb-0 ">
                                    <MdRoom className="me-1" />
                                    {item.city.name + " . "}
                                    <Card.Link className="text-decoration-none fw-bold" style={{ color: '#1DBEB4' }}>Mostrar no Mapa</Card.Link>
                                </Card.Text>
                                <MdWifi className="me-1" />
                                <MdPool className="me-1" />
                                <Card.Text className="mt-2 mt-sm-3" style={{ fontSize: '10px' }}>{item.description}</Card.Text>
                                <Card.Link className="btn mt-sm-4 text-decoration-none text-light fw-bold w-100" style={{ backgroundColor: '#1DBEB4', border: '#1DBEB4' }} href={`/produto/${item.id}`} >Ver Mais</Card.Link>

                            </Card.Body>
                        </Card>

                    ))}
                </Row>
            </section>
        </>
    )
}

export default RecomendationList;