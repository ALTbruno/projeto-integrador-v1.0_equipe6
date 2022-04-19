import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, FormText, Button} from "react-bootstrap";
import api from "../../services";


const CriacaoProdutos = () => {

    const [form, setForm] = useState({
        "categoryId": 1,
        "cityId": 1,
        "characteristics": [
            {
              "id": 2
            }
          ]
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name] :  e.target.value
        })
    } 

    const validate = () => {
        if (!form.name) {
            errors.name = "Preencha com um nome valido"
        }
        return errors;
    }

    const sendData = () => {
        api.post("/products/add", form).then(res => {
            console.log(res)
            console.log(res.data)
        }).then(error => console.log(error))
        console.log(form)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form))
        sendData()
    }


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

                <Form onSubmit={e => handleSubmit(e)}>
                    <div className="d-flex">
                        <FormGroup className="me-2 p-1 w-100">
                            <FormLabel>Nome do Produto</FormLabel>
                            <FormControl className="shadow" type="text"  placeholder="Digite o Nome do Produto" name="name" onChange={e => handleChange(e)}/>
                        </FormGroup>

                        <FormGroup className=" p-1 w-50 ">
                            <FormLabel>Categoria do Produto</FormLabel>
                            <Form.Select className="shadow" name="categories" onChange={e => handleChange(e)}>
                                <option>selecione uma categoria</option>
                                <option >Hotel</option>
                                <option>Hostel</option>
                                <option>Resort</option>
                                <option>selecione uma categoria</option>

                            </Form.Select>
                        </FormGroup>
                    </div>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Descrição do Produto</FormLabel>
                        <FormControl className="shadow" as="textarea" rows={5}  placeholder="Digite a Descrição do Produto" name="description" onChange={e => handleChange(e)}/>
                    </FormGroup>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Cidade</FormLabel>
                        <FormControl className="shadow" type="text" placeholder="Digite o Endereço" name="city" onChange={e => handleChange(e)}/>
                    </FormGroup>

                    <div className="my-3 p-1 d-flex justify-content-between">
                        <FormGroup className="w-100 me-2">
                            <FormLabel>Latitude</FormLabel>
                            <FormControl className="shadow"  type="text" placeholder="Digite a Latitude" name="latitude" onChange={e => handleChange(e)}/>
                        </FormGroup>
                        <FormGroup className="w-100 ms-2">
                            <FormLabel>Longitude</FormLabel>
                            <FormControl className="shadow"  type="text" placeholder="Digite a Longitude" name="longitude" onChange={e => handleChange(e)}/>
                        </FormGroup>
                    </div>
                    
                    <div className="d-flex">
                        <FormGroup className="my-3 me-2 p-1 w-100">
                            <FormLabel>Adicione Atributos</FormLabel>
                            <Form.Control className="shadow" type="text" name="characteristcs" onChange={e => handleChange(e)}/>
                        </FormGroup>

                        <FormGroup className="my-3 me-2 p-1 w-50">
                            <FormLabel>Selecione um icon</FormLabel>
                            <FormControl className="shadow" name="icon" onChange={e => handleChange(e)}/>
                        </FormGroup>

                        <Button className="h-100 align-self-center mt-4 shadow fw-bold" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}} size="sm">+</Button>
                    </div>
                    
                    <div className="d-flex">
                        <FormGroup className="my-3 me-2 p-1 w-100">
                            <FormLabel>Imagens do Produto</FormLabel>
                            <FormControl className="shadow" type="url" placeholder="coloque aqui o link da imagem do produto" name="image" onChange={e => handleChange(e)}/>
                        </FormGroup>

                        <Button className="h-100 align-self-center mt-4 shadow fw-bold" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}} size="sm">+</Button>
                    </div>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Politicas do Produto</FormLabel>
                        <div className="d-flex justify-content-between" >
                            <div className="mx-2 w-100">
                                <FormText>Regras da Casa</FormText>
                                <FormControl className="shadow" as="textarea" rows={7} name="rules" onChange={e => handleChange(e)}/>
                            </div>
                            <div className="mx-2 w-100">
                                <FormText>Saúde e Segurança</FormText>
                                <FormControl className="shadow" as="textarea" rows={7} name="healthAndSafety" onChange={e => handleChange(e)}/>
                            </div>
                            <div className="mx-2 w-100">
                                <FormText>Politicas de Cancelamento</FormText>
                                <FormControl className="shadow" as="textarea" rows={7} name="cancellationPolicy" onChange={e => handleChange(e)}/>
                            </div>
                        </div>
                    </FormGroup>
                    
                        <Button className="mt-5 fw-bold" type="submit" style={{backgroundColor: '#1DBEB4', border: '#1DBEB4'}}>Criar</Button>
                       
                </Form>
            </div>
        </>
    )
};

export default CriacaoProdutos;