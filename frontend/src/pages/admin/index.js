import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header'

const Admin = () => {

    return (
        <>

            <Header></Header>

            <div class="container">

                <div className="page-header">Gestão Administrativa</div>

                <ul className="list-group">
                    <li className="list-group-item" key="1">
                        <Link to={'/user/list'}>Listar Usuários</Link>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default Admin; 