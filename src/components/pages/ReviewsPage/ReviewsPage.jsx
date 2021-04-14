import React from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./ReviewsPage.module.scss";

const ReviewsPage = () => {

    React.useEffect( () => document.title = `Отзывы - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return ( <>

            <section style={{marginTop: window.matchMedia('(max-width: 1024px)').matches ? '100px' : '180px'}} className='section'>
                <div className={s.container}>
                    <div className={s.topRow}>
                        <h4 className={s.title}>
                            <span>Настоящие отзывы</span>
                            <span>о нас</span>
                        </h4>
                        <div className={s.textContent}>
                            {/*<p>Наш отель создан для Вашего комфорта и удовольствия от отдыха! </p>*/}
                            {/*<p>Если у Вас остались вопросы по проживанию, питанию или дополнительным услугам, Вы*/}
                            {/*    можете найти ответы в этом разделе.</p>*/}

                        </div>
                    </div>
                </div>
                <iframe title={'trustYou'}
                        src="https://api.trustyou.com/hotels/43ac3043-f10e-4b25-adb5-c3a0bf7ec355/tops_flops.html?key=e7767059-c290-4f84-9a2e-244f83a9d8ae&iframe_resizer=true"
                        frameBorder="0"
                        width="100%"
                        height="1200px"/>
            </section>

            <section className='section last'>
                <MapSection/>
            </section>
        </>
    );
}

export default ReviewsPage;
