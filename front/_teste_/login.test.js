import 'regenerator-runtime/runtime';
import { render, screen, waitFor, fireEvent } from '../src/test-utils/testing-library-utils';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Auth } from '../src/context/context';
import LoginPage from '../src/pages/Login/index';
import { BrowserRouter } from 'react-router-dom';
import user from '@testing-library/user-event';



describe('Teste login', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<BrowserRouter><LoginPage onSubmit={onSubmit} /></BrowserRouter>, { wrapper: Auth });

    })
    test('pagina de login', async () => {
/*         render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>, { wrapper: Auth }); */
        const inputEmail = screen.getByLabelText('Email', { selector: 'input' })
        const inputSenha = screen.getByLabelText('Senha', { selector: 'input' })
        const button = screen.getByRole('button', { name: 'Entrar' })

        /*     fireEvent.change(inputNode1, { 'target': { 'value': 'email@gmail.com' } })
            fireEvent.change(inputNode2, { 'target': { 'value': '123456' } })
            fireEvent.click(inputNode3); */
        user.type(inputEmail, 'email@gmail.com')
        user.type(inputSenha, '123456')
        user.click(button);

         waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith({
                email: 'email22@gmail.com',
                senha: 123456
            });
        })

    })

})


