import s from "./TransferSlider.module.scss";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import Slider from "react-slick";
import React from "react";
import arrowImg from "../../../../img/sliderArrows/arrowThin.png";
import Button from "../../Button/Button"
import styled from "styled-components";

function NextArrow({style, onClick}) {
    return <div className={s.nextArrow}
                style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
                onClick={onClick}
    />
}

function PrevArrow({style, onClick}) {
    return <div className={s.prevArrow}
                style={{...style, backgroundImage: 'url(' + arrowImg + ')'}}
                onClick={onClick}
    />
}

const TransferSlider = ({sliders}) => {

    const StyleSlider = styled.div`
      .slick-list {
        overflow: visible;
      }
    `;

    const settings = {
        infinite: false,
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    };

    return <div className={s.wrapper}>
        <div className={s.container}>

            <div className={s.sliderWrapper}>
                <StyleSlider>
                    <Slider {...settings}>
                        {sliders.map((item, index) => {
                            return <div key={index}>
                                <HeadlineCenter title={item.name}
                                                style={{
                                                    fontSize: '25px',
                                                    margin: '0 auto'
                                                }}/>
                                <HeadlineCenter title={item.passengers}
                                                style={{
                                                    fontSize: '17px',
                                                    textTransform: 'none',
                                                    margin: '0 auto 30px'
                                                }}/>
                                <div className={s.itemWrapper}>
                                    <img src={item.img} alt={item.name}/>
                                    <div className={s.textBlock}>
                                        <p>Трансфер аэропорт Симферополь - Алушта&nbsp;</p>
                                        <p><b>&mdash;&nbsp;{item.price1}</b></p>
                                    </div>
                                    <div className={s.textBlock}>
                                        <p>Трансфер в любом направлении (в одну сторону)&nbsp;</p>
                                        <p><b>&mdash;&nbsp;{item.price2}</b></p>
                                    </div>
                                    <div className={s.textBlock}>
                                        <p>Трансфер в обратном направлении&nbsp;</p>
                                        <p><b>&mdash;&nbsp;{item.price3}</b></p>
                                    </div>
                                    <div className={s.textBlock}>
                                        <p>Простой&nbsp;</p>
                                        <p><b>&mdash;&nbsp;{item.price4}</b></p>
                                    </div>
                                    <div className={s.textBlock}>
                                        <p>Встреча с табличкой&nbsp;</p>
                                        <p><b>&mdash;&nbsp;{item.price5}</b></p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </Slider>
                </StyleSlider>
            </div>

        </div>
    </div>
};

export default TransferSlider;
