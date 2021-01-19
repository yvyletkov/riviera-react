import React from "react";
import Slider from "react-slick";
import s from "./EventMainSlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import Button from "../../Button/Button";
import cx from 'classnames'

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

  @media screen and (min-width: 481px) {
    .slick-slider {
      height: unset;
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
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

  @media screen and (min-width: 481px) {
    .slick-slider {
      height: unset;
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .slick-slider {
      height: unset
    }
  }
`;


// const SliderStylesManySlider = str.replace("Microsoft", "W3Schools");


const EventMainSlider = ({
                             slides,
                             title,
                             titleMobile,
                             initialSlideIndex = 0,
                             manySlides = false,
                             withButton = false,
                             activatePopup
                         }) => {

    const settings = {
        initialSlide: initialSlideIndex,
        infinite: true,
        slidesToShow: slides.length === 1 ? 1 : 3,
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
        const {img, title, key, descr, popupData} = item;
        return (
            <div className="SliderElement" key={key}>
                <EventMainSliderItem
                    key={key}
                    index={index}
                    withButton={withButton}
                    img={img}
                    title={title}
                    descr={descr}
                    popupData={popupData}
                    activatePopup={activatePopup}
                    active={window.matchMedia('(max-width: 490px').matches ? false : index === 1}
                />
            </div>
        );
    });

    const containerStyles = cx(s.container, {[s.withPadding]: manySlides, [s.small]: slides.length === 1})

    return (
        <div className={s.wrapper}>
            <div className={containerStyles}>
                {(window.matchMedia('screen and (max-width: 480px)').matches && slides.length === 1) &&
                <div style={{
                    position: 'absolute',
                    transform: 'rotate(-90deg)',
                    right: '-30%', color: 'rgb(226, 226, 226)',
                    fontFamily: 'Helvetica Neue Black',
                    fontSize: '9vw',
                    lineHeight: '0.8',
                    top: '47%'}}>
                    Новые программы<br/>в разработке
                </div>}
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


const EventMainSliderItem = (props) => {
    const {img, title, descr, active, index, withButton, activatePopup} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    return (
        <div className={showDescr ? s.card + ' ' + s.active : s.card}>

            <img className={s.img} src={img} alt=""/>

            <div className={s.content}>
                <h6 className={s.title}>{title}</h6>
                <div className={s.descr}>
                    <p style={{marginBottom: withButton ? '10px' : '0'}}>{descr}</p>
                    {withButton && <Button style={{marginTop: '17px'}} onClick={() => activatePopup(index + 1)}
                                           text={'Подробнее о программе'}/>}
                </div>


                <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                    {showDescr ? (withButton ? '' : 'Cкрыть') : 'Подробнее'}
                </div>
            </div>


        </div>);
};
