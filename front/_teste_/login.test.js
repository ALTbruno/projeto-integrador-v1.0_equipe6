import User from '../src/util/user.json';
import 'regenerator-runtime/runtime';
import request from 'supertest';
import App from '../src/App';
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native/build';
import '@testing-library/jest-native/extend-expect';
import {screen} from '@testing-library/dom';
import '@testing-library/jest-dom';


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
    it('Novo teste', () => {
        render(<App />);
        screen.findByRole('button',{name: 'Buscar'});
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