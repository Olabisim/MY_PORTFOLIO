import React from 'react'
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MainHome } from '../components/MainHome';



const Home = () => {
        return (
                <div>
                        <Header />
                        <Navigation />
                        <MainHome />
                        <Footer />
                </div>
        )
}


export default Home;
