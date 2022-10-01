import React from 'react';
import Footer from '../components/Footer';
import '../styles/Card.css';
import Navigation from '../components/Navigation';
import { HeaderInn } from '../components/HeaderInn';


const Certifications = () => {
        return (
                <div>
                        <HeaderInn purpose="certifications" />
                        <Navigation />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='certify_main responsive_flex'>
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
                        
                        <br />
                        <br />
                        <br />
                        <br />

                        <Footer />
                </div>
        )
} 

export default Certifications;

// <div className='certify_main'>
// <div className="certify_card">
//         <img src="../../cert2.jpg" alt="second_cert" />
//         <div className="certify_text">
//         <h1>DEVELOPER</h1>
//         </div>
// </div>
// <div className="certify_card">

//         <img src="../../cert1.jpg" alt="first_cert" />
//         <div className="certify_text">
//                 <h1>DEVELOPER</h1>
//         </div>
// </div>

// </div>

// <div className='certify_main'>
// <div className="certify_card">
//         <img src="../../cert3.jpg" alt="second_cert" />
//         <div className="certify_text">
//         <h1>DEVELOPER</h1>
//         </div>
// </div>
// <div className="certify_card">

//         <img src="../../cert4.jpg" alt="first_cert" />
//         <div className="certify_text">
//                 <h1>DEVELOPER</h1>
//         </div>
// </div>

// </div>