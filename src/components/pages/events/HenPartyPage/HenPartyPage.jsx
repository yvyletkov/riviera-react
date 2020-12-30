import React from "react";
import s from "./HenPartyPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/hen-party/hen-party-banner.jpg";
import bannerImgMobile from "../../../../img/events/hen-party/hen-party-banner-mob.jpg";
import textImgBlockImg from "../../../../img/events/hen-party/girls.jpg";
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

const HenPartyPage = () => {

    React.useEffect(() => document.title = `Девичник в Крыму – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    return <>
        <EventPageBanner fontSize={['46px', '79px', '55px']} mobileFontSize={['8.7vw', '14.3vw', '8.2vw']}
                         titles={['Организуем вам', 'атмосферный', 'девичник', 'в Крыму']}
                         icons={eventPagesData.henPartyPage.henPartyBannerIcons} bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}
                         blackFont={true}
                         withInfo/>

        {/* Идеальное место для проведения */}

        <section className='section first'>
            <AdvantagesBlock title={'Идеальное место для проведения'}
                             icons={eventPagesData.henPartyPage.henPartyIcons}/>
        </section>

        {/* Для Вас душевная атмосфера */}

        <section className='section'>
            <EventTextImgBlock subtitle='Для Вас' title='душевная атмосфера' img={textImgBlockImg}
                               text={'Для того, чтобы прочувствовать свадьбу по-настоящему, обязательно нужно провести с подругами незабываемый душевный девичник!\n' +
                               '<br/>Дружеская атмосфера, смех, приятные расслабляющие процедуры, зажигательная фотосессия и душевные вечерние посиделки создадут правильный настрой на важный день, помогут справиться со стрессом и почувствовать поддержку!\n' +
                               'В нашем отеле есть всё для того, чтобы получить духовное и эстетическое удовольствие, окружить себя комфортом и любовью близких!\n'}
                               forWedding={false}
                               listArray={[]}/>

        </section>

        {/* Слайдеры корпусов */}

        <section className='section'>
            <RoomsSlider subtitle={'Корпус'} title={'Модерн'} textContent={eventPagesData.modernDescr}
                         data={eventPagesData.modernSlides} noPaddingTop/>

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
                            slides={eventPagesData.specialsSlides}
                            text={'Для успешной организации мероприятия в отеле Riviera Sunrise Resort & SPA, вы можете воспользоваться дополнительными услугами. Мы создавали их с желанием сделать ваше мероприятие ещё более насыщенным и подарить гостям комфорт и удивительные впечатления!'}/>
        </section>

        {/* Вам предстоит легкое решение */}

        <section className='section'>
            <div className={s.henPartyDecisionBlock}>
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
                                    необходимые материалы для принятия решения о проведении девичника в нашем отеле.
                                </p>

                                <ContactForm submitBtnText={'Скачать коммерческое предложение'}
                                             formName={`Форма "Вам предстоит легкое решение" (скачать коммерческое предложение)`}
                                             withEmail
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

export default HenPartyPage;
