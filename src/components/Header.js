import React from 'react'
import '../styles/header.css'
import '../styles/bg_anime.css'

const Header = () => {
        return (
                
        <header className="header">

                <div className="header__text-box">

                        <ul className="floatingBoxes">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>

                        <h1 className="heading-primary">
                                <span className="heading-primary--main">🎉olabisi</span>
                                <span className="heading-primary--sub">MERN STACK DEVELOPER</span>
                        </h1>

                        <a href="https://drive.google.com/file/d/1HxQueuO2jblTFxt-j2ZEJyoJE1JAUoJX/view?usp=sharing" target="_blank" rel="noreferrer" className="resume_button btn btn--animated ">DOWNLOAD MY RESUME</a>
                </div>
        </header>

        )
}


export default Header;
