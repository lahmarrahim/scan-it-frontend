import React from 'react';
import '../Styles/Navbar.css';
import logo from '../images/icon.png'

class Navbar extends React.Component{
    
    render(){
        
        return(
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-logo" href="/">
                    <img src={logo} alt ="" style={{width: "100%"}} />
                </a>
                <a className="navbar-brand fs-4 fw-bold" href="/">SCAN IT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto-10" style={{marginRight:"30px"}}>
                        <li className="nav-item active">
                            <a className="nav-link fs-5 fw-semibold" href='/'>
                                Home
                                {/* <i class="fas fa-home"></i> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 fw-semibold" href='/Dashboard'>
                                Dashboard
                                {/* <i class="fas fa-home"></i> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 fw-semibold" href='/Services'>
                                Our Services
                                {/* <i class="fa fa-wrench" aria-hidden="true"></i> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 fw-semibold" href='/AboutUs'>
                                About Us
                                {/* <i class="fas fa-users"></i> */}
                            </a>
                        </li>
                    
                    </ul>
                </div>
            </nav>

        )
    }
}
export default Navbar;