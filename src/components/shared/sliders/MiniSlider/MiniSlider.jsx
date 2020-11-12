import React from "react";
import Slider from "react-slick";
import s from "./MiniSlider.module.scss";
import styled from "styled-components";

const SliderStyles = styled.div`

  .slick-next:before,
  .slick-prev:before {
    color: #B4B4B4;
  }
  .slick-list {
    transition: all 0.3s;
    overflow: hidden;
  }
  .slick-next, .slick-prev {
    color: #000;
  }
  .slick-dots li button:before, .slick-next:before, .slick-prev:before {font-family: 'Helvetica Neue Medium';}
  .slick-prev {left: -20px}
  .slick-next {right: -20px}
  .slick-list {margin: -2px 0;}
  .slick-slide>div {padding: 2px 0;}
 
  .slick-vertical .slick-slide {
    border: none
  }
`;

const MiniSlider = ({setCurrentSlide, currentSlide, slideNames}) => {

    // const disableScroll = () => document.getElementsByTagName("body")[0].classList.add("fixed");
    // const enableScroll = () => document.getElementsByTagName("body")[0].classList.remove("fixed");

    const items = slideNames.map((item, index) => {
        return (
            <div onClick={() => setCurrentSlide(index)}
                 className={currentSlide === index ? `${s.miniSliderItem} ${s.active} miniSliderTarget` : `${s.miniSliderItem} miniSliderTarget`}
                 key={index}>
                {item}
            </div>
        );
    });

    const settings = {
        // variableWidth: true,
        centerPadding: "0",
        centerMode: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                }
            },
        ]
    };

    const sliderRef = React.useRef();

    React.useEffect(() => {
        sliderRef.current.slickGoTo(currentSlide);
    }, [currentSlide]);


    return (
        <div className={s.wrapper}>
            <SliderStyles>
                {/*<SliderStyles onTouchStart={disableScroll} onTouchEnd={enableScroll}>*/}
                <Slider ref={sliderRef} className={s.slider} {...settings}>{items}</Slider>
            </SliderStyles>
        </div>
    );
};

export default MiniSlider;
