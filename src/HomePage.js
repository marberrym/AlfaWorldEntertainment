import React from 'react';
import NavBar from './NavBar';

let HomePage = () =>
    <div>
        <NavBar/>
        <div className="pageLayout">
            <img src="./images/alfaFullLogo.png" className="fullLogo"></img>
            <div className="flyerContainer">
                <img src="./images/flyer.jpg" className="flyer"></img>
            </div>
            
        </div>
        <img className="skyline" src="./images/skyline.png"></img>
    </div>

export default HomePage;