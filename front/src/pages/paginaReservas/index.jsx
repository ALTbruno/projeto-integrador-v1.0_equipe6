import { Card } from "react-bootstrap";
import { CardImg } from "react-bootstrap";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
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

            <div className="mt-5 d-flex justify-content-around">

                {/* Formulario */}
                <div className="">
                    <Form className="card mb-5 p-3 d-flex flex-row justify-content-around" style={{width: '50rem'}}>
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
                            <Form.Select>
                                <option>Selecione a Cidade</option>
                                <option value="1">São Paulo</option>
                            </Form.Select>
                        </FormGroup>
                    </Form>

                    {/* Calendario */}
                    <div>
                        //calendario
                    </div>

                </div>

                {/* Detalhes da Reserva */}
                <Card className="" style={{width: '20rem'}}>
                    <Card.Title className="p-1 text-center">
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
                        <Card.Text className="my-2">Confira</Card.Text>
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