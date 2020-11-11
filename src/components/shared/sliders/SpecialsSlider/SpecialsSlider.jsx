import React from "react";
import Slider from "react-slick";
import s from "./SpecialsSlider.module.scss";
import SpecialsSliderItem from "./SpecialsSliderItem/SpecialsSliderItem";
import styled from "styled-components";
import Headline from "../../Headline/Headline";
import arrowImg from "../../../../img/icons/right-arrow.svg";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
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
  .slick-slider {
    margin-top: 17%;
  }
  .slick-dots li {
    margin: 0
  }
  
.slick-slide img {
  width: 100%;
  margin: 0 40px 0 0;
}

.slick-track {
  margin: 0 auto;
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
}
`;

const SpecialsSlider = ({ title = "Заголовок", subtitle = "Какой-то", textLink = "#", slides}) => {

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            left: "670px"}}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
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

  const items = slides.map((item, index) => {
        const {img, title, subtitle, time, house, key, link} = item;
        return (
            <div className="SliderElement" key={key}>
                <SpecialsSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    time={time}
                    house={house}
                    active={index===1}
                    link={link}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <Headline subtitle={subtitle} title={title}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. </p>
                    <a href={textLink}>Cмотреть все предложения <img src={arrowImg} alt=""/></a>
                </div>
                <div className={s.rightBlock}>
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>
                </div>
            </div>
        </div>
    );
};

export default SpecialsSlider;
