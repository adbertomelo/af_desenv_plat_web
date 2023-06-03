import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header'

const Admin = () => {

    return (
        <>

            <Header></Header>

            <ul>
                <li key="1">
                    <Link to={'/user/list'}>Listar Usuários</Link>
                </li>
                <li key="2">
                    <Link to={'/user/create'}>Criar Usuário</Link>
                </li>
            </ul>

        </>
    )
}

export default Admin; 