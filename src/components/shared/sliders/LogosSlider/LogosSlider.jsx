import s from "./LogosSlider.module.scss";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import Slider from "react-slick";
import React from "react";
import styled from "styled-components";
import arrowImg from "../../../../img/sliderArrows/arrowThin.png";

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

const LogosSlider = ({title, icons, slidesToShow, colored}) => {

    const StyledSlider = styled(Slider)`
      .slick-track {
        display:flex;
        align-items:center;
      }
      .slick-list {
        overflow: visible;
      }
    `;

    const settings = {
        infinite: false,
        slidesToShow: slidesToShow || icons.length,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
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
                                <div className={s.iconWrapper + (colored ? (' ' + s.colored) : '')}>
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