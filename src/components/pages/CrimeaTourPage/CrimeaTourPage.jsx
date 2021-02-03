import React from "react";
import {TheGrilledData, vacationPagesData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/the-grilled/restoran-gril.png";
import img1 from "../../../img/the-grilled/restoran-gril-1.jpg";
import s from "./CrimeaTourPage.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import decisionBlockImg from "../../../img/mice/conference/14.jpg";

import styled from "styled-components"
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import {NavLink} from "react-router-dom";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";

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
      margin-bottom: 80px;
      
      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    }


    .program-blocks-wrapper {
      display: flex;
      justify-content: center;
    }

    .program-block {
      position: relative;
      width: 385px;
      height: 545px;
      background-color: rgb(255, 255, 255);
      box-shadow: -9.08px 17.82px 49px 0px rgba(23, 23, 23, 0.11);
    }


    .program-block__img {
      width: 100%;
      margin-bottom: 24px;
    }

    .program-block__text {
      text-align: justify;
      font-size: 14px !important;
      line-height: 17px;
    }

    .program-block__content {
      padding: 37px 18px 0;
    }

    .programs-block__subtitle {
      text-align: center;
      font-size: 14px;
      color: #8a8a8a;

    }

    .programs-block__title {
      text-align: center;
      font-size: 28px;
      margin-bottom: 20px;
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

    .program-block__bottom {
      text-align: center;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 29px 55px;
      
   
    }

    .program-block__bottom.second {
      padding-bottom: 105px;
    }


    .program-block__bottom__text {
      font-size: 11px;
      width: 95%;
      line-height: 12px;
      position: absolute;
      bottom: 21px;
      left: 50%;
      transform: translateX(-50%);

      a {
        display: block;
        font-size: 13px;
        margin: 5px 0!important;
        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }

    .program-block__bottom__text.second {
      width: 98%;
    }


    .program-block__price {
      font-size: 25px;
      margin-bottom: 29px;
    }

    .program-block__price-absolute {
      position: absolute;
      top: 13px;
      left: 50%;
      color: #444444;
      transform: translateX(-50%);
      font-size: 17px;
      font-weight: 600 !important;
      width: fit-content;
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
      border: none;
      color: #fff;
      font-size: 16px;
      margin-right: 10px;
      transition: all 300ms;
    }

    .bid__button.big {
      width: 200px;
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

const CrimeaTourPage = () => {

    React.useEffect(() => document.title = `Незабываемый тур в Крым – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return <>
        <VacationsPageBanner fontSize={["70px", "27px"]}
                             fontSizeMobile={["11.7vw", "4.0vw"]}
                             subtitle={'Незабываемый'}
                             topLine={"Тур в Крым"}
                             bottomLine={"Мы знаем, какой тур Вам нужен"}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                             descr={'<p><b>Включено в стоимость</b></p><ul><li>Экскурсионная программа</li><li>Питание</li><li>SPA услуги</li><li>Развлекательная программа</li></ul>'}/>

        <section className='section first'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Побывав в нашем отеле'} title={'Вы посетите весь Крым'}/>

                        <p>• увидеть исторические
                            достопримечательности:
                            дворцы, крепости, музеи<br/>
                            • посетить природные красоты: горные тропинки и морские просторы, парковые ансамбли<br/>
                            • попробовать местную кухню, посетить кулинарные мастер-классы и отведать морских
                            деликатесов<br/>
                            • для любителей активного отдыха: джип туры и пешие прогулки по красивейшим местам,
                            подводные<br/>
                            погружения и полеты на парашютах над морем<br/>
                            • для наших маленьких гостей предусмотрены экскурсии в Ялтинский зоопарк, Парк львов
                            Тайган,
                            обсерваторию
                        </p>

                    </div>
                    <img className={s.wide} src={img1} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <ProgramsBlock>
            <HeadlineCenter title={'Варианты отдыха для Вас'}/>
            <section className="programs section">
                <div className='container'>
                    <p>
                        Каждый день <b>Вы сами можете выбрать одно из приключений</b>, и отправится туда в составе
                        экскурсионной
                        группы
                        или выбрать индивидуальный тур, исходя из Ваших предпочтений.<br/><br/>
                        Бронирование экскурсий возможно при бронировании проживания.<br/><br/>
                        Наш консьерж с удовольствием поможет Вам выбрать направление и тур, с учетом Вашего свободного
                        времени,
                        интересующего направления, в необходимые Вам даты.

                    </p>
                    <div className="program-blocks-wrapper">
                        <div className="program-block">
                            <div className="program-block__content">
                                <div className="programs-block__title">Групповые экскурсии</div>
                                <div className="program-block__price-absolute">от 1 000 рублей</div>
                                <img src="/wp-content/themes/riviera/images/crimea-tour/programs/1.jpg"
                                     className="program-block__img" alt="Групповые экскурсии"/>

                                <p className="program-block__text">
                                    Предлагаем вам в составе групп посетить лучшие экскурсионные маршруты по Крыму в
                                    сопровождении
                                    аттестованных гидов-экскурсоводов на комфортабельных микроавтобусах (Mercedes,
                                    Volkswagen,
                                    Mitsubishi), оснащенных кондиционерами и микрофонам.
                                </p>

                            </div>
                            <div className="program-block__bottom">
                                <NavLink to="/booking" className="bid__button">Забронировать
                                    проживание</NavLink>
                                <NavLink
                                    to="/excursions"
                                    className="bid__button last popup">Выбрать
                                    экскурсию</NavLink>

                                <div className="program-block__bottom__text">
                                    *стоимость за 1 экскурсию, на 1 человека + к стоимости проживания
                                </div>
                            </div>

                        </div>

                        <div className="program-block">
                            <div className="program-block__content">
                                <div className="programs-block__title">Индивидуальные туры</div>
                                <div className="program-block__price-absolute">от 10 000 рублей</div>

                                <img src="/wp-content/themes/riviera/images/crimea-tour/programs/2.jpg"
                                     className="program-block__img" alt="Индивидуальные туры"/>

                                <p className="program-block__text">
                                    Предлагаем Вам индивидуальное обслуживание гида экскурсовода в поездке по
                                    удивительному
                                    Крымскому полуострову на комфортабельных автомобилях Mercedes, Volkswagen.
                                </p>

                            </div>
                            <div className="program-block__bottom second">
                                <NavLink to="/booking" className="bid__button popup big">Забронировать
                                    проживание</NavLink>
                                <div className="program-block__bottom__text second">
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
                </div>
            </section>
        </ProgramsBlock>

        <section className='section'>
            <EventMainSlider slides={TheGrilledData.theGrilledMainSlides}
                             title={'Разные направления отдыха'}
                             titleMobile={'Разные направления отдыха'} manySlides />
        </section>

        <section className='section'>
            <RoomsSlider noPaddingTop subtitle={'Корпус'} title={'Модерн'} textContent={vacationPagesData.modernDescr}
                         data={vacationPagesData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={vacationPagesData.classicDescr} data={vacationPagesData.classicSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default CrimeaTourPage;

