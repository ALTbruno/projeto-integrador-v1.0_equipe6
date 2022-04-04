import { Card, CardImg } from "react-bootstrap";
import React from 'react';
import { ReservationForm } from "../../components/reservationForm";
import StarRating from "../../components/avaliationStars";



const PaginaReserva = () => {

    return (
        <>
            {/* Bloco de Titulo */}
            <div className="p-1 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                <div>
                    <h6 className="ms-5 mt-2 mb-0 text-light" >Titulo</h6>
                    <h2 className="ms-5 my-0 fw-bold text-light">Nome</h2>
                </div>
                <div className="ms-auto me-5 text-light">
                    <p>voltar</p>
                </div>
            </div>

            <div className="mt-5 d-lg-flex justify-content-around">

                {/* Formulario */}
                <ReservationForm/>

                {/* Detalhes da Reserva */}
                <Card className="w-lg-25">
                    <Card.Title className="p-1 text-center ">
                        Detalhes da Reserva
                    </Card.Title>
                    
                    <CardImg src="https://content.r9cdn.net/rimg/himg/1b/c5/19/ice-46638-72596683_3XL-661640.jpg?width=335&height=268&crop=true" />

                    <Card.Body>
                        <Card.Subtitle className="mb-1 d-flex flex-row align-items-center fw-bold" style={{ fontSize: '12px' }}>Categoria</Card.Subtitle>
                        <Card.Title className="mb- fw-bold">Nome</Card.Title>
                        <StarRating/>
                    </Card.Body>
                    <Card.Body>
                        <Card.Subtitle className="my-2">Localização</Card.Subtitle>
                        <Card.Text className="my-2">Check-in</Card.Text>
                        <Card.Text className="my-2">Check-out</Card.Text>
                        <Card.Link className="mt-4 border btn w-100 decoration-none">Confirmar Reserva</Card.Link>
                    </Card.Body>
                </Card>

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