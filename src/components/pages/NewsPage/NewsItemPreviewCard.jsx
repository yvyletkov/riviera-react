import React from "react";
import Button from "../../shared/Button/Button";
import {strapiUrl} from "../../../api";
import styled from "styled-components";

const Styles = styled.div`
    box-sizing: border-box;
    width: 33.33%;
    padding: 0 18px;
    margin-bottom: 40px;
    position: relative;

    .note {
      text-transform: uppercase;
      background-color: rgba(255, 255, 255, 0.7);
      font-family: "Helvetica Neue Medium", sans-serif;
      padding: 20px 35px 3px 15px;
      position: absolute;
      top: 38%;
      left: 18px;
      &:after {
        content: '';
        display: block;
        background-color: #d45a2f;
        width: 16px;
        height: 4px;
        position: relative;
        top: -28px;
        left: 0;
      }
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 20px;
      border-radius: 6px;
    }

    h3 {
      font-size: 20px;
    }

    p {
      text-align: justify;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    h3, p {
      margin-bottom: 20px;
    }

    @media (max-width: 1000px) {
      padding: 0 12px;
      img {height: 180px}
      .note {top: 28%; left: 12px}
    }
    @media (max-width: 900px) {
      padding: 0 12px;
    }
    @media (max-width: 900px) {
      width: 47.5%;
    }
    @media (max-width: 500px) {
      padding: 0;
      img {height: 120px}
      h3, p {
        margin-bottom: 10px;
      }
      .note {
        top: 20%;
        left: 0;
        font-size: 13px;
        padding: 17px 28px 3px 10px;
        &:after {
          top: -24px
        }
      }
    }
  `

const NewsItemPreviewCard = ({previewImg, title, key, content, id}) => {


    return (
        <Styles key={key}>
            {/*<div className={s.note}>{item.note}</div>*/}
            <img src={strapiUrl + previewImg} alt={title}/>
            <h3>{title}</h3>
            <p>{content}</p>
            <Button link={`/news/${id}`} text={'Подробнее'}/>
        </Styles>
    );
}

export default NewsItemPreviewCard;
