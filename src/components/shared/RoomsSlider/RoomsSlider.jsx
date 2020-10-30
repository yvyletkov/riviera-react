import React from "react";
import Slider from "react-slick";
import s from "./RoomsSlider.module.scss";
import RoomsSliderItem from "./RoomsSliderItem/RoomsSliderItem";
import styled from "styled-components";
import Headline from "../Headline/Headline";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import MiniSlider from "../MiniSlider/MiniSlider";
import Accordeon from "../Accordeon/Accordeon";


const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-slider {height: 435px}
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
.slick-dots li button:before {
    font-size: 56px;
    content: '-';
    top: 10px;
    font-family: 'Helvetica Neue Light';
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
  .slick-slider {height: unset}
}
`;

const RoomsSlider = ({title = "Заголовок", subtitle = "Какой-то", textContent = 'Немного какого-то текста', data, lastOfTwo}) => {


    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    let [accordeonStatus, setAccordeonStatus] = React.useState(false);
    let [sliderIsInViewport, setSliderIsInViewport] = React.useState(false);
    let [scrolledFromTop, setScrolledFromTop] = React.useState(0);
    let [sliderCoords, setSliderCoords] = React.useState(0);

    const sliderWrapperRef = React.useRef();
    const sliderRef = React.useRef();

    const getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
        return box.top + window.pageYOffset
    };

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScrolledFromTop(scroll)
    };

    React.useEffect( () => {
        if (sliderCoords < scrolledFromTop) setSliderIsInViewport(true)
    }, [scrolledFromTop]);

    React.useEffect( () => {
        if (sliderIsInViewport) sliderRef.current.slickGoTo(1)
    }, [sliderIsInViewport]);

    React.useEffect(() => {
        const coords = getCoords(sliderWrapperRef.current);
        setSliderCoords(coords - 130);
    }, [sliderCoords]);

    React.useEffect(() => {
        sliderRef.current.slickGoTo(currentSlideIndex);
    }, [currentSlideIndex]);

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll)
    }, []);

    const cirqleBtnHandler = () => setAccordeonStatus(!accordeonStatus);

    const afterChangeHandler = index => setCurrentSlideIndex(index);

    const settings = {
        afterChange: afterChangeHandler,
        infinite: false,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "17px",
            left: "670px"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "17px",
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

    const items = data.map((item, index) => {
        const {img, title, link, bookingLink} = item;
        return (
            <div className="SliderElement" key={index}>
                <RoomsSliderItem
                    img={img}
                    title={title}
                    link={link}
                    bookingLink={bookingLink}
                    isFirst={index === 0}
                />
            </div>
        );
    });

    const miniSliderItems = data.map(item => item.title);

    return (
        <div ref={sliderWrapperRef} className={s.wrapper + ' roomSlider'}>
            <div className={lastOfTwo ? s.container + ' ' + s.lastOfTwo : s.container}>
                <div className={s.leftBlock}>
                    <Headline subtitle={subtitle} title={title}/>
                    <span className={accordeonStatus ? s.circleBtn + ' ' + s.active : s.circleBtn}
                          onClick={cirqleBtnHandler}>!</span>
                    <p><b>{textContent[0]}</b></p>
                    <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>{textContent[1]}</Accordeon>
                </div>
                <div className={s.rightBlock}>
                    <div className={s.miniSliderWrapper}>
                        <MiniSlider setCurrentSlide={setCurrentSlideIndex} currentSlide={currentSlideIndex}
                                    slideNames={miniSliderItems}/>
                    </div>
                    <SliderStyles>
                        <Slider ref={sliderRef} {...settings}>{items}</Slider>
                    </SliderStyles>
                </div>
            </div>
        </div>
    );
};

export default RoomsSlider;
