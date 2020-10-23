import React from "react";
import Slider from "react-slick";
import s from "./RoomsSlider.module.scss";
import RoomsSliderItem from "./RoomsSliderItem/RoomsSliderItem";
import styled from "styled-components";
import Headline from "../Headline/Headline";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import MiniSlider from "../MiniSlider/MiniSlider";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-slider {height: 435px}
  .center .slick-center .SliderElement {
    opacity: 1;
    transition: all 0.3s;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-dots li {
    margin: 0
}
.slick-dots li button:before {
    font-size: 56px;
    content: '-';
    top: 10px;
    font-family: 'Helvetica Neue Light';
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
  .slick-slider {height: unset}
}
`;

const RoomsSlider = ({ title = "Заголовок", subtitle = "Какой-то", textContent = 'Немного какого-то текста', data}) => {

    const settings = {
        infinite: false,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "17px",
            left: "670px"}}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "17px",
            left: "610px"}}/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

  const items = data.map((item, index) => {
        const {img, title, link, bookingLink} = item;
        return (
            <div className="SliderElement" key={index}>
                <RoomsSliderItem
                    img={img}
                    title={title}
                    link={link}
                    bookingLink={bookingLink}
                    isFirst={index === 0}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <Headline subtitle={subtitle} title={title}/>
                    <p><b>{textContent[0]}</b></p>
                    <p>{textContent[1]}</p>
                </div>
                <div className={s.rightBlock}>
                    {/*<MiniSlider/>*/}
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>
                </div>
            </div>
        </div>
    );
};

export default RoomsSlider;
