import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Ai from '../images/ai.svg';
import Sp from '../images/sp.svg'
import { BorderAllRounded } from "@material-ui/icons";

export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: false,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
       <div><center>
                
                <Slider {...settings} className='slider' style={{
                  top:'5vw',
                  border:'1px solid white',
                  margin:'auto',
                  width:'62vw',
                  borderRadius:'1vw',
                  padding:'1vw',
                }}>
                <div >
                <img src={Ai} alt="ai" style={{width:'60vw'}}/>
                </div>

                <div>
                <img src={Sp} alt="solar power" style={{width:'60vw'}}/>
                </div>
                
                </Slider>

            <br/>
            </center>
        </div>

    );
  }
}