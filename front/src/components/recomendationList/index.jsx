import { Button, Card, CardGroup, Container, Row, Col, Stack } from "react-bootstrap";
import StarRating from "../avaliationStars";
import hoteis from "./hoteis.json";
import { MdRoom, MdWifi, MdPool } from "react-icons/md";
import Classification from "../classification";

const RecomendationList = () => {

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
                                <Card.Subtitle className="mb-1 d-flex flex-row" style={{fontSize: '12px'}}>Hotel <StarRating/> </Card.Subtitle>
                                <Card.Title className="mb-1 fw-bold">{nome}</Card.Title>
                                <Card.Text className="mb-1 ">
                                    <MdRoom className="me-1"/>
                                    {localizacao + " . "}
                                    <Card.Link className="text-decoration-none fw-bold" style={{color: '#1DBEB4'}}>Mostrar no Mapa</Card.Link>
                                </Card.Text>
                                <MdWifi className="me-1"/>
                                <MdPool className="me-1"/>
                                <Card.Text className="" style={{fontSize: '10px'}}>{descricao}</Card.Text>
                                <Card.Link className="btn text-decoration-none w-100" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}}>Ver Mais</Card.Link>
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