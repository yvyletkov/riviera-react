import React from "react";
import s from "./Accordeon.module.scss"
import cx from 'classnames'

const Accordeon = ({status = false, children, zeroHeight = false, withBtn = true, forDesktop = false}) => {

    let [opened, setOpened] = React.useState(status);

    const cn =  cx(s.text,
        {[s.opened]: !forDesktop ? (opened || window.matchMedia("(min-width: 500px)").matches) : opened},
        {[s.zeroHeight]: zeroHeight})


    React.useEffect( () => {
        setOpened(status);
    }, [status]);

    const onClick = () => {
        setOpened(!opened)
    };

    return <div className={zeroHeight ? s.accordeon + ' ' + s.zeroHeight : s.accordeon}>
        <div className={cn}>
            {children}
        </div>
        { withBtn && <div onClick={onClick} className={window.matchMedia("(min-width: 500px)").matches ? s.btnHidden : opened ? s.btn + ' ' + s.opened : s.btn}>
            {opened ? 'Свернуть' : 'Подробнее'}
        </div> }
    </div>
}

export default Accordeon