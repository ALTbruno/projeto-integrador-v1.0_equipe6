import React from "react";
import './index.scss';

const RegisterForm = () => {
    return (
        <>
            <div id="RegisterForm">
                <div className="container">
                    <div className="title">Criar conta</div>
                    <form>
                        <div className="user-details">
                            <div className="input-box name">
                                <label for="inputName" className="details">Nome</label>
                                <input type="text" id="Nome" />
                            </div>
                            <div className="input-box lastname">
                                <label for="inputLastName" className="details">Sobrenome</label>
                                <input type="text" id="Sobrenome" />
                            </div>
                            <div className="input-box email" >
                                <label for="inputEmail" className="details">Email</label>
                                <input type="email" id="Email" />
                            </div>
                            <div className="input-box password">
                                <label for="inputPassword" className="details">Senha</label>
                                <input type="password" id="Senha" />
                            </div>
                            <div className="input-box checkpass">
                                <label for="inputCity" className="details">Confirmar Senha</label>
                                <input type="password" id="ConfirmarSenha" />
                            </div>
                        </div>
                        <div className="btn">
                            <a className="btn-submit" href="/">
                                <button type="submit" >Criar conta</button>
                            </a>
                            <p>Já tem uma conta? <a href="http://localhost:3000/login">Iniciar sessão</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm