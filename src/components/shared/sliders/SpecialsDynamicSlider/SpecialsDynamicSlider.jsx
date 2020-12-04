import React from "react";
import Slider from "react-slick";
import s from "./SpecialsDynamicSlider.module.scss";
import SpecialsSliderItem from "../SpecialsSlider/SpecialsSliderItem/SpecialsSliderItem";
import styled from "styled-components";
import Headline from "../../Headline/Headline";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-slider {
    margin-top: 17%;
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

const SpecialsDynamicSlider = ({slides}) => {

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const afterChangeHandler = (index) => setCurrentSlideIndex(index)

    const settings = {
        afterChange: afterChangeHandler,
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            left: "670px"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            left: "610px"
        }}/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const sliderRef = React.useRef();

    React.useEffect(() => {
        sliderRef.current.slickGoTo(currentSlideIndex);
    }, [currentSlideIndex]);

    const items = slides.map((item, index) => {
        const {img, title, subtitle, key, link} = item;
        return (
            <div className="sliderElement" onClick={() => !window.matchMedia("screen and (max-width: 1200px)").matches ? setCurrentSlideIndex(index) : null} key={key}>
                <SpecialsSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    active={index === 0 && !window.matchMedia("screen and (max-width: 1200px)").matches}
                    link={link}
                    oneLine
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <Headline title={slides[currentSlideIndex].title}/>
                    <p>
                        {slides[currentSlideIndex].text}
                    </p>
                </div>
                <div className={s.rightBlock}>
                    <SliderStyles>
                        <Slider ref={sliderRef} {...settings}>{items}</Slider>
                    </SliderStyles>
                </div>
            </div>
        </div>
    );
};

export default SpecialsDynamicSlider;
