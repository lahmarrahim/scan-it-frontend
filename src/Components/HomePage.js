import React from 'react';
import '../Styles/HomePage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import archi from '../images/archi-no-background.png'

class HomePage extends React.Component{
    
    render(){
        
        return(
            <div>
                <Navbar />
                <div class="container home-container">
                    <div class="row">
                        <div class="col-7 home-page-first-col">
                            <h1 id="welcome-title">Welcome to our website</h1>
                            <h3 id="second-welcome-title">Here you can scan your files</h3>
                            <p id="home-page-desc">The security of networks and devices is crucial for healthcare organizations and IoMT systems and that is our goal</p>

                            <a href='/ScanWithDT'>
                                <button id="button-to-start">SCAN YOUR FILES</button>
                            </a>

                        </div>

                        <div class="col-4 home-page-second-col">
                            <img id="archi-home-page" src={archi} alt=""/>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        )

    }
}

export default HomePage;