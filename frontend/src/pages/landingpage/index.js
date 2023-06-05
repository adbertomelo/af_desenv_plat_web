import React from 'react'
import { Link } from 'react-router-dom';


const LandingPage = () => {

    return (
        <>

            <header class="topo-home">

                <div class="container">

                    <div class="row">

                        <div class="col">
                            <a href="/">
                                <img class="img-fluid logo-topo"
                                    style={{ maxWidth: "130px", maxHeight: "392px" }}
                                    src="../../../Bolao10ok.png" alt="Bolão10" />
                            </a>
                        </div>

                        <div class="col">

                            <p className="mt-3" style={{ color: "white" }}>Não tem conta?
                                <Link to="/user/create">Cadastre-se</Link> Ou Faça seu
                                <Link to="/login">Login</Link></p>


                        </div>
                    </div>


                </div>


            </header>

            <div>

                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../../body_home.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Crie seu bolão, convide seus amigos e divirta-se</h1>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../../../body_home.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Bolão com os principais campeonatos do Brasil</h1>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <footer class="footer-bg">

            </footer>


        </>
    )
}

export default LandingPage; 