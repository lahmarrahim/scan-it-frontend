import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Services.css';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import logo from '../images/logo-no-background.png'


class OurWork extends React.Component{
    
    render(){
        
        return(
            <div>
                <Navbar />
                <div class="work-container">
                    <div class="desc bg-dark">
                        <img id="logo" src={logo} />
                        <p id="first-desc">In this page, we will describe our work.
                        <br/>
                        Firstly, this work was carried out for 2 datasets and 7 machine learning algorithms,
                        <br/>
                        one of them was eliminated during the study.</p>
                        <br/>
                        <p class="tools">The two datasets are : <b>NSL-KDD</b> and <b>UNSW-NB15</b>.</p>
                        <p class="tools">The machine learning algorithms used for this study are :
                        <b> Decision Tree</b>, <b>Random Forest</b>, <b>K-Nearest Neighbor</b>, <b>XGBoost</b>, <b>Logistic Regression</b>, <b>Support Vector Machine</b>.</p>
                    </div>

                    <div class="tools bg-light">
                        {/* <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-6">
                                    The two datasets are :
                                    <ul>
                                        <li>NSL-KDD dataset</li>
                                        <li>UNSW-NB15</li>
                                    </ul>

                                </div>


                            </div>

                        </div> */}
                    </div>


            

                </div>
                
            </div>
        )

    }
}

export default OurWork;