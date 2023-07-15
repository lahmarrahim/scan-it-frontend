import React from 'react';
import '../Styles/Footer.css';


class Footer extends React.Component{
    
    render(){
        
        return(
            
            <div class="footer-light">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>ML Algorithms</h3>
                                <ul>
                                    <li><a href='/ScanWithDT'>Decision Tree</a></li>
                                    <li><a href='/ScanWithRF'>Random Forest</a></li>
                                    <li><a href='/ScanWithKNN'>K-Nearest Neighbors</a></li>
                                    <li><a href='/ScanWithXGB'>XGBoost</a></li>
                                    <li><a href='/ScanWithLR'>Logistic Regression</a></li>
                                    <li><a href='/ScanWithSVM'>Support Vector Machine</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="/AboutUs">Team</a></li>
                                    <li><a href="/Services">Services</a></li>
                                    <li><a href="/Dashboard">Dashboard</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>SCAN IT</h3>
                                <p>This work has been done by <b>Mr. Lahmar Mohammed Abdrrahim</b> and <b>Mrs. Djelloul Daouadji Fadela</b> and supervised by <b>Mr. Khaldi Miloud</b> to get an engineer diploma, if you want to contact them you can check the <a href="/AboutUs">About Us</a> page.</p>
                            </div>
                        </div>
                        <p class="copyright">Scan IT - Intrusion Detection System © 2023</p>
                    </div>
                </footer>
            </div>
        )

    }
}
export default Footer;