import {infrastructurePagesData} from "../../../../data";
import InfrastructurePageBanner from "../InfrastructurePageBanner/InfrastructurePageBanner";
import React from "react";
import MapSection from "../../../shared/MapSection/MapSection";


const Restaurants = () => {
    return (
        <>
            <InfrastructurePageBanner bannerData={infrastructurePagesData.beachAndPools.bannerData}/>
            <MapSection/>
        </>
    )
}

export default Restaurants;
