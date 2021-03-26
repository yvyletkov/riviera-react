import React from "react";
import {homePageData, TheGrilledData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/the-grilled/restoran-gril.png";
import img1 from "../../../img/the-grilled/restoran-gril-1.jpg";
import s from "./SingleNewsPage.module.scss";
import Headline from "../../shared/Headline/Headline";
import EventMainSlider from "../../shared/sliders/EventMainSlider/EventMainSlider";
import decisionBlockImg from "../../../img/the-grilled/reception.jpg";
import PDFviewer from "../../additional/PDFviewer/PDFviewer";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import TextPlusImageBlock from "../../shared/TextPlusImageBlock/TextPlusImageBlock";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";

const data = {
    date: "25.03.2021",
    title: 'Отличная новость',
    content1: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    content2: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
}


const SingleNewsPage = () => {

    React.useEffect(() => document.title = `${data.title} – Riviera Sunrise Resort & SPA – Алушта, Крым`, [])


    // здесб запрос к страпи

    return <>
        <VacationsPageBanner fontSize={["70px", "57px"]}
                             fontSizeMobile={["14.7vw", "10.5vw"]}
                             subtitle={data.date}
                             topLine={data.title}
                             // bottomLine={"The Grilled"}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                        />

        <section className='section first'>
            <TextPlusImageBlock title={data.title} content={data.content2}/>
        </section>

        <section className='section'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <p dangerouslySetInnerHTML={{__html: data.content1}}/>
                    </div>
                    <img className={s.wide} src={img1} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>



        <section className='section'>
            <GridSlider slides={homePageData.gridSlides}/>
        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};


export default SingleNewsPage;

