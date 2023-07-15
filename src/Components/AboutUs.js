import React from 'react';
import '../Styles/AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer'
import pic from '../images/pic.png'


class AboutUs extends React.Component{
    
    render(){
        
        return(
            <div>
                <Navbar />
                <div class="our-team-title">
                    <h1 class="team-title">Our Team</h1>
                </div>
                <div class="row team-container">
                    <div class="column-team">
                        <div class="card-team">
                            <div class="img-container">
                                <img src={pic} alt="" />
                            </div>
                            <h3>Djelloul Daouadji Fadela</h3>
                            <p>Developer</p>
                            <div class="icons">
                                <a href="https://github.com/ddfadela">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:f.djellouldaouadji@esi-sba.dz">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                        </div>
                        <div class="column-team">
                        <div class="card-team">
                            <div class="img-container">
                                <img src={pic} alt="" />
                            </div>
                            <h3>Lahmar Mohammed</h3>
                            <p>Developer</p>
                            <div class="icons">
                                <a href="https://github.com/lahmarrahim">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:m.lahmar@esi-sba.dz">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                        </div>
                        <div class="column-team">
                        <div class="card-team">
                            <div class="img-container">
                                <img src={pic} alt="" />
                            </div>
                            <h3>Khaldi Miloud</h3>
                            <p>Supervisor</p>
                            <div class="icons">
                                <a href="https://github.com/">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="mailto:m.khaldi@esi-sba.dz">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                {/* <div class="about-section bg-dark">
                    <h1 class="title-container">About Us Page</h1>
                    <p style={{color: "white"}}>Some text about who we are and what we do.</p>
                </div>

                <h1 class="title-container" style={{
                                                textAlign:"center",
                                                margin:"30px"}}>Our Team</h1>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <img src={pic} alt="" style={{width:"100%"}}/>
                            <div class="container">
                                <h2>Lahmar Mohammed Abdrrahim</h2>
                                <p class="title">Computer science engineer</p>
                                <p>In this work he participated as a developer.</p>
                                <p>Email: <a id="email" href="mailto:m.lahmar@esi-sba.dz">m.lahmar@esi-sba.dz</a></p>
                                <a id="contact" href="mailto:m.lahmar@esi-sba.dz">
                                    <button id="button-to-contact">Contact</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src={pic} alt="" style={{width:"100%"}}/>
                            <div class="container">
                                <h2>Djelloul Daouadji Fadela</h2>
                                <p class="title">Computer science engineer</p>
                                <p>In this work she participated as a developer.</p>
                                <p>Email: <a id="email" href="mailto:f.djellouldaouadji@esi-sba.dz">f.djellouldaouadji@esi-sba.dz</a></p>
                                <a id="contact" href="mailto:f.djellouldaouadji@esi-sba.dz">
                                    <button id="button-to-contact">Contact</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src={pic} alt="" style={{width:"100%"}}/>
                            <div class="container">
                                <h2>Khaldi Miloud</h2>
                                <p class="title">Computer science doctor</p>
                                <p>In this work he participated as a supervisor.</p>
                                <p>Email: <a id="email" href="mailto:m.khaldi@esi-sba.dz">m.khaldi@esi-sba.dz</a></p>
                                <a id="contact" href="mailto:m.khaldi@esi-sba.dz">
                                    <button id="button-to-contact">Contact</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default AboutUs;