import React from 'react'
import '../styles/header.css'


const Header = () => {
        return (
                
        <header className="header">

                <div className="header__text-box">
                        <h1 className="heading-primary">
                                <span className="heading-primary--main">🎉OLABISI</span>
                                <span className="heading-primary--sub">MERN STACK DEVELOPER</span>
                        </h1>

                        <a href="#section-tours" className="btn btn--white btn--animated">DOWNLOAD RESUME</a>
                </div>
        </header>

        )
}


export default Header;
