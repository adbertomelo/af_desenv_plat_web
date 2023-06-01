import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {

    const menu = () => {
        return <li key="1">
            <Link to={'/admin'}>Gestão Administrativa</Link>
        </li>
    }

    return (
        <div>
            <ul>
                {
                    menu()
                }

            </ul>
        </div>
        )
}

export default Home; 