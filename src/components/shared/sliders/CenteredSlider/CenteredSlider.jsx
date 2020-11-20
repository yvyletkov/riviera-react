import React from "react";
import Slider from "react-slick";
import s from "./CenteredSlider.module.scss";
import CenteredSliderItem from "./CenteredSliderItem/CenteredSliderItem";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const SliderStyles = styled.div`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
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

.slick-slide img {
  width: 100%;
  margin: 0 40px 0 0;
}

.slick-track {
  margin: 0 auto;
}

`;


const CenteredSlider = ({title = "Какой-то заголовок", slides, type = "home-page"}) => {

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const items = slides.map((item, index) => {
        const {img, title, subtitle, time, date, campus, campusName, key, subsubtitle='', fontsizeSubsubtitle='',} = item;
        return (
            <div className="sliderElement" key={key}>
                <CenteredSliderItem
                    active={currentSlideIndex === index}
                    type={type}
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    subsubtitle={subsubtitle}
                    fontsizeSubsubtitle={fontsizeSubsubtitle}
                    time={time}
                    date={date}
                    campus={campus}
                    campusName={campusName}
                />
            </div>
        );
    });

    const afterChangeHandler = (index) => setCurrentSlideIndex(index)

    const settings = {
        afterChange: afterChangeHandler,
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

    return (
        <div className={s.wrapper}>
            <HeadlineCenter title={title}/>
            <SliderStyles>
                <Slider {...settings}>{items}</Slider>
            </SliderStyles>
        </div>
    );
};

export default CenteredSlider;
