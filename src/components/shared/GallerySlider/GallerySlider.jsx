import React from "react";
import Slider from "react-slick";
import s from "./GallerySlider.module.scss";
import GallerySliderItem from "./GallerySliderItem/GallerySliderItem";

import img1 from "../../../img/gallery-slider/home-page/fotogalereya1.jpg";
import img2 from "../../../img/gallery-slider/home-page/fotogalereya2.jpg";
import img3 from "../../../img/gallery-slider/home-page/fotogalereya3.jpg";
import img4 from "../../../img/gallery-slider/home-page/fotogalereya4.jpg";
import img5 from "../../../img/gallery-slider/home-page/fotogalereya5.jpg";
import img6 from "../../../img/gallery-slider/home-page/fotogalereya6.jpg";
import img7 from "../../../img/gallery-slider/home-page/fotogalereya7.jpg";
import img8 from "../../../img/gallery-slider/home-page/fotogalereya8.jpg";
import img9 from "../../../img/gallery-slider/home-page/fotogalereya9.jpg";
import img10 from "../../../img/gallery-slider/home-page/fotogalereya10.jpg";
import img11 from "../../../img/gallery-slider/home-page/fotogalereya11.jpg";
import img12 from "../../../img/gallery-slider/home-page/fotogalereya12.jpg";
import img13 from "../../../img/gallery-slider/home-page/fotogalereya13.jpg";
import img14 from "../../../img/gallery-slider/home-page/fotogalereya14.jpg";
import img15 from "../../../img/gallery-slider/home-page/fotogalereya15.jpg";
import img16 from "../../../img/gallery-slider/home-page/fotogalereya16.jpg";

import styled from "styled-components";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import Button from "../Button/Button";

const StyledSlider = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
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
        img: img13,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 13,
    },
    {
        img: img14,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 14,
    },
    {
        img: img15,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 15,
    },
    {
        img: img16,
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
                <div className={s.mobileBlock}>
                    <div className={s.mobileBlockText}>Больше фотографий нашего отеля</div>
                    <Button text={'Заказать звонок'} />
                </div>
            </div>
        </div>
    );
};

export default GallerySlider;
