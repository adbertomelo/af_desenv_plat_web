import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { URL_API } from '../../api';
import Header from '../../components/header'

const Delete = () => {


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

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        setMsgError('');

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`${URL_API}/user/${id}`, requestOptions)
            .then(response => {

                if (!response.ok) {
                    return Promise.reject(response.text());
                }
                // Analise a resposta como JSON e retorne os dados
                navigate("/admin");
            })
            .catch(error => {
                // Trate erros de solicitação ou análise

                error.then(
                    msg => { setMsgError(msg) });
            });


    };

    return (

        <>
            <Header></Header>

            <div class="container">

                <div className="page-header">Confirmação da exclusão</div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <span style={{ paddingRight: "15px", color:"red" } }>Confirma a exclusão do usuário {user.name}?</span>
                        <button className="btn btn-danger" type="submit">Confirmar</button>
                        <Link style={{ paddingLeft:"15px"}} to={'/user/list'}>Voltar</Link>
                    </div>

                    <span>{msgError}</span>
                </form>
            </div>
        </>
    );

};

export default Delete;