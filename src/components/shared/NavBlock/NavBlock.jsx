import React from "react";
import s from "./NavBlock.module.scss"
import cx from 'classnames'
import {Link as Scroll} from "react-scroll";

const NavBlock = ({links = [
    {link: "residence", title: 'Проживание'},
    {link: "food", title: 'Питание'},
    {link: "places", title: 'Площадки'},
]}) => {

    return <>
        <div className={s.navBlock}>
            <div className={s.container}>
                <div>Навигация по разделам</div>
                {links.map( (item) => <Scroll to={item.link} spy={true} smooth={true} offset={-150} duration={700}>
                        {item.title}
                </Scroll>)}
            </div>
        </div>
    </>
}

export default NavBlock