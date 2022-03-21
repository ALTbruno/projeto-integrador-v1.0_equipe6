import axios from 'axios';
import { useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { MdRoom, MdWifi, MdPool } from "react-icons/md";
import StarRating from "../avaliationStars";
import hoteis from "./hoteis.json";
import Classification from "../classification";
import FavoriteHeart from "../favoriteHeart";
import { useNavigate } from 'react-router-dom';



const RecomendationList = () => {

    const api = axios.create({
        baseURL: 'http://ec2-3-223-123-204.compute-1.amazonaws.com:8080'
    });

    const [produtos, setProdutos] = useState([
        {
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
                "name": "",
                "icon": ""
            }
            ]
      }
    ]);
    const navigate = useNavigate()
  
    useEffect(() => {
        api.get('/categories').then((response) => {
            setProdutos(response.data);
        });
    }, [])

    return (
        <>
            <Row className="justify-content-center">
                <h3 className="my-3 ms-5 fw-bold ">Recomendações</h3>
                {produtos.map((item) => (
                    <Card key={item.id} className="shadow rounded m-3 p-0 d-flex flex-md-row justify-content-md-center " style={{ maxWidth: '40rem' }}>

                        <Card.Body className="m-0 p-0 d-flex w-100 position-relative justify-content-sm-center">
                            <Card.Img className="img-fluid" src={item.images[0].url} />
                            <FavoriteHeart />
                        </Card.Body>

                        <Card.Body className="p-3 my-auto">

                            <Card.Body className="d-flex flex-row justify-content-sm-between w-100 mb-2 p-0">
                                <Card.Title className="mb- fw-bold">
                                    <Card.Subtitle className="mb-1 d-flex flex-row align-items-center fw-bold" style={{ fontSize: '12px' }}>
                                        {item.category}
                                        <StarRating />
                                    </Card.Subtitle>
                                    {item.name}
                                </Card.Title>
                                <Classification />
                            </Card.Body>

                            <Card.Text className="mb-0 ">
                                <MdRoom className="me-1" />
                                {item.city + " . "}
                                <Card.Link className="text-decoration-none fw-bold" style={{ color: '#1DBEB4' }}>Mostrar no Mapa</Card.Link>
                            </Card.Text>
                            <MdWifi className="me-1" />
                            <MdPool className="me-1" />
                            <Card.Text className="mt-2 mt-sm-3" style={{ fontSize: '10px' }}>{item.description}</Card.Text>
                            <Card.Link onClick={() => navigate(`/produto/${item.id}` )} className="btn mt-sm-4 text-decoration-none text-light fw-bold w-100" style={{ backgroundColor: '#1DBEB4', border: '#1DBEB4' }}>Ver Mais</Card.Link>

                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </>
    )
}

export default RecomendationList;