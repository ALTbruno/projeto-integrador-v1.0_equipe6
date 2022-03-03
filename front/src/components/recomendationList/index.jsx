import { Button, Card, CardGroup, Container, Row, Col, Stack } from "react-bootstrap";
import StarRating from "../avaliationStars";
import hoteis from "./hoteis.json";
import { MdRoom, MdWifi, MdPool } from "react-icons/md";
import Classification from "../classification";
import FavoriteHeart from "../favoriteHeart";

const RecomendationList = () => {

    //Cartão 1: Criação de um cartão no qual cada produto será representado.
    //Cartão 2: Dentro do cartão inclua um bloco alinhado à esquerda que inclui uma imagem centralizada.
    //Cartão 3: Dentro do cartão inclua um bloco alinhado à direita que inclui a categoria do produto, nome, localização, descrição. E um botão que diz "Ver detalhes".

    return (
        <>
             <FavoriteHeart/>
            <Row className="justify-content-center">
                <h3 className="my-3 ms-5 fw-bold">Recomendações</h3>
                {hoteis.map(({ foto, nome, localizacao, descricao }) => {

                    return (  
                        <Card className="shadow rounded m-3 p-0 d-flex flex-md-row justify-content-md-center " style={{maxWidth: '40rem' }}>

                            <Card.Body className="m-0 p-0 d-flex w-100 position-relative justify-content-sm-center">
                                <Card.Img className="img-fluid" src={foto} style={{objectFit: 'cover' }}/>
                                <FavoriteHeart/>
                            </Card.Body>
                            
                            <Card.Body className="p-3 my-auto">

                                <Card.Body className="d-flex flex-row justify-content-sm-between w-100 mb-2 p-0">              
                                    <Card.Title className="mb- fw-bold">  
                                        <Card.Subtitle className="mb-1 d-flex flex-row align-items-center fw-bold" style={{fontSize: '12px'}}> 
                                            Hotel 
                                            <StarRating/> 
                                        </Card.Subtitle>
                                        {nome}
                                    </Card.Title>
                                    <Classification/>
                                </Card.Body>

                                <Card.Text className="mb-0 ">
                                    <MdRoom className="me-1"/>
                                    {localizacao + " . "}
                                    <Card.Link className="text-decoration-none fw-bold" style={{color: '#1DBEB4'}}>Mostrar no Mapa</Card.Link>
                                </Card.Text>
                                <MdWifi className="me-1"/>
                                <MdPool className="me-1"/>
                                <Card.Text className="mt-2 mt-sm-3" style={{fontSize: '10px'}}>{descricao}</Card.Text>
                                <Card.Link className="btn mt-sm-4 text-decoration-none text-light fw-bold w-100" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}}>Ver Mais</Card.Link>

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