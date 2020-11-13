import React from "react";
import s from "./WeddingPageBanner.module.scss";
import img from "../../../../../img/events/wedding/weddingPageBanner.jpg"
import img1 from "../../../../../img/events/wedding/weddingPageBannerTopLayer.png"
import iconCapacity from "../../../../../img/events/wedding/icon-capacity.png"
import iconPhotozone from "../../../../../img/events/wedding/icon-photozone.png"
import iconThematic from "../../../../../img/events/wedding/icon-thematic.png"
import AnimatedMouseIcon from "../../../../shared/AnimatedMouseIcon/AnimatedMouseIcon";
import Button from "../../../../shared/Button/Button";


const WeddingPageBanner = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.headings}>
                    <h2>Ваша</h2>
                    <h1>
                        <span>Свадьба</span>
                        <span>Мечты</span>
                        <span>В крыму</span>
                    </h1>
                    <Button style={{width: "fit-content", marginTop: "20px"}}
                            text={"Узнать стоимость"}/>
                </div>


                <div className={s.icons}>
                    <div className={s.icon}>
                        <img src={iconCapacity} alt="Вместимость"/>
                        <p>Вместимость<br/>
                            залов до<br/>
                            300 персон</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconPhotozone} alt="Фотозоны"/>
                        <p>Более 100<br/>
                            вариантов<br/>
                            фотозон</p>
                    </div>
                    <div className={s.icon}>
                        <img src={iconThematic} alt="Оформление"/>
                        <p>Тематическое<br/>
                            оформление<br/>
                            свадьбы</p>
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

export default WeddingPageBanner;