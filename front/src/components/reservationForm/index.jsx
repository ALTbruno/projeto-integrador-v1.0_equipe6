import React, { useState, useEffect } from 'react';
import api from '../../services';
import DatePicker from 'react-datepicker';
import { Form, FormGroup, FormControl, FormLabel, Card } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ReservationDetailCard } from '../../components/reservationDetailCard';
import 'react-datepicker/dist/react-datepicker.css';

export const ReservationForm = ({ product }) => {
    const [user, setUser] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [resevations, setResevations] = useState([])
    const [checkTime, setCheckTime] = useState(null);
    const [largeWidth, setLargeWidth] = useState(false);
    const [reservation, setReservation] = useState({
        "checkinTime": checkTime,
        "checkinDate": startDate,
        "checkoutDate": endDate,
        "customer": user,
        "product": product
    });
    

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])
    
    useEffect(() => {
        api.get(`/reservations/productId=${product.id}`).then(response => {
            setResevations(response.data);
        })
    },[product])

    useEffect(() => {
        setReservation({
            "checkinTime": checkTime,
            "checkinDate": startDate,
            "checkoutDate": endDate,
            "customer": user,
            "product": product
        });
    }, [checkTime, startDate, endDate, user, product])

    useEffect(() => {
        window.innerWidth > 559 ? setLargeWidth(true) : setLargeWidth(false);
        const handleResize = () => {
            if (window.innerWidth > 559) {
                setLargeWidth(true);
            } else {
                setLargeWidth(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [largeWidth]);

    const days = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabado',
    ];
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];
    const locale = {
        localize: {
            day: (n) => days[n],
            month: (n) => months[n],
        },
        formatLong: {
            date: () => 'mm/dd/yyyy',
        },
    };

    const setValuesDate = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    // exemplo para lembrar de como colocar uma data no excludeDates
    // console.log(new Date(2022 , 2 , 1))
    const generateNewDate = (date) => {
        let day;
        let month;
        let year;
        day = new Date(date).getUTCDate();
        month = new Date(date).getUTCMonth();
        year = new Date(date).getUTCFullYear();
        return new Date(year, month, day);
    }
    const generateExcludeDatesInterval = () => {
        let dates = [{
            start: new Date(),
            end: new Date()
        }];
        resevations.map(reserva => {
            dates.push({
                start: generateNewDate(reserva.checkinDate),
                end: generateNewDate(reserva.checkoutDate)
            })
        })
        return dates;    
    }
    return (
        <>
            <div className="w-xl-50 mx-sm-3">
                <h5>Complete seus Dados</h5>
                <Form className="card mb-5 p-4 d-flex flex-lg-row justify-content-lg-around w-100">
                    <FormGroup className="mx-2 w-100">
                        <FormLabel className="mb-0">Nome</FormLabel>
                        <FormControl name='firstName' readOnly={true} disabled value={user.firstName || ''} type="text" placeholder="Digite seu nome" />

                        <FormLabel className="mb-0 mt-4">E-mail</FormLabel>
                        <FormControl disabled name='email' readOnly={true} value={user.email || ''} type="email" placeholder="name@example.com" />
                    </FormGroup>
                    <FormGroup className="mx-2 w-100">
                        <FormLabel className="mb-0">Sobrenome</FormLabel>
                        <FormControl disabled name='lastName' readOnly={true} value={user.lastName || ''} type="text" placeholder="Digite seu sobrenome" />

                        <FormLabel className="mb-0 mt-4">Cidade</FormLabel>
                        <FormControl type="text" name='city' placeholder="Digite sua cidade" />
                    </FormGroup>
                </Form>

                {/* Calendario */}
                <section className="container-reserva">
                    <h1>Selecione sua data de reserva</h1>
                    <div className="container-calendar">
                        <DatePicker
                            inline
                            id="calendar"
                            locale={locale}
                            formatWeekDay={(locale) => locale[0]}
                            selected={startDate}
                            onChange={setValuesDate}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            excludeDateIntervals={generateExcludeDatesInterval()}
                            dateFormat="yyyy/MM/dd"
                            selectsRange={true}
                            monthsShown={largeWidth ? 2 : 1}
                        />
                    </div>
                </section>

                {/* Horario da reserva */}
                <h5 className="mt-sm-5">Seu Horário de Chegada</h5>
                <Card className="p-3 mb-sm-5 w-100">
                    <Card.Title className="my-4"> <AiOutlineCheckCircle /> Seu quarto estará pronto para check-in...</Card.Title>
                    <Card.Body className="d-xl-flex">
                        <FormGroup className="me-2 mb-sm-3 w-100">
                            <FormLabel className="w-100">Hora prevista de chegada</FormLabel>
                            <Form.Select onChange={(e) => setCheckTime(e.target.value)} >
                                <option disabled>Selecione um horário</option>
                                <option value="07:00">07:00</option>
                                <option value="07:15">07:15</option>
                                <option value="07:30">07:30</option>
                                <option value="07:45">07:45</option>
                                <option value="08:00">08:00</option>
                                <option value="08:15">08:15</option>
                            </Form.Select>
                        </FormGroup>
                        <FormGroup className="ms-2 w-100">
                            <FormLabel className="w-100">Hora prevista de Saída</FormLabel>
                            <Form.Select >
                                <option disabled>Selecione um horário</option>
                                <option value="07:00">07:00</option>
                                <option value="07:15">07:15</option>
                                <option value="07:30">07:30</option>
                                <option value="07:45">07:45</option>
                                <option value="08:00">08:00</option>
                                <option value="08:15">08:15</option>
                            </Form.Select>
                        </FormGroup>
                    </Card.Body>

                </Card>

            </div>
            {/* Detalhes da Reserva */}
            <ReservationDetailCard reservation={reservation} />

        </>
    )
}