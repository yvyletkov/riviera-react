(this["webpackJsonpriviera-react"]=this["webpackJsonpriviera-react"]||[]).push([[25],{683:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),l=a.n(r),s=a(632),c=a.n(s),o=a(684),d=a.n(o),m=a(631),p=a(629),u=a(634),g=a(173);function E(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .slick-list {\n    overflow: visible;\n  }\n\n.slick-track {\n  margin: 0 auto;\n  display: flex;\n  justify-content: start;\n}\n@media screen and (min-width: 481px){\n .slick-slider {\n    height: unset;\n    padding-bottom: 40px;\n  }\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    height: unset\n  }\n}\n"]);return E=function(){return e},e}function _(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .slick-list {\n    overflow: visible;\n  }\n\n.slick-track {\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (min-width: 481px){\n .slick-slider {\n    height: unset;\n    padding-bottom: 40px;\n  }\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    height: unset\n  }\n}\n"]);return _=function(){return e},e}var v=Object(m.a)(c.a)(_()),w=Object(m.a)(c.a)(E());t.a=function(e){var t=e.slides,a=e.title,n=e.titleMobile,i=e.initialSlideIndex,r=void 0===i?0:i,s=e.manySlides,o=void 0!==s&&s,m=e.withButton,g=void 0!==m&&m,E=e.activatePopup,_={initialSlide:r,infinite:!0,slidesToShow:3,centerMode:!0,arrows:o,variableWidth:!0,nextArrow:l.a.createElement(u.a,{positionStyles:{bottom:"-30px",right:"50%",transform:"translateX(120%)"}}),prevArrow:l.a.createElement(u.b,{positionStyles:{bottom:"-30px",left:"50%",transform:"translateX(-120%)"}}),speed:500,responsive:[{breakpoint:1024,settings:{slidesToShow:1,initialSlide:0,centerMode:!1,dots:!0,arrows:!1}}]},h=t.map((function(e,t){var a=e.img,n=e.title,i=e.key,r=e.descr,s=e.popupData;return l.a.createElement("div",{className:"SliderElement",key:i},l.a.createElement(f,{key:i,index:t,withButton:g,img:a,title:n,descr:r,popupData:s,activatePopup:E,active:!window.matchMedia("(max-width: 490px").matches&&1===t}))}));return l.a.createElement("div",{className:d.a.wrapper},l.a.createElement("div",{className:o?d.a.container+" "+d.a.withPadding:d.a.container},l.a.createElement(p.a,{title:window.matchMedia("(max-width: 490px").matches?n:a}),o?l.a.createElement(w,null,l.a.createElement(c.a,_,h)):l.a.createElement(v,null,l.a.createElement(c.a,_,h))))};var f=function(e){var t=e.img,a=e.title,i=e.descr,r=e.active,s=e.index,c=e.withButton,o=e.activatePopup,m=l.a.useState(r),p=Object(n.a)(m,2),u=p[0],E=p[1];return l.a.createElement("div",{className:u?d.a.card+" "+d.a.active:d.a.card},l.a.createElement("img",{className:d.a.img,src:t,alt:""}),l.a.createElement("div",{className:d.a.content},l.a.createElement("h6",{className:d.a.title},a),l.a.createElement("div",{className:d.a.descr},l.a.createElement("p",{style:{marginBottom:c?"10px":"0"}},i),c&&l.a.createElement(g.a,{style:{marginTop:"17px"},onClick:function(){return o(s+1)},text:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435"})),l.a.createElement("div",{className:d.a.moreBtn,onClick:function(){return E(!u)}},u?c?"":"C\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")))}},684:function(e,t,a){e.exports={wrapper:"EventMainSlider_wrapper__2fWqs",container:"EventMainSlider_container__d9cWz",withPadding:"EventMainSlider_withPadding__2CzOC",card:"EventMainSlider_card__1w6Y7",content:"EventMainSlider_content__2m_5s",descr:"EventMainSlider_descr__2Hlve",moreBtn:"EventMainSlider_moreBtn__1Ej9M",title:"EventMainSlider_title__sHFCW",active:"EventMainSlider_active__3sjEY",lifted:"EventMainSlider_lifted__1SUwF"}},687:function(e,t,a){"use strict";var n=a(630),i=a(0),r=a.n(i),l=a(632),s=a.n(l),c=a(688),o=a.n(c),d=a(631),m=a(629),p=a(634),u=a(638);function g(){var e=Object(n.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .center .slick-center .sliderElement {\n    opacity: 1;\n    transition: all 0.3s;\n    -ms-transform: scale(1.08);\n    transform: scale(1.08);\n    // margin: 0 14px;\n  }\n\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  \n  .slick-dots {\n    bottom: -32px;\n  }\n  \n  .slick-dots li {\n    margin: 0\n  }\n\n.slick-track {\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 481px) {\n   margin-top: -18px;\n}\n"]);return g=function(){return e},e}var E=d.a.div(g());t.a=function(e){var t=e.blockName,a=void 0===t?"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f":t,n=e.slides,i=e.slideTitle,l=e.videoMode,c={dots:!1,className:"center",centerMode:!l&&!0,infinite:!l&&!0,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:r.a.createElement(p.a,{positionStyles:{bottom:"-90px",right:"50%",transform:"translateX(120%)"}}),prevArrow:r.a.createElement(p.b,{positionStyles:{bottom:"-90px",left:"50%",transform:"translateX(-120%)"}}),responsive:[{breakpoint:480,settings:{className:!1,centerMode:!1,slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0,arrows:!1}}]},d=l?n.map((function(e){var t=e.video,a=e.key;return r.a.createElement("div",{key:a},r.a.createElement("div",{className:o.a.item+" "+o.a.video},r.a.createElement("iframe",{title:"Riviera Sunrise",width:"100%",height:"100%",src:t,scrolling:"no",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))})):n.map((function(e){var t=e.img,a=e.key;return r.a.createElement("div",{key:a},r.a.createElement(u.a,{className:o.a.item,alt:i,key:a,src:t}))}));return r.a.createElement("div",{id:"gallery",className:o.a.wrapper},r.a.createElement("div",{className:l?o.a.videoContainer:o.a.container},r.a.createElement(m.a,{title:a}),r.a.createElement(E,null,r.a.createElement(s.a,c,d))))}},688:function(e,t,a){e.exports={wrapper:"LargeGallerySlider_wrapper__21-4a",container:"LargeGallerySlider_container__3HX8g",videoContainer:"LargeGallerySlider_videoContainer__2GSag",item:"LargeGallerySlider_item__5d88t",video:"LargeGallerySlider_video__6EfH3"}},707:function(e,t,a){e.exports={wrapper:"GalleryWeddingSlider_wrapper__1gdG-",container:"GalleryWeddingSlider_container__G6Uoc",mobileBlock:"GalleryWeddingSlider_mobileBlock__2ZTf4",mobileBlockText:"GalleryWeddingSlider_mobileBlockText__385B8"}},708:function(e,t,a){e.exports={photo:"GalleryWeddingSliderItem_photo__HbOLK",nthChild4:"GalleryWeddingSliderItem_nthChild4__UetUJ",nthChild1:"GalleryWeddingSliderItem_nthChild1__3LYgl",img:"GalleryWeddingSliderItem_img__30gt_",description:"GalleryWeddingSliderItem_description__60u1W",shown:"GalleryWeddingSliderItem_shown__hS_YQ",title:"GalleryWeddingSliderItem_title__339tf",text:"GalleryWeddingSliderItem_text__3yACe",href:"GalleryWeddingSliderItem_href__2qGJJ"}},709:function(e,t,a){"use strict";var n=a(27),i=a(710),r=a.n(i),l=a(643),s=a(646),c=a(632),o=a.n(c),d=a(7),m=a(0),p=a.n(m);t.a=function(){var e=p.a.useState(!1),t=Object(n.a)(e,2),a=t[0],i=t[1];return p.a.createElement("div",{className:r.a.wrapper},p.a.createElement("div",{className:r.a.container},p.a.createElement("div",{className:r.a.topRow},p.a.createElement("h4",{className:r.a.title},p.a.createElement("span",null,"\u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c"),p.a.createElement("span",null,"\u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),p.a.createElement("span",null,"\u0441\u0432\u0430\u0434\u044c\u0431\u044b")),p.a.createElement("div",{className:r.a.tipWrapper},p.a.createElement(l.a,{style:{marginLeft:"-30px"},accordeonStatus:a,onClick:function(){return i(!a)}})),p.a.createElement("div",{className:r.a.textContent},p.a.createElement(s.a,{withBtn:!1,zeroHeight:!0,status:a},p.a.createElement("p",null,"\u0421\u0432\u0430\u0434\u044c\u0431\u0430 \u0432 \u041a\u0440\u044b\u043c\u0443 \u2013 \u0441\u043b\u043e\u0436\u043d\u043e\u0435 \u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043f\u043e \u0443\u0440\u043e\u0432\u043d\u044e \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0442\u044c \u043e\u0442\u0435\u043b\u044c \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u043e\u043c \u0431\u0430\u043d\u043a\u0435\u0442\u043d\u044b\u0445 \u0437\u0430\u043b\u043e\u0432, \u0441 \u043a\u0440\u044b\u0442\u044b\u043c\u0438 \u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c\u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u0432\u044b\u0435\u0437\u0434\u043d\u043e\u0439 \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0438. \u0418\u0433\u0440\u0430\u0435\u0442 \u043d\u0435\u043c\u0430\u043b\u043e\u0432\u0430\u0436\u043d\u0443\u044e \u0440\u043e\u043b\u044c \u043e\u043f\u044b\u0442 \u0432 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430\u0445. \u041e\u0442 \u0432\u044b\u0431\u043e\u0440\u0430 \u043c\u0435\u0441\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u0432\u0430\u0434\u044c\u0431\u044b \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0435. \u0412\u0430\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0446\u0435\u043d\u044b, \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435.")))),p.a.createElement("div",{className:r.a.sliderWrapper},p.a.createElement(o.a,Object.assign({},{infinite:!1,slidesToShow:5,arrows:!1,responsive:[{breakpoint:1e3,settings:{variableWidth:!0,slidesToShow:1}}]},{slidesToShow:4}),d.c.weddingPages.weddingPlacesSlides.map((function(e,t){return p.a.createElement("div",null,p.a.createElement("div",{className:r.a.sliderItemWrapper},p.a.createElement("div",null,t+1),p.a.createElement("img",{src:e.img,alt:e.text}),p.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}})))}))))))}},710:function(e,t,a){e.exports={wrapper:"EventSquaresSlider_wrapper__3B1s2",container:"EventSquaresSlider_container__bz5K0",topRow:"EventSquaresSlider_topRow__dDYMI",title:"EventSquaresSlider_title__2aJy2",tipWrapper:"EventSquaresSlider_tipWrapper__1NtBR",textContent:"EventSquaresSlider_textContent__3DvNr",sliderWrapper:"EventSquaresSlider_sliderWrapper__2Rn8V",sliderItemWrapper:"EventSquaresSlider_sliderItemWrapper__8UjYK"}},718:function(e,t,a){"use strict";var n=a(630),i=a(0),r=a.n(i),l=a(632),s=a.n(l),c=a(707),o=a.n(c),d=a(708),m=a.n(d),p=a(638),u=function(e){var t=e.img,a=e.fourth,n=e.first;return r.a.createElement("div",{className:a?m.a.photo+" "+m.a.nthChild4:n?m.a.photo+" "+m.a.nthChild1:m.a.photo},r.a.createElement(p.a,{className:m.a.img,src:t,alt:"\u0421\u0432\u0430\u0434\u044c\u0431\u0430"}))},g=a(631),E=a(629),_=a(634),v=a(173),w=a(175);function f(){var e=Object(n.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  \n  .slick-slide img {width: 100%}\n  \n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  \n  @media (min-width: 601px) {\n    .slick-list {\n    margin-top: -75px;\n    }   \n    \n  }\n  \n    .slick-dots {\n    bottom: -32px;\n  }\n  .slick-dots li {\n    margin: 0\n}\n"]);return f=function(){return e},e}var h=Object(g.a)(s.a)(f());t.a=function(e){var t=e.blockName,a=void 0===t?"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f":t,n=e.slides,i={infinite:!0,centerMode:!0,speed:500,slidesToShow:3,rows:2,slidesPerRow:2,responsive:[{breakpoint:1450,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:600,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesPerRow:1,centerPadding:"60px"}},{breakpoint:330,settings:{arrows:!1,dots:!0,slidesToShow:1,slidesPerRow:1,centerPadding:"20px"}}],nextArrow:r.a.createElement(_.a,{positionStyles:{bottom:"-75px",right:"50%",transform:"translateX(120%)"}}),prevArrow:r.a.createElement(_.b,{positionStyles:{bottom:"-75px",left:"50%",transform:"translateX(-120%)"}})},l=n.map((function(e,t){0===t&&(t=4);var a=e.img,n=e.title,i=e.description,l=e.href,s=e.key;return r.a.createElement("div",{className:"SliderElement",key:s},r.a.createElement(u,{first:t%4===0,fourth:(t+1)%4===0,img:a,title:n,description:i,href:l}))}));return r.a.createElement(w.a,{options:{buttons:{showAutoplayButton:!1,showCloseButton:!0,showDownloadButton:!1,showFullscreenButton:!1},caption:{showCaption:!1}}},r.a.createElement("div",{id:"gallery",className:o.a.wrapper},r.a.createElement("div",{className:o.a.container},r.a.createElement(E.a,{title:a}),r.a.createElement(h,null,r.a.createElement(s.a,i,l)),r.a.createElement("div",{className:o.a.mobileBlock},r.a.createElement("div",{className:o.a.mobileBlockText},"\u0411\u043e\u043b\u044c\u0448\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u043d\u0430\u0448\u0435\u0433\u043e \u043e\u0442\u0435\u043b\u044f"),r.a.createElement(v.a,{text:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0433\u0430\u043b\u0435\u0440\u0435\u0435"})))))}},775:function(e,t,a){e.exports={weddingPriceBlock:"WeddingPage_weddingPriceBlock__2Qsix",wrapper:"WeddingPage_wrapper__2aADr",container:"WeddingPage_container__yte2W",title:"WeddingPage_title__2W_3n",weddingOrganizationBlock:"WeddingPage_weddingOrganizationBlock__iN3tB",contentWrapper:"WeddingPage_contentWrapper__2NnSe",weddingDecisionBlock:"WeddingPage_weddingDecisionBlock__v2xrQ",grid:"WeddingPage_grid__s9sX-",imageBlock:"WeddingPage_imageBlock__lIpOi",textBlock:"WeddingPage_textBlock__3FT54",textContent:"WeddingPage_textContent__pkZpN"}},776:function(e,t,a){e.exports=a.p+"static/media/weddingPageBanner-mob.066b202c.jpg"},777:function(e,t,a){e.exports=a.p+"static/media/wedding.fac3daa3.jpg"},872:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(775),l=a.n(r),s=a(7),c=a(690),o=a.n(c),d=a(725),m=a.n(d),p=a(776),u=a.n(p),g=a(777),E=a.n(g),_=a(691),v=a(635),w=a(683),f=a(644),h=a(687),S=a(645),x=a(718),b=a(633),k=a(653),N=a(692),y=a(676),W=a(693),B=a(709),P=a(174);t.default=function(){return i.a.useEffect((function(){return document.title="\u0421\u0432\u0430\u0434\u044c\u0431\u0430 \u2013 Riviera Sunrise Resort & SPA \u2013 \u0410\u043b\u0443\u0448\u0442\u0430, \u041a\u0440\u044b\u043c"}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{fontSize:["68px","82px","52px"],mobileFontSize:["11.7vw","19.2vw","8.2vw"],titles:["\u0412\u0430\u0448\u0430","\u0441\u0432\u0430\u0434\u044c\u0431\u0430","\u043c\u0435\u0447\u0442\u044b","\u0432 \u041a\u0440\u044b\u043c\u0443"],icons:s.c.weddingPages.weddingBannerIcons,bannerImg:m.a,bannerImgMobile:u.a}),i.a.createElement("section",{className:"section first"},i.a.createElement(W.a,{subtitle:"\u0412\u0430\u0448\u0430 \u0441\u0435\u043c\u044c\u044f",title:"\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c",img:E.a,text:"\u041b\u044e\u0431\u0432\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e! \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u044b\u0439 \u0434\u0435\u043d\u044c \u0434\u043b\u044f \u043f\u0430\u0440\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0430\u043c, \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0451 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u0442\u0440\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0438, \u0437\u0430\u0436\u0438\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u0430\u0434\u0435\u0431\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u044e\u0440\u043f\u0440\u0438\u0437\u043e\u0432, \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0430\u0440\u0442\u0438\u0441\u0442\u043e\u0432 \u0438 \u043a\u0430\u0432\u0435\u0440-\u0433\u0440\u0443\u043f\u043f.",forWedding:!0,listArray:["\u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u043c\u0430\u043b\u044c\u0447\u0438\u0448\u043d\u0438\u043a \u0438 \u0434\u0435\u0432\u0438\u0447\u043d\u0438\u043a,","\u0441\u0432\u0430\u0434\u0435\u0431\u043d\u0430\u044f \u0444\u043e\u0442\u043e- \u0438 \u0432\u0438\u0434\u0435\u043e\u0441\u0435\u0441\u0441\u0438\u044f,","\u0441\u0431\u043e\u0440\u044b \u043d\u0435\u0432\u0435\u0441\u0442\u044b,","\u0440\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u043d\u0430\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043d\u043e\u0447\u044c."]})),i.a.createElement("section",{className:"section"},i.a.createElement(w.a,{slides:s.c.weddingPages.weddingMainSlides,title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0432\u044b\u0435\u0437\u0434\u043d\u043e\u0439 \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0438",titleMobile:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0439"})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:l.a.weddingPriceBlock},i.a.createElement("div",{className:l.a.wrapper},i.a.createElement("div",{className:l.a.container},i.a.createElement("h4",{className:l.a.title},i.a.createElement("span",null,"\u0425\u043e\u0442\u0438\u0442\u0435 \u0437\u043d\u0430\u0442\u044c,"),i.a.createElement("span",null,"\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0432\u044b\u0435\u0437\u0434\u043d\u0430\u044f"),i.a.createElement("span",null,"\u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u044f?")),i.a.createElement("p",null,"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u0432\u0430\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0440\u0430\u0439\u0441 \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c"),i.a.createElement(P.a,{submitBtnText:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0430\u0439\u0441",formName:'\u0424\u043e\u0440\u043c\u0430 "\u0425\u043e\u0442\u0438\u0442\u0435 \u0437\u043d\u0430\u0442\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0432\u044b\u0435\u0437\u0434\u043d\u0430\u044f \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u044f"',withEmail:!0,swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u043f\u0440\u0430\u0439\u0441-\u043b\u0438\u0441\u0442 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!"}))))),i.a.createElement("section",{className:"section"},i.a.createElement(k.a,{title:"\u0414\u043e\u0432\u0435\u0440\u044c\u0442\u0435\u0441\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0430\u043c",icons:s.c.weddingPages.weddingIcons})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:l.a.weddingOrganizationBlock},i.a.createElement("div",{className:l.a.wrapper},i.a.createElement("div",{className:l.a.container},i.a.createElement("div",{className:l.a.contentWrapper},i.a.createElement("h4",{className:l.a.title},i.a.createElement("span",null,"\u041f\u0440\u0438\u0435\u0437\u0436\u0430\u0439\u0442\u0435"),i.a.createElement("span",null,"\u0438 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u0431\u0435\u0437\u0443\u043f\u0440\u0435\u0447\u043d\u043e\u0439"),i.a.createElement("span",null,"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439"),i.a.createElement("span",null,"\u0412\u0430\u0448\u0435\u0439 \u0441\u0432\u0430\u0434\u044c\u0431\u044b")),i.a.createElement(P.a,{submitBtnText:window.matchMedia("(max-width: 768px").matches?"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438":"\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043e\u0431 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u0430\u0434\u044c\u0431\u044b",formName:'\u0424\u043e\u0440\u043c\u0430 "\u041f\u0440\u0438\u0435\u0437\u0436\u0430\u0439\u0442\u0435 \u0438 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u0431\u0435\u0437\u0443\u043f\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439" (\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043e\u0431 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u0430\u0434\u044c\u0431\u044b)',withEmail:!0,swalText:"\u0441\u043a\u043e\u0440\u043e \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0435!"})))))),i.a.createElement("section",{className:"section"},i.a.createElement(N.a,{btnLink:"documents/\u0421\u0432\u0430\u0434\u0435\u0431\u043d\u043e\u0435-\u043c\u0435\u043d\u044e.pdf"})),i.a.createElement("section",{className:"section"},i.a.createElement(f.a,{subtitle:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",title:"\u0443\u0441\u043b\u0443\u0433\u0438",btnText:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0430\u0439\u0441 \u043f\u043e \u0443\u0441\u043b\u0443\u0433\u0430\u043c",btnLink:"/documents/\u0414\u043e\u043f-\u0443\u0441\u043b\u0443\u0433\u0438.zip",slides:s.c.specialsSlides,text:"\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u0432 \u043e\u0442\u0435\u043b\u0435 Riviera Sunrise Resort & SPA, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u0443\u0433\u0430\u043c\u0438. \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0438\u0445 \u0441 \u0436\u0435\u043b\u0430\u043d\u0438\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0448\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u043c \u0438 \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c \u0433\u043e\u0441\u0442\u044f\u043c \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u0438 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f!"})),i.a.createElement("section",{className:"section"},i.a.createElement(h.a,{blockName:"\u041b\u0443\u0447\u0448\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0443\u0432\u0438\u0434\u0435\u0442\u044c",slides:s.c.weddingPages.weddingLargeGallerySlides,slideTitle:"\u041b\u0443\u0447\u0448\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0443\u0432\u0438\u0434\u0435\u0442\u044c",videoMode:!0})),i.a.createElement("section",{className:"section"},i.a.createElement(B.a,null)),i.a.createElement("section",{className:"section"},i.a.createElement(y.a,null)),i.a.createElement("section",{className:"section"},i.a.createElement(S.a,{subtitle:"\u041a\u043e\u0440\u043f\u0443\u0441",title:"\u041c\u043e\u0434\u0435\u0440\u043d",textContent:s.c.modernDescr,data:s.c.modernSlides,noPaddingTop:!0}),i.a.createElement(S.a,{lastOfTwo:!0,subtitle:"\u041a\u043e\u0440\u043f\u0443\u0441",title:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",textContent:s.c.classicDescr,data:s.c.classicSlides})),i.a.createElement("section",{className:"section"},i.a.createElement(x.a,{blockName:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u043e \u0441\u0432\u0430\u0434\u044c\u0431\u044b",slides:s.c.weddingPages.weddingGallerySlides})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:l.a.weddingDecisionBlock},i.a.createElement("div",{className:l.a.wrapper},i.a.createElement("div",{className:l.a.grid},i.a.createElement("div",{className:l.a.imageBlock},i.a.createElement("img",{src:o.a,alt:"Riviera Sunrise"})),i.a.createElement("div",{className:l.a.textBlock},i.a.createElement("div",{className:l.a.textContent},i.a.createElement(v.a,{subtitle:"\u0412\u0430\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442",title:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435"}),i.a.createElement("p",null,"\u041b\u0443\u0447\u0448\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0435\u0433\u043e, \u0432\u043b\u0430\u0434\u0435\u044f \u043f\u043e\u043b\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043d\u0430 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u0441\u0432\u0430\u0434\u044c\u0431\u044b \u0432 \u043d\u0430\u0448\u0435\u043c \u043e\u0442\u0435\u043b\u0435."),i.a.createElement(P.a,{submitBtnText:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",formName:'\u0424\u043e\u0440\u043c\u0430 "\u0412\u0430\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0435\u043d\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435" (\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435)',withEmail:!0,swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!"}))))))),i.a.createElement("section",{className:"section"},i.a.createElement(b.a,null)))}}}]);
//# sourceMappingURL=25.c9733900.chunk.js.map