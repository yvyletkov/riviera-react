import React from "react";
import s from "./Accordeon.module.scss"

const Accordeon = ({children}) => {

    let [opened, setOpened] = React.useState(false)

    const onClick = () => {
        setOpened(!opened)
    };

    return <div className={s.accordeon}>
        <p className={opened || window.innerWidth >= 500 ? s.text + ' ' + s.opened : s.text}>
            {children}
        </p>
        <div onClick={onClick} className={window.innerWidth >= 500 ? s.btnHidden : opened ? s.btn + ' ' + s.opened : s.btn}>
            {opened ? 'Свернуть' : 'Подробнее'}
        </div>
    </div>
}

export default Accordeon