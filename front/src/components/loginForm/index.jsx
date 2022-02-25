import { useState } from "react";
import user from '../../util/user.json';
import './index.scss';

const LoginForm = () => {

    const [login, setLogin] = useState({
        email: '',
        senha: ''
    })

    const fillLogin = (event) => {
        let { name, value } = event.target
        setLogin({ ...login, [name]: value })
    }

    const verifyPassword = () => {
        if (!login.senha > 6) {
            return true;
        } else {
            return false;
        }
    }

    const loginUser = (e) => {
        e.preventDefault()
        let { email, senha } = login;
        if (verifyPassword) {
            if (email === user.email && senha === user.senha.toString()) {
                localStorage.setItem('user', JSON.stringify(user));
                location.replace('/')
            } else {
                alert("Por favor, tente novamente, suas credenciais são inválidas")
            }
        } else {
            console.log("senha invalida")
        }
    }





    return (
        <>
            <div id="LoginForm">
                <div className="container-loginForm">
                    <div className="title">Iniciar Sessão</div>
                    <form onSubmit={loginUser}>
                        <div className="user-details">
                            <div className="input-box email">
                                <label htmlFor="inputEmail" >Email</label>
                                <input onChange={fillLogin} name="email" type="email" id="Email" />
                            </div>

                            <div className="input-box password">
                                <label htmlFor="inputPassword" >Senha</label>
                                <input onChange={fillLogin} name="senha" type="password" id="Senha" />
                            </div>
                        </div>
                        <div className="button" >
                            <button type="submit" >Entrar</button>
                        </div>
                    </form>
                            <p>Ainda não tem conta? <a href="/register">Registre-se</a></p>
                </div>
            </div>
        </>
    )
}

export default LoginForm;