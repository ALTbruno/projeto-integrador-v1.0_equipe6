import React from "react";
import { createElement } from "react";
import { Button } from "react-bootstrap";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

const CriacaoProdutos = () => {

    const addCheckBox = () => {
        const checkBoxSpace = document.getElementById('checkBoxSpace')
        const formCheck = document.createElement('Form.Check')
        formCheck = document.createAttribute(type, 'checkBox')
    }

    return (
        <>
            <div className="p-3 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                    <h2 className="ms-5 my-0 fw-bold text-light">Administração de Produtos</h2>
                <div className="ms-auto me-5 text-light">
                    <a href="/">voltar</a>
                </div>
            </div>

            <h6>Criar Produto</h6>
            <Form>
                <FormGroup>
                    <FormLabel>Nome do Produto</FormLabel>
                    <FormControl type="text" placeholder="Digite o Nome do Produto"/>

                    <FormLabel>Categoria do Produto</FormLabel>
                    <Form.Select>
                        <option>selecione uma categoria</option>
                    </Form.Select>

                    <FormLabel>Descrição do Produto</FormLabel>
                    <FormControl type="text" placeholder="Digite a Descrição do Produto"/>

                    <FormLabel>Endereço</FormLabel>
                    <FormControl type="text" placeholder="Digite o Endereço"/>

                    <FormLabel>Latitude e Longitude</FormLabel>
                    <FormControl type="text" placeholder="Digite a Latitude"/>
                    <FormControl type="text" placeholder="Digite a Longitude"/>
                
                    <Form.Check type="checkbox" label={
                        <Form.Select>
                        <option>selecione um atributo</option>
                        </Form.Select>
                    } />
                    <div id="CheckBoxSpace"></div>
                    <Button onClick={addCheckBox}>add Atributo</Button>

                </FormGroup>    
            </Form>
        </>
    )
};

export default CriacaoProdutos;