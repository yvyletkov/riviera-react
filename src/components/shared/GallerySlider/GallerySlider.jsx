import React from "react";
import Slider from "react-slick";
import s from "./GallerySlider.module.scss";
import GallerySliderItem from "./GallerySliderItem/GallerySliderItem";
import afisha1 from "../../../img/afisha/afisha1.png";
import afisha2 from "../../../img/afisha/afisha2.png";
import afisha3 from "../../../img/afisha/afisha3.png";
import afisha4 from "../../../img/afisha/afisha4.png";
import afisha5 from "../../../img/afisha/afisha5.png";
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
        img: afisha1,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 1,
    },
    {
        img: afisha2,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 2,
    },
    {
        img: afisha3,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 3,
    },
    {
        img: afisha4,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 4,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 5,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 6,
    },
    {
        img: afisha1,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 7,
    },
    {
        img: afisha2,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 8,
    },
    {
        img: afisha3,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 9,
    },
    {
        img: afisha4,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 10,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 11,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 12,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 13,
    },
    {
        img: afisha1,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 14,
    },
    {
        img: afisha2,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 15,
    },
    {
        img: afisha3,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 16,
    },
    {
        img: afisha4,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 17,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 18,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 19,
    },
    {
        img: afisha5,
        title: "Корпус Modern",
        description: "Номер: стандарт улучшенный двухместный",
        href: "#",
        key: 20,
    },
];

const GallerySlider = ({blockName = "Фотогалерея"}) => {

    const settings = {
        // className: "center",
        infinite: true,
        // variableWidth: true,
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
                    rows: 1,
                    slidesToShow: 2,
                    slidesPerRow: 1,
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
