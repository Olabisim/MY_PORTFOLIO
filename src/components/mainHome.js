import React from "react";
import { Link } from 'react-router-dom'
import '../styles/main.css';


export const MainHome = () => {
        return (
                
                
        <main>
                <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                        Passionate Software DEVELOPER
                </h2>
                </div>

                <div className="row">
                <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">who am i?</h3>
                        <p className="paragraph">I am a driven software engineer with a passion for programming and solving difficult problems.

                        Technology is something with which I've always felt a deep connection. I have high aspirations and am constantly striving to outdo myself with every challenge I undertake.
                        </p>
                        
                
                        <h3 className="heading-tertiary u-margin-bottom-small">i'm A Fresh Computer Science Graduate</h3>
                        <p className="paragraph">My goal is to join a team that is truly passionate about what they create and are proud to make the world a better place.</p>

                        <a href="/certify" className="btn-text">
                        
                                check certifications &rarr;
                        
                        </a>
                </div>
                <div className="col-1-of-2">
                        <div className="composition">
                        {/*

                        <img srcset="./img/nat-1.jpg 300w, ./img/nat-1-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo_1"
                        className="composition__photo composition__photo--p1" src="./img/nat-1-large.jpg" />

                        <img srcset="./img/nat-2.jpg 300w, ./img/nat-2-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo_2"
                        className="composition__photo composition__photo--p2" src="./img/nat-2-large.jpg" />

                        <img srcset="./img/nat-3.jpg 300w, ./img/nat-3-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo_3"
                        className="composition__photo composition__photo--p3" src="./img/nat-3-large.jpg" />

                        */}
                        </div>
                </div>
                </div>
                </section>
                <section className="section-features">

                <div className="row">
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-earth u-margin-bottom-small">
                        </span>
                        

                        <h3 className="heading-tertiary u-margin-bottom-small">mongodb</h3>
                        <p className="feature-box__text">
                                I have a year plus experience with mongodb and mongoose. This is my major database
                        </p>
                        </div>
                </div>
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-leaf">
                        </span>
                        <h3 className="heading-tertiary u-margin-bottom-small">express</h3>
                        <p className="feature-box__text">
                        I have a year plus experience with express. This is my major something
                        </p>
                        </div>
                </div>
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-map"></span>
                        <h3 className="heading-tertiary u-margin-bottom-small">react</h3>
                        <p className="feature-box__text">
                        I have two years plus experience with react and react-native. I also gained vast familiarity with redux-toolkit and develop desktop applications with react-native.
                        </p>
                        </div>
                </div>
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-heart-pulse">


                        </span>
                        <h3 className="heading-tertiary u-margin-bottom-small">node</h3>
                        <p className="feature-box__text">
                        I have two year plus experience with nodejs. Due to my lack of consistency, i am only proeficient in authentication, API endpoints, scraping & CRUD implementation.
                        </p>
                        </div>
                </div>
                </div>
                </section>

                <section id="section-tours" className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                        A Gallery of recent projects i've built
                </h2>
                </div>

                <div className="row">
                <div className="col-1-of-3 ">
                        <div className="card">
                        <div className="card__side card__side--front">
                        <div className="card__picture card__picture-1">
                        &nbsp;
                        </div>
                        <h4 className="card__heading">
                        <span className="card__heading-span--1">
                                youtube <br />clone
                        </span>
                        </h4>
                        <div className="card__details">
                        <ul>
                                <li>react-native</li>
                                <li>redux</li>
                                <li>react-navigation</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty: normal</li>
                        </ul>

                        </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                        <div className="card__price-box">
                                {/*
                                <p className="card__price-only">Only</p>
                                */}
                                <p className="card__price-value">...</p>
                        </div>
                        <a href="https://github.com/Olabisim/youtube_clone" target='_blank' rel="noreferrer" className="btn btn--white">view github</a>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="col-1-of-3 ">
                        <div className="card">
                        <div className="card__side card__side--front">
                        <div className="card__picture card__picture-2">
                        &nbsp;
                        </div>
                        <h4 className="card__heading">
                        <span className="card__heading-span--2">
                                ECOMMERCE <br /> APP
                        </span>
                        </h4>
                        <div className="card__details">
                        <ul>
                                <li>MONGODB</li>
                                <li>EXPRESS</li>
                                <li>REACT</li>
                                <li>NODE</li>
                                <li>Difficulty: medium</li>
                        </ul>
                        </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                        <div className="card__price-box">
                                {/*
                                <p className="card__price-only">Only</p>
                                */}
                                <p className="card__price-value">...</p>
                        </div>
                        <a href="https://olabecommerceapp.herokuapp.com/" target='_blank' rel="noreferrer"  className="btn btn--white">View now!</a>
                        </div>
                        </div>
                        </div>
                </div>


                <div className="col-1-of-3 ">
                        <div className="card">
                        <div className="card__side card__side--front">
                        <div className="card__picture card__picture-3">
                        &nbsp;
                        </div>
                        <h4 className="card__heading">
                        <span className="card__heading-span--3">
                                COVID <br /> 19
                        </span>
                        </h4>
                        <div className="card__details">
                        <ul>
                                <li>NODE</li>
                                <li>EXPRESS</li>
                                <li>SCSS</li>
                                <li>LESS</li>
                                <li>Difficulty: hard</li>
                        </ul>
                        </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                        <div className="card__cta">
                        <div className="card__price-box">
                                {
                                /*
                                <p className="card__price-only">Only</p>
                                */
                                }
                                <p className="card__price-value">...</p>
                        </div>
                        <a href="https://guarded-tundra-34082.herokuapp.com/" target='_blank' rel="noreferrer" className="btn btn--white">View now!</a>
                        </div>
                        </div>
                        </div>
                </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                <a href="#btn" className="btn btn--green">All other works</a>
                </div>
                </section>


                <section className="section-stories">
                <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                        <source src="./img/video.mp4" type="video/mp4" />
                        <source src="./img/video.webm" type="video/webm" />
                        Your browser is not supported!
                </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                        I make people genuienly happy
                </h2>
                </div>

                <div className="row">
                <div className="story">
                        <figure className="story__shape">
                        <img src="./img/nat-8.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, consequuntur impedit ipsam, magni
                        nostrum voluptas corporis repellendus reprehenderit vel iure totam? Nisi velit blanditiis corrupti nulla
                        quisquam, fugit voluptatibus. Voluptas corporis repellendus reprehenderit vel iure totam.</p>
                        </div>
                </div>
                </div>

                <div className="row">
                <div className="story">
                        <figure className="story__shape">
                        <img src="./img/nat-9.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Wow! What an experience!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, consequuntur impedit ipsam,
                        magni
                        nostrum voluptas corporis repellendus reprehenderit vel iure totam? Nisi velit blanditiis corrupti
                        nulla
                        quisquam, fugit voluptatibus. Voluptas corporis repellendus reprehenderit vel iure totam.</p>
                        </div>
                </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                <a href="#btn-te" className="btn-text">Read all stories &rarr;</a>
                </div>
                </section>

                <section className="section-booking">
                <div className="row">
                <div className="booking">
                        <div className="booking__form">
                        <form action="#" className="form">
                        <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                                WORK?
                        </h2>
                        </div>
                        <div className="form__group">
                        <input type="text" className="form__input" placeholder="Full name" id="name" required />
                        <label htmlFor="name" className="form__label">Full name</label>
                        </div>

                        <div className="form__group">
                        <input type="email" className="form__input" placeholder="Email address" id="email" required />
                        <label htmlFor="email" className="form__label">Email address</label>
                        </div>

                        <div className="form__group u-margin-bottom-medium">
                        <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="small" name="size" />
                                <label htmlFor="small" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Single project
                                </label>
                        </div>

                        <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="large" name="size" />
                                <label htmlFor="large" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Join a team
                                </label>
                        </div>
                        </div>
                        <div className="form__group">
                        <button className="btn btn--green">Next step &rarr;</button>
                        </div>
                        </form>
                        </div>
                </div>
                </div>
                </section>
        </main>

        )
}
