import React, {useEffect} from "react";
import MapSection from "../../shared/MapSection/MapSection";
import s from "./LoveDayPage.module.scss";
import BookingBlock from "../../additional/BookingBlock/BookingBlock";
import bannerImg from "../../../img/loveDay/banner.jpg";
import formBg from "../../../img/loveDay/form.jpg";
import icon1 from "../../../img/loveDay/icons/1.png";
import icon2 from "../../../img/loveDay/icons/2.png";
import icon3 from "../../../img/loveDay/icons/3.png";
import AnimatedMouseIcon from "../../shared/AnimatedMouseIcon/AnimatedMouseIcon";

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

                        <div className={s.iconsWrapper}>
                            <div className={s.item}>
                                <img src={icon1} alt=""/>
                                <div>Романтическая<br/>атмосфера</div>
                            </div>

                            <div className={s.item}>
                                <img src={icon2} alt=""/>
                                <div>Комплимент<br/>от отеля</div>
                            </div>

                            <div className={s.item}>
                                <img src={icon3} alt=""/>
                                <div>Программа<br/>для влюбленных</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <BookingBlock/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon black/>
            </div>

        </section>

        <section className='section last'>
            <MapSection/>
        </section>
    </>

};

export default LoveDayPage;

