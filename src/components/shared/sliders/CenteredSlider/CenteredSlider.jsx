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


const CenteredSlider = ({title = "Какой-то заголовок", slides, type = "home-page", desaturated = false, infinite = false}) => {


    const initialCurrentSlideIndex = window.matchMedia('(min-width: 769px)').matches ?
        (slides.length >= 5 ? 2 : slides.length === 4 ? 2 : slides.length === 2 ? 1 : slides.length === 3 ? 1 : 0)
        : 0;

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(initialCurrentSlideIndex);

    console.log(initialCurrentSlideIndex)


    const items = slides.map((item, index) => {
        const {img, link, title, subtitle, time, date, campus, campusName, key, subsubtitle='', fontsizeSubsubtitle='', capacity, area} = item;
        return (
            <div className="sliderElement" key={key}>
                <CenteredSliderItem
                    desaturated={desaturated}
                    active={currentSlideIndex === index}
                    link={link}
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
                    capacity={capacity}
                    area={area}
                />
            </div>
        );
    });

    const afterChangeHandler = (index) => setCurrentSlideIndex(index)

    const settings = {
        initialSlide: initialCurrentSlideIndex,
        afterChange: afterChangeHandler,
        dots: false,
        className: "center",
        centerMode: true,
        infinite: type !== "home-page" || infinite,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)} positionStyles={{
            bottom: "-90px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} positionStyles={{
            bottom: "-90px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    initialSlide: 0,
                    className: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: type !== "home-page" || infinite,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    React.useEffect(() => {
        sliderRef.current.slickGoTo(currentSlideIndex);
    }, [currentSlideIndex]);

    const sliderRef = React.useRef();

    return (
        <div className={s.wrapper}>
            <HeadlineCenter title={title}/>
            <SliderStyles>
                <Slider ref={sliderRef} {...settings}>{items}</Slider>
            </SliderStyles>
        </div>
    );
};

export default CenteredSlider;
