import React from "react";
import MicePageBanner from "./MicePageBanner/MicePageBanner";
import TextBlock from "./TextBlock/TextBlock";
import IconsBlock from "./IconsBlock/IconsBlock";
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";
import {micePagesData, roomsAndPricesPageData} from "../../../../data";
import WidthSpecialsSlider from "../../../shared/sliders/WidthSpecialsSlider/WidthSpecialsSlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import s from "./ForumPage.module.scss";
import kitchenImg1 from "../../../../img/events/wedding/kitchen1.jpg";
import kitchenImg2 from "../../../../img/events/wedding/kitchen2.jpg";
import Headline from "../../../shared/Headline/Headline";
import Button from "../../../shared/Button/Button";

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
                <WidthSpecialsSlider slides={micePagesData.widthSpecialsSlider} />
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
                            <img className={s.leftImg} src={kitchenImg1} alt=""/>
                            <img className={s.rightImg} src={kitchenImg2} alt=""/>
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
        </>
    )
}

export default ForumPage;