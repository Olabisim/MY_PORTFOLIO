import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Card.css';


const Certifications = () => {
        return (
                <div>
                        <Header />

                        <h2 className="heading-secondary center-head">
                                CERTIFICATIONS
                        </h2>
                        <div className='certify_main'>
                                <div className="certify_card">
                                        <img src="../../cert2.jpg" alt="second_cert" />
                                        <div className="certify_text">
                                        <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                                <div className="certify_card">

                                        <img src="../../cert1.jpg" alt="first_cert" />
                                        <div className="certify_text">
                                                <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                               
                        </div>
                        <div className='certify_main'>
                                <div className="certify_card">
                                        <img src="../../cert3.jpg" alt="second_cert" />
                                        <div className="certify_text">
                                        <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                                <div className="certify_card">

                                        <img src="../../cert4.jpg" alt="first_cert" />
                                        <div className="certify_text">
                                                <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                               
                        </div>

                        <Footer />
                </div>
        )
} 

export default Certifications;