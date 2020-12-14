import React from "react";
import s from "./VacationsPageBanner.module.scss";
import cirqlesImg from "../../../img/home-page/cirqles.png"
import BookingBlock from "../../additional/BookingBlock/BookingBlock";

const VacationsPageBanner = ({fontSize, fontSizeMobile, subtitle, topLine, bottomLine, bannerImg, bannerMobileImg, descr, extraLine = []}) => {

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
                            <h2>{subtitle}</h2>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? fontSizeMobile[0] : fontSize[0]}}>{topLine}</h1>
                            <h1 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? fontSizeMobile[1] : fontSize[1]}} dangerouslySetInnerHTML={{__html: bottomLine}}/>
                            {extraLine && <h3 style={{fontSize: window.matchMedia("(max-width: 620px)").matches ? extraLine[1] : extraLine[2]}} className={s.extraline}>{extraLine[0]}</h3>}
                        </div>
                        <div className={descriptionShown ? s.descriptionBtn + ' ' + s.active : s.descriptionBtn} onClick={() => setDescriptionShown(!descriptionShown)}>
                            Подробнее&nbsp;&nbsp;• • •
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        {/*<img className={s.cirqles} src={cirqlesImg} alt=""/>*/}
                        <img src={bannerImg} alt="Riviera Sunrise"/>
                    </div>
                </div>
            </div>
            <div className={s.descriptionWrapper}>
                <div className={descriptionShown ? s.description + ' ' + s.shown : s.description}>
                    <p dangerouslySetInnerHTML={{__html: descr}}/>
                </div>
            </div>
            <BookingBlock/>

        </section>
    )
};

export default VacationsPageBanner;