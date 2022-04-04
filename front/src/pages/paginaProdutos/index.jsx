import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/index';
import StarRating from "../../components/avaliationStars";
import Classification from "../../components/classification";
import ProdutosModal from "../../components/predutosModal";
import React, { Component } from 'react'
import Map from "../../components/locationMap/Map";


const PaginaProdutos = () => {

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
        api.get(`/products/${id}`).then(response => {setProdutos(response.data);
        })
    }, [id]);

    console.log(produtos)
    return (
        <>
            {/* Bloco de Titulo */}
            <div className="p-1 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                <div>
                    <h6 className="ms-5 mt-2 mb-0 text-light" >{produtos.category.title}</h6>
                    <h2 className="ms-5 my-0 fw-bold text-light">{produtos.name}</h2>
                </div>
                <div className="ms-auto me-5 text-light">
                    <p>voltar</p>
                </div>
            </div>

            {/* Bloco de Endereço */}
            <div className="p-1 d-flex align-items-center" style={{ backgroundColor: "#bfbfbf" }}>
                <p>Cidade</p>
                <div className="ms-auto me-5 d-flex align-items-center">
                    <Link to="/produto/:id/reserva">reserva</Link>
                    <StarRating />
                    <Classification />
                </div>
            </div>

            {/* Bloco de Imagem */}
            <div className="p-2 border d-flex align-items-center justify-content-center mw-100">
            
    
                <div className="p-1 w-50" >
                    <img key={produtos.images[0].id} className="img-fluid rounded-3" src={produtos.images[0].url} alt="" srcSet="" />
                </div>

                <div className="w-25" >
                    <div className="p-1 w-100">
                        <img key={produtos.images[1].id} className="img-fluid rounded-3" src={produtos.images[1].url} alt="" srcSet="" />
                    </div>
                    <div className="p-1 w-100">
                        <img key={produtos.images[2].id} className="img-fluid rounded-3" src={produtos.images[2].url} alt="" srcSet="" />
                    </div>
                </div>

                <div className="w-25" >
                    <div className="p-1 w-100">
                        <img key={produtos.images[3].id} className="img-fluid rounded-3" src={produtos.images[3].url} alt="" srcset="" />
                     </div>
                    <div className="p-1 w-100 position-relative">
                        <ProdutosModal />
                        <img key={produtos.images[4].id} className="img-fluid rounded-3" src={produtos.images[4].url} alt="" srcSet="" />
                    </div>
                </div>

            </div>

            {/* Bloco de Descrição */}
            <div className="p-3" >
                <div className="p-1" style={{ backgroundColor: "#bfbfbf" }}>
                    <h2 className="ms-3" >Descrição</h2>
                </div>
                <div className="p-1">
                    <p>{produtos.description}</p>
                </div>
            </div>

            {/* Bloco de Caracteristicas do Produto */}
            <div className="p-3">
                <div className="p-1" style={{ backgroundColor: "#bfbfbf" }}>
                    <h2 className="ms-3" style={{ backgroundColor: "#bfbfbf" }}>Caracteristicas</h2>
                </div>
                {produtos.characteristics.map(characteristic => (
                    <div className="p-1 d-flex" key={characteristic.id}>
                        <div className="p-1">
                            <p>{characteristic.name}</p>
                        </div>
                    </div>
                ))}

            </div>

            {/* Calendario */}
            <div>
                //Calendario
            </div>

            {/* Mapa */}
            
            <div className="mb-2 p-3">
                <div className=" my-3 p-1" style={{ backgroundColor: "#bfbfbf" }}>
                    <h2 className="ms-3" style={{ backgroundColor: "#bfbfbf" }}>Onde você vai estar</h2>
                </div>
                <Map/>
            </div>

            {/* Bloco Politicas do Produto */}
            <div className="p-3">
                <div className="p-1" style={{ backgroundColor: "#bfbfbf" }}>    
                    <h2 className="ms-3" style={{ backgroundColor: "#bfbfbf" }}>Bloco Politicas do Produto</h2>
                </div>
                <div className="p-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci modi blanditiis harum velit repellat et nisi qui delectus! Earum culpa ex natus non laudantium repellat voluptatibus, incidunt amet quibusdam!</p>
                </div>
            </div>
        </>
    )
}

export default PaginaProdutos;