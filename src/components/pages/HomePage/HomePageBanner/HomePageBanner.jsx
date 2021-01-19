import React from "react";
import s from "./HomePageBanner.module.scss";
import bannerImg from "../../../../img/home-page/banner-img.png"
import cirqlesImg from "../../../../img/home-page/cirqles.png"
import pauseImg from "../../../../img/home-page/pause.png"
import playImg from "../../../../img/play.png"
import homePageBg from "../../../../img/homeBannerB.png"
import BookingBlock from "../../../additional/BookingBlock/BookingBlock";
import videoMp4 from "../../../../video/rivierasunrise.mp4";
// import videoWebM from "../../../../video/rivierasunrise.webm";

const HomePageBanner = () => {

    let [isPlaying, setIsPlaying] = React.useState(true)

    let videoRef = React.useRef();

    let onBtnClick = () => {
        setIsPlaying(!isPlaying);
    }
    React.useEffect(() => {
        if (isPlaying) videoRef.current.play();
        else videoRef.current.pause();
    }, [isPlaying])

    return (
        <section className={s.bannerWrapper}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.leftSide}>
                        <img className={s.bgImg} src={homePageBg} alt=""/>

                        <div className={s.textBlock}>
                            <h2>Рассвет совершенного сервиса</h2>
                            <h1>Riviera
                                <span>Sunrise</span></h1>
                            <div>RESORT & SPA</div>
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <div onClick={onBtnClick} className={s.playBtn + ' ' + (!isPlaying ? s.play : '')}>
                            <img src={isPlaying ? pauseImg : playImg} alt="пауза"/>
                        </div>
                        <img className={s.cirqles} src={cirqlesImg} alt=""/>

                        <video preload="none" ref={videoRef} autoPlay muted loop style={{position: 'relative', backgroundPosition: '500px', left: '-500px', background: `url(${bannerImg}) no-repeat`, height: '740px', marginTop: "60px"}}>
                            <source src={videoMp4}/>
                            {/*<source src={videoWebM}/>*/}
                        </video>
                    </div>
                </div>
            </div>
            <BookingBlock/>
        </section>
    )
};

export default HomePageBanner;
