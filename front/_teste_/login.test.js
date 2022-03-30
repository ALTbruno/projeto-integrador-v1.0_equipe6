import User from '../src/util/user.json';
import 'regenerator-runtime/runtime';
import request from 'supertest';
import App from '../src/App.jsx';
import React, { Component } from 'react'
import {render, screen} from '../src/test-utils/testing-library-utils';
import {CardCategory} from '../src/pages/Home/components/cardCategory';



jest.setTimeout(30000);

describe("Iniciar sessão", () => {

    it("verificação de id", () => {
        const user = ({
            "id": 1,
            "name": "david",
            "sobrenome": "silva",
            "email": "david@email.com",
            "senha": "123456"
        });
        expect(user).toHaveProperty("id");
        console.log(user);
        console.log(User);
    })
    it("verificação do nome, JSON", () => {
        expect(User).toHaveProperty('nome');
    });
    it('Novo teste', async () => {
        render(<App />);
        
        const findEmail = await screen.getByPlaceholderText('senha')
        expect(findEmail).toEqual('senha')
    })
    /*     it('Teste de rotas com supertest', async () => {
            const response = await request(App).get("/login")
            .send({
                email: "email@gmail.com",
                senha: "123456"
            });
            console.log(response.status);
    }) */

});