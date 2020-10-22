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
}
`;

const MiniSlider = ({setCurrentSlide, currentSlide, slideNames = ['Курортный отдых', 'Развлечения', 'Инфраструктура', 'Четвертый слайд', 'Пятый слайд', 'Шестой слайд']}) => {


    const items = slideNames.map((item, index) => {
        return (
            <div onClick={ () => setCurrentSlide(index)} className={currentSlide === index ? `${s.miniSliderItem} ${s.active}` : `${s.miniSliderItem}`} key={item.title}>
                {item}
            </div>
        );
    });

    const settings = {
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
                breakpoint: 1400,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
        ]
    };

    return (
        <div className={s.wrapper}>
            <SliderStyles>
                <Slider className={s.slider} {...settings}>{items}</Slider>
            </SliderStyles>
        </div>
    );
};

export default MiniSlider;
