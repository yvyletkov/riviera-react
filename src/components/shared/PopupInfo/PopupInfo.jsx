import React from 'react';
import {NavLink} from "react-router-dom";
import s from './PopupInfo.module.scss';
import closeIcon from '../../../img/close1.svg'

const PopupInfo = ({navLink, popupImgMob, popupImg, openPopup, setOpenPopup}) => {

    return (
        <div className={openPopup ? s.popupOfferWrapper + ' ' + s.active : s.popupOfferWrapper}>
            <div className={s.popupBlock}
                 onClick={()=> setOpenPopup(!openPopup)}>
                <img className={s.closeIcon}
                     alt="Иконка закрытия"
                     src={closeIcon}
                     onClick={()=> setOpenPopup(!openPopup)} />
                <NavLink to={navLink}>Подробнее →</NavLink>
                <img className={s.backgroundImg}
                     src={window.matchMedia('(max-width: 600px)').matches ? popupImgMob : popupImg}
                     alt="Баннер"/>
            </div>
        </div>
    )
}

export default PopupInfo;
