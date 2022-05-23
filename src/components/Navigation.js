import React from 'react'
import '../styles/navigation.css'


const Navigation = () => {
        return (
               
                <div className="navigation">

                        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                        <label htmlFor="navi-toggle" className="navigation__button"><span className="navigation__icon">&nbsp;</span></label>
                
                        <div className="navigation__background">&nbsp;</div>
                
                        <nav className="navigation__nav">
                                <ul className="navigation__list">
                                        <li className="navigation__item"><a href="https://stackoverflow.com/users/17935964/holabisii" target="_blank" rel="noreferrer" className="navigation__link"><span>01</span>ABOUT ME</a></li>
                                        <li className="navigation__item"><a href="https://github.com/Olabisim" target="_blank" rel="noreferrer" className="navigation__link"><span>02</span>GITHUB</a></li>
                                        <li className="navigation__item"><a href="https://github.com/Olabisim" target="_blank" rel="noreferrer" className="navigation__link"><span>03</span>LINKEDLN</a></li>
                                        <li className="navigation__item"><a href="https://stackoverflow.com/users/17935964/holabisii" target="_blank" rel="noreferrer" className="navigation__link"><span>04</span>STACK OVERFLOW</a></li>
                                </ul>
                        </nav>

                </div>
                
        )
}


export default Navigation;
