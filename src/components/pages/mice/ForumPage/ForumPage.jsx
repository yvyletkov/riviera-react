import React from "react";
import MicePageBanner from "./MicePageBanner/MicePageBanner";
import TextBlock from "./TextBlock/TextBlock";
import IconsBlock from "./IconsBlock/IconsBlock";
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";
import {micePagesData, roomsAndPricesPageData} from "../../../../data";
import WidthSpecialsSlider from "../../../shared/sliders/WidthSpecialsSlider/WidthSpecialsSlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import s from "./ForumPage.module.scss";
import imgAbout1 from '../../../../img/mice/conference/11.jpg'
import imgAbout2 from '../../../../img/mice/conference/12.jpg'
import Headline from "../../../shared/Headline/Headline";
import Button from "../../../shared/Button/Button";
import HeadlineCenter from "../../../shared/HeadlineCenter/HeadlineCenter";
import partnerShip1 from '../../../../img/mice/conference/icons/10.png'
import partnerShip2 from '../../../../img/mice/conference/icons/11.png'
import partnerShip3 from '../../../../img/mice/conference/icons/12.png'
import partnerShip4 from '../../../../img/mice/conference/icons/13.png'

const ForumPage = () => {
    return (
        <>
            <MicePageBanner/>
            <section className="section">
                <TextBlock style={{marginTop: '-100px'}}/>
            </section>
            <section className="section">
                <IconsBlock/>
            </section>
            <section className="section">
                <CenteredSlider slides={micePagesData.centeredSlides} title={"Что мы берем на себя"} type={2} />
            </section>
            <section className="section">
                <WidthSpecialsSlider slides={micePagesData.widthSpecialsSlider} title={"Наши залы"}/>
            </section>
            <section className='section'>
                <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={roomsAndPricesPageData.modernDescr}
                             data={roomsAndPricesPageData.modernSlides}/>

                <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                             textContent={roomsAndPricesPageData.classicDescr} data={roomsAndPricesPageData.classicSlides}/>
            </section>
            <section className='section'>
                <div className={s.forumAboutBlock}>
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <img className={s.leftImg} src={imgAbout1} alt=""/>
                            <img className={s.rightImg} src={imgAbout2} alt=""/>
                            <div className={s.textContent}>
                                <Headline subtitle={'Ваша задача'} title={'Особенная?'}/>
                                <p className={s.boldTitle}>Справимся и с ней!</p>
                                <p>Запишитесь на 20-минутную консультацию с нашим организатором мероприятий.</p>
                                <ul>
                                    <li>бриф на 3 вопроса</li>
                                    <li>легкое общение без сложных терминов</li>
                                    <li>прозрачная смета</li>
                                </ul>
                                <p className={s.boldSubtitle}>Поддержим все ваши идеи и расскажем, как их реализовать несколькими способами, учитывая ваш бюджет!</p>
                                <Button text={"Оставить заявку"}
                                        style={!window.matchMedia("(max-width: 768px").matches ? {width: "230px"} : {}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <HeadlineCenter title={"С кем мы сотрудничали"} />
                <div className={s.flex}>
                    <img className={s.partnerShip} src={partnerShip1} alt="Партнеры"/>
                    <img className={s.partnerShip} src={partnerShip2} alt="Партнеры"/>
                    <img className={s.partnerShip} src={partnerShip3} alt="Партнеры"/>
                    <img className={s.partnerShip} src={partnerShip4} alt="Партнеры"/>
                </div>
            </section>
        </>
    )
}

export default ForumPage;