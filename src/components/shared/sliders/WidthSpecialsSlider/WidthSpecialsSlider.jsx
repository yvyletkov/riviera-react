import React, {useState} from "react";
import Slider from "react-slick";
import s from "./WidthSpecialsSlider.module.scss";
import WidthSpecialsSliderItem from "./WidthSpecialsSliderItem/WidthSpecialsSliderItem";
import styled from "styled-components";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .center .slick-center .SliderElement {
    opacity: 1;
    transition: all 0.3s;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-dots li {
    margin: 0
  }
  
.slick-slide img {
  width: 100%;
  margin: 0 40px 0 0;
}

.slick-track {
  margin: 0 auto;
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
}
`;

const WidthSpecialsSlider = ({title = "Заголовок", subtitle = "Какой-то", textLink = "#", slides, text, btnText = 'Смотреть все предложения'}) => {

    if (!text) text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra\n' +
        '                        maecenas accumsan lacus vel facilisis. '

    const [currentSlideIndex, setCurrentSludeIndex] = useState(0);

    const afterChangeHandler = (index) => setCurrentSludeIndex(index);

    const settings = {
        afterChange: afterChangeHandler,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            left: "50.5%",
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            right: "50.5%",
        }}/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: 0,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, subtitle, key, link} = item;
        return (
            <div className="SliderElement" key={key}>
                <WidthSpecialsSliderItem
                    img={img}
                    title={title}
                    isActive={currentSlideIndex === index}
                    link={link}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <HeadlineCenter title={title} />
            <div className={s.container}>
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>
            </div>
        </div>
    );
};

export default WidthSpecialsSlider;
