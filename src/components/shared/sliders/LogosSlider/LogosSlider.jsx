import s from "./LogosSlider.module.scss";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import Slider from "react-slick";
import React from "react";
import styled from "styled-components";

const LogosSlider = ({title, icons}) => {

    const StyledSlider = styled(Slider)`
      .slick-track {
        display:flex;
        align-items:center;
      }
    `;

    const settings = {
        infinite: false,
        slidesToShow: icons.length,
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
                <StyledSlider>
                    <Slider {...settings}>

                        {icons.map((item, index) => {
                            return <div key={index}>
                                <div className={s.iconWrapper}>
                                    <img src={item.img} alt=""/>
                                </div>
                            </div>
                        })}

                    </Slider>
                </StyledSlider>
            </div>

        </div>
    </div>
};

export default LogosSlider;