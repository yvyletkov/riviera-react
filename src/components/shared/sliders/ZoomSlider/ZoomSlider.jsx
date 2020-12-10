import React from "react";
import Slider from "react-slick";
import s from "./ZoomSlider.module.scss";
import ZoomSliderItem from "./ZoomSliderItem/ZoomSliderItem";
import styled from "styled-components";
import Headline from "../../Headline/Headline";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import {SRLWrapper} from "simple-react-lightbox";

const SliderStyles = styled(Slider)`
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
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-slider {
    margin-top: 17%;
  }
  .slick-dots li {
    margin: 0
  }
  
.slick-slide img {
  width: 100%;
  margin: 0 40px 0 0;
  border-radius: 5px;
}

.slick-slide img:hover {
  cursor:zoom-in;
}

.slick-track {
  margin: 0 auto;
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
}
`;

const ZoomSlider = ({ title = "Заголовок", subtitle = "Какой-то", btnLink, slides, text, btnText = 'Смотреть все предложения'}) => {

    if (!text) text = 'Отель Riviera Sunrise Resort&SPA предлагает вашему вниманию выгодные предложения, которые позволят сделать ваш отдых не только прекрасным и насыщенным, но и оптимальным по цене!'

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            left: "670px"}}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            left: "610px"}}/>,
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

    const options = {
        buttons: {
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
        },
        caption: {
            showCaption: false,
        }
    };

    const items = slides.map((item) => {
        const {img, key} = item;
        return (
            <div className="SliderElement" key={key}>
                <ZoomSliderItem img={img}/>
            </div>
        );
    });

    return (
        <SRLWrapper options={options}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.leftBlock}>
                        <Headline subtitle={subtitle} title={title}/>
                        <p>{text}</p>
                    </div>
                    <div className={s.rightBlock}>
                        <SliderStyles>
                            <Slider {...settings}>{items}</Slider>
                        </SliderStyles>
                    </div>
                </div>
            </div>
        </SRLWrapper>
    );
};

export default ZoomSlider;
