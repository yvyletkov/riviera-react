import React from "react";
import s from "./MapSection.module.scss";
import HeadlineCenter from "../HeadlineCenter/HeadlineCenter";

const MapSection = () => {

    let mapTitleRef = React.useRef();

    let [enableScroll, setEnableScroll] = React.useState(false)

    React.useEffect( () => {
    }, []);

    const onClick = () => setEnableScroll(true)

    const onMouseMove = (event) => {
        console.log(event)
        mapTitleRef.current.style.display = 'block';
        // if(event.offsetY > 10) mapTitleRef.current.style.top = event.offsetY + 20 + 'px';
        // if(event.offsetX > 10) mapTitleRef.current.style.left = event.offsetX + 20 + 'px';
    }
    const onMouseLeave = () => mapTitleRef.current.style.display = 'none';

    return (
        <div className={s.container}>
            <HeadlineCenter title={'Расположение отеля'}/>

            <div onClick={onClick} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove} className={s.mapWrapper}>
                <div ref={mapTitleRef} className={'mapTitle'}>Для активации карты нажмите по ней</div>

                {/*<iframe className={s.map} title={'Map'}*/}
                {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17670.485251664963!2d34.410430747343334!3d44.66780165237019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37b086ceb9e7%3A0xc25f18ce70fde775!2z0YPQuy4g0JvQtdC90LjQvdCwLCAyLCDQkNC70YPRiNGC0LA!5e0!3m2!1sru!2sru!4v1602843875837!5m2!1sru!2sru"*/}
                {/*        width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false"*/}
                {/*        tabIndex="0"/>*/}

                <iframe style={!enableScroll ? {pointerEvents: 'none'} : {}}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae544672a9bb4a672beb2acd7bbbfc620c689249d0fc5b400fd8fc5d3817c2247&amp;source=constructor"
                        width="100%" height="460" frameBorder="0"/>

            </div>
        </div>
    )
}

export default MapSection;
