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
        <>

            <Header></Header>

            <ul>
                {
                    menu()
                }

            </ul>
        </>
        )
}

export default Home; 