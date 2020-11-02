import React from "react";
import Slider from "react-slick";
import s from "./LargeGallerySlider.module.scss";

import img1 from "../../../img/gallery-slider/home-page/fotogalereya1.jpg";
import img2 from "../../../img/gallery-slider/home-page/fotogalereya2.jpg";
import img3 from "../../../img/gallery-slider/home-page/fotogalereya3.jpg";
import img4 from "../../../img/gallery-slider/home-page/fotogalereya4.jpg";
import img5 from "../../../img/gallery-slider/home-page/fotogalereya5.jpg";
import img6 from "../../../img/gallery-slider/home-page/fotogalereya6.jpg";

import styled from "styled-components";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
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
    bottom: -30px;
  }
  .slick-dots li {
    margin: 0
  }

.slick-track {
  margin: 0 auto;
}
`;

const imgMassive = [
    {
        img: img1,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 1,
    },
    {
        img: img2,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 2,
    },
    {
        img: img3,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 3,
    },
    {
        img: img4,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 4,
    },
    {
        img: img5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 5,
    },
    {
        img: img6,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 6,
    },
];

const LargeGallerySlider = ({blockName = "Фотогалерея"}) => {

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

    const items = imgMassive.map((item) => {
        const {img, title, key} = item;
        return (
            <div className={s.card} key={key}>
                <img className={s.item} alt={title} key={key} src={img}/>
            </div>
        );
    });

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
