import React from "react";
import Slider from "react-slick";
import s from "./LargeGallerySlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import LazyImage from "../../../additional/LazyImg";
import LazyLoadImgComponent from "../../../additional/LazyLoadImgComponent/LazyLoadImgComponent";

const SliderStyles = styled.div`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .center .slick-center .sliderElement {
    opacity: 1;
    transition: all 0.3s;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
    // margin: 0 14px;
  }

  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  
  .slick-dots {
    bottom: -32px;
  }
  
  .slick-dots li {
    margin: 0
  }

.slick-track {
  margin: 0 auto;
}

@media screen and (min-width: 481px) {
   margin-top: -18px;
}
`;

const LargeGallerySlider = ({blockName = "Фотогалерея", slides, slideTitle, videoMode}) => {

    const settings = {
        dots: false,
        className: "center",
        centerMode: !videoMode && true,
        infinite: !videoMode && true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-90px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-90px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    className: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = !videoMode ?
        slides.map((item) => {
            const {img, key} = item;
            return <div key={key}>
                <LazyLoadImgComponent className={s.item} alt={slideTitle} key={key} src={img}/>
            </div>
        }) :
        slides.map((item) => {
            const {video, key} = item;
            return <div key={key}>
                <div className={s.item + ' ' + s.video}>
                    <iframe title={'Riviera Sunrise'} width="100%" height="100%" src={video}
                            scrolling="no"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
        });

    return (
        <div id='gallery' className={s.wrapper}>
            <div className={videoMode ? s.videoContainer : s.container}>
                <HeadlineCenter title={blockName}/>
                <SliderStyles>
                    <Slider {...settings}>{items}</Slider>
                </SliderStyles>
            </div>
        </div>
    );
};

export default LargeGallerySlider;
