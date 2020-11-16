import React from "react";
import MicePageBanner from "./MicePageBanner/MicePageBanner";
import TextBlock from "./TextBlock/TextBlock";
import IconsBlock from "./IconsBlock/IconsBlock";
import CenteredSlider from "../../../shared/sliders/CenteredSlider/CenteredSlider";
import {micePagesData} from "../../../../data";

const ForumPage = () => {
    return (
        <>
            <MicePageBanner/>
            <section className="section">
                <TextBlock style={{marginTop: '-100px'}}/>
            </section>
            <section className="section">
                <IconsBlock/>
            </section>
            <section>
                <CenteredSlider slides={micePagesData.centeredSlides} title={"Что мы берем на себя"} type={2} />
            </section>
        </>
    )
}

export default ForumPage;