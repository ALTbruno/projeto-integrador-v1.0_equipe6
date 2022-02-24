import { Button, Card, CardGroup, Container, Row, Col, Stack } from "react-bootstrap";
import hoteis from "./hoteis.json"

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
                        <Card className="mx-3 my-2 d-flex flex-row align-items-center justify-content-between" style={{ width: '40rem' }}>
                            <Card.Img   style={{maxWidth: '300px'}} src={foto}/>
                            <Card.Body className="container m-1">
                                <Card.Subtitle>Hotel</Card.Subtitle>
                                <Card.Title className="my-2 fw-bold">{nome}</Card.Title>
                                <Card.Text className="my-2 ">
                                    {localizacao + " . "}
                                    <Card.Link className="my-2 text-decoration-none fw-bold">Mostrar no Mapa</Card.Link>
                                </Card.Text>
                                
                                <Card.Text className="my-2">{descricao}</Card.Text>
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