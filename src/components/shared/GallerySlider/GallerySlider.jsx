import React from "react";
import Slider from "react-slick";
import s from "./GallerySlider.module.scss";
import GallerySliderItem from "./GallerySliderItem/GallerySliderItem";

import img1 from "../../../img/gallery-slider/home-page/fotogalereya3.png";
import img2 from "../../../img/gallery-slider/home-page/fotogalereya4.png";
import img3 from "../../../img/gallery-slider/home-page/fotogalereya5.png";
import img4 from "../../../img/gallery-slider/home-page/fotogalereya6.png";
import img5 from "../../../img/gallery-slider/home-page/fotogalereya7.png";
import img6 from "../../../img/gallery-slider/home-page/fotogalereya8.png";
import img7 from "../../../img/gallery-slider/home-page/fotogalereya9.png";
import img8 from "../../../img/gallery-slider/home-page/fotogalereya10.png";
import img9 from "../../../img/gallery-slider/home-page/fotogalereya11.png";
import img10 from "../../../img/gallery-slider/home-page/fotogalereya12.png";
import img11 from "../../../img/gallery-slider/home-page/fotogalereya13.png";
import img12 from "../../../img/gallery-slider/home-page/fotogalereya14.png";

import styled from "styled-components";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const StyledSlider = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
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
    {
        img: img7,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 7,
    },
    {
        img: img8,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 8,
    },
    {
        img: img9,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 9,
    },
    {
        img: img10,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 10,
    },
    {
        img: img11,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 11,
    },
    {
        img: img12,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 12,
    },
    {
        img: img5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 13,
    },
    {
        img: img6,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 14,
    },
    {
        img: img7,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 15,
    },
    {
        img: img8,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 16,
    },
];

const GallerySlider = ({blockName = "Фотогалерея"}) => {

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
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "60px"
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "20px"
                }
            },
        ],
        nextArrow: <NextArrow positionStyles={{
            bottom: "-90px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-90px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>
    };

    const items = imgMassive.map((item) => {
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
        <div className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={blockName}/>
                <StyledSlider>
                    <Slider {...settings}>{items}</Slider>
                </StyledSlider>
            </div>
        </div>
    );
};

export default GallerySlider;
