import React from "react";
import Slider from "react-slick";
import Headline from "../Headline/Headline";
import GridSliderItem from "./GridSliderItem/GridSliderItem";
import s from "./GridSlider.module.scss";
import kurortImg1 from "../../../img/grid-slider/resort-vacation/1.png";
import kurortImg2 from "../../../img/grid-slider/resort-vacation/2.png";
import kurortImg3 from "../../../img/grid-slider/resort-vacation/3.png";
import kurortImg4 from "../../../img/grid-slider/resort-vacation/4.png";
import kurortImg5 from "../../../img/grid-slider/resort-vacation/5.png";
import kurortImg6 from "../../../img/grid-slider/resort-vacation/6.png";
import kurortImg7 from "../../../img/grid-slider/resort-vacation/7.png";
import kurortImg8 from "../../../img/grid-slider/resort-vacation/8.png";
import styled from "styled-components";
import arrowImg from "../../../img/sliderArrows/arrowThin.png"

const SliderStyles = styled.div`
  .slick-slide {
    opacity: .3;
    transition: all 500ms;
  }
  .slick-slide.slick-active {
    opacity: 1;
  }
  .slick-next:before, .slick-prev:before {
    color: #000;
  }
  .center .slick-center .SliderElement {
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .slick-list { 
    overflow:visible;
  }
  .slick-vertical .slick-slide {
     box-sizing: border-box;
  }
@media screen and (max-width: 768px) {
    .slick-list { 
        overflow:visible;
    }
    .slick-track { 
        overflow:hidden;
    }
}
`;

function NextArrow({style, onClick}) {
    return <div
        className={s.nextArrow}
        style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
        onClick={onClick}
    />
}

function PrevArrow({style, onClick}) {
    return <div
        className={s.prevArrow}
        style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
        onClick={onClick}
    />
}


const GridSlider = ({slides}) => {

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const afterChangeHandler = (index) => {
        setCurrentSlideIndex(index);
    };

    slides = [
        {
            name: "Курортный отдых",
            firstRow: [{title: "Семейный отдых", img: kurortImg1, href: '#'}, {
                title: "Номера и цены",
                img: kurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: kurortImg3, href: '#'}, {
                title: "Отдых с друзьями",
                img: kurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: kurortImg5, href: '#'}, {
                title: "Medical Spa",
                img: kurortImg6,
                href: '#'
            }, {title: "Командировка", img: kurortImg7, href: '#'}, {
                title: "Романтический отдых",
                img: kurortImg8,
                href: '#'
            }],
        },
        {
            name: "Развлечения",
            firstRow: [{title: "Семейный отдых", img: kurortImg1, href: '#'}, {
                title: "Номера и цены",
                img: kurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: kurortImg3, href: '#'}, {
                title: "Отдых с друзьями",
                img: kurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: kurortImg5, href: '#'}, {
                title: "Medical Spa",
                img: kurortImg6,
                href: '#'
            }, {title: "Командировка", img: kurortImg7, href: '#'}, {
                title: "Романтический отдых",
                img: kurortImg8,
                href: '#'
            }],
        },
        {
            name: "Инфраструктура",
            firstRow: [{title: "Семейный отдых", img: kurortImg1, href: '#'}, {
                title: "Номера и цены",
                img: kurortImg2,
                href: '#'
            }, {title: "Отдых без детей", img: kurortImg3, href: '#'}, {
                title: "Отдых с друзьями",
                img: kurortImg4,
                href: '#'
            }],
            secondRow: [{title: "Турпакет", img: kurortImg5, href: '#'}, {
                title: "Medical Spa",
                img: kurortImg6,
                href: '#'
            }, {title: "Командировка", img: kurortImg7, href: '#'}, {
                title: "Романтический отдых",
                img: kurortImg8,
                href: '#'
            }],
        }
    ];

    const items = slides.map((item, index) => {
        return <GridSliderItem key={item.name + index} firstRow={item.firstRow} secondRow={item.secondRow}/>
    });

    const settings = {
        infinite: true,
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        speed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
        ]
    };


    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.headlineWrapper}>
                    <Headline subtitle={'Услуги и продукты'} title={slides[currentSlideIndex].name}/>
                </div>
                <SliderStyles>
                    <Slider {...settings} afterChange={afterChangeHandler}>
                        {items}
                    </Slider>
                </SliderStyles>
            </div>
        </div>
    )
};

export default GridSlider;

