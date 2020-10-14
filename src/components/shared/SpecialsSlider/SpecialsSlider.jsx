import React from "react";
import Slider from "react-slick";
import s from "./SpecialsSlider.module.scss";
import SpecialsSliderItem from "./SpecialsSliderItem/SpecialsSliderItem";
import afisha1 from "../../../img/afisha/afisha1.png";
import afisha2 from "../../../img/afisha/afisha2.png";
import afisha3 from "../../../img/afisha/afisha3.png";
import afisha4 from "../../../img/afisha/afisha4.png";
import afisha5 from "../../../img/afisha/afisha5.png";
import styled from "styled-components";
import Headline from "../Headline/Headline";
import rightArrowImg from "../../../img/sliderArrows/arrowThinSmallRight.png";
import leftArrowImg from "../../../img/sliderArrows/arrowThinSmallLeft.png";

const SliderStyles = styled(Slider)`
  h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
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
  .center h3 {
    transition: all 0.3s ease;
  }

  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-slider {
    margin-top: 17%;
    // transform: translateY(50%);
}

`;

const imgMassive = [
    {
        img: afisha1,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 1,
    },
    {
        img: afisha2,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 2,
    },
    {
        img: afisha3,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 3,
    },
    {
        img: afisha4,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 4,
    },
    {
        img: afisha5,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 5,
    },
    {
        img: afisha5,
        title: "Караоке бар",
        subtitle: "Green Stage",
        time: "21:00 8 августа",
        house: "Корпус Classic",
        key: 6,
    },
];


function NextArrow({style, onClick}) {
    return (
        <div
            className={s.nextArrow}
            style={{...style, backgroundImage: 'url(' + rightArrowImg + ')'}}
            onClick={onClick}
        />
    );
}

function PrevArrow({style, onClick}) {
    return (
        <div
            className={s.prevArrow}
            style={{...style, backgroundImage: 'url(' + leftArrowImg + ')'}}
            onClick={onClick}
        />
    );
}

const SpecialsSlider = (props) => {

  const items = imgMassive.map((data, index) => {
        const {img, title, subtitle, time, house, key} = data;
        return (
            <div className="SliderElement" key={key}>
                <SpecialsSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    time={time}
                    house={house}
                    active={index===1}
                />
            </div>
        );
    });

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <Headline subtitle={'Специальные'} title={'спецпредложения'}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. </p>
                </div>
                <div className={s.rightBlock}>
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>
                </div>
            </div>
        </div>
    );
};

export default SpecialsSlider;
