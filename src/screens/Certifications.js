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
                                        <div className="certify_text">
                                        <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                                <div className="certify_card">
                                        <div className="certify_text">
                                                <h1>DEVELOPER</h1>
                                        </div>
                                </div>
                                <div className="certify_card">
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