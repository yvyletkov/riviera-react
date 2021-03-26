import React from "react";
import {homePageData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/the-grilled/restoran-gril.png";
import img1 from "../../../img/the-grilled/restoran-gril-1.jpg";
import s from "./SingleNewsPage.module.scss";
import TextPlusImageBlock from "../../shared/TextPlusImageBlock/TextPlusImageBlock";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import {withRouter} from "react-router-dom";
import {request} from "../../../api";

const data = {
    date: "25.03.2021",
    title: 'Отличная новость',
    content1: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
    content2: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
}


const SingleNewsPage = ({match}) => {



    const [newsId, setNewsId] = React.useState(null)
    const [newsData, setNewsData] = React.useState({})

    React.useEffect(() => document.title = `${newsData.title || '...'} – Riviera Sunrise Resort & SPA – Алушта, Крым`, [newsData])

    React.useEffect((() => {
        request(null, "GET", `https://admin.rivierasunrise.ru/news-items/${newsId}`).then( async res => {
            if (res.status === 200) {
                const data = await res.json()
                console.log('data', data)
                setNewsData(data)
            }
        })
    }), [newsId])

    React.useEffect((() => {
        setNewsId(match.params.newsId)
    }), [match.params])

    // здесб запрос к страпи

    return <>
        <VacationsPageBanner fontSize={["55px", "55px"]}
                             fontSizeMobile={["11.7vw", "11.7vw"]}
                             subtitle={data.date}
                             topLine={newsData.title && (newsData.title.split(' ')[0] || newsData.title)}
                             bottomLine={newsData.title && newsData.title.split(' ')[1]}
                             bannerImg={bannerImg}
                             bannerMobileImg={bannerImg}
                        />

        <section className='section first'>
            <TextPlusImageBlock title={newsData.title} content={newsData.content_1}/>
        </section>

        <section className='section'>
            <div className={s.textBlockWrapper}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <p dangerouslySetInnerHTML={{__html: newsData.content_2}}/>
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


export default withRouter(SingleNewsPage);

