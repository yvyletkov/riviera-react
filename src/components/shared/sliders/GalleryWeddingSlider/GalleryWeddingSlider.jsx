import React from "react";
import Slider from "react-slick";
import s from "./GalleryWeddingSlider.module.scss";
import GalleryWeddingSliderItem from "./GalleryWeddingSliderItem/GalleryWeddingSliderItem";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import Button from "../../Button/Button";
import {SRLWrapper} from "simple-react-lightbox";

const StyledSlider = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  
  .slick-slide img {width: 100%}
  
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  
  @media (min-width: 601px) {
    .slick-list {
    margin-top: -100px;
    }   
    
  }
  
    .slick-dots {
    bottom: -32px;
  }
  .slick-dots li {
    margin: 0
}
`;

const GalleryWeddingSlider = ({blockName = "Фотогалерея", slides}) => {

    const settings = {
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "60px"
                }
            },
            {
                breakpoint: 330,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: "20px"
                }
            },
        ],
        nextArrow: <NextArrow positionStyles={{
            bottom: "-75px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-75px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>
    };

    const items = slides.map((item, index) => {
        if (index === 0) index = 4;
        const {img, title, description, href, key} = item;
        return (
            <div className="SliderElement" key={key}>
                <GalleryWeddingSliderItem
                    first={(index) % 4 === 0}
                    fourth={(index + 1) % 4 === 0}
                    img={img}
                    title={title}
                    description={description}
                    href={href}
                />
            </div>
        );
    });

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

    return (
        <SRLWrapper options={options}>
            <div id='gallery' className={s.wrapper}>
                <div className={s.container}>
                    <HeadlineCenter title={blockName}/>
                    <StyledSlider>
                        <Slider {...settings}>{items}</Slider>
                    </StyledSlider>
                    <div className={s.mobileBlock}>
                        <div className={s.mobileBlockText}>Больше фотографий нашего отеля</div>
                        <Button text={'Перейти к галерее'}/>
                    </div>
                </div>
            </div>
        </SRLWrapper>
    );
};

export default GalleryWeddingSlider;
