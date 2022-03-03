import React from 'react'



const Header = () => {
        return (
                
        <header class="header">
                <div class="header__logo-box">
                        <img src="./img/hero-bg.png" alt="Natours Logo" class="header__logo" /> 
                </div>

                <div class="header__text-box">
                        <h1 class="heading-primary">
                                <span class="heading-primary--main">🎉OLABISI</span>
                                <span class="heading-primary--sub">MERN STACK DEVELOPER</span>
                        </h1>

                        <a href="#section-tours" class="btn btn--white btn--animated">DOWNLOAD RESUME</a>
                </div>
        </header>

        )
}


export default Header;
