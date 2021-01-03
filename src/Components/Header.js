import React from 'react';

const Header = () => {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">

            {/* <h1 className="logo mr-auto"><a href="index.html">Arsha</a></h1> */}
            <a href="#" className="logo mr-auto">
                <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" className="img-fluid" />
            </a>

            <nav className="nav-menu d-none d-lg-block">
                <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                {/* <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li> */}
                <li><a href="#contact">Contact</a></li>

                </ul>
            </nav>

            <a href="#about" className="get-started-btn scrollto">Get Started</a>

            </div>
        </header>
    );
}

export default Header;