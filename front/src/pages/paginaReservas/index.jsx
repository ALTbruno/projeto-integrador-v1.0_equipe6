import { Card } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {AiOutlineCheckCircle} from "react-icons/ai";
import React from 'react';


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

            <div className="mt-5 d-lg-flex justify-content-sm-center">

                {/* Formulario */}
                <div className="mx-5">
                    <h5>Complete seus Dados</h5>
                    <Form className="card mb-5 p-2 d-flex flex-lg-row justify-content-lg-around w-100">
                        <FormGroup className="mx-2 w-100">
                            <FormLabel className="mb-0"> Nome</FormLabel>
                            <FormControl type="text" placeholder="Digite seu nome"/>

                            <FormLabel className="mb-0 mt-4">E-mail</FormLabel>
                            <FormControl type="email" placeholder="name@example.com"/>
                        </FormGroup>
                        <FormGroup className="mx-2 w-100">
                            <FormLabel className="mb-0">Sobrenome</FormLabel>
                            <FormControl type="text" placeholder="Digite seu sobrenome"/>

                            <FormLabel className="mb-0 mt-4">Cidade</FormLabel>
                            <FormControl type="text" placeholder="Digite sua cidade"/>
                        </FormGroup>
                    </Form>

                    {/* Calendario */}
                    <h5>Selecione sua Data de Reserva</h5>
                    <div>
                        //calendario
                    </div>

                    {/* Horario da reserva */}
                    <h5 className="mt-sm-5">Seu Horário de Chegada</h5>
                    <Card className="p-3 w-100">
                        <Card.Title className="my-4"> <AiOutlineCheckCircle/> Seu quarto estará pronto para check-in...</Card.Title>
                        <Card.Body className="d-xl-flex">
                            <FormGroup className="me-2 w-100">
                                <FormLabel className="w-100">Indique sua hora prevista de chegada</FormLabel>
                                <Form.Select className="">
                                        <option></option>
                                        <option value="1">07:00</option>
                                        <option value="1">07:15</option>
                                        <option value="1">07:30</option>
                                        <option value="1">07:45</option>
                                        <option value="1">08:00</option>
                                        <option value="1">08:15</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup className="ms-xl-2 mt-sm-3 w-100">
                                <FormLabel className="w-100">Indique sua hora prevista de Saída</FormLabel>
                                <Form.Select className="">
                                    <option></option>
                                    <option value="1">07:00</option>
                                    <option value="1">07:15</option>
                                    <option value="1">07:30</option>
                                    <option value="1">07:45</option>
                                    <option value="1">08:00</option>
                                    <option value="1">08:15</option>
                                </Form.Select>
                            </FormGroup>
                        </Card.Body>
                        
                    </Card>

                </div>

                {/* Detalhes da Reserva */}
                <Card className="mx-5 mt-sm-5 w-lg-25">
                    <Card.Title className="p-1 text-center ">
                        Detalhes da Reserva
                    </Card.Title>
                    
                    <CardImg src="https://content.r9cdn.net/rimg/himg/1b/c5/19/ice-46638-72596683_3XL-661640.jpg?width=335&height=268&crop=true" />

                    <Card.Body>
                        <Card.Subtitle className="mb-1 d-flex flex-row align-items-center fw-bold" style={{ fontSize: '12px' }}>Categoria</Card.Subtitle>
                        <Card.Title className="mb- fw-bold">Nome</Card.Title>
                        <StarRating />
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