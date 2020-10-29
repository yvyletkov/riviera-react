import React from "react";
import Slider from "react-slick";
import Headline from "../Headline/Headline";
import GridSliderItem from "./GridSliderItem/GridSliderItem";
import s from "./GridSlider.module.scss";
import styled from "styled-components";
import arrowImg from "../../../img/sliderArrows/arrowThin.png"
import MiniSlider from "../MiniSlider/MiniSlider";

const SliderStyles = styled.div`
  .slick-slide {
    opacity: .18;
    transition: all 500ms;
  }
  .slick-slide.slick-active {
    opacity: 1;
    filter: brightness(1);
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

  .slick-slide {
    opacity: 1;
    filter: brightness(0.9);
    transition: all 500ms;
  }

    .slick-list { 
        overflow:visible;
    }
    .slick-track { 
        overflow:hidden;
    }
    
    .slick-vertical .slick-slide {
        border: none;
    }

  .slick-list {margin: -18px 0 -18px -20px;}
  .slick-slide>div {padding: 18px 0 18px 20px;}
    
    .slick-dots {bottom: -8px}
    
}
.slick-dots li {
    margin: 0
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

    const bodyEl = document.getElementsByTagName("body")[0];

    const disableScroll = () => bodyEl.classList.add("fixed");

    const afterChangeHandler = (index) => {
        setCurrentSlideIndex(index);
    };

    const items = slides.map((item, index) => {
        return <GridSliderItem key={item.name + index} firstRow={item.firstRow} secondRow={item.secondRow}/>
    });

    const settings = {
        afterChange: afterChangeHandler,
        infinite: true,
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        speed: 600,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                    vertical: true,
                    verticalSwiping: true,
                    arrows: false,
                    dots: true,
                    draggable: true,
                    swipe: true
                }
            },
        ]
    };

    const sliderRef = React.useRef();

    React.useEffect(() => {
        sliderRef.current.slickGoTo(currentSlideIndex);
    }, [currentSlideIndex]);

    const slideNames = slides.map( (item) => item.name);

    return (
        <div id={'verticalSliderWrapper'} className={ currentSlideIndex === slides.length - 1 ? s.wrapper + ' ' + s.minified : s.wrapper}>

            <div className={s.container}>
                <div className={s.headlineWrapper}>
                    <div id='whiteGridSliderBg'></div>

                        <Headline subtitle={'Услуги и продукты'} title={slides[currentSlideIndex].name}/>

                    <div className={s.miniSliderWrapper}>
                        <MiniSlider setCurrentSlide={setCurrentSlideIndex} currentSlide={currentSlideIndex} slideNames={slideNames}/>
                    </div>
                </div>
                <SliderStyles onTouchStart={disableScroll}>
                {/*<SliderStyles>*/}
                    <Slider {...settings} ref={sliderRef}>
                        {items}
                    </Slider>
                </SliderStyles>
            </div>
        </div>
    )
};

export default GridSlider;

