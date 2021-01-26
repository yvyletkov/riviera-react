import React from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./DefenderOfTheFatherlandDay.module.scss";
import BookingBlock from "../../additional/BookingBlock/BookingBlock";
import bannerImg from "../../../img/defenderDay/banner.jpg";
import bannerMobileImg from "../../../img/defenderDay/banner-mob.jpg";
import img from "../../../img/defenderDay/6.jpg";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import {defenderDayPageData, infrastructurePagesData, vacationPagesData} from "../../../data";
import Headline from "../../shared/Headline/Headline";
import ContactForm from "../../additional/ContactForm/ContactForm";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
// import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";

const DefenderDayPage = () => {

    React.useEffect(() => document.title = `23 февраля в Крыму - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>

        <section className={s.bannerWrapper}
                 style={{background: 'center url(' + bannerImg + ')', backgroundSize: 'cover'}}>
            <div className={s.container}>
                <div className={s.background}
                     style={{background: 'center url(' + bannerMobileImg + ')', backgroundSize: 'cover'}}/>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2>21-23 февраля</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '11vw' : '85px', display: 'inline', paddingTop:'20px'}}>Отмечай</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '7vw' : '45px'}}>Мужской
                                праздник</h1>
                            <h3 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '7vw' : '40px'}}
                                className={s.extraline}>в стиле казино</h3>
                            <p>с нами</p>
                        </div>

                    </div>
                </div>
            </div>

            <BookingBlock/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon white/>
            </div>

        </section>

        <section className={'section first'}>
            <EventMainSlider title={'Для настоящих мужчин'} titleMobile={'Для настоящих мужчин'}
                             manySlides
                             slides={defenderDayPageData.defenderDayMainSlides} onlyTitle initialSlideIndex={1}/>
        </section>

        <section className='section'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Как праздновать'} title={'23 февраля?'}/>

                        <p>
                            Заботливая команда отеля Riviera Sunrise с радостью ответил на этот вопрос и сделал всё,
                            чтобы этот день стал особенным для вас! Вас ждет профессиональный и чуткий подход к
                            организации как праздника, так и предпраздничных дней. Тематическое оформление ресторана,
                            шоу-программа, фотозона, анимация для взрослых, специальное меню, SPA и многое другое для
                            наших гостей в этот прекрасный праздник – 23 февраля.
                        </p>

                    </div>
                    <img className={s.wide} src={img} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

        <section className='section'>
            <div className={s.formBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Нестандартное</span>
                            <span>приключение для</span>
                            <span>настоящего мужчины</span>
                        </h4>
                        <p>Оставьте свой телефон, и мы рассчитаем стоимость вашего приключения</p>

                        <ContactForm submitBtnText={'Отправить'}
                                     formName={`Форма расчета стоимости 23 февраля`} withPhone
                                     swalText={'очень скоро мы свяжемся с Вами и сообщим все подробности'}/>

                    </div>
                </div>
            </div>
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
            <CenteredSlider title={'Сегодня в программе'} slides={vacationPagesData.centeredSlides}/>
        </section>

        <section className='section'>
            <SpecialsSlider subtitle={'Лучшие'} title={'спецпредложения'} btnLink={'/offers'}
                            slides={vacationPagesData.specialsSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>


    </>

};

export default DefenderDayPage;

