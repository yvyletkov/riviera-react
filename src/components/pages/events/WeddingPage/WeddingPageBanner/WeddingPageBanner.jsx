import React from "react";
import s from "./WeddingPageBanner.module.scss";
import img from "./../../../../../img/banners/events/weddingPageBanner.jpg"
import img1 from "./../../../../../img/banners/events/weddingPageBannerTopLayer.png"
import iconCapacity from "./../../../../../img/events/icon-capacity.png"
import iconPhotozone from "./../../../../../img/events/icon-photozone.png"
import iconThematic from "./../../../../../img/events/icon-thematic.png"
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
            <img className={s.bannerImgTop} src={img1} alt=""/>

            <div className={s.animatedMouseWrapper}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
};

export default WeddingPageBanner;