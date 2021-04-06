import React from "react";
import {homePageData} from "../../../data";
import MapSection from "../../shared/MapSection/MapSection";
import VacationsPageBanner from "../../shared/VacationsPageBanner/VacationsPageBanner";
import bannerImg from "../../../img/the-grilled/restoran-gril.png";
import s from "./SingleNewsPage.module.scss";
import GridSlider from "../../shared/sliders/GridSlider/GridSlider";
import {withRouter} from "react-router-dom";
import {request, strapiUrl} from "../../../api";
import marked from "marked"
import img from "../../../img/home-page/textimg.jpg";
import Headline from "../../shared/Headline/Headline";
import Button from "../../shared/Button/Button";
import NewsItemPreviewCard from "../NewsPage/NewsItemPreviewCard";
import HeadlineCenter from "../../shared/HeadlineCenter/HeadlineCenter";
import preloaderImg from "../../../img/preloader.svg";


const SingleNewsPage = ({match}) => {

    const [newsData, setNewsData] = React.useState({
        content_1: '',
        content_2: '',
        banner_img: [{url: ''}],
        content_1_img_1: {url: ''},
        content_1_img_2: {url: ''},
        content_2_img: {url: ''},
        published_at: '',
        btn_text: '',
    })

    const [newsId, setNewsId] = React.useState(null);

    React.useEffect((() => {
        request(null, "GET", `${strapiUrl}/news-items/${newsId}`)
            .then(async res => {
                if (res.status === 200) {
                    const data = await res.json()
                    setNewsData(data)
                }
            })
        request(null, "GET", `${strapiUrl}/news-items/`)
            .then(async res => {
                if (res.status === 200) {
                    const data = await res.json()
                    setAllNewsData(data)
                }
            })
    }), [newsId])

    console.log(newsData)

    const [allNewsData, setAllNewsData] = React.useState([])

    React.useEffect(() => document.title = `${newsData.title || '...'} – Riviera Sunrise Resort & SPA – Алушта, Крым`, [newsData])

    React.useEffect((() => {
        setNewsId(match.params.newsId)
    }), [match.params])

    // здесб запрос к страпи

    return (
        newsData.content_1 ?
            <>
                <VacationsPageBanner fontSize={["55px", "55px"]}
                                     fontSizeMobile={["9.5vw", "9.5"]}
                                     subtitle={new Date(newsData.published_at).toLocaleDateString('ru')}
                                     topLine={newsData.title && newsData.title}
                                     bannerImg={strapiUrl + newsData.banner_img[0].url}
                                     bannerMobileImg={bannerImg}
                />

                <section className='section first'>

            <div className={s.firstContentBlock}>
                <div className={s.container}>
                    <img className={s.rightImg} src={strapiUrl + newsData.content_1_img_2.url} alt=""/>

                    <div className={s.textContent}>
                        <Headline title={newsData.title}/>
                        <p dangerouslySetInnerHTML={{__html: marked(newsData.content_1)}}/>
                        <img className={s.leftImg} src={strapiUrl + newsData.content_1_img_1.url} alt=""/>

                        {newsData.buttonLink &&
                        <Button href={newsData.buttonLink}
                                otherWindow
                                text={newsData.btn_text ? newsData.btn_text : 'Подробнее'}
                                style={window.matchMedia("screen and (max-width: 768px)").matches ? {width: "100%"} : {width: "230px"}}/>}

                    </div>
                </div>
            </div>
        </section>

        <section className='section'>
            <div className={s.secondContentBlock}>
                <div className={s.container}>
                    <div className={s.background}/>
                    <div className={s.textContent}>
                        <p className={s.textContentInner}
                           dangerouslySetInnerHTML={{__html: marked(newsData.content_2)}}/>
                    </div>
                    <img className={s.wide} src={strapiUrl + newsData.content_2_img.url} alt={"Лучший праздник"}/>

                </div>
            </div>
        </section>

                {allNewsData.slice(0, 2).filter(item => item.id != newsId).length > 0 &&
                <section className="section">
                    <HeadlineCenter title={'Это может быть интересно'}/>
                    <div className={s.anotherNewsContainer}>
                        <div className={s.cardsContainer}>
                            {allNewsData.slice(0, 2).filter(item => item.id != newsId).map((item, index) =>
                                <NewsItemPreviewCard title={item.title}
                                                     content={item.content_1}
                                                     previewImg={item.preview_img.url}
                                                     id={item.id}
                                                     key={index}/>)}
                </div>
            </div>
                </section>}

                {newsData.grid_slider_initial_slide && <section className='section'>
                    <GridSlider slides={homePageData.gridSlides}
                                initialSlideIndex={newsData.grid_slider_initial_slide - 1}/>
                </section>}

                <section className='section last'>
                    <MapSection/>
                </section>
            </>
            :
            <div style={{
                height: 'calc(100vh - 70px)',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img width={'150px'} src={preloaderImg} alt=''/>
            </div>
    )

};


export default withRouter(SingleNewsPage);

