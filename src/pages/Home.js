import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import Footer from './Footer'
import Front from './Front'
import Services from './Services'
import Testomonial from './Testomonial'
import Contact from './Contact'


function Home() {
    return (
        <>
            <Navbar />
            <Front />
            <Services />
            <Contact/>
            <Testomonial />
            <About />
            
            <Footer />
        </>
    )
}

export default Home