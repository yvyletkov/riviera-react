import React from "react";
import s from "./NavBlock.module.scss"
import cx from 'classnames'

const NavBlock = ({links}) => {

    return <>
        <div className={s.navBlock}>
            <div className={s.container}>
                {links.map( (item) => <div>{item.title}</div>)}
                <div>Навигация по разделам</div>
                <div>Проживание</div>
                <div>Питание</div>
                <div>Площадки</div>
            </div>
        </div>
    </>
}

export default NavBlock