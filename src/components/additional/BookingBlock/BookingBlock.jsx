import React, {useEffect} from "react";
import s from "./BookingBlock.module.scss";

function BookingBlock() {

    useEffect(() => {
        window.tlLoad(window)
    }, []);

    return <div className={s.bookingBlock}>
        <div style={{zIndex: '1000'}} id="tl-search-form" className="tl-container">
            <noindex><a href="http://www.travelline.ru/products/tl-hotel/" rel="nofollow">система
                онлайн-бронирования</a></noindex>
        </div>
    </div>
}

export default BookingBlock;