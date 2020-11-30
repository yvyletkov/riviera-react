import React from "react";
import s from "./RoomPageBanner.module.scss";
import {Link as Scroll} from "react-scroll";

const RoomPageBanner = ({campusName, roomName, roomNameFontSize, bannerImg}) => {

    return (
        <section className={s.bannerWrapper}>
            <img className={s.bannerImg} src={bannerImg} alt="Номера и цены"/>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <h2>{campusName}</h2>
                    <h1>Номер</h1>
                    <h1 dangerouslySetInnerHTML={{__html: roomName}} style={{lineHeight: "1", fontSize: window.matchMedia("(max-width: 490px").matches ? roomNameFontSize[0] : roomNameFontSize[1]}}/>
                    <Scroll to="gallery" spy={true} smooth={true} offset={-150} duration={700}>
                        <div className={s.descriptionBtn}>
                            Смотреть фото ↓
                        </div>
                    </Scroll>
                </div>
            </div>
            {/*<img className={s.bannerImgTop} src={bannerImgTopLayer} alt="Номера и цены"/>*/}
            <div className={s.bookingBlock}></div>
        </section>
    )
};

export default RoomPageBanner;