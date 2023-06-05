import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ withHome = "true" }) => {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                {withHome == "true" ? <Link className="navbar-brand" to={'/home'}>Bolão10</Link> : <p style={{ color: "white", fontSize:"var(--bs-navbar-brand-font-size)"} }>Bolão10</p> }                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>

    );
};

export default Header;