import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header'

const Home = () => {



    return (
        <>

            <Header></Header>

            <div class="container">

                <div className="page-header">Home</div>

                <ul className="list-group">
                    <li className="list-group-item" key="1">
                        <Link to={'/admin'}>Ir para Gestão Administrativa</Link>
                    </li>
                </ul>

            </div>

        </>
        )
}

export default Home; 