import RegisterPage from '../src/pages/Register/index';
import 'regenerator-runtime/runtime';
import { render, screen, waitFor, fireEvent } from '../src/test-utils/testing-library-utils';
import React from 'react';
import user from '@testing-library/user-event';

describe("Teste na Pagina de registro", () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<RegisterPage onSubmit={onSubmit} />);

    })
    test('clicar em inputs e botões', () => {
        const inputName = screen.getByLabelText('Nome', { selector: 'input' })
        const inputSobrenome = screen.getByLabelText('Sobrenome', { selector: 'input' })
        const inputEmail = screen.getByLabelText('Email', { selector: 'input' })
        const inputSenha = screen.getByLabelText('Senha', { selector: 'input' })
        const inputConfirmarSenha = screen.getByLabelText('Confirmar Senha', { selector: 'input' })
        const button = screen.getByRole('button', { name: 'Criar conta' })

        /*         fireEvent.change(inputName, { 'target': { 'value': 'carlos' } })
                fireEvent.change(inputSobrenome, { 'target': { 'value': 'silva' } })
                fireEvent.change(inputEmail, { 'target': { 'value': 'carlos@hotmail.com' } })
                fireEvent.change(inputSenha, { 'target': { 'value': '123456' } })
                fireEvent.change(inputConfirmarSenha, { 'target': { 'value': '123456' } })
        
                fireEvent.click(button); */
        user.type(inputName, 'carlos');
        user.type(inputSobrenome, 'silva');
        user.type(inputEmail, 'carlos@hotmail.com')
        user.type(inputSenha, '123456')
        user.type(inputConfirmarSenha, '123456');
        user.click(button);

         waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith({
                nome: 'carlos',
                sobrenome: 'silva',
                email: 'carlos@hotmail.com',
                senha: 123456,
                confirm: 123456
            });
        })

    })
})
