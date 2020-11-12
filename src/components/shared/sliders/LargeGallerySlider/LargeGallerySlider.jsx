import React from "react";
import Slider from "react-slick";
import s from "./LargeGallerySlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const SliderStyles = styled.div`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .center .slick-center .sliderElement {
    opacity: 1;
    transition: all 0.3s;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
    // margin: 0 14px;
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

.slick-track {
  margin: 0 auto;
}
`;

const LargeGallerySlider = ({blockName = "Фотогалерея", slides, slideTitle, videoMode}) => {

    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
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
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = !videoMode ?

        slides.map((item) => {
        const {img, key} = item;
        return <div className={s.card} key={key}>
                <img className={s.item} alt={slideTitle} key={key} src={img}/>
            </div>})

        : null;
        // : slides.map(item => <VideoItem {...item} />) ;

    return (
        <div id='gallery' className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={blockName}/>
                <SliderStyles>
                    <Slider {...settings}>{items}</Slider>
                </SliderStyles>
            </div>
        </div>
    );
};

export default LargeGallerySlider;
