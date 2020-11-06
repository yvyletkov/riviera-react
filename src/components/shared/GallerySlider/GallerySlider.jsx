import React from "react";
import Slider from "react-slick";
import s from "./GallerySlider.module.scss";
import GallerySliderItem from "./GallerySliderItem/GallerySliderItem";
import styled from "styled-components";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import Button from "../Button/Button";

const StyledSlider = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  
  .slick-slide img {width: 100%}
  
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
`;

const GallerySlider = ({blockName = "Фотогалерея", slides}) => {

    const settings = {
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "60px"
                }
            },
            {
                breakpoint: 330,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "20px"
                }
            },
        ],
        nextArrow: <NextArrow positionStyles={{
            bottom: "-75px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-75px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>
    };

    const items = slides.map((item) => {
        const {img, title, description, href, key} = item;
        return (
            <div className="SliderElement" key={key}>
                <GallerySliderItem
                    img={img}
                    title={title}
                    description={description}
                    href={href}
                />
            </div>
        );
    });

    return (
        <div id='gallery' className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={blockName}/>
                <StyledSlider>
                    <Slider {...settings}>{items}</Slider>
                </StyledSlider>
                <div className={s.mobileBlock}>
                    <div className={s.mobileBlockText}>Больше фотографий нашего отеля</div>
                    <Button text={'Перейти к галерее'} />
                </div>
            </div>
        </div>
    );
};

export default GallerySlider;
