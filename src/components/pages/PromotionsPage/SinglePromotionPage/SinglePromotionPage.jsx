import React from "react";
import s from "./SinglePromotionPage.module.scss";
import barhatniiSeasonBannerImg from "../../../../img/promos/promo-barhat-seaon.jpg"
import MapSection from "../../../shared/MapSection/MapSection";

const SinglePromotionPage = ({img, title = ['Бархатный', 'сезон']}) => {


    return (<>
            <section className='section'>
                <div className={s.wrapper} style={{background: `center top url(${barhatniiSeasonBannerImg})`}}/>
            </section>


        <section className='section'>
            <div className={s.wrapper}>
                <div className={s.container}>

                    <div className={s.topRow}>
                        <h4 className={s.title}>
                            <span>Акции</span>
                            <span>и специальные</span>
                            <span>предложения</span>
                        </h4>
                        <div className={s.textContent}>
                            <p><b>Воспользуйтесь специальными предложениями от отеля Riviera Sunrise!</b></p>
                            <p>Интересные акции, новинки и скидки – позволят Вам отдохнуть еще выгоднее. Планируйте
                                свой отдых, приезжайте и получайте максимум приятных эмоций от времени, проведенного
                                вместе с нами!</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
};

export default SinglePromotionPage;
