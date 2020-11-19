import React from "react";
import MicePageBanner from "../MicePageBanner/MicePageBanner";
import TextBlock from "../TextBlock/TextBlock";
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";
import {eventPagesData, micePagesData, roomsAndPricesPageData} from "../../../../data";
import WidthSpecialsSlider from "../../../shared/sliders/WidthSpecialsSlider/WidthSpecialsSlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import s from "./ForumPage.module.scss";
import imgAbout1 from '../../../../img/mice/conference/11.jpg'
import imgAbout2 from '../../../../img/mice/conference/12.jpg'
import Headline from "../../../shared/Headline/Headline";
import Button from "../../../shared/Button/Button";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import CirqleTip from "../../../shared/CirqleTip/CirqleTip";
import Accordeon from "../../../shared/Accordeon/Accordeon";
import Slider from "react-slick";
import BlackBlock from "../../../shared/BlackBlock/BlackBlock";
import decisionBlockImg from "../../../../img/mice/forum/2.jpg";
import MapSection from "../../../shared/MapSection/MapSection";
import AdvantagesBlock from "../../../shared/AdvantagesBlock/AdvantagesBlock";
import LogosSlider from "../../../shared/LogosSlider/LogosSlider";
import imageBackground from "../../../../img/mice/forum/1.jpg";

const ForumPage = () => {
    let [accordeonStatus, setAccordeonStatus] = React.useState(false);

    const settings = {
        infinite: false,
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <>
            <MicePageBanner subtitle={'Организация'}
                            title1={'Форума'}
                            title1Style={window.matchMedia('(max-width: 500px)').matches ? {} : {fontSize: '90px'}}
                            title2={''}
                            title3={'В крыму'}
                            icons={micePagesData.conferenceIconsBanner}
                            background={imageBackground}/>
            {window.matchMedia('(min-width:769px)').matches &&
            <section className="section">
                <TextBlock style={{marginTop: '-100px'}}/>
            </section>
            }
            <section className={window.matchMedia('(max-width: 768px)').matches ? 'section first' : 'section'}
                     style={window.matchMedia('(min-width: 768px)').matches ? {marginBottom:'30px'} : {}}>
                <AdvantagesBlock title={'Какие мероприятия мы организуем'} icons={micePagesData.conferenceIconsAdvantages}/>
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
                <LogosSlider title={"С кем мы сотрудничали"} icons={micePagesData.forumIcons}/>
            </section>
            <section className="section">
                <SpecialsSlider title={"Услуги"}
                                subtitle={"Дополнительные"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}
                                slides={micePagesData.wideSliderServices}
                                textLink={'#'}
                />
            </section>
            <section className='section'>
                <div className={s.forumPlacesBlock}>
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <div className={s.topRow}>
                                <h4 className={s.title}>
                                    <span>Как выбрать</span>
                                    <span>площадку для проведения</span>
                                    <span>мероприятия</span>
                                </h4>
                                <CirqleTip accordeonStatus={accordeonStatus}
                                           onClick={() => setAccordeonStatus(!accordeonStatus)}/>
                                <div className={s.textContent}>
                                    <Accordeon withBtn={false} zeroHeight={true} status={accordeonStatus}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                            facilisis.</p>
                                    </Accordeon>
                                </div>
                            </div>


                            <div className={s.sliderWrapper}>
                                <Slider {...settings} slidesToShow={4}>
                                    {eventPagesData.weddingPages.weddingPlacesSlides.map((item, index) => {
                                        return <div>
                                            <div className={s.sliderItemWrapper}>
                                                <div>{index + 1}</div>
                                                <img src={item.img} alt={item.text}/>
                                                <p dangerouslySetInnerHTML={{__html: item.text}}/>
                                            </div>
                                        </div>
                                    })}
                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <BlackBlock/>
            </section>

            {window.matchMedia('(max-width:768px)').matches &&
            <section className="section">
                <TextBlock />
            </section>
            }

            <section className='section'>
                <div className={s.forumDecisionBlock}>
                    <div className={s.wrapper}>
                        <div className={s.grid}>
                            <div className={s.imageBlock}>
                                <img src={decisionBlockImg} alt="Riviera Sunrise"/>
                            </div>
                            <div className={s.textBlock}>
                                <div className={s.textContent}>
                                    <Headline subtitle={'Хотите посоветоваться'} title={'С коллегами?'}/>
                                    <p>Для предметного обсуждения мы подготовили каталог со всеми нашими залами и возможностями для вашего мероприятия.</p>
                                    <p>Подберите идеальное сочетание услуг!</p>
                                    <form className={'form'}>
                                        <input className={'formInput'} placeholder={'Введите Ваше имя'} type="text"/>
                                        <input className={'formInput'} placeholder={'Введите Вашу почту'} type="text"/>
                                        <Button text={'Скачать коммерческое предложение'}/>
                                    </form>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <MapSection />
            </section>
        </>
    )
}

export default ForumPage;