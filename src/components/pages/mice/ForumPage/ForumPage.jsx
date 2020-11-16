import React from "react";
import MicePageBanner from "./MicePageBanner/MicePageBanner";
import TextBlock from "./TextBlock/TextBlock";
import IconsBlock from "./IconsBlock/IconsBlock";


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
        </>
    )
}

export default ForumPage;