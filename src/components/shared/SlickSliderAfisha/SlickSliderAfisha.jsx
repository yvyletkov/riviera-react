import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem/SliderItem";
import afisha1 from "../../../img/afisha/afisha1.png";
import afisha2 from "../../../img/afisha/afisha2.png";
import afisha3 from "../../../img/afisha/afisha3.png";
import afisha4 from "../../../img/afisha/afisha4.png";
import afisha5 from "../../../img/afisha/afisha5.png";

const cssstyle = `
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
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center .SliderElement {
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .3s ease;
}

.slick-list { 
   overflow:visible;
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


const SlickSliderAfisha = (props) => {

    const items = imgMassive.map((data) => {
        const {img, title, subtitle, time, house, key} = data;
        return (
            <div className="SliderElement" key={key}>
                <SliderItem
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
        slidesToShow: 5,
        speed: 500,
    };

    return (
        <div className="container">
            <style>{cssstyle}</style>
            <h2>Сегодня в программе</h2>
            <Slider {...settings}>{items}</Slider>
        </div>
    )
};

export default SlickSliderAfisha;

