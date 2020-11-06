import React from "react";
import s from "./PageBanner.module.scss";
import cirqlesImg from "../../../img/home-page/cirqles.png"

const PageBanner = ({fontSize, fontSizeMobile, topLine, bottomLine, bannerImg, bannerMobileImg, descr}) => {

    let [descriptionShown, setDescriptionShown] = React.useState(false);
    let [matches620px, setMatches620px] = React.useState(false);

    const listener = () => {
        window.matchMedia("(max-width: 620px)").matches ? setMatches620px(true) : setMatches620px(false);
        // console.log('render')
    }

    React.useEffect( () => {
        window.addEventListener('resize', listener)
    }, [window.matchMedia("(max-width: 620px)").matches]);

    return (
        <section className={s.bannerWrapper}>
            <div className={s.container}>
                <div className={s.background} style={{backgroundImage: 'url(' + bannerMobileImg + ')'}}/>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <div className={s.pageNameBlock}>
                            <h2>Рассвет совершенного сервиса</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? fontSizeMobile[0] : fontSize[0]}}>{topLine}</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? fontSizeMobile[1] : fontSize[1]}}>{bottomLine}</h1>
                        </div>
                        <div className={descriptionShown ? s.descriptionBtn + ' ' + s.active : s.descriptionBtn} onClick={() => setDescriptionShown(!descriptionShown)}>
                            Подробнее&nbsp;&nbsp;• • •
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <img className={s.cirqles} src={cirqlesImg} alt=""/>
                        <img src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
            </div>
            <div className={s.descriptionWrapper}>
                <div className={descriptionShown ? s.description + ' ' + s.shown : s.description}>
                    <p dangerouslySetInnerHTML={{__html: descr}}/>
                </div>
            </div>
            <div className={s.bookingBlock}></div>

        </section>
    )
};

export default PageBanner;