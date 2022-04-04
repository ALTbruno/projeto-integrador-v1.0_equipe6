import { Card, CardImg } from "react-bootstrap";
import StarRating from "../../components/avaliationStars";

export const ReservationDetailCard = () => {

    return (
        <>
            <Card className="w-lg-25 mx-md-3 mx-sm-3 mx-lg-5">
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
        </>
    )
}