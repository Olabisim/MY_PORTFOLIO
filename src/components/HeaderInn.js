import React from 'react'
import '../styles/header.css'
import '../styles/bg_anime.css'

export const HeaderInn = ({purpose}) => {
        return (
                <>
                
                        <header className="header header-inn">

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
                                                <span className="heading-primary--sub">{purpose}</span>
                                        </h1>
                                </div>
                        </header>
                        <br />
                        <br />
                        <br />
                        <br />
                </>

        )
}


