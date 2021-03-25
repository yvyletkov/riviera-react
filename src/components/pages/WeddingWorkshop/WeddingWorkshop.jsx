import React from "react";
import {crimeaTourPageData, homePageData, vacationPagesData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/crimea-tour/banner.png";
import img1 from "../../../img/crimea-tour/text-block.jpg";
import groupImg from "../../../img/crimea-tour/group.jpg";
import individualImg from "../../../img/crimea-tour/individual.png";
import s from "./WeddingWorkshop.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import styled from "styled-components"
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import {NavLink} from "react-router-dom";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import FoodBlock from "../../shared/FoodBlock/FoodBlock";
import Accordeon from "../../shared/Accordeon/Accordeon";
import CirqleTip from "../../shared/CirqleTip/CirqleTip";
import GallerySlider from "../../shared/sliders/GallerySlider/GallerySlider";

const ProgramsBlock = styled.div`
  .container {
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    > p {
      font-size: 15px;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: center;
  }

  .programs {

    h3 {
      text-transform: uppercase;
      font-size: 34px;
      text-align: center;
      margin-bottom: 35px;
      font-weight: bolder;
    }

    p {
      font-size: 15px;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    }

    .welcome-text {
      margin-bottom: 40px;
    }


    .program-blocks-wrapper {
      display: flex;
      justify-content: center;
    }

    .program-block {
      border-radius: 6px;
      position: relative;
      width: 385px;
      //height: 545px;
      background-color: rgb(255, 255, 255);
      box-shadow: -9.08px 17.82px 49px 0px rgba(23, 23, 23, 0.11);
    }


    .program-block__img {
      width: calc(100% + 50px);
      margin-left: -25px;
      margin-bottom: 24px;
      height: 210px;
      object-fit: cover;
    }

    .program-block__text {
      text-align: justify;
      font-size: 14px !important;
      line-height: 1.3;
    }

    .program-block__content {
      padding: 30px 25px 0;
    }

    .programs-block__subtitle {
      text-align: center;
      font-size: 14px;
      color: #8a8a8a;
    }

    .programs-block__title {
      white-space: nowrap;
      text-align: center;
      font-size: 28px;
      margin-bottom: 25px;
      line-height: 1.4;
    }

    .program-block__list-item {
      font-size: 16px;
      position: relative;
      padding-left: 20px;
      line-height: 1.2;
    }

    .program-block__list-item::before {
      content: "";
      width: 14px;
      height: 10px;
      display: block;
      position: absolute;
      left: -4px;
      top: 5px;
    }

    .program-block__bottom-btns {
      text-align: center;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      //position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 5px;
      margin-bottom: 19px;
    }

    .program-block__bottom-text {
      font-size: 11px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 10px;
      width: 95%;
      line-height: 1.3;

      a {
        //display: block;
        font-size: 13px;
        line-height: 2;
        margin: 5px 7px !important;

        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }

    .program-block__bottom-text.second {
      width: 98%;
    }


    //.program-block__price {
    //  font-size: 25px;
    //  margin-bottom: 29px;
    //}

    .program-block__price {
      text-align: center;

      p:first-child {
        font-size: 20px;
        margin-bottom: 5px;
      }

      p:last-child {
        font-size: 26px;
        font-family: "Helvetica Neue Bold", sans-serif;
        color: #fe6c39;
        margin: 0 auto 15px;

      }

    }

    .bid__button {
      align-items: center;
      justify-content: center;
      display: inline-flex;
      cursor: pointer;
      border-radius: 5px;
      background-color: rgb(255, 108, 57);
      box-shadow: 1.145px 5.89px 16px 0px rgba(23, 23, 23, 0.24);
      width: 140px;
      height: 52px;
      border: 1px solid #fe6c39;
      color: #fff;
      font-size: 16px;
      margin-right: 10px;
      transition: all 300ms;

      &.light {
        background-color: transparent;
        color: #fe6c39;
        border: 1px solid #fe6c39;

        &:hover {
          border-color: rgb(210, 90, 49);
        }

      }
    }

    .bid__button.big {
      width: 200px;
      margin-right: 0;
    }

    .bid__button.last {
      margin-right: 0;
    }

    .wrap__text .bid__button {
      margin: 30px 0 0;
    }

    .bid__button:hover {
      background-color: rgb(210, 90, 49);
      text-decoration: none;
      color: #fff;
    }


    .program-block:not(:last-child) {
      margin-right: 50px;
    }

  }

  @media (max-width: 767px) {
    .container {
      box-sizing: border-box;
    }

    .program-block__text {
      margin-bottom: 20px !important;
    }

    .program-blocks-wrapper {
      flex-wrap: wrap;
    }

    .program-block:not(:last-child) {
      margin: 0 !important;
      margin-bottom: 40px !important;
    }

    .programs h3 {
      font-size: 28px;
      text-transform: lowercase;
      margin-bottom: 20px;
    }

    .programs h3:first-letter {
      text-transform: uppercase;
    }
  }

`

const WeddingWorkshop = () => {

    React.useEffect(() => document.title = `Свадебный переполох – Workshop – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    const [accordeonStatus, setAccordeonStatus] = React.useState(false)


    return <>
        <VacationsPageBanner fontSize={["50px", "70px"]}
                             fontSizeMobile={["8.3vw", "11.7vw"]}
                             subtitle={'Сбор гостей в 12:00 и в 15:00.'}
                             topLine={"Workshop"}
                             bottomLine={"Свадебный<br/>переполох"}
                             extraLine={['25 апреля 2021 года', '3.9vw', '27px']}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                             descr={'<p><b>Включено в стоимость</b></p><ul><li>Экскурсионная программа</li><li>Питание</li><li>SPA услуги</li><li>Развлекательная программа</li></ul>'}/>

        <section className='section first'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Что мы предлагаем?'} title={'Свадебный переполох'}/>

                        <p>Если вы планируете свою свадьбу в Крыму в 2021 году, то мы готовы рассказать вам всё о
                            свадьбах!
                        </p>
                        <p>
                            Как сделать этот день особенным, как избежать ошибок и реализовать все самые смелые идеи?
                            Профессионалы свадебной индустрии Крыма соберутся вместе на одной из лучших свадебных
                            площадок Крыма - финалисты Wedding Awards Yug - отель Riviera Sunrise, город Алушта.
                            Гости мероприятия смогут познакомиться с организаторами, ведущими, фотографами, декораторами
                            и другими специалистами event-индустрии.
                        </p>
                        <p>
                            Мы ответим на все ваши вопросы и сделаем это воскресный день вдохновляющим и прекрасным.
                            Мероприятие пройдет в формате свадебной выставки.
                        </p>

                    </div>
                    <img src={img1} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <ProgramsBlock>
            <div className="flex-wrapper">
                <HeadlineCenter title={'Зарегистрируйтесь на мероприятие'}
                                style={{width: 'fit-content', display: 'block', margin: '0 0 50px'}}/>
            </div>

            <section className="programs section">
                <div className='container'>
                    <div className="program-blocks-wrapper">
                        <div className="program-block">
                            <div className="program-block__content">
                                <div className="programs-block__title">Групповые экскурсии</div>
                                <img src={groupImg}
                                     className="program-block__img" alt="Групповые экскурсии"/>

                                <p className="program-block__text">
                                    Предлагаем вам в составе групп посетить лучшие экскурсионные маршруты по Крыму в
                                    сопровождении
                                    аттестованных гидов-экскурсоводов на комфортабельных микроавтобусах (Mercedes,
                                    Volkswagen,
                                    Mitsubishi), оснащенных кондиционерами и микрофонам.
                                </p>

                            </div>

                            <div className="program-block__price">
                                <p>Стоимость:</p>
                                <p>от 1 000 ₽</p>
                            </div>

                            <div className="program-block__bottom-btns">
                                <NavLink to="/booking/?promo-offer=mir" className="bid__button">Забронировать
                                    проживание</NavLink>
                                <NavLink
                                    to="/excursions"
                                    className="bid__button last light">Выбрать
                                    экскурсию</NavLink>
                            </div>

                            <div className="program-block__bottom-text">
                                *стоимость за 1 экскурсию, на 1 человека + к стоимости проживания
                            </div>

                        </div>

                        <div className="program-block">
                            <div className="program-block__content">
                                <div className="programs-block__title">Индивидуальные туры</div>

                                <img src={individualImg}
                                     className="program-block__img" alt="Индивидуальные туры"/>

                                <p className="program-block__text">
                                    Предлагаем Вам индивидуальное обслуживание гида экскурсовода в поездке по
                                    удивительному
                                    Крымскому полуострову на комфортабельных автомобилях Mercedes, Volkswagen.
                                </p>

                            </div>

                            <div className="program-block__price">
                                <p>Стоимость:</p>
                                <p>от 10 000 ₽</p>
                            </div>

                            <div className="program-block__bottom-btns second">
                                <NavLink to="/booking/?promo-offer=mir" className="bid__button big">Забронировать
                                    проживание</NavLink>
                            </div>


                            <div className="program-block__bottom-text second">
                                *На все интересующие Вас вопросы, касающиеся индивидуальных экскурсий по Крыму
                                ответит
                                Консьерж
                                отеля Riviera Sunrise Resort & SPA<br/>
                                <a
                                    href="tel:89789726509">8(978)972-65-09</a>
                                <a href="tel:89384565211">8(938)456-52-11</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </ProgramsBlock>

        <section className='section'>
            <EventMainSlider slides={crimeaTourPageData.crimeaTourPageMainSlides}
                             title={'Наши площадки'} manySlides allClosedAtStart/>
        </section>

        <section className='section'>
            <EventMainSlider slides={crimeaTourPageData.crimeaTourPageMainSlides}
                             title={'Наши участники'} manySlides allClosedAtStart/>
        </section>

        <section className='section'>
            <GallerySlider slides={homePageData.gallerySlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default WeddingWorkshop;

