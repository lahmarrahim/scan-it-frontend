import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/HomePage.css';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '../images/logo-no-background.png'

class HomePage extends React.Component{
    
    render(){
        
        return(
            <div>
                <Navbar />
                <div class="home-container bg-dark">
                    <img id="logo-home-page" src={logo} />
                    <h1 id="welcome-title">Welcome to our website</h1>
                    <h3 id="second-welcome-title">Here you can scan your files</h3>

                    <a href='/ScanWithDT'>
                        <button id="button-to-start">Scan your files</button>
                    </a>
                    {/* <button onClick="">Scan your files</button> */}


                </div>
                <Footer />
            </div>
        )

    }
}

export default HomePage;