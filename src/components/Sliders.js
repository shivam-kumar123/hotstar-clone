import React from 'react'
import Slider from 'react-slick'
import styled, { withTheme } from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 520,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: true,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true
  };
  return (
      <Slide>
        <Slider {...settings}>
        <a href="#">
          <img src="/images/slider-badag.jpg"/>
        </a>
        <a href="#">
          <img src="/images/slider-badging.jpg"/>
        </a>
        <a href="#">
          <img src="/images/slider-scale.jpg"/>
        </a>
        <a href="#">
          <img src="/images/slider-scales.jpg"/>
        </a>
        </Slider>
      </Slide>
  );
}

const Slide = styled.div`
  margin-top: 65px;
  margin-bottom: 20px;
  border-radius: 30px;
  margin-left: 1%;
  margin-right: 1%;
  img{
    height: 100%;
    width: 100%;
  }
`