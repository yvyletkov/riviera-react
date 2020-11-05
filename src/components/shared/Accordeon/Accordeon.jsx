import React from "react";
import s from "./Accordeon.module.scss"

const Accordeon = ({status = false, children, zeroHeight = false, withBtn = true}) => {

    let [opened, setOpened] = React.useState(status);

    React.useEffect( () => {
        setOpened(status);
    }, [status]);

    const onClick = () => {
        setOpened(!opened)
    };

    return <div className={zeroHeight ? s.accordeon + ' ' + s.zeroHeight : s.accordeon}>
        <div className={opened || window.matchMedia("(min-width: 500px)").matches ? s.text + ' ' + s.opened : zeroHeight ? s.text + ' ' + s.zeroHeight : s.text}>
            {children}
        </div>
        { withBtn && <div onClick={onClick} className={window.matchMedia("(min-width: 500px)").matches ? s.btnHidden : opened ? s.btn + ' ' + s.opened : s.btn}>
            {opened ? 'Свернуть' : 'Подробнее'}
        </div> }
    </div>
}

export default Accordeon