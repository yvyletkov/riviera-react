import React, {useEffect} from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./LoveDayPage.module.scss";
import BookingBlock from "../../additional/BookingBlock/BookingBlock";
import bannerImg from "../../../img/loveDay/banner.jpg";
import fromBg from "../../../img/loveDay/form.jpg";

const LoveDayPage = () => {

    React.useEffect(() => document.title = `14 февраля в Крыму - Riviera Sunrise Resort & SPA – Алушта, Крым`, [])

    return <>

        <section className={s.bannerWrapper} style={{background: 'center url(' + bannerImg + ')', backgroundSize: 'cover'}}>
            <div className={s.container}>
                <div className={s.background} />
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2>Kids free</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '10vw' : '85px'}}>Отмечай</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '9vw' : '76px'}}>14 февраля</h1>
                            <h3 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? '8vw' : '56px'}} className={s.extraline}>с нами</h3>
                            <p>12-14 февраля</p>
                        </div>
                    </div>
                </div>
            </div>
            <BookingBlock/>

        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};

export default LoveDayPage;

