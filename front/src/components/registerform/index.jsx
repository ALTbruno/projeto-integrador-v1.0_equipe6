import React from "react";
import { Link } from "react-router-dom";
import visible from '../../assets/icons/visible.svg'
import invisible from '../../assets/icons/invisible.svg'
import './index.scss';
import {RegisterPage} from '../../pages/Register/index'

const RegisterForm = () => {

    /** Função faz a troca da visibilidade da senha */
    const togleVisibilityPassword = () => {
        let input = document.getElementById('password');
        let visible = document.getElementById('visible');
        let invisible = document.getElementById('invisible');
        if (input.type === 'password') {
            input.type = 'text'
            visible.style.display = 'none'
            invisible.style.display = 'flex'
        }
        else {
            input.type = 'password'
            visible.style.display = 'flex'
            invisible.style.display = 'none'
        }
    }

    const verifyInputs = (e) => {
        e.preventDefault()
        let inputs = document.getElementsByTagName('input');
        // Verifica se todos os campos estão preenchidos
        for (let e of inputs) {
            if (e.value === '') {
                e.classList.add('error');
                e.focus();
                // Retorna mensagem de erro
                e.nextSibling.style.visibility = 'visible';
            } else {
                // Retira mensagem de erro
                e.nextSibling.style.visibility = 'hidden'
                e.classList.remove('error');
            }
        }
    }

    return (
        <>
            <div id="RegisterForm">
                <div className="container-form">
                    <h1 className="title">Criar conta</h1>
                    <form onSubmit={verifyInputs}>
                        <section className="nome-sobrenome">
                            <div className="input-box name">
                                <label htmlFor="inputName" >Nome</label>
                                <input type="text" id="Nome" />
                                <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                            </div>
                            <div className="input-box lastname">
                                <label htmlFor="inputLastName" >Sobrenome</label>
                                <input type="text" id="Sobrenome" />
                                <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                            </div>
                        </section>
                        <div className="input-box email" >
                            <label htmlFor="inputEmail" >Email</label>
                            <input type="email" id="Email" />
                            <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                        </div>
                        <div className="input-box password">
                            <label htmlFor="inputPassword" >Senha</label>
                            <input id="password" type="password" />
                            <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                            <a onClick={togleVisibilityPassword}>
                                <img id="visible" src={visible} alt="password-visible" />
                                <img id="invisible" src={invisible} alt="password-invisible" />
                            </a>
                        </div>
                        <div className="input-box checkpass">
                            <label htmlFor="inputCity" >Confirmar Senha</label>
                            <input type="password" id="ConfirmarSenha" />
                            <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                        </div>
                        <div className="btn">
                            <button type="submit" >Criar conta</button>
                            <p>Já tem uma conta? <Link to="/login">Iniciar sessão</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm