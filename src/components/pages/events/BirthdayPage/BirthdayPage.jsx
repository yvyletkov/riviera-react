import React from "react";
import s from "./BirthdayPage.module.scss";
import {eventPagesData} from "../../../../data";
import decisionBlockImg from "../../../../img/events/wedding/decision.jpg";
import bannerImg from "../../../../img/events/birthday/birthdayBanner.jpg";
import bannerImgMobile from "../../../../img/events/birthday/birthdayBanner-mob.jpg";
import textImgBlockImg from "../../../../img/events/birthday/text-img-block.jpg";
import kitchenImg from "../../../../img/events/birthday/kitchen.jpg";

import EventPageBanner from "../EventPageBanner/EventPageBanner";
import Headline from "../../../shared/Headline/Headline";
import EventMainSlider from "../../../shared/sliders/EventMainSlider/EventMainSlider";
import Button from "../../../shared/Button/Button";
import SpecialsSlider from "../../../shared/sliders/SpecialsSlider/SpecialsSlider";
import MapSection from "../../../shared/MapSection/MapSection";
import AdvantagesBlock from "../../../shared/AdvantagesBlock/AdvantagesBlock";
import KitchenBlock from "../../../shared/KitchenBlock/KitchenBlock";
import EventTextImgBlock from "../../../shared/EventTextImgBlock/EventTextImgBlock";
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";
import ContactForm from "../../../additional/ContactForm/ContactForm";

const BirthdayPage = () => {

    return <>

        <EventPageBanner fontSize={['75px', '75px', '52px']} mobileFontSize={['11.7vw', '13vw', '8.2vw']}
                         titles={['Незабываемый', 'день', 'рождения', 'в Крыму']}
                         icons={eventPagesData.birthdayPage.birthdayBannerIcons}
                         bannerImg={bannerImg}
                         bannerImgMobile={bannerImgMobile}
                         blackFont={true}
        />

        {/* Организация под ваши пожелания */}

        <section className='section first'>
            <CenteredSlider title={'Организация под Ваши пожелания'} slides={eventPagesData.birthdayPage.centeredSlides} type={2}/>
        </section>

        {/* Выберите место празднования */}

        <section className='section'>
            <EventMainSlider slides={eventPagesData.birthdayPage.birthdayMainSlides} title={'Выберите место празднования'} titleMobile={'Выберите место'}/>
        </section>

        {/* Планировать свой праздник лучше заранее */}

        <section className='section'>
            <div className={s.birthdayPlanningBlock}>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <h4 className={s.title}>
                            <span>Планировать</span>
                            <span>свой праздник лучше</span>
                            <span>заранее</span>
                        </h4>
                        <p>Оставьте свою почту и мы вышлем вам список
                            свободных дат</p>

                        <ContactForm submitBtnText={'Узнать свободные даты'} formName={`Форма "Планировать свой праздник лучше заранее" (узнать свободные даты)`} withEmail
                                     swalText={'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!'}/>

                    </div>
                </div>
            </div>
        </section>

        {/* Возможности в нашем отеле */}

        <section className='section'>
            <AdvantagesBlock title={'Возможности в нашем отеле'} icons={eventPagesData.birthdayPage.birthdayIcons}/>
        </section>

        {/* Для Вас лучший день */}

        <section className='section'>
            <EventTextImgBlock subtitle='Для Вас' title='Лучший день' img={textImgBlockImg}
                               text={'Доверьте ваш праздник профессиональной команде отеля Rivera Sunrise Resort & SPA и получите в подарок незабываемые впечатления от времени, проведенного в кругу своих близких в незабываемой атмосфере роскошного курорта!'}
                               forWedding={false}
                               listArray={['веселая атмосферная вечеринка с дискотекой и фейерверком,','время с друзьями в СПА, купание в бассейнах и в море,','уединенный романтический стиль празднования,','праздник дома и угощения от профессионального шефа']}/>
        </section>

        {/* Вас ждет изысканная еда */}

        <section className='section'>
            <KitchenBlock firstImg={kitchenImg}/>
        </section>

        {/* Дополнительные услуги */}

        <section className='section'>
            <SpecialsSlider subtitle={'Дополнительные'} title={'услуги'} btnText={'Получить прайс по услугам'}
                            slides={eventPagesData.specialsSlides}/>
        </section>

        {/* Вам предстоит легкое решение */}

        <section className='section'>
            <div className={s.birthdayDecisionBlock}>
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
                                    необходимые материалы для принятия решения о проведении дня рождения в нашем отеле.
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

        <section className='section'>
            <MapSection/>
        </section>

    </>

};

export default BirthdayPage;