import React from "react";
import './index.scss';

const LoginForm = () => {
    return (

        <>
            <div id="LoginForm">
                <div className="container">
                    <div className="title">Iniciar Sessão</div>
                    <form>
                        <div className="user-details">
                            <div className="input-box email">
                                <label for="inputEmail" className="details">Email</label>
                                <input type="email" id="Email" />
                            </div>

                            <div className="input-box password">
                                <label for="inputPassword" className="details">Senha</label>
                                <input type="password" id="Senha" />
                            </div>
                        </div>
                        <div className="btn" >
                            <a className="btn-submit" href="http://localhost:3000/">
                                <button type="submit" >Iniciar Sessão</button>
                            </a>

                            <p>Ainda não tem conta? <a href="http://localhost:3000/register">Registre-se</a></p>
                       
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;