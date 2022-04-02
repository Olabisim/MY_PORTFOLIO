import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Card.css'


const Certifications = () => {
        return (
                <div>
                        <Header />

                        <h2 className="heading-secondary center-head">
                                CERTIFICATIONS
                        </h2>
                        <div className='certify_main'>
                                <div className="certify_card">
                                        <img src="../../cert2.PNG" alt="second_cert" />
                                        <div className="certify_text">
                                        <h1>The never ending journey</h1>
                                        </div>
                                </div>
                                <div className="certify_card">
                                        <img src="../../cert1.PNG" alt="first_cert" />
                                        <div className="certify_text">
                                                <h1>Adventure is always needed</h1>
                                        </div>
                                </div>
                                <div className="certify_card">
                                        <img src="../../cert3.PNG" alt="third_cert" />
                                        <div className="certify_text">
                                                <h1>Explore the vast beauty of nature</h1>
                                        </div>
                                </div>
                        </div>

                        <Footer />
                </div>
        )
} 

export default Certifications;