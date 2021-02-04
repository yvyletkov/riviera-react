import React from "react";
import {crimeaTourPageData, vacationPagesData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/crimea-tour/banner.png";
import img1 from "../../../img/crimea-tour/text-block.jpg";
import groupImg from "../../../img/crimea-tour/group.jpg";
import individualImg from "../../../img/crimea-tour/individual.png";
import s from "./CrimeaTourPage.module.scss";
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
      color: #9e9e9e;
      font-size: 20px;
      font-weight: 600 !important;
      width: fit-content;
      margin: 0 auto 15px;
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

const CrimeaTourPage = () => {

    React.useEffect(() => document.title = `Незабываемый тур в Крым – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    const [accordeonStatus, setAccordeonStatus] = React.useState(false)


    return <>
        <VacationsPageBanner fontSize={["70px", "23.9px"]}
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
                    <img src={img1} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <ProgramsBlock>
            <div className="flex-wrapper">
                <HeadlineCenter title={'Варианты отдыха для Вас'} style={{width: 'fit-content', display: 'block', margin: '0 0 50px'}}/>
                <CirqleTip forDesktop={true} onClick={() => setAccordeonStatus((status) => !status)} accordeonStatus={accordeonStatus}
                style={{marginLeft: '10px', position: 'relative', top: '5px'}}/>
            </div>

            <section className="programs section">
                <div className='container'>
                    <Accordeon forDesktop={true} withBtn={false} zeroHeight status={accordeonStatus}>
                        <p className='welcome-text'>
                            Каждый день <b>Вы сами можете выбрать одно из приключений</b>, и отправится туда в составе
                            экскурсионной
                            группы
                            или выбрать индивидуальный тур, исходя из Ваших предпочтений.<br/><br/>
                            Бронирование экскурсий возможно при бронировании проживания.<br/><br/>
                            Наш консьерж с удовольствием поможет Вам выбрать направление и тур, с учетом Вашего
                            свободного
                            времени,
                            интересующего направления, в необходимые Вам даты.
                        </p>
                    </Accordeon>
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

                            <div className="program-block__price">Цена: от 1 000 ₽</div>

                            <div className="program-block__bottom-btns">
                                <NavLink to="/booking" className="bid__button">Забронировать
                                    проживание</NavLink>
                                <NavLink
                                    to="/excursions"
                                    className="bid__button last popup">Выбрать
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

                            <div className="program-block__price">Цена: от 10 000 ₽</div>

                            <div className="program-block__bottom-btns second">
                                <NavLink to="/booking" className="bid__button popup big">Забронировать
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
                             title={'Разные направления отдыха'}
                             titleMobile={'Разные направления отдыха'} manySlides allClosedAtStart/>
        </section>

        <section className='section'>
            <RoomsSlider blockTitle={'Наши лучшие номера для Вас'} noPaddingTop subtitle={'Корпус'} title={'Модерн'}
                         textContent={vacationPagesData.modernDescr}
                         data={vacationPagesData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={vacationPagesData.classicDescr} data={vacationPagesData.classicSlides}/>
        </section>

        <section className='section'>
            <GridSlider slides={vacationPagesData.gridSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default CrimeaTourPage;

