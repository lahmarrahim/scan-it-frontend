import React from 'react';
import '../Styles/Services.css';
import Navbar from './Navbar';
import Footer from './Footer'

class Services extends React.Component{
    
    render(){
        
        return(
            <div>
                <Navbar />
                <section class="service-container">
                    <div class="row r-title">
                        <h2 class="section-heading">Our Services</h2>
                    </div>
                    <div class="row r">
                        <div class="column col">
                            <div class="card service">
                                <div class="icon">
                                    <i class="fas fa-virus"></i>
                                </div>
                                <h3 class="service-title">Scan with DT</h3>
                                <p class="service-desc">
                                "Scan with DT" refers to a service that allows a user to scan their files to check
                                for the presence of potential security threats or attacks using the machine learning algorithm
                                called "Decision Tree".
                                </p>
                            </div>
                        </div>
                        <div class="column col">
                            <div class="card service">
                                <div class="icon">
                                    <i class="fas fa-virus"></i>
                                </div>
                                <h3 class="service-title">Scan with RF</h3>
                                <p class="service-desc">
                                "Scan with RF" refers to a service that allows a user to scan their files to check
                                for the presence of potential security threats or attacks using the machine learning algorithm
                                called "Random Forest".
                                </p>
                            </div>
                        </div>
                        <div class="column col">
                            <div class="card service">
                                <div class="icon">
                                    <i class="fas fa-virus"></i>
                                </div>
                                <h3 class="service-title">Scan with KNN</h3>
                                <p class="service-desc">
                                "Scan with KNN" refers to a service that allows a user to scan their files to check
                                for the presence of potential security threats or attacks using the machine learning algorithm
                                called "K-Nearest Neighbors".
                                </p>
                            </div>
                        </div>
                        <div class="column col">
                            <div class="card service">
                                <div class="icon">
                                    <i class="fas fa-virus"></i>
                                </div>
                                <h3 class="service-title">Scan with XGB</h3>
                                <p class="service-desc">
                                "Scan with XGB" refers to a service that allows a user to scan their files to check
                                for the presence of potential security threats or attacks using the machine learning algorithm
                                called "XGBoost".
                                </p>
                            </div>
                        </div>
                        <div class="column col">
                            <div class="card service">
                                <div class="icon">
                                    <i class="fas fa-virus"></i>
                                </div>
                                <h3 class="service-title">Scan with LR</h3>
                                <p class="service-desc">
                                "Scan with LR" refers to a service that allows a user to scan their files to check
                                for the presence of potential security threats or attacks using the machine learning algorithm
                                called "Logistic Regression".
                                </p>
                            </div>
                        </div>
                        <div class="column col">
                            <div class="card service">
                                <div class="icon">
                                    <i class="fas fa-virus"></i>
                                </div>
                                <h3 class="service-title">Scan with SVM</h3>
                                <p class="service-desc">
                                "Scan with SVM" refers to a service that allows a user to scan their files to check
                                for the presence of potential security threats or attacks using the machine learning algorithm
                                called "Support Vector Machine".
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                
            </div>
        )

    }
}

export default Services;