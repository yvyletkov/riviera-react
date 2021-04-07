import React from 'react';
import preloaderImg from "../../../img/preloader.svg";
import styled from "styled-components";

const PreloaderStyles = styled.div`
    height: calc(100vh - 70px);
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 150px;
    }
`

const Preloader = () => {
    return (
        <PreloaderStyles>
            <img src={preloaderImg} alt='preloader'/>
        </PreloaderStyles>
    )
}

export default Preloader;
