import React from "react";
import s from "./ForumPageBanner.module.scss";
import img from "../../../../../img/events/wedding/weddingPageBanner.jpg"
import iconCapacity from "../../../../../img/events/wedding/icon-capacity.png"
import iconPhotozone from "../../../../../img/events/wedding/icon-photozone.png"
import iconThematic from "../../../../../img/events/wedding/icon-thematic.png"


const ForumPageBanner = () => {
    return (
            <div className={s.wrapper}>
                <div className={s.blackHalf} />
                <div className={s.container}>
                    <div className={s.headings}>
                        <h2>Мероприятие</h2>
                        <p>
                            <span>Размещение учасников</span>
                            <span>Форума</span>
                            <span>Созвездия</span>
                        </p>
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
            </div>
    )
};

export default ForumPageBanner;