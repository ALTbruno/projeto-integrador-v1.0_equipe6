import api from '../../services/index';
import { ReservationDetailCard } from '../../components/reservationDetailCard';
import React, { useState, useEffect } from 'react';
import { ReservationForm } from "../../components/reservationForm";
import './calendar.scss';
import { useParams } from 'react-router-dom';



const PaginaReserva = () => {

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
        }
    }]);
    
    const { id } = useParams();

    useEffect(() => {
        api.get(`/products/${id}`).then(response => {
            setProdutos(response.data.slice(0, 6));
        })
    }, [id]);

    return (
        <>
            {/* Bloco de Titulo */}
            <div className="p-1 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                <div>
                    <h6 className="ms-5 mt-2 mb-0 text-light" >Titulo</h6>
                    <h2 className="ms-5 my-0 fw-bold text-light">Nome</h2>
                </div>
                <div className="ms-auto me-5 text-light">
                    <a href={`/produto/${id}`}>voltar</a>
                </div>
            </div>

            <div className="mt-5 d-lg-flex justify-content-center">

                {/* Formulario */}
                <ReservationForm />

                {/* Detalhes da Reserva */}
                <ReservationDetailCard/>

            </div>

            {/* Bloco Politicas do Produto */}
            <div className="mt-5 p-3">
                <div className="p-1" style={{ backgroundColor: "#bfbfbf" }}>
                    <h2 className="ms-3" style={{ backgroundColor: "#bfbfbf" }}>Politicas do Produto</h2>
                </div>
                <div className="p-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci modi blanditiis harum velit repellat et nisi qui delectus! Earum culpa ex natus non laudantium repellat voluptatibus, incidunt amet quibusdam!</p>
                </div>
            </div>

        </>
    )
}

export default PaginaReserva;