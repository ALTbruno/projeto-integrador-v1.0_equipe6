import 'regenerator-runtime/runtime';
import { render, screen, waitFor, fireEvent } from '../src/test-utils/testing-library-utils';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Auth } from '../src/context/context';
import LoginForm from '../src/components/loginForm/index';
import { BrowserRouter } from 'react-router-dom';
import user from '@testing-library/user-event';


const onSubmit = jest.fn();

beforeEach(() => {
    onSubmit.mockClear();
    render(<BrowserRouter><LoginForm onSubmit={onSubmit} /></BrowserRouter>, { wrapper: Auth });

})
describe('Teste login', () => {
    test('pagina de login', () => {
        const inputEmail = screen.getByLabelText('Email', { selector: 'input' })
        const inputSenha = screen.getByLabelText('Senha', { selector: 'input' })
        const button = screen.getByRole('button', { name: 'Entrar' })
        user.type(inputEmail, 'email@gmail.com')
        user.type(inputSenha, '123456')
        user.click(button);


        expect(onSubmit).toHaveBeenCalledWith({
            "email": "email@gmail.com", 
            "password": 123456
        });
        expect(onSubmit).toHaveBeenCalledTimes(1)
    })

})


