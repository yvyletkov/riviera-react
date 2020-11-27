import React from "react";
import Slider from "react-slick";
import s from "./EventMainSlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    overflow: visible;
  }

.slick-track {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 481px){
 .slick-slider {
    height: unset;
    padding-bottom: 40px;
  }
}
@media screen and (max-width: 1200px){
  .slick-slider {
    height: unset
  }
}
`;

const SliderStylesManySlider = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    overflow: visible;
  }

.slick-track {
  margin: 0 auto;
  display: flex;
  justify-content: start;
}
@media screen and (min-width: 481px){
 .slick-slider {
    height: unset;
    padding-bottom: 40px;
  }
}
@media screen and (max-width: 1200px){
  .slick-slider {
    height: unset
  }
}
`;


// const SliderStylesManySlider = str.replace("Microsoft", "W3Schools");


const EventMainSlider = ({slides, title, titleMobile, initialSlideIndex = 0, manySlides = false}) => {

    const settings = {
        initialSlide: initialSlideIndex,
        infinite: false,
        slidesToShow: 3,
        centerMode: true,
        arrows: manySlides,
        variableWidth: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-30px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, key, descr} = item;
        return (
            <div className="SliderElement" key={key}>
                <WeddingSliderItem
                    img={img}
                    title={title}
                    descr={descr}
                    active={window.matchMedia('(max-width: 490px').matches ? false : index === 1}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={!manySlides ? s.container : s.container + ' ' + s.withPadding}>
                <HeadlineCenter title={window.matchMedia('(max-width: 490px').matches ? titleMobile : title}/>
                {manySlides ? <SliderStylesManySlider><Slider {...settings}>{items}</Slider></SliderStylesManySlider>
                    :
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>}
            </div>
        </div>
    );
};

export default EventMainSlider;


const WeddingSliderItem = (props) => {
    const {img, title, descr, active} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    return (
        <div className={showDescr ? s.card + ' ' + s.active : s.card}>

            <img className={s.img} src={img} alt=""/>

            <div className={s.content}>
                <h6 className={s.title}>{title}</h6>
                <p className={s.descr}>
                    {descr}
                </p>
                <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                    {showDescr ? 'Cкрыть' : 'Подробнее'}
                </div>
            </div>
        </div>);
};
