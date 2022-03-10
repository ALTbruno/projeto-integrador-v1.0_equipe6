import { useState } from "react";
import { Link } from "react-router-dom";
import user from '../../util/user.json';
import visible from '../../assets/icons/visible.svg';
import invisible from '../../assets/icons/invisible.svg';
import './index.scss';

const LoginForm = () => {
    const [login, setLogin] = useState({
        email: '',
        senha: ''
    })

    /** Salva os dados fornecidos pelo usuario */
    const fillLogin = (event) => {
        let { name, value } = event.target
        setLogin({ ...login, [name]: value })
    }

    /** Faz a verificação dos campos preenchidos pelo usuario*/
    const verifyInputs = () => {
        let inputs = document.getElementsByTagName('input');
        let password = inputs[1]
        // Verifica se todos os campos estão preenchidos
        for (let e of inputs) {
            if (e.value === '') {
                e.classList.add('error');
                e.focus();
                // Retorna mensagem de erro
                e.nextSibling.style.visibility = 'visible'
            } else {
                // Retira mensagem de erro
                console.log("removeu")
                e.classList.remove('error');
                e.nextSibling.style.visibility = 'hidden'
                return true;
            }
        }
        // Verifica o tamanho da senha
        if (password.value.length < 6) {
            alert('Por favor, tente novamente, suas credenciais são inválidas')
            password.focus();
        }
    }

    /** Ofetua o login do usuario e o redireciona para a home */
    const loginUser = (e) => {
        e.preventDefault()
        let { email, senha } = login;
        if (verifyInputs()) {
            if (email === user.email && senha === user.senha.toString()) {
                localStorage.setItem('user', JSON.stringify(user));
                location.href = '/'
            } else {
                alert("Por favor, tente novamente, suas credenciais são inválidas")
            }
        }
    }

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





    return (
        <>
            <div id="LoginForm">
                <div className="container-loginForm">
                    <h1 className="title">Iniciar Sessão</h1>
                    <form onSubmit={loginUser}>
                        <div className="user-details">
                            <div className="input-box email">
                                <label htmlFor="inputEmail" >Email</label>
                                <input onChange={fillLogin} name="email" type="email" id="email" />
                                <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                            </div>

                            <div className="input-box password">
                                <label htmlFor="inputPassword" >Senha</label>
                                <input id="password" onChange={fillLogin} name="senha" type="password"  />
                                <span className="error-message d-flex justify-content-end">Este campo é obrigatorio</span>
                                <a onClick={togleVisibilityPassword}>
                                    <img id="visible" src={visible} alt="password-visible" />
                                    <img id="invisible" src={invisible} alt="password-invisible" />
                                </a>
                            </div>
                        </div>
                        <div className="button" >
                            <button type="submit" >Entrar</button>
                        </div>
                    </form>
                    <p>Ainda não tem conta? <Link to='/register'>Registre-se</Link></p>
                </div>
            </div>
        </>
    )
}

export default LoginForm;