import React from "react";
import { Form, FormGroup, FormLabel, FormControl, FormText, Button} from "react-bootstrap";


const CriacaoProdutos = () => {


    return (
        <>
            <div className="p-3 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                    <h2 className="ms-5 my-0 fw-bold text-light">Administração de Produtos</h2>
                <div className="ms-auto me-5 text-light">
                    <a href="/">voltar</a>
                </div>
            </div>

            <div  className="p-5">
                <h4 className="fw-bold">Criar Produto</h4>
                <Form>
                    <div className="d-flex">
                        <FormGroup className="me-2 p-1 w-100">
                            <FormLabel>Nome do Produto</FormLabel>
                            <FormControl className="shadow" type="text" placeholder="Digite o Nome do Produto"/>
                        </FormGroup>

                        <FormGroup className=" p-1 w-50 ">
                            <FormLabel>Categoria do Produto</FormLabel>
                            <Form.Select className="shadow">
                                <option>selecione uma categoria</option>
                            </Form.Select>
                        </FormGroup>
                    </div>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Descrição do Produto</FormLabel>
                        <FormControl className="shadow" as="textarea" rows={5} placeholder="Digite a Descrição do Produto"/>
                    </FormGroup>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Endereço</FormLabel>
                        <FormControl className="shadow" type="text" placeholder="Digite o Endereço"/>
                    </FormGroup>

                    <div className="my-3 p-1 d-flex justify-content-between">
                        <FormGroup className="w-100 me-2">
                            <FormLabel>Latitude</FormLabel>
                            <FormControl className="shadow"  type="text" placeholder="Digite a Latitude"/>
                        </FormGroup>
                        <FormGroup className="w-100 ms-2">
                            <FormLabel>Longitude</FormLabel>
                            <FormControl className="shadow"  type="text" placeholder="Digite a Longitude"/>
                        </FormGroup>
                    </div>
                    
                    <div className="d-flex">
                        <FormGroup className="my-3 me-2 p-1 w-100">
                            <FormLabel>Adicione Atributos</FormLabel>
                            <Form.Control className="shadow" type="text"/>
                        </FormGroup>

                        <FormGroup className="my-3 me-2 p-1 w-50">
                            <FormLabel>Selecione um icon</FormLabel>
                            <FormControl className="shadow"/>
                        </FormGroup>

                        <Button className="h-100 align-self-center mt-4 shadow fw-bold" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}} size="sm">+</Button>
                    </div>
                    
                    <div className="d-flex">
                        <FormGroup className="my-3 me-2 p-1 w-100">
                            <FormLabel>Imagens do Produto</FormLabel>
                            <FormControl className="shadow" type="text" placeholder="coloque aqui o link da imagem do produto"/>
                        </FormGroup>

                        <Button className="h-100 align-self-center mt-4 shadow fw-bold" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}} size="sm">+</Button>
                    </div>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Politicas do Produto</FormLabel>
                        <div className="d-flex justify-content-between" >
                            <div className="mx-2 w-100">
                                <FormText>Regras da Casa</FormText>
                                <FormControl className="shadow" as="textarea" rows={7}/>
                            </div>
                            <div className="mx-2 w-100">
                                <FormText>Saúde e Segurança</FormText>
                                <FormControl className="shadow" as="textarea" rows={7}/>
                            </div>
                            <div className="mx-2 w-100">
                                <FormText>Politicas de Cancelamento</FormText>
                                <FormControl className="shadow" as="textarea" rows={7}/>
                            </div>
                        </div>
                    </FormGroup>
                    
                        <Button className="mt-5 fw-bold" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}}>Criar</Button>
                       
                </Form>
            </div>
        </>
    )
};

export default CriacaoProdutos;