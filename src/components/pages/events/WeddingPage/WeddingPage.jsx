import React from "react";
import s from "./WeddingPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/wedding/weddingPageBanner.jpg";
import bannerImgMobile from "../../../../img/events/wedding/weddingPageBanner-mob.jpg";
import textImgBlockImg from "../../../../img/events/wedding/wedding.jpg";
import EventPageBanner from "../EventPageBanner/EventPageBanner";
import Headline from "../../../shared/Headline/Headline";
import EventMainSlider from "../../../shared/sliders/EventMainSlider/EventMainSlider";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import LargeGallerySlider from "../../../shared/sliders/LargeGallerySlider/LargeGallerySlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import GalleryWeddingSlider from "../../../shared/sliders/GalleryWeddingSlider/GalleryWeddingSlider";
import MapSection from "../../../shared/MapSection/MapSection";
import AdvantagesBlock from "../../../shared/AdvantagesBlock/AdvantagesBlock";
import KitchenBlock from "../../../shared/KitchenBlock/KitchenBlock";
import BlackBlock from "../../../shared/BlackBlock/BlackBlock";
import EventTextImgBlock from "../../../shared/EventTextImgBlock/EventTextImgBlock";
import EventSquaresSlider from "../../../shared/sliders/EventSquaresSlider/EventSquaresSlider";
import ContactForm from "../../../additional/ContactForm/ContactForm";

const WeddingPage = () => {

    React.useEffect(() => document.title = `Свадьба – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>
        <EventPageBanner fontSize={['68px', '82px', '52px']} mobileFontSize={['11.7vw', '19.2vw', '8.2vw']}
                         titles={['Ваша', 'свадьба', 'мечты', 'в Крыму']}
                         icons={eventPagesData.weddingPages.weddingBannerIcons} bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}
        />

        {/* Ваша семья начинается здесь */}

        <section className='section first'>
            <EventTextImgBlock subtitle='Ваша семья' title='Начинается здесь' img={textImgBlockImg}
                               text={'Любви нужно пространство! Особенный день для пары должен пройти там, где будет всё необходимое для трогательной церемонии, зажигательной свадебной программы, удивительных сюрпризов, выступления артистов и кавер-групп.'}
                               forWedding={true}
                               listArray={['незабываемый мальчишник и девичник,', 'свадебная фото- и видеосессия,', 'сборы невесты,', 'романтичная первая ночь.']}/>
        </section>

        {/* Варианты выездной церемонии */}

        <section className='section' id='places'>
            <EventMainSlider slides={eventPagesData.weddingPages.weddingMainSlides}
                             title={'Варианты выездной церемонии'}
                             titleMobile={'Варианты церемоний'}/>
        </section>

        {/* Хотите знать сколько стоит выездная церемония? */}
        <section className='section'>
            <div className={s.weddingPriceBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Хотите знать,</span>
                            <span>сколько стоит выездная</span>
                            <span>церемония?</span>
                        </h4>
                        <p>Оставьте свой телефон и мы свяжемся с Вами в ближайшее время</p>

                        <ContactForm submitBtnText={'Отправить'}
                                     formName={`Форма "Хотите знать, сколько стоит выездная церемония"`} withPhone
                                     swalText={'мы отправим прайс-лист на указанную Вами почту в самое ближайшее время!'}/>

                    </div>
                </div>
            </div>
        </section>

        {/* Доверьтесь профессионалам */}
        <section className='section'>
            <AdvantagesBlock title={'Доверьтесь профессионалам'} icons={eventPagesData.weddingPages.weddingIcons}/>
        </section>

        {/* Приезжайте и наслаждайтесь безупречной организацией */}

        <section className='section'>
            <div className={s.weddingOrganizationBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <h4 className={s.title}>
                                <span>Приезжайте</span>
                                <span>и наслаждайтесь безупречной</span>
                                <span>организацией</span>
                                <span>Вашей свадьбы</span>
                            </h4>

                            <ContactForm
                                submitBtnText={window.matchMedia("(max-width: 768px").matches ? 'Узнать подробности' : 'Узнать подробности об организации свадьбы'}
                                formName={`Форма "Приезжайте и наслаждайтесь безупречной организацией" (Узнать подробности об организации свадьбы)`}
                                withPhone
                                swalText={'скоро подробности будут на указанной Вами почте!'}/>


                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Вас ждет изысканная еда */}

        <section className='section'>
            <KitchenBlock btnLink={'documents/Свадебное-меню.pdf'}/>
        </section>

        {/* Дополнительные услуги */}

        <section className='section'>
            <SpecialsSlider subtitle={'Дополнительные'} title={'услуги'} btnText={'Скачать прайс по услугам'}
                            btnLink={'/documents/Доп-услуги.zip'}
                            slides={eventPagesData.specialsSlides}
                            text={'Для успешной организации мероприятия в отеле Riviera Sunrise Resort & SPA, вы можете воспользоваться дополнительными услугами. Мы создавали их с желанием сделать ваше мероприятие ещё более насыщенным и подарить гостям комфорт и удивительные впечатления!'}/>
        </section>

        {/* Лучше один раз увидеть */}

        <section className='section'>
            <LargeGallerySlider blockName={'Лучше один раз увидеть'}
                                slides={eventPagesData.weddingPages.weddingLargeGallerySlides}
                                slideTitle={'Лучше один раз увидеть'}
                                videoMode={true}/>
        </section>

        {/* Как выбрать площадку для проведения свадьбы*/}

        <section className='section'>
            <EventSquaresSlider/>
        </section>

        {/* Сомневаетесь в площадке ?*/}

        <section className='section'>
            <BlackBlock/>
        </section>

        {/* Слайдеры корпусов */}

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                         data={eventPagesData.modernSlides} noPaddingTop/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={eventPagesData.classicDescr} data={eventPagesData.classicSlides}/>
        </section>

        {/* Фотографии со свадьбы */}

        <section className='section'>
            <GalleryWeddingSlider blockName={'Фотографии со свадьбы'}
                                  slides={eventPagesData.weddingPages.weddingGallerySlides}/>
        </section>

        {/* Вам предстоит ответсвенное решение */}

        <section className='section'>
            <div className={s.weddingDecisionBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>

                        <div className={s.imageBlock}>
                            <img src={decisionBlockImg} alt="Riviera Sunrise"/>
                        </div>

                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Вам предстоит'} title={'Ответственное решение'}/>

                                <p>
                                    Лучше принимать его, владея полной информацией. Оставьте свои контакты, и мы
                                    предоставим все материалы для принятия решения о проведении свадьбы в нашем отеле.
                                </p>

                                <ContactForm submitBtnText={'Получить материалы для принятия решения'}
                                             formName={`Форма "Вам предстоит ответсвенное решение" (скачать коммерческое предложение)`}
                                             withPhone
                                             swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}/>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Карта */}

        <section className='section'>
            <MapSection/>
        </section>

    </>

};

export default WeddingPage;
