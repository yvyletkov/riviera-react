import React from "react";
import {eventPagesData, LanguageCampData, participantsSlides} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import img1 from "../../../img/workshop/1.jpg";
import img2 from "../../../img/workshop/2.jpg";
import img3 from "../../../img/workshop/3.jpg";
import img4 from "../../../img/events/wedding/kitchen2.jpg";
import bannerImg from "../../../img/banners/workshop-banner.jpg"
import bannerImgMobile from "../../../img/workshop/banner mobile.jpg";
import s from "./WeddingWorkshop.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import styled from "styled-components"
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import Button from "../../shared/Button/Button";
import EventPageBanner from "../events/EventPageBanner/EventPageBanner";
import GalleryWeddingSlider from "../../shared/sliders/GalleryWeddingSlider/GalleryWeddingSlider";
import img from "../../../img/home-page/textimg.jpg";
import {request, strapiUrl} from "../../../api";
import marked from "marked"
import whatsappIcon from "../../../img/icons/whatsapp.svg";

const FormsBlock = styled.div`
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
      padding: 30px 25px 20px;

      form > div, form > select {
        margin-bottom: 10px;
      }
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
      margin-bottom: 30px;
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

    React.useEffect(() => document.title = `Riviera Wedding Date – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    const [programContent, setPogramContent] = React.useState('')

    React.useEffect((() => {
        request(null, "GET", `${strapiUrl}/wedding-workshop-program/`).then(async res => {
            if (res.status === 200) {
                const data = await res.json()
                setPogramContent(data.content)
            }
        })
    }), [])

    return <>

        <EventPageBanner fontSize={['70px', '94px', '58px']} mobileFontSize={['13.2vw', '18vw', '9.5vw']}
                         titles={['25 апреля 2021 года', 'Вечеринка', 'Riviera', 'Wedding Day']}
                         bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}
                         blackFont={false}
                         extraText={'Вход бесплатный*'}
                         extraText2={'* при условии обязательной регистрации'}
                         btnText={'Подробнее'}
                         withCircles
                         anchor={'program'}
        />

        <section className='section first'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Что мы предлагаем?'} title={'RIVIERA WEDDING DAY'}/>

                        <p><b>Если вы планируете свою свадьбу в Крыму в 2021 году, то мы готовы рассказать вам всё о
                            свадьбах!</b>
                        </p>
                        <p>
                            Как сделать этот день особенным, как избежать ошибок и реализовать все самые смелые идеи?
                        </p>
                        <p>
                            Профессионалы свадебной индустрии Крыма соберутся вместе на одной из лучших свадебных
                            площадок Крыма – финалиста Wedding Awards Yug 2021 - отель Riviera Sunrise, город Алушта.
                        </p>
                        <p>
                            Гости мероприятия смогут познакомиться с организаторами, ведущими, фотографами, декораторами
                            и другими специалистами event-индустрии.
                        </p>
                        <p>
                            Мы ответим на все ваши вопросы и сделаем это воскресный день вдохновляющим и прекрасным.
                        </p>
                        <p>
                            Мероприятие пройдет в формате свадебной выставки.
                        </p>

                        <Button withIcon
                                text={'Напишите нам в Whatsapp'}
                                icon={whatsappIcon}
                                href={'https://wa.me/79877541784'}/>

                    </div>
                    <img src={img1} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <section className='section'>
            <div className={s.secondTextBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>

                        <div className={s.imageBlock}>
                            <img src={img2} alt="Riviera Sunrise"/>
                        </div>

                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                {/*<Headline subtitle={'Вам предстоит'} title={'Ответственное решение'}/>*/}

                                <p>
                                    <b>
                                        Настоящий профессионал на вес золота?!
                                        Каждый человек, работающий в свадебной индустрии это знает.
                                    </b>
                                </p>

                                <p>Специалисты свадебной индустрии могут поучаствовать в деловом нетворкинге и
                                    воркшопах:
                                    <ul>
                                        <li>speed dating - формат быстрого знакомства специалистов друг с другом. Этот
                                            формат позволяет максимально быстро найти необходимого подрядчика в регионе.
                                        </li>
                                        <li>эффективные продажи в 2021 году.
                                            Самые полезные коды для активизации продаж. Способы выхода на новых
                                            клиентов.
                                        </li>
                                        <li>
                                            мастер-класс «Финансовая грамотность свадебного специалиста». Все о деньгах в свадебной индустрии.
                                        </li>
                                        <li>живое общение и выступление артистов</li>
                                    </ul>
                                </p>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>

        <FormsBlock>
            <div className="flex-wrapper">
                <HeadlineCenter title={'Зарегистрируйтесь на мероприятие'}
                                style={{
                                    width: 'fit-content',
                                    display: 'block',
                                    margin: window.matchMedia('(max-width: 450px)').matches ? '0 0 30px' : '0 0 60px'
                                }}/>
            </div>

            <section className="programs section">
                <div className='container'>
                    <div className="program-blocks-wrapper">

                        <div className="program-block">
                            <div className="program-block__content">
                                <div className="programs-block__title">Вы невеста?</div>
                                <Button text={'Заполнить форму'}
                                        otherWindow
                                        href={'https://docs.google.com/forms/d/e/1FAIpQLSeTZ_xEcOWhxfhbtnE3mZ4xLo3w6ZQ0_k57tSP8jtdHKgddQA/viewform'}/>
                            </div>
                        </div>

                        <div className="program-block">
                            <div className="program-block__content">
                                <div className="programs-block__title">Вы организатор?</div>
                                <Button text={'Заполнить форму'}
                                        otherWindow
                                        href={'https://docs.google.com/forms/d/e/1FAIpQLSdToMEs2AyrAIbxuJmVgc37x8R3qqKT757siBOYYXJAjPhO-Q/viewform'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </FormsBlock>

        <section className='section' id='places'>
            <EventMainSlider slides={eventPagesData.visitingCeremony.ceremonyMainSlides}
                             manySlides
                             title={'Наши площадки'}/>
        </section>

        <section className='section'>
            <EventMainSlider slides={participantsSlides}
                             title={'Наши партнеры'}
                             manySlides
                             squaredCards
                             />
        </section>

        <section className='section' id='program' >
            <div className={s.programBlockwrapper}>
                <div className={s.container}>
                    <img className={s.rightImg} src={img4} alt=""/>

                    <div className={s.textContent}>
                        <Headline subtitle={'RIVIERA WEDDING DAY'} title={'Программа мероприятия'}/>
                        <p dangerouslySetInnerHTML={{__html: marked(programContent)}}/>
                        <img className={s.leftImg} src={img3} alt=""/>

                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <GalleryWeddingSlider blockName={'Фотогалерея'}
                                  slides={eventPagesData.weddingPages.weddingGallerySlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default WeddingWorkshop;

