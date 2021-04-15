import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import LazyLoadImgComponent from "../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";

const SliderStyles = styled.div`
  width: 100%;
  height: 100%;
      box-shadow: -14.444px 19.167px 27px 0px rgba(23, 23, 23, 0.10);

  
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .slick-list {
    transition: all 0.3s;
    overflow: hidden;
  }

.slick-slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.slick-track {
  margin: 0 auto;
}

`;


const SimpleSlider = ({slides, setCurrentSlideIndex, styleImg}) => {

    const items = slides.map((item, index) => {
        return (
            <div className="sliderElement" key={index}>
                <LazyLoadImgComponent src={item.img} style={styleImg} alt={item.name}/>
            </div>
        );
    });

    const afterChangeHandler = (index) => setCurrentSlideIndex ? setCurrentSlideIndex(index) : null;

    const settings = {
        afterChange: afterChangeHandler,
        dots: false,
        arrows: true,
        speed: 500,
        infinite: false,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-70px",
            left: "60px",
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-70px",
            left: "0",
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
