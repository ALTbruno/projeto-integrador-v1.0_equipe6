import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Card } from "react-bootstrap";
import {AiOutlineCheckCircle} from "react-icons/ai";

export const ReservationForm = () => {

    return (
        <>
            <div className="w-50">
                    <h5>Complete seus Dados</h5>
                    <Form className="card mb-5 p-4 d-flex flex-lg-row justify-content-lg-around w-100">
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
                    <Card className="p-3 mb-sm-5 w-100">
                        <Card.Title className="my-4"> <AiOutlineCheckCircle/> Seu quarto estará pronto para check-in...</Card.Title>
                        <Card.Body className="d-xl-flex">
                            <FormGroup className="me-2 mb-sm-3 w-100">
                                <FormLabel className="w-100">Hora prevista de chegada</FormLabel>
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
                            <FormGroup className="ms-2 w-100">
                                <FormLabel className="w-100">Hora prevista de Saída</FormLabel>
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
        </>
    )
}