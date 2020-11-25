import React from "react";
import s from "./PromotionsPage.module.scss";
import {promotionsPageData} from "../../../data";
import Slider from "react-slick";
import styled from "styled-components";
import {NextArrow, PrevArrow} from "../../shared/sliders/SliderArrows/sliderArrowButtons";
import SpecialsSliderItem from "../../shared/sliders/SpecialsSlider/SpecialsSliderItem/SpecialsSliderItem";
import MapSection from "../../shared/MapSection/MapSection";


const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-slider {
    margin-top: 90px;
  }
  .slick-dots li {
    margin: 0
  }
  
.slick-slide img {
  width: 100%;
  margin: 0 40px 0 0;
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

const PromotionsPage = () => {

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            right: "calc(50% - 60px)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            left: "calc(50% - 60px)"
        }}/>,
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

    const items = promotionsPageData.slides.map((item, index) => {
        const {img, title, subtitle, key, link} = item;
        return (
            <div className="SliderElement" key={key}>
                <SpecialsSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    active={index === 1}
                    link={link}
                />
            </div>
        );
    });

    return (<>
            <section className='section'>
                <div className={s.wrapper}>
                    <div className={s.container}>

                        <div className={s.topRow}>
                            <h4 className={s.title}>
                                <span>Акции</span>
                                <span>и специальные</span>
                                <span>предложения</span>
                            </h4>
                            <div className={s.textContent}>
                                <p><b>Воспользуйтесь специальными предложениями от отеля Riviera Sunrise!</b></p>
                                <p>Интересные акции, новинки и скидки – позволят Вам отдохнуть еще выгоднее. Планируйте
                                    свой отдых, приезжайте и получайте максимум приятных эмоций от времени, проведенного
                                    вместе с нами!</p>
                            </div>
                        </div>

                    </div>

                    <div className={s.sliderContainer}>
                        <div className={s.sliderTitle}>Активные спецпредложения</div>
                        <SliderStyles>
                            <Slider {...settings}>{items}</Slider>
                        </SliderStyles>
                    </div>

                    <div className={s.sliderContainer}>
                        <div className={s.sliderTitle}>Прошедшие спецпредложения</div>
                        <SliderStyles>
                            <Slider {...settings}>{items}</Slider>
                        </SliderStyles>
                    </div>
                </div>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default PromotionsPage;
