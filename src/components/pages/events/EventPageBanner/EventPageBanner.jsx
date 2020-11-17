import React from "react";
import s from "./WeddingPageBanner.module.scss";
import img from "../../../../img/events/wedding/weddingPageBanner.jpg"
import iconCapacity from "../../../../img/events/wedding/icon-capacity.png"
import iconPhotozone from "../../../../img/events/wedding/icon-photozone.png"
import iconThematic from "../../../../img/events/wedding/icon-thematic.png"
import AnimatedMouseIcon from "../../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import Button from "../../../shared/Button/Button";


const EventPageBanner = ({mobileFontSize, fontSize, titles, icons}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.headings}>
                    <h2>{titles[0]}</h2>
                    <h1>
                        <span style={window.matchMedia("(max-width: 620px)").matches ? {fontSize: mobileFontSize[0]} : {fontSize: fontSize[0]} }>{titles[1]}</span>
                        <span style={window.matchMedia("(max-width: 620px)").matches ? {fontSize: mobileFontSize[1]} : {fontSize: fontSize[1]} }>{titles[2]}</span>
                        <span style={window.matchMedia("(max-width: 620px)").matches ? {fontSize: mobileFontSize[2]} : {fontSize: fontSize[2]} }>{titles[3]}</span>
                    </h1>
                    <Button style={{width: "fit-content", marginTop: "20px"}}
                            text={"Узнать стоимость"}/>
                </div>


                <div className={s.icons}>
                    <div className={s.icon}>
                        <img src={iconCapacity} alt="Вместимость"/>
                        <p dangerouslySetInnerHTML={{__html: icons[0].descr}}/>
                    </div>
                    <div className={s.icon}>
                        <img src={iconPhotozone} alt="Фотозоны"/>
                        <p dangerouslySetInnerHTML={{__html: icons[1].descr}}/>

                    </div>
                    <div className={s.icon}>
                        <img src={iconThematic} alt="Оформление"/>
                        <p dangerouslySetInnerHTML={{__html: icons[2].descr}}/>

                    </div>
                </div>
            </div>
            <div className={s.bannerImgTop} />

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
};

export default EventPageBanner;