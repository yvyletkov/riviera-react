import React, {useEffect} from "react";
import s from "./BookingBlock.module.scss";
// import styled from "styled-components";

// const StyledDiv = styled.div`
// .sfl-container .sf-submit-button-container .sfl-submit-button {
//     text-transform: none;
//     font-family: 'Helvet ica Neue Light', sans-serif;
//     font-size: 16px;
//     font-weight: 100;
//     background: #fe6c39;
//     border-radius: 6px;
//     height: unset;
//     padding: 18px 30px;
// }
// `

function NoIndex(props) {
    return (
        <span>
          <span dangerouslySetInnerHTML={{__html: '<!--noindex-->'}}/>
            {props.children}
            <span dangerouslySetInnerHTML={{__html: '<!--/noindex-->'}}/>
        </span>
    );
}

function BookingBlock() {

    useEffect(() => {
        window.tlSearch(window)
    }, []);

    return <div className={s.bookingBlock}>
        <div style={{zIndex: '1000'}} id='tl-search-form' className='tl-container'>
            <NoIndex>
                <a href='http://www.travelline.ru/products/tl-hotel' rel='nofollow'>система
                    онлайн-бронирования
                </a>
            </NoIndex>
        </div>
    </div>
}

export default BookingBlock;
