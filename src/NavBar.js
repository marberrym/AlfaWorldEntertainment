import React from 'react';

let NavBar = () =>
    <div className="navBar">
        <div className="navBar">
            <img className="navLogo" src="./images/alfaLogo.png"/>
            <div className="logoFontContainer">
                <div className="topText">Alfa World</div>
                <div className="logoFont">Entertainment</div>
            </div>
        </div>
        <div className="socialBox">
            <a href="http://www.facebook.com/AlfaTFreeman"><i class="fab fa-facebook fa-2x icon"></i></a>
            <a href="http://www.twitter.com/AlfaWorldAtl"><i class="fab fa-twitter fa-2x icon"></i></a>
            <a href="http://www.instagram.com/alfaatlanta"><i class="fab fa-instagram fa-2x icon"></i></a>
            <a href="mailto:alfaatlanta@gmail.com?subject=I visited Alfa and..."><i class="fas fa-envelope fa-2x icon"></i></a>
        </div>
    
    </div>

export default NavBar;