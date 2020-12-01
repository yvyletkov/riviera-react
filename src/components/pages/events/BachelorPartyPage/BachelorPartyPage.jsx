import React from "react";
import s from "./BachelorPartyPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/bachelor-party/banner.jpg";
import bannerImgMobile from "../../../../img/events/bachelor-party/banner-mob.jpg";
import textImgBlockImg from "../../../../img/events/bachelor-party/guys.jpg";
import kitchenImg from "../../../../img/events/birthday/kitchen.jpg";

import EventPageBanner from "../EventPageBanner/EventPageBanner";
import Headline from "../../../shared/Headline/Headline";
import Button from "../../../shared/Button/Button";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import RoomsSlider from "../../../shared/sliders/RoomsSlider/RoomsSlider";
import MapSection from "../../../shared/MapSection/MapSection";
import AdvantagesBlock from "../../../shared/AdvantagesBlock/AdvantagesBlock";
import KitchenBlock from "../../../shared/KitchenBlock/KitchenBlock";
import EventTextImgBlock from "../../../shared/EventTextImgBlock/EventTextImgBlock";
import ContactForm from "../../../additional/ContactForm/ContactForm";

const BachelorPartyPage = () => {

    return <>

        <EventPageBanner fontSize={['46px', '61px', '55px']} mobileFontSize={['8.7vw', '10.5vw', '8.2vw']}
                         titles={['Организуем вам', 'настоящий', 'мальчишник', 'в Крыму']}
                         icons={eventPagesData.bachelorParty.bachelorPartyBannerIcons} bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}
                         blackFont={true}/>

        {/* Идеальное место для проведения */}

        <section className='section first'>
            <AdvantagesBlock title={'Идеальное место для проведения'} icons={eventPagesData.bachelorParty.bachelorPartyIcons}/>
        </section>

        {/* Для Вас душевная атмосфера */}

        <section className='section'>
            <EventTextImgBlock subtitle='Для Вас' title='душевная атмосфера' img={textImgBlockImg}
                               text={'Накануне свадебного торжества хочется вспомнить всё самое веселое и яркое, что случалось! И с кем это еще сделать, как не с верными друзьями, которые были рядом на протяжении многих лет?<br/>Мальчишник - это праздник дружбы, возможность отметить важный переход в жизни в окружении самых близких по духу людей!<br/>В нашем SPA-отеле вы сможете провести мальчишник насыщенно, весело и безопасно.'}
                               forWedding={false}
                               wideImg={true}
                               listArray={[]}/>

        </section>

        {/* Слайдеры корпусов */}

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                         data={eventPagesData.modernSlides}/>

            <RoomsSlider lastOfTwo={true} subtitle={'Корпус'} title={'Классик'}
                         textContent={eventPagesData.classicDescr} data={eventPagesData.classicSlides}/>
        </section>

        {/* Вас ждет изысканная еда */}

        <section className='section'>
            <KitchenBlock firstImg={kitchenImg}/>
        </section>

        {/* Дополнительные услуги */}

        <section className='section'>
            <SpecialsSlider subtitle={'Дополнительные'} title={'услуги'} btnText={'Получить прайс по услугам'}
                            slides={eventPagesData.specialsSlides} text={'Для успешной организации мероприятия в отеле Riviera Sunrise Resort & SPA, вы можете воспользоваться дополнительными услугами. Мы создавали их с желанием сделать ваше мероприятие ещё более насыщенным и подарить гостям комфорт и удивительные впечатления!'}/>
        </section>

        {/* Вам предстоит легкое решение */}

        <section className='section'>
            <div className={s.bachelorPartyDecisionBlock}>
                <div className={s.wrapper}>
                    <div className={s.grid}>

                        <div className={s.imageBlock}>
                            <img src={decisionBlockImg} alt="Riviera Sunrise"/>
                        </div>

                        <div className={s.textBlock}>
                            <div className={s.textContent}>
                                <Headline subtitle={'Вам предстоит'} title={'Легкое решение'}/>

                                <p>
                                    Лучше принимать его, владея полной информацией. Получите на свою почту все
                                    необходимые материалы для принятия решения о проведении мальчишника в нашем отеле.
                                </p>

                                <ContactForm submitBtnText={'Скачать коммерческое предложение'} formName={`Форма "Вам предстоит легкое решение" (скачать коммерческое предложение)`} withEmail
                                             swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}/>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Карта */}

        <section className='section last'>
            <MapSection/>
        </section>

    </>

};

export default BachelorPartyPage;