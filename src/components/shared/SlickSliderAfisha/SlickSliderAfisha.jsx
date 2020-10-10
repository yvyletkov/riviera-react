import React, { Component } from 'react';
import Slider from 'react-slick';
import CardSlider from '../CardSlider/CardSlider';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div>
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          <div>
            <CardSlider />
          </div>
          
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
