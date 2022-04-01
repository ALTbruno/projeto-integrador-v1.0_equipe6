import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { render, screen, waitFor } from '../src/test-utils/testing-library-utils';
import RegisterPage from '../src/pages/Register/index'


describe("Iniciar sessão", () => {
    test('server test Error',() => {
        /*         server.resetHandlers(
                    rest.get('http://localhost:3000/', (req, res, ctx)=>{
                        res(ctx.status(500))
                    })
                ) */
        render(<RegisterPage />);
/*         await waitFor (async () => {
            const alerts = await screen.findAllByRole('button', { name: "Criar conta" })
            expect(alerts).toHaveLength(1);
        }); */
    })

});