import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/header'

const Home = () => {

    const menu = () => {
        return <li key="1">
            <Link to={'/admin'}>Gestão Administrativa</Link>
        </li>
    }

    return (
        <div className="container">

            <Header></Header>

            <ul>
                {
                    menu()
                }

            </ul>
        </div>
        )
}

export default Home; 