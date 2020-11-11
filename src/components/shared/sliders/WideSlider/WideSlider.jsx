import React from "react";
import Slider from "react-slick";
import s from "./WideSlider.module.scss";
import WideSliderItem from "./WideSliderItem/WideSliderItem";
import styled from "styled-components";
import Headline from "../../Headline/Headline";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import MiniSlider from "../MiniSlider/MiniSlider";
import Accordeon from "../../Accordeon/Accordeon";
import CirqleTip from "../../CirqleTip/CirqleTip";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-dots li {
    margin: 0
}
`;

const WideSlider = ({title = "Заголовок", subtitle = "Какой-то", textContent = 'Немного какого-то текста', slides}) => {


    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const sliderRef = React.useRef();

    React.useEffect(() => {
        sliderRef.current.slickGoTo(currentSlideIndex);
    }, [currentSlideIndex]);

    const afterChangeHandler = index => setCurrentSlideIndex(index);

    const settings = {
        afterChange: afterChangeHandler,
        infinite: true,
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-80px",
            left: "70px"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-80px",
            left: "10px"
        }}/>,
        responsive: [
            {
                breakpoint: 590,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, link, bookingLink} = item;
        return (
            <div className="SliderElement" key={index}>
                <WideSliderItem
                    img={img}
                    title={title}
                    link={link}
                    bookingLink={bookingLink}
                    isFirst={index === 0}
                />
            </div>
        );
    });

    const miniSliderItems = slides.map(item => item.title);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                    <div className={s.miniSliderWrapper}>
                        <Headline subtitle={subtitle} title={title}/>

                        <MiniSlider setCurrentSlide={setCurrentSlideIndex} currentSlide={currentSlideIndex}
                                    slideNames={miniSliderItems}/>
                    </div>
                    <SliderStyles>
                        <Slider ref={sliderRef} {...settings}>{items}</Slider>
                    </SliderStyles>

            </div>
        </div>
    );
};

export default WideSlider;
