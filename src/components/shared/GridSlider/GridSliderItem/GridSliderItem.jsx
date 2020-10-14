import React from "react";
import s from "./GridSliderItem.module.scss";


const GridSliderItem = ({firstRow, secondRow}) => {


    const firstRowItems = firstRow.map((item, index) => {
        return <a key={item.title + index} href={item.href} className={s.block} style={{backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover'}}>
            <div><p>{item.title}</p></div>
        </a>
    });
    const secondRowItems = secondRow.map((item, index) => {
        return <a key={item.title + index} href={item.href} className={s.block} style={{backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover'}}>
            <div><p>{item.title}</p></div>
        </a>
    });



    return (
         <div className={s.wrapper}>
             <div className={s.grid}>
                 <div className={s.row + ' ' + s.top}>
                     {firstRowItems}
                 </div>
                 <div className={s.row + ' ' + s.bottom}>
                     {secondRowItems}
                 </div>
             </div>
         </div>
    )
}

export default GridSliderItem;