import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL_API } from '../../api';

const Login = () => {

    const [user, setUser] = useState({ "Email": "", "Password": "" });
    const [msgError, setMsgError] = useState('');
    const [msgButton, setMsgButton] = useState('Entrar');

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(user);
        let updatedValue = {};
        updatedValue = { [e.target.name]: e.target.value };
        setUser(user => (
            {
                ...user,
                ...updatedValue
            }));
    }


    const handleSubmit = (e) => {


        e.preventDefault();

        setMsgError('');

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...user })
        };

        setMsgButton("Aguarde...");

        fetch(`${URL_API}/account/login`, requestOptions)
            .then(response => {

                if (!response.ok) {
                    setMsgError("Usuário ou senha inválidos");
                    throw "";
                }
                // Analise a resposta como JSON e retorne os dados
                return response.json();
            })
            .then(data => {
                // Faça algo com os dados retornados
                navigate("/home");
            })
            .catch(error => {
                // Trate erros de solicitação ou análise
                console.error(error);
            })
            .finally(() => { setMsgButton("Entrar") });


    };

    return (
        <>
            <div>
                <div className="login-container">
                    <h2 className="mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="username" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" name="Email" value={user.Email} onChange={(e) => handleChange(e)} placeholder="Digite seu email" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" name="Password" value={user.password}
                                onChange={(e) => handleChange(e)} placeholder="Digite sua senha" />

                        </div>
                        <span>{msgError}</span>
                        <button type="submit" className="btn btn-primary btn-block">{msgButton}</button>
                    </form>
                    <div className="signup-link">
                        <p className="mt-3">Não tem conta? <Link to="user/create">Cadastre-se</Link></p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Login;