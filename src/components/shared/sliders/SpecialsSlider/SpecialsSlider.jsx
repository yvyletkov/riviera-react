import React from "react";
import Slider from "react-slick";
import s from "./SpecialsSlider.module.scss";
import SpecialsSliderItem from "./SpecialsSliderItem/SpecialsSliderItem";
import styled from "styled-components";
import Headline from "../../Headline/Headline";
import arrowImg from "../../../../img/icons/right-arrow.svg";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import Button from "../../Button/Button";
import PopupContactForm from "../../../additional/ContactForm/PopupContactForm";

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
    margin-top: 17%;
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

const SpecialsSlider = ({ title = "Заголовок", subtitle = "Какой-то", btnLink, slides, text, btnText = 'Смотреть все предложения'}) => {

    let [popupOpen, setPopupOpen] = React.useState(false);

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

  const items = slides.map((item, index) => {
        const {img, title, subtitle, link, cashback = false} = item;
        return (
            <div className="SliderElement" key={index}>
                <SpecialsSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    active={index===1}
                    link={link}
                    cashback={cashback}
                />
            </div>
        );
    });

    return (
        <div className={s.wrapper} id='extra'>
            <div className={s.container}>
                <div className={s.leftBlock}>
                    <Headline subtitle={subtitle} title={title}/>
                    <p>{text}</p>

                    <PopupContactForm popupOpen={popupOpen} setPopupOpen={setPopupOpen}
                                      popupTitleText={'Для этого, пожалуйста, оставьте свои контактные данные️'}
                                      submitBtnText={btnText}
                                      formName={`Форма из блока "Дополнительные услуги" (получить прайс по услугам)`}
                                      swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}
                                      withEmail withPhone/>
                </div>
                <div className={s.rightBlock}>
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>
                </div>
                <Button text={btnText} onClick={
                    !btnLink ? () => setPopupOpen(true) : () => window.location = btnLink
                } link={btnLink ? btnLink : null} style={!window.matchMedia("(max-width: 768px)").matches ? {width: "210px", marginLeft:"10px"} : {width: 'calc(100vw - 40px)', margin: '0 auto', marginTop:'40px'}}/>
            </div>
        </div>
    );
};

export default SpecialsSlider;
