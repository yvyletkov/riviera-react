import React from "react";
import Slider from "react-slick";
import s from "./CenteredSlider.module.scss";
import CenteredSliderItem from "./CenteredSliderItem/CenteredSliderItem";
import afisha1 from "../../../img/afisha/afisha1.png";
import afisha2 from "../../../img/afisha/afisha2.png";
import afisha3 from "../../../img/afisha/afisha3.png";
import afisha4 from "../../../img/afisha/afisha4.png";
import afisha5 from "../../../img/afisha/afisha5.png";
import styled from "styled-components";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";

const StyledSlider = styled(Slider)`
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
    -ms-transform: scale(1.08);
    transform: scale(1.08);
  }
  .center h3 {
    transition: all 0.3s ease;
  }

  .slick-list {
    overflow: visible;
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

const CenteredSlider = (props) => {
  const items = imgMassive.map((data) => {
    const { img, title, subtitle, time, house, key } = data;
    return (
      <div className="SliderElement" key={key}>
        <CenteredSliderItem
          img={img}
          title={title}
          subtitle={subtitle}
          time={time}
          house={house}
        />
      </div>
    );
  });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    variableWidth: true,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  };

  return (
    <div className={s.wrapper}>
      <HeadlineCenter title={'Cегодня в программе'}/>
      <StyledSlider>
        <Slider {...settings}>{items}</Slider>
      </StyledSlider>
    </div>
  );
};

export default CenteredSlider;
