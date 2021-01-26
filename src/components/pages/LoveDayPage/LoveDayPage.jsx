import React, {useEffect} from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./LoveDayPage.module.scss";
import BookingBlock from "../../additional/BookingBlock/BookingBlock";
import bannerImg from "../../../img/loveDay/banner.jpg";
import bannerMobileImg from "../../../img/loveDay/bannerMobile.jpg";
// import icon1 from "../../../img/loveDay/icons/1.png";
// import icon2 from "../../../img/loveDay/icons/2.png";
// import icon3 from "../../../img/loveDay/icons/3.png";
import formBluredImg from "../../../img/loveDay/petal.png";
import img from "../../../img/loveDay/4.jpg";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import {infrastructurePagesData, loveDayPageData, vacationPagesData} from "../../../data";
import Headline from "../../shared/Headline/Headline";
import ContactForm from "../../additional/ContactForm/ContactForm";
import InfraMainSlider from "../../shared/sliders/InfraMainSlider/InfraMainSlider";
import RoomsSlider from "../../shared/sliders/RoomsSlider/RoomsSlider";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import CenteredSlider from "../../shared/sliders/CenteredSlider/CenteredSlider";
import SpecialsSlider from "../../shared/sliders/SpecialsSlider/SpecialsSlider";
// import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";

const LoveDayPage = () => {

    React.useEffect(() => document.title = `14 февраля в Крыму - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>

        <section className={s.bannerWrapper}
                 style={{background: 'center url(' + bannerImg + ')', backgroundSize: 'cover'}}>
            <div className={s.container}>
                <div className={s.background} style={{background: 'center url(' + bannerMobileImg + ')', backgroundSize: 'cover'}}/>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2>Kids free</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '11vw' : '85px'}}>Отмечай</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '12vw' : '76px'}}>14
                                февраля</h1>
                            <h3 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '11vw' : '56px'}}
                                className={s.extraline}>с нами</h3>
                            <p>12-14 февраля</p>
                        </div>

                    </div>
                </div>
            </div>

            <BookingBlock/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon black/>
            </div>

        </section>

        {/*{ !window.matchMedia('(max-width: 620px)').matches && <section className={'section first'}>*/}
        {/*    <HeadlineCenter title={'Вас ожидает'}/>*/}
        {/*    <div className={s.iconsWrapper}>*/}
        {/*        <div className={s.container}>*/}
        {/*            <div className={s.item}>*/}
        {/*                <img src={icon1} alt=""/>*/}
        {/*                <div>Романтическая<br/>атмосфера</div>*/}
        {/*            </div>*/}

        {/*            <div className={s.item}>*/}
        {/*                <img src={icon2} alt=""/>*/}
        {/*                <div>Комплимент<br/>от отеля</div>*/}
        {/*            </div>*/}

        {/*            <div className={s.item}>*/}
        {/*                <img src={icon3} alt=""/>*/}
        {/*                <div>Программа<br/>для влюбленных</div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section> }*/}

        <section className={'section first'}>
            <EventMainSlider title={'Три дня незабываемой романтики'} titleMobile={'Три дня незабываемой романтики'}
                             manySlides
                             slides={loveDayPageData.loveDayMainSlides} onlyTitle initialSlideIndex={1}/>
        </section>

        <section className='section'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <Headline subtitle={'Что делать'} title={'14 февраля?'}/>

                        <p>
                            <b>Как отпраздновать 14 февраля с любимым человеком?</b>
                        </p>

                        <p>
                            Заботливая команда отеля Riviera Sunrise с радостью ответила на этот вопрос и сделала всё,
                            чтобы этот день стал особенным для вас! Вас ждет профессиональный и чуткий подход к
                            организации как праздника, так и предпраздничных дней. Романтичное оформление ресторана,
                            цветы, свечи, фотозона, анимация для взрослых, специальное меню, SPA и многое другое для
                            наших гостей в этот прекрасный праздник – 14 февраля.
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
                            <span>Позвольте себе</span>
                            <span>день, посвященный</span>
                            <span>вашей любви</span>
                        </h4>
                        <p>Оставьте свой телефон, и мы рассчитаем стоимость романтического уикенда</p>

                        <ContactForm submitBtnText={'Отправить'}
                                     formName={`Форма расчета стоимости 14 февраля`} withPhone
                                     swalText={'очень скоро мы свяжемся с Вами и сообщим все подробности'}/>

                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <InfraMainSlider title={'Совершенный уровень отдыха'} slides={infrastructurePagesData.spaPage.slides}/>
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

export default LoveDayPage;

