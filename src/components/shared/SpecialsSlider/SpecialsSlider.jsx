import React from "react";
import Slider from "react-slick";
import s from "./SpecialsSlider.module.scss";
import SpecialsSliderItem from "./SpecialsSliderItem/SpecialsSliderItem";
import img1 from "../../../img/specials-slider/home-page/spetspredlozheniya1.jpg";
import img2 from "../../../img/specials-slider/home-page/spetspredlozheniya2.jpg";
import img3 from "../../../img/specials-slider/home-page/spetspredlozheniya3.jpg";
import img4 from "../../../img/specials-slider/home-page/spetspredlozheniya4.jpg";
import styled from "styled-components";
import Headline from "../Headline/Headline";
import arrowImg from "../../../img/icons/right-arrow.svg";
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
.slick-dots li button:before {
    font-size: 56px;
    content: '-';
    font-family: 'Helvetica Neue Light';
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
}
`;

const imgMassive = [
    {
        img: img1,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 1,
    },
    {
        img: img2,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 2,
    },
    {
        img: img3,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 3,
    },
    {
        img: img4,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 4,
    },
];


const SpecialsSlider = ({ textLink = "#", data = imgMassive}) => {

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

  const items = data.map((item, index) => {
        const {img, title, subtitle, time, house, key} = item;
        return (
            <div className="SliderElement" key={key}>
                <SpecialsSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    time={time}
                    house={house}
                    active={index===1}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <Headline subtitle={'Лучшие'} title={'спецпредложения'}/>
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
