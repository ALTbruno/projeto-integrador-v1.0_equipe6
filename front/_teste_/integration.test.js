import React from 'react';
import LoginForm from '../src/components/loginForm/index';
import { render, screen, waitFor, fireEvent } from '../src/test-utils/testing-library-utils';
import {Auth} from '../src/context/context'
import { BrowserRouter } from 'react-router-dom';

describe('teste de integração a pagina de registro', () => {
    it('criar um novo usuário',  async () => {
        const {findByText} = render(<BrowserRouter><LoginForm /></BrowserRouter>, { wrapper: Auth });
        expect(await findByText("Email")).toBeInTheDocument()
        
    })
})