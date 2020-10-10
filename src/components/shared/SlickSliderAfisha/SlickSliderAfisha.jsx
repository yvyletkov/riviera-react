import React, { Component } from "react";
import Slider from "react-slick";
import CardSlider from "../CardSlider/CardSlider";
import afisha1 from "../../../img/afisha/afisha1.png";
import afisha2 from "../../../img/afisha/afisha2.png";
import afisha3 from "../../../img/afisha/afisha3.png";
import afisha4 from "../../../img/afisha/afisha4.png";
import afisha5 from "../../../img/afisha/afisha5.png";

const imgMassive = [
  { img: afisha1, key: 1 },
  { img: afisha2, key: 2 },
  { img: afisha3, key: 3 },
  { img: afisha4, key: 4 },
  { img: afisha5, key: 5 },
];

const slider = imgMassive.map((e) => {
    console.log(e)
  return (
    <div key={e.key}>
      <CardSlider img={e.img} />
    </div>
  );
});

export default class SlickSliderAfisha extends Component {
  render() {
    const settings = {
      dots: false,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>{cssstyle}</style>
        <h2>Сегодня в программе</h2>
        <Slider {...settings}>{slider}</Slider>
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
`;
