import React from 'react';
import ResultByCategory from '../src/components/resultSearchByCategory/index'
import { render, screen, waitFor, fireEvent } from '../src/test-utils/testing-library-utils';
import { server } from '../src/mocks/server'

beforeAll(() => {
    server.listen()
})


describe('teste de integração na página de categorias', () => {
    it('criar um novo usuário', async () => {
        const { findByText } = render(<ResultByCategory />);
        expect(await findByText("Email")).toBeInTheDocument()

    })
})