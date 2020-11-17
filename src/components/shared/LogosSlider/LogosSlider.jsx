import s from "./LogosSlider.module.scss";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";
import Slider from "react-slick";
import React from "react";

const LogosSlider = ({title, icons}) => {

    const settings = {
        infinite: false,
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                }
            },
        ]
    };

    return <div className={s.wrapper}>
        <div className={s.container}>
            <HeadlineCenter title={title}/>

            <div className={s.sliderWrapper}>
                <Slider {...settings}>

                    {icons.map((item, index) => {
                        return <div key={index}>
                            <div className={s.iconWrapper}>
                                <img src={item.img} alt=""/>
                            </div>
                        </div>
                    })}

                </Slider>
            </div>

        </div>
    </div>
};

export default LogosSlider;