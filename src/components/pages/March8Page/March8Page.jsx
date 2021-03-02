import React, {useState} from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./March8Page.module.scss";
import BookingBlock from "../../additional/BookingBlock/BookingBlock";
import bannerImg from "../../../img/march8Page/главный.jpg";
import bannerMobileImg from "../../../img/march8Page/главная-mobile.jpg";
import formBluredImg from "../../../img/march8Page/leaves.png";
import img from "../../../img/march8Page/5.jpg";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import {infrastructurePagesData, march8PageData, vacationPagesData} from "../../../data";
import Headline from "../../shared/Headline/Headline";
import ContactForm from "../../additional/ContactForm/ContactForm";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
import CirqleTip from "../../shared/CirqleTip/CirqleTip";

const March8Page = () => {

    React.useEffect(() => document.title = `8 марта в Крыму - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    let [descriptionShown, setDescriptionShown] = React.useState(false);

    return <>

        <section className={s.bannerWrapper}
                 style={{background: 'center url(' + bannerImg + ')', backgroundSize: 'cover'}}>
            <div className={s.container}>
                <div className={s.background}
                     style={{background: 'center url(' + bannerMobileImg + ')', backgroundSize: 'cover'}}/>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2>8 марта</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '8vw' : '60px'}}>Приглашаем</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '13vw' : '79px'}}>На
                                главный</h1>
                            <h3 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '6vw' : '37px'}}
                                className={s.extraline}>женский праздник</h3>
                            <p>6-8 марта</p>
                        </div>

                    </div>
                </div>
            </div>

            <BookingBlock/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon/>
            </div>

        </section>

        <section className={'section first'}>
            <EventMainSlider title={'Для милых дам'} titleMobile={'Для милых дам'}
                             manySlides
                             slides={march8PageData.march8PageMainSlides} onlyTitle initialSlideIndex={1}/>
        </section>

        <section className='section'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Как праздновать'} title={'8 марта?'}/>

                        <p>
                            Подарите любимым женщинам лучший праздник! Заботливая команда отеля Riviera Sunrise с
                            радостью сделает этот день особенным для всех дам. Вас ждет профессиональный и чуткий подход
                            к организации как праздника, так и предпраздничных дней. Мастер классы, комплимент от
                            ресторана, цветы, фотозона, анимация для взрослых, специальное меню, SPA и многое другое для
                            наших гостей в этот прекрасный праздник – 8 марта.
                        </p>

                    </div>
                    <img className={s.wide} src={img} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <section className='section'>
            <div className={s.formBlock}>
                <div className={s.wrapper}>
                    <img className={s.bluredImg} src={formBluredImg} alt=""/>

                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>7 марта приглашаем Вас</span>
                            <span>на праздничный вечер в честь</span>
                            <span>ПРЕКРАСНЫХ ДАМ!</span>
                        </h4>
                        <div className={s.descriptionBtn} onClick={() => setDescriptionShown(!descriptionShown)}>
                            Подробнее&nbsp;&nbsp;• • •
                        </div>
                        <div className={s.descriptionWrapper}>
                            <div className={descriptionShown ? s.description + ' ' + s.shown : s.description}>
                                <p dangerouslySetInnerHTML={{__html: '' +
                                        '18:00 -19:00' +
                                        '<ul>' +
                                        '<li>Приветственный Welcome-коктейль в холле, комплимент от шеф-кондитера всем Дамам</li> ' +
                                        '<li>Фотозона</li>' +
                                        '</ul>' +
                                        '</br>' +
                                        '19:00-22:55' +
                                        '<ul>' +
                                        '<li>Праздничный ужин в банкетном зале «Ballroom»</li>' +
                                        '<li>Выступление кавер-группы «Plus Bonus Band» </li>' +
                                        '<li>Танцевальный Шоу – номер от дуэта «Alter EGO»</li>' +
                                        '<li>Розыгрыш призов</li>' +
                                        '<li>DJ - сет</li>' +
                                        '<li>Стоимость - 2500₽ за персону и бутылка алкоголя в подарок!</li>' +
                                        '</ul>'}}/>
                            </div>
                        </div>
                        <p>Оставьте свой телефон для бронирования стола на праздничном банкете</p>

                        <ContactForm submitBtnText={'Забронировать'}
                                     formName={`Форма расчета стоимости 8 марта`}
                                     withPhone
                                     swalText={'очень скоро мы свяжемся с Вами и сообщим все подробности'}
                                     requestUrl={'https://8march.rivierasunrise.ru/8-march'}/>

                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <InfraMainSlider title={'День полного релакса'} slides={infrastructurePagesData.spaPage.slides}/>
        </section>

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={vacationPagesData.modernDescr}
                         data={vacationPagesData.modernSlides} noPaddingTop/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={vacationPagesData.classicDescr} data={vacationPagesData.classicSlides}/>
        </section>

        <section className='section'>
            <GridSlider slides={vacationPagesData.gridSlides}/>
        </section>

        <section className='section'>
            <CenteredSlider title={'Актуальные мероприятия'} slides={vacationPagesData.centeredSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'Акции'} btnLink={'/offers'}
                            slides={vacationPagesData.specialsSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>


    </>

};

export default March8Page;

