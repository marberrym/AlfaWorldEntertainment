import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

let Caro = () => 
    <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} stopOnHover={false} infiniteLoop={true} showIndicators={false} axis="vertical">
        <div>
            <img className="slide" src="./images/sexy.jpg"></img>
        </div>
        <div>
            <img className="slide" src="./images/concert.jpg"></img>
        </div>
    </Carousel>

export default Caro;
