import React from "react";
import Slider from "react-slick";
import s from "./InfraMainSlider.module.scss";
import InfraMainSliderItem from "./InfraMainSliderItem/InfraMainSliderItem";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const SliderStyles = styled.div`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  
  .slick-dots {
    bottom: -32px;
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

`;


const SimpleSlider = ({slides, setCurrentSlideIndex}) => {

    const items = slides.map((item, index) => {
        return (
            <div className="sliderElement" key={index}>
                <InfraMainSliderItem
                    img={item.img}
                    link={item.link}
                    firstLine={item.firstLine}
                    secondLine={item.secondLine}
                    active={index === 1}
                />
            </div>
        );
    });

    const afterChangeHandler = (index) => setCurrentSlideIndex ? setCurrentSlideIndex(index) : null;

    const settings = {
        afterChange: afterChangeHandler,
        dots: false,
        arrows: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-90px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-90px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    className: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    return (
        <SliderStyles>
            <Slider {...settings}>{items}</Slider>
        </SliderStyles>
    );
};

export default SimpleSlider;
