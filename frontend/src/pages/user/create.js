import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { URL_API } from '../../api'


const Create = () => {

    const MSG_BUTTON = 'Confirmar';
    const [user, setUser] = useState({});
    const [msgError, setMsgError] = useState('');
    const [msgButton, setMsgButton] = useState(MSG_BUTTON);

    const navigate = useNavigate();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...user })
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        setMsgError('');
        setMsgButton('Aguarde...');

        fetch(`${URL_API}/user`, requestOptions)
            .then(response => {

                if (!response.ok) {
                    return Promise.reject(response.text());
                }
                // Analise a resposta como JSON e retorne os dados
                return response.json();
            })
            .then(data => {
                // Fa�a algo com os dados retornados
                //console.log(data);
                navigate("/");
            })
            .catch(error => {
                // Trate erros de solicita��o ou an�lise
                console.log(error);
                error.then(
                    msg => { setMsgError(msg) });
            }).finally(() => {
                setMsgButton(MSG_BUTTON);
            });

    }

    const handleChange = (e) => {
        let updatedValue = {};
        updatedValue = { [e.target.name]: e.target.value };
        setUser(user => (
            {
                ...user,
                ...updatedValue
            }));
    }

    return (

        <>

            <div className="container">
                <div className="login-container">
                    <h2 className="mb-4">Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="username" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="name" name="Name" value={user.name}
                                onChange={(e) => handleChange(e)} placeholder="Digite seu nome" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="text" class="form-control" id="email" name="Email" value={user.email}
                                onChange={(e) => handleChange(e)} placeholder="Digite seu email" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="password" name="Password" value={user.password}
                                onChange={(e) => handleChange(e)} placeholder="Digite sua senha" />

                        </div>

                        <span class="error-msg">{msgError}</span>
                        <button type="submit" class="btn btn-primary btn-block">{ msgButton }</button>
                        <Link to={'/'}>Voltar</Link>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Create;