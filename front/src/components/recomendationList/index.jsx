import { Button, Card, CardGroup, Container, Row, Col, Stack } from "react-bootstrap";
import Rating from "../avaliationStars";
import hoteis from "./hoteis.json";
import { MdRoom } from "react-icons/md";

function RecomendationList () {

    //Cartão 1: Criação de um cartão no qual cada produto será representado.
    //Cartão 2: Dentro do cartão inclua um bloco alinhado à esquerda que inclui uma imagem centralizada.
    //Cartão 3: Dentro do cartão inclua um bloco alinhado à direita que inclui a categoria do produto, nome, localização, descrição. E um botão que diz "Ver detalhes".

    return (
        <>
            <Row className="justify-content-center">
                <h3 className="my-3 ms-5">Recomendações</h3>
                {hoteis.map(({ foto, nome, localizacao, descricao }) => {

                    return (  
                        <Card className="m-3 p-0 d-flex flex-row" style={{maxWidth: '40rem' }}>
                            <Card.Img className="float-start" src={foto} style={{maxWidth: '300px' }}/>
                            <Card.Body className="col-auto container m-1">
                                <Card.Subtitle>Hotel <Rating/> </Card.Subtitle>
                                <Card.Title className="mb-1 fw-bold">{nome}</Card.Title>
                                <Card.Text className="mb-1 ">
                                    <MdRoom/>
                                    {localizacao + " . "}
                                    <Card.Link className="mb-1 text-decoration-none fw-bold">Mostrar no Mapa</Card.Link>
                                </Card.Text>
                                
                                <Card.Text className="">{descricao}</Card.Text>
                                <Card.Link className="btn btn-success  text-decoration-none" style={{width: '100%'}}>Ver Mais</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                }
                )
                }
            </Row>
        </>
    )
}

export default RecomendationList;