import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL_API } from '../../api';
import Header from '../../components/header'

const Edit = () => {


    const [user, setUser] = useState({});
    const [msgError, setMsgError] = useState('');

    const { id } = useParams();

    useEffect(() => {

        setMsgError('');

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`${URL_API}/user/${id}`, requestOptions)
            .then(response => {

                if (!response.ok) {
                    return Promise.reject(response.text());
                }
                return response.json();
            })
            .then(data => {
                setUser(data);
            })
            .catch(error => {

                error.then(
                    msg => { setMsgError(msg) });
            });

    }, []);

    const handleChange = (e) => {
        let updatedValue = {};
        updatedValue = { [e.target.name]: e.target.value };
        setUser(user => (
            {
                ...user,
                ...updatedValue
            }));
    }



    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        setMsgError('');

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...user })
        };

        fetch(`${URL_API}/user`, requestOptions)
            .then(response => {

                if (!response.ok) {
                    return Promise.reject(response.text());
                }
                // Analise a resposta como JSON e retorne os dados
                //return response.json();
            })
            .then(data => {
                // Faça algo com os dados retornados
                //console.log(data);
                navigate("/user/list");
            })
            .catch(error => {
                // Trate erros de solicitação ou análise
                console.log(error);
                error.then(
                    msg => { setMsgError(msg) });
            });


    };

    return (
        <>
            <Header></Header>

            <div class="container">

                <div className="page-header">Alteração de Usuário</div>

                
                    
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="username" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="name" name="name" defaultValue={user.name}
                                onChange={(e) => handleChange(e)} placeholder="Digite seu nome" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="text" class="form-control" id="email" name="email" defaultValue={user.email}
                                onChange={(e) => handleChange(e)} placeholder="Digite seu email" />
                        </div>

                        <span class="error-msg">{msgError}</span>

                        <div>
                            <button type="submit" style={{ width: "30%" }} className="btn btn-primary btn-block">Confirmar</button>
                            <Link style={{ paddingLeft: "15px" }} to={'/user/list'}>Voltar</Link>
                        </div>
                        

                    </form>

                
            </div>

        </>
    );

};

export default Edit;