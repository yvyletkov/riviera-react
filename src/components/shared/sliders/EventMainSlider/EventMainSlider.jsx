import React from "react";
import Slider from "react-slick";
import s from "./EventMainSlider.module.scss";
import styled from "styled-components";
import HeadlineCenter from "../../HeadlineCenter/HeadlineCenter";
import {NextArrow, PrevArrow} from "../SliderArrows/sliderArrowButtons";
import Button from "../../Button/Button";
import cx from 'classnames'
import CirqleTip from "../../CirqleTip/CirqleTip";
import busIcon from "../../../../img/school-bus.png";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 481px) {
    .slick-slider {
      height: unset;
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .slick-slider {
      height: unset
    }
  }
`;

const SliderStylesManySlider = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    margin: 0 auto;
    display: flex;
    justify-content: start;
  }

  @media screen and (min-width: 481px) {
    .slick-slider {
      height: unset;
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .slick-slider {
      height: unset
    }
  }
`;


// const SliderStylesManySlider = str.replace("Microsoft", "W3Schools");


const EventMainSlider = ({
                             slides,
                             title,
                             titleMobile,
                             initialSlideIndex = 0,
                             manySlides = false,
                             withButton = false,
                             activatePopup,
                             withTip = false,
                             onlyTitle = false,
                             text = null
                         }) => {

    const settings = {
        initialSlide: initialSlideIndex,
        infinite: true,
        slidesToShow: slides.length === 1 ? 1 : 3,
        centerMode: true,
        arrows: manySlides,
        variableWidth: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-20px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, key, descr, popupData} = item;
        return (
            <div className="SliderElement" key={key}>
                <EventMainSliderItem
                    onlyTitle={onlyTitle}
                    withTip={withTip}
                    key={key}
                    index={index}
                    withButton={withButton}
                    img={img}
                    title={title}
                    descr={descr}
                    popupData={popupData}
                    activatePopup={activatePopup}
                    active={!onlyTitle ? (window.matchMedia('(max-width: 490px').matches ? false : index === 1) : false}
                />
            </div>
        );
    });

    const containerStyles = cx(s.container, {[s.withPadding]: manySlides, [s.small]: slides.length === 1})

    return (
        <div className={s.wrapper}>
            <div className={containerStyles}>
                {(window.matchMedia('screen and (max-width: 480px)').matches && slides.length === 1) &&
                <div style={{
                    position: 'absolute',
                    transform: 'rotate(-90deg)',
                    right: '-30%', color: 'rgb(226, 226, 226)',
                    fontFamily: 'Helvetica Neue Black',
                    fontSize: '9vw',
                    lineHeight: '0.8',
                    top: '47%'
                }}>
                    Новые программы<br/>в разработке
                </div>}
                <HeadlineCenter title={window.matchMedia('(max-width: 490px').matches ? titleMobile : title}/>
                {text && <p className={s.text}>{text}</p>}
                {manySlides ? <SliderStylesManySlider><Slider {...settings}>{items}</Slider></SliderStylesManySlider>
                    :
                    <SliderStyles>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>}
                {text && <p className={s.text}>{text}</p>}
            </div>
        </div>
    );
};

export default EventMainSlider;


const EventMainSliderItem = (props) => {
    let [showTip, setShowTip] = React.useState(false);

    const {img, title, descr, active, index, withButton, activatePopup, withTip, onlyTitle} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    return (
        <div className={showDescr ? s.card + ' ' + s.active : s.card}>

            {/*<div className={showTip ? s.tip + ' ' + s.active : s.tip}>*/}
            {/*    <p>Примечание. В течение первых суток пребывания гость посещает врача (первичный прием) .*/}
            {/*        Комплексное лечение назначается с 3-го дня пребывания - после прохождения периода частичной*/}
            {/*        адаптации.*/}
            {/*        * - в тёплое время года.*/}
            {/*        При наличии или возникновении у гостя противопоказаний к процедурам или отказе гостя от*/}
            {/*        приёма входящих в программу процедур, возврат стоимости лечения не производится, замена на*/}
            {/*        другие услуги не осуществляется.*/}
            {/*        Врач может дополнительно рекомендовать расширение объёма и перечня видов процедур:*/}
            {/*        бальнеотерапию, включая сауну, хамам и др., расширенный объем массажа и СПА-уходов,*/}
            {/*        дополнительные методы аппаратного физиотерапевтического воздействия, инъекционную*/}
            {/*        карбокситерапию ( назначается после дополнительной консультации физиотерапевта), расширенный*/}
            {/*        объем пелоидотерапии и другие процедуры, не входящие в данную лечебно - оздоровительную*/}
            {/*        программу - на платной основе.*/}

            {/*        Лечащий врач имеет право вносить предложения по изменениям в программу лечения по*/}
            {/*        согласованию с Главным врачом, в том числе замену процедур на равнозначные, сохранив при*/}
            {/*        этом общую структуру программы.*/}
            {/*    </p>*/}
            {/*</div>*/}

            <img className={s.img} src={img} alt=""/>

            <div className={s.content}>
                <h6 className={onlyTitle ? s.titleSmall : s.title} dangerouslySetInnerHTML={{__html: title}}/>
                {withTip && <CirqleTip accordeonStatus={showTip} onClick={() => setShowTip(!showTip)} forDesktop
                                       style={{marginLeft: '10px'}}/>}


                { !onlyTitle && <>
                    <div className={s.descr}>
                        <p style={{marginBottom: withButton ? '10px' : '0'}}>{descr}</p>
                        {withButton && <Button style={{marginTop: '17px'}} onClick={() => activatePopup(index + 1)}
                                               text={'Подробнее о программе'}/>}
                    </div>


                    <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                        {showDescr ? (withButton ? '' : 'Cкрыть') : 'Подробнее'}
                    </div>
                </> }

            </div>


        </div>);
};
