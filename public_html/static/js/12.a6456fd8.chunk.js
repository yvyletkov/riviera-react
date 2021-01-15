(this["webpackJsonpriviera-react"]=this["webpackJsonpriviera-react"]||[]).push([[12],{629:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(637),l=a.n(i);t.a=function(e){var t=e.title,a=e.style;return r.a.createElement("h2",{style:a,className:l.a.headlineCenter},t)}},633:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(636),l=a.n(i),c=a(629);t.a=function(){return r.a.createElement("div",{className:l.a.container},r.a.createElement(c.a,{title:"\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u0435\u043b\u044f"}),r.a.createElement("div",{className:l.a.mapWrapper},r.a.createElement("iframe",{className:l.a.map,title:"Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17670.485251664963!2d34.410430747343334!3d44.66780165237019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37b086ceb9e7%3A0xc25f18ce70fde775!2z0YPQuy4g0JvQtdC90LjQvdCwLCAyLCDQkNC70YPRiNGC0LA!5e0!3m2!1sru!2sru!4v1602843875837!5m2!1sru!2sru",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})))}},634:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(642),r=a(639),i=a.n(r),l=a(640),c=a.n(l),o=a(641),s=a.n(o),m=a(0),A=a.n(m);function d(e){var t=e.style,a=e.positionStyles,r=e.onClick;return A.a.createElement("div",{className:i.a.nextArrow,style:Object(n.a)({},t,{backgroundImage:"url("+c.a+")"},a),onClick:r})}function u(e){var t=e.style,a=e.positionStyles,r=e.onClick;return A.a.createElement("div",{className:i.a.prevArrow,style:Object(n.a)({},t,{backgroundImage:"url("+s.a+")"},a),onClick:r})}},635:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(648),l=a.n(i);t.a=function(e){var t=e.subtitle,a=e.title,n=void 0===a?"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":a;return r.a.createElement("div",{className:l.a.wrapper},t&&r.a.createElement("h4",{className:l.a.subtitle},t),r.a.createElement("h2",{className:l.a.title},n))}},636:function(e,t,a){e.exports={container:"MapSection_container__3mcTu",mapWrapper:"MapSection_mapWrapper__3ZhXp"}},637:function(e,t,a){e.exports={headlineCenter:"HeadlineCenter_headlineCenter__2zhKw"}},638:function(e,t,a){"use strict";var n=a(27),r=a(630),i=a(0),l=a.n(i),c=a(631);function o(){var e=Object(r.a)(["\n  ","\n    display: block;\n"]);return o=function(){return e},e}var s=c.a.img(o(),(function(e){var t;return null!==(t=e.$style)&&void 0!==t?t:{}}));t.a=function(e){var t=e.src,a=e.alt,r=e.style,c=e.className,o=Object(i.useState)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88B8AAuUB8e2ujYwAAAAASUVORK5CYII="),m=Object(n.a)(o,2),A=m[0],d=m[1],u=Object(i.useState)(),p=Object(n.a)(u,2),_=p[0],g=p[1];return Object(i.useEffect)((function(){var e,a=!1;return _&&A!==t&&(IntersectionObserver?(e=new IntersectionObserver((function(n){n.forEach((function(n){!a&&(n.intersectionRatio>0||n.isIntersecting)&&(d(t),e.unobserve(_))}))}),{threshold:.01,rootMargin:"75%"})).observe(_):d(t)),function(){a=!0,e&&e.unobserve&&e.unobserve(_)}}),[t,A,_]),l.a.createElement(s,{$style:r,className:c,ref:g,src:A,alt:a,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){}})}},639:function(e,t,a){e.exports={nextArrow:"sliderArrowButtons_nextArrow__1SbIM",prevArrow:"sliderArrowButtons_prevArrow__3X5_u"}},640:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMAjOCJCyrYDbW5tijfigwrtCcOrryy2S2PsdH7WQAAAEZJREFUCNdj4BJnAAMJMVYIg5mHG8LgZeOHMBiZBKFSbKwwETDFIswBotg5udhBFAcnC5Di4+QA8YQEwDwGETCPgUEUohUAXBIBpMCdUXQAAAAASUVORK5CYII="},641:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMA2OC2CyqMDbm1iSsoiieuDN/Zjy20vLIOSWloaQAAAERJREFUCNcti9kSgDAIA1PbCnjf+v9f6hCalw3LBPBcmajH6Zj2wTGm2bF0PX+JEnEBthZSsgpLUYsiplsz99fME6P6/lUZAaQZGQ8HAAAAAElFTkSuQmCC"},643:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(654),l=a.n(i);t.a=function(e){var t=e.accordeonStatus,a=e.onClick,n=e.style;return r.a.createElement("span",{style:n,className:t?l.a.cirqleTip+" "+l.a.active:l.a.cirqleTip,onClick:a},r.a.createElement("p",null,"!"))}},644:function(e,t,a){"use strict";var n=a(27),r=a(630),i=a(0),l=a.n(i),c=a(632),o=a.n(c),s=a(658),m=a.n(s),A=a(651),d=a(631),u=a(635),p=(a(659),a(634)),_=a(173),g=a(518);function E(){var e=Object(r.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  .slick-slider {\n    margin-top: 17%;\n  }\n  .slick-dots li {\n    margin: 0\n  }\n  \n.slick-slide img {\n  width: 100%;\n  margin: 0 40px 0 0;\n}\n\n.slick-track {\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    margin-top: 0;\n  }\n}\n"]);return E=function(){return e},e}var v=Object(d.a)(o.a)(E());t.a=function(e){var t=e.title,a=void 0===t?"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":t,r=e.subtitle,i=void 0===r?"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e":r,c=e.btnLink,s=e.slides,d=e.text,E=e.btnText,f=void 0===E?"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f":E,b=l.a.useState(!1),k=Object(n.a)(b,2),S=k[0],h=k[1];d||(d="\u041e\u0442\u0435\u043b\u044c Riviera Sunrise Resort&SPA \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044e \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0448 \u043e\u0442\u0434\u044b\u0445 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u043c \u0438 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u043c, \u043d\u043e \u0438 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u043e \u0446\u0435\u043d\u0435!");var w={infinite:!0,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:l.a.createElement(p.a,{positionStyles:{bottom:"15px",left:"670px"}}),prevArrow:l.a.createElement(p.b,{positionStyles:{bottom:"15px",left:"610px"}}),responsive:[{breakpoint:1200,settings:{dots:!0,arrows:!1}}]},N=s.map((function(e,t){var a=e.img,n=e.title,r=e.subtitle,i=e.key,c=e.link;return l.a.createElement("div",{className:"SliderElement",key:i},l.a.createElement(A.a,{img:a,title:n,subtitle:r,active:1===t,link:c}))}));return l.a.createElement("div",{className:m.a.wrapper},l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{className:m.a.leftBlock},l.a.createElement(u.a,{subtitle:i,title:a}),l.a.createElement("p",null,d),l.a.createElement(g.a,{popupOpen:S,setPopupOpen:h,popupTitleText:"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\ufe0f",submitBtnText:f,formName:'\u0424\u043e\u0440\u043c\u0430 \u0438\u0437 \u0431\u043b\u043e\u043a\u0430 "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438" (\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0430\u0439\u0441 \u043f\u043e \u0443\u0441\u043b\u0443\u0433\u0430\u043c)',swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!",withEmail:!0,withPhone:!0})),l.a.createElement("div",{className:m.a.rightBlock},l.a.createElement(v,null,l.a.createElement(o.a,w,N))),l.a.createElement(_.a,{text:f,onClick:c?function(){return window.location=c}:function(){return h(!0)},link:c||null,style:window.matchMedia("(max-width: 768px)").matches?{width:"calc(100vw - 40px)",margin:"0 auto",marginTop:"40px"}:{width:"210px",marginLeft:"10px"}})))}},646:function(e,t,a){"use strict";var n=a(27),r=a(0),i=a.n(r),l=a(665),c=a.n(l);t.a=function(e){var t=e.status,a=void 0!==t&&t,r=e.children,l=e.zeroHeight,o=void 0!==l&&l,s=e.withBtn,m=void 0===s||s,A=i.a.useState(a),d=Object(n.a)(A,2),u=d[0],p=d[1];i.a.useEffect((function(){p(a)}),[a]);return i.a.createElement("div",{className:o?c.a.accordeon+" "+c.a.zeroHeight:c.a.accordeon},i.a.createElement("div",{className:u||window.matchMedia("(min-width: 500px)").matches?c.a.text+" "+c.a.opened:o?c.a.text+" "+c.a.zeroHeight:c.a.text},r),m&&i.a.createElement("div",{onClick:function(){p(!u)},className:window.matchMedia("(min-width: 500px)").matches?c.a.btnHidden:u?c.a.btn+" "+c.a.opened:c.a.btn},u?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))}},648:function(e,t,a){e.exports={wrapper:"Headline_wrapper__3qi0s",title:"Headline_title__2Zuf6",subtitle:"Headline_subtitle__TkAsW"}},649:function(e,t,a){"use strict";var n=a(27),r=a(630),i=a(0),l=a.n(i),c=a(632),o=a.n(c),s=a(669),m=a.n(s),A=a(670),d=a.n(A),u=a(671),p=a.n(u),_=a(672),g=a.n(_),E=a(3),v=function(e){var t=e.img,a=e.link,n=e.title,r=e.subtitle,i=e.time,c=e.date,o=e.campus,s=e.campusName,m=e.type,A=void 0===m?"home-page":m,u=e.subsubtitle,_=e.fontsizeSubsubtitle,v=e.active,f=e.capacity,b=e.area;switch(A){case"home-page":return l.a.createElement("div",{className:v?d.a.card+" "+d.a.active:d.a.card},a&&l.a.createElement(E.b,{className:d.a.link,to:a},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192"),l.a.createElement("img",{className:d.a.img,src:t,alt:n}),l.a.createElement("div",{className:d.a.content},l.a.createElement("p",{className:d.a.title},n),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:r},className:d.a.subtitle}),l.a.createElement("p",{className:d.a.time},i,l.a.createElement("span",null,c)),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:o},className:d.a.campus}),l.a.createElement("div",null,s)));case 2:return l.a.createElement("div",{className:v?d.a.card+" "+d.a.active:d.a.card},l.a.createElement("img",{className:d.a.img,src:t,alt:n}),l.a.createElement("div",{className:d.a.content},l.a.createElement("p",{className:d.a.title},n),l.a.createElement("p",{className:d.a.subtitle1},r),l.a.createElement("p",{className:d.a.subsubtitle,style:{fontSize:_}},u)));case"room":return l.a.createElement("div",{className:v?d.a.card+" "+d.a.active:d.a.card},l.a.createElement(E.b,{onClick:function(e){a||e.preventDefault()},to:a||"#"},l.a.createElement("img",{className:d.a.img,src:t,alt:n}),l.a.createElement("div",{className:d.a.content},l.a.createElement("p",{className:d.a.roomSubtitle},r),l.a.createElement("p",{className:d.a.roomTitle},n),l.a.createElement("div",{className:d.a.imgContainer},l.a.createElement("img",{src:g.a,alt:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043d\u043e\u043c\u0435\u0440\u0430"}),b," \u043c",l.a.createElement("sup",null,"2")),l.a.createElement("div",{className:d.a.imgContainer},l.a.createElement("img",{src:p.a,alt:"\u0412\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"}),f))));default:return null}},f=a(631),b=a(629),k=a(634);function S(){var e=Object(r.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  \n  .slick-dots {\n    bottom: -32px;\n  }\n  .slick-dots li {\n    margin: 0\n  }\n\n.slick-slide img {\n  width: 100%;\n  margin: 0 40px 0 0;\n}\n\n.slick-track {\n  margin: 0 auto;\n}\n\n"]);return S=function(){return e},e}var h=f.a.div(S());t.a=function(e){var t=e.title,a=void 0===t?"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":t,r=e.slides,i=e.type,c=void 0===i?"home-page":i,s=l.a.useState(window.matchMedia("(min-width: 769px)").matches?4===r.length?2:2===r.length?1:0:0),A=Object(n.a)(s,2),d=A[0],u=A[1],p=r.map((function(e,t){var a=e.img,n=e.link,r=e.title,i=e.subtitle,o=e.time,s=e.date,m=e.campus,A=e.campusName,u=e.key,p=e.subsubtitle,_=void 0===p?"":p,g=e.fontsizeSubsubtitle,E=void 0===g?"":g,f=e.capacity,b=e.area;return l.a.createElement("div",{className:"sliderElement",key:u},l.a.createElement(v,{active:d===t,link:n,type:c,img:a,title:r,subtitle:i,subsubtitle:_,fontsizeSubsubtitle:E,time:o,date:s,campus:m,campusName:A,capacity:f,area:b}))})),_={initialSlide:4===r.length?2:2===r.length?1:0,afterChange:function(e){return u(e)},dots:!1,className:"center",centerMode:!0,infinite:"home-page"!==c,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:l.a.createElement(k.a,{onClick:function(){return u(d+1)},positionStyles:{bottom:"-90px",right:"50%",transform:"translateX(120%)"}}),prevArrow:l.a.createElement(k.b,{onClick:function(){return u(d-1)},positionStyles:{bottom:"-90px",left:"50%",transform:"translateX(-120%)"}}),responsive:[{breakpoint:480,settings:{initialSlide:0,className:!1,centerMode:!1,slidesToShow:1,slidesToScroll:1,infinite:"home-page"!==c,dots:!0,arrows:!1}}]};l.a.useEffect((function(){g.current.slickGoTo(d)}),[d]);var g=l.a.useRef();return l.a.createElement("div",{className:m.a.wrapper},l.a.createElement(b.a,{title:a}),l.a.createElement(h,null,l.a.createElement(o.a,Object.assign({ref:g},_),p)))}},651:function(e,t,a){"use strict";var n=a(647),r=a(27),i=a(0),l=a.n(i),c=a(652),o=a.n(c),s=a(3),m=a(68),A=a.n(m);a(638);t.a=function(e){var t,a=e.img,i=e.active,c=e.title,m=e.subtitle,d=e.link,u=e.decolorized,p=e.oneLine,_=e.smallText,g=l.a.useState(i),E=Object(r.a)(g,2),v=E[0],f=E[1],b=A()(o.a.card,(t={},Object(n.a)(t,o.a.lifted,v),Object(n.a)(t,o.a.noLink,!d),Object(n.a)(t,o.a.small,p),Object(n.a)(t,o.a.smallText,_),t));return l.a.createElement("div",{className:o.a.cardWrapper},l.a.createElement(s.b,{onClick:function(e){d||e.preventDefault()},to:d||"#"},l.a.createElement("div",{className:b,onMouseEnter:function(){return window.matchMedia("screen and (max-width: 1200px)").matches?null:f(!0)},onMouseLeave:function(){return window.matchMedia("screen and (max-width: 1200px)").matches?null:f(!1)}},l.a.createElement("img",{className:u?o.a.img+" "+o.a.decolorized:o.a.img,src:a,alt:"\u0410\u0444\u0438\u0448\u0430"}),l.a.createElement("div",{className:o.a.content},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:m},className:o.a.subtitle}),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:c},className:o.a.title}),d&&l.a.createElement("div",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192")))))}},652:function(e,t,a){e.exports={cardWrapper:"SpecialsSliderItem_cardWrapper__10UUN",card:"SpecialsSliderItem_card__3YU28",lifted:"SpecialsSliderItem_lifted__3iMi6",noLink:"SpecialsSliderItem_noLink__1YEPC",small:"SpecialsSliderItem_small__3qIdc",decolorized:"SpecialsSliderItem_decolorized__2zSjz",content:"SpecialsSliderItem_content__1ylKF",smallText:"SpecialsSliderItem_smallText__3yd86",title:"SpecialsSliderItem_title__vG68z",subtitle:"SpecialsSliderItem_subtitle__1RI0O"}},654:function(e,t,a){e.exports={cirqleTip:"CirqleTip_cirqleTip__3wgus",active:"CirqleTip_active__1x3u0"}},655:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(656),l=a.n(i);t.a=function(){return Object(n.useEffect)((function(){window.tlSearch(window)}),[]),r.a.createElement("div",{className:l.a.bookingBlock},r.a.createElement("div",{style:{zIndex:"1000"},id:"tl-search-form",className:"tl-container"},r.a.createElement("noindex",null,r.a.createElement("a",{href:"http://www.travelline.ru/products/tl-hotel",rel:"nofollow"},"\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u043d\u043b\u0430\u0439\u043d-\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"))))}},656:function(e,t,a){e.exports={bookingBlock:"BookingBlock_bookingBlock__1z_xX"}},658:function(e,t,a){e.exports={wrapper:"SpecialsSlider_wrapper__mEqLN",container:"SpecialsSlider_container__2OogO",leftBlock:"SpecialsSlider_leftBlock__3-yY2",rightBlock:"SpecialsSlider_rightBlock__1A0_V"}},659:function(e,t,a){e.exports=a.p+"static/media/right-arrow.279196e3.svg"},665:function(e,t,a){e.exports={accordeon:"Accordeon_accordeon__1EEOx",zeroHeight:"Accordeon_zeroHeight__28bqr",text:"Accordeon_text__2xctf",opened:"Accordeon_opened__yFVex",btn:"Accordeon_btn__2IqMv",btnHidden:"Accordeon_btnHidden__HCJUA"}},669:function(e,t,a){e.exports={wrapper:"CenteredSlider_wrapper__1icd8"}},670:function(e,t,a){e.exports={card:"CenteredSliderItem_card__21_3j",active:"CenteredSliderItem_active__1vNGT",img:"CenteredSliderItem_img__3oN5q",content:"CenteredSliderItem_content__2dalT",subtitle:"CenteredSliderItem_subtitle__HDdue",title:"CenteredSliderItem_title__sCJbW",subtitle1:"CenteredSliderItem_subtitle1__B66KX",subsubtitle:"CenteredSliderItem_subsubtitle__1vMED",time:"CenteredSliderItem_time__cu9z8",campus:"CenteredSliderItem_campus__3_Fc1",link:"CenteredSliderItem_link__2EVH1",roomSubtitle:"CenteredSliderItem_roomSubtitle__36Dzy",roomTitle:"CenteredSliderItem_roomTitle__si2ZE",imgContainer:"CenteredSliderItem_imgContainer__3-B_9"}},671:function(e,t,a){e.exports=a.p+"static/media/capacity-white.f0240ef3.png"},672:function(e,t,a){e.exports=a.p+"static/media/ploshchad-white.3dc622e9.png"},687:function(e,t,a){"use strict";var n=a(630),r=a(0),i=a.n(r),l=a(632),c=a.n(l),o=a(688),s=a.n(o),m=a(631),A=a(629),d=a(634),u=a(638);function p(){var e=Object(n.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .center .slick-center .sliderElement {\n    opacity: 1;\n    transition: all 0.3s;\n    -ms-transform: scale(1.08);\n    transform: scale(1.08);\n    // margin: 0 14px;\n  }\n\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  \n  .slick-dots {\n    bottom: -32px;\n  }\n  \n  .slick-dots li {\n    margin: 0\n  }\n\n.slick-track {\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 481px) {\n   margin-top: -18px;\n}\n"]);return p=function(){return e},e}var _=m.a.div(p());t.a=function(e){var t=e.blockName,a=void 0===t?"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f":t,n=e.slides,r=e.slideTitle,l=e.videoMode,o={dots:!1,className:"center",centerMode:!l&&!0,infinite:!l&&!0,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:i.a.createElement(d.a,{positionStyles:{bottom:"-90px",right:"50%",transform:"translateX(120%)"}}),prevArrow:i.a.createElement(d.b,{positionStyles:{bottom:"-90px",left:"50%",transform:"translateX(-120%)"}}),responsive:[{breakpoint:480,settings:{className:!1,centerMode:!1,slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0,arrows:!1}}]},m=l?n.map((function(e){var t=e.video,a=e.key;return i.a.createElement("div",{key:a},i.a.createElement("div",{className:s.a.item+" "+s.a.video},i.a.createElement("iframe",{title:"Riviera Sunrise",width:"100%",height:"100%",src:t,scrolling:"no",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))})):n.map((function(e){var t=e.img,a=e.key;return i.a.createElement("div",{key:a},i.a.createElement(u.a,{className:s.a.item,alt:r,key:a,src:t}))}));return i.a.createElement("div",{id:"gallery",className:s.a.wrapper},i.a.createElement("div",{className:l?s.a.videoContainer:s.a.container},i.a.createElement(A.a,{title:a}),i.a.createElement(_,null,i.a.createElement(c.a,o,m))))}},688:function(e,t,a){e.exports={wrapper:"LargeGallerySlider_wrapper__21-4a",container:"LargeGallerySlider_container__3HX8g",videoContainer:"LargeGallerySlider_videoContainer__2GSag",item:"LargeGallerySlider_item__5d88t",video:"LargeGallerySlider_video__6EfH3"}},762:function(e,t,a){e.exports={bannerWrapper:"RoomPageBanner_bannerWrapper__1duxv",bannerImg:"RoomPageBanner_bannerImg__3sgJI",bannerImgTop:"RoomPageBanner_bannerImgTop__23GgM",container:"RoomPageBanner_container__JPFB6",descriptionWrapper:"RoomPageBanner_descriptionWrapper__X5x87",textBlock:"RoomPageBanner_textBlock__2WIcu",descriptionBtn:"RoomPageBanner_descriptionBtn__J7uq0",description:"RoomPageBanner_description__2Pl1i",shown:"RoomPageBanner_shown__1c6-b",bookingBlock:"RoomPageBanner_bookingBlock__282c7",mobileBg:"RoomPageBanner_mobileBg__bVPkx"}},771:function(e,t,a){e.exports={container:"RoomDescriptionBlock_container__2oCww",link:"RoomDescriptionBlock_link__jQV4C",grid:"RoomDescriptionBlock_grid__rWgXd",listPart:"RoomDescriptionBlock_listPart__24mGh",leftBlock:"RoomDescriptionBlock_leftBlock__34fT0",rightBlock:"RoomDescriptionBlock_rightBlock__1YMOy",firstCol:"RoomDescriptionBlock_firstCol__2MAYZ",secondCol:"RoomDescriptionBlock_secondCol__Szz2u",iconsPart:"RoomDescriptionBlock_iconsPart__RhTBP",icon:"RoomDescriptionBlock_icon__BwuyY",descriptionPart:"RoomDescriptionBlock_descriptionPart__2ZpMQ",arrow:"RoomDescriptionBlock_arrow__2VTy2",rotated:"RoomDescriptionBlock_rotated__1rOoD",colTitle:"RoomDescriptionBlock_colTitle__2JLt1",iconPart:"RoomDescriptionBlock_iconPart__3WkJm"}},902:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(762),l=a.n(i),c=a(763),o=a(655),s=function(e){var t=e.campusName,a=e.roomName,n=e.roomNameFontSize,i=e.bannerImg;return r.a.createElement("section",{className:l.a.bannerWrapper},r.a.createElement("img",{className:l.a.bannerImg,src:i,alt:"\u041d\u043e\u043c\u0435\u0440\u0430 \u0438 \u0446\u0435\u043d\u044b"}),r.a.createElement("div",{className:l.a.container},r.a.createElement("div",{className:l.a.mobileBg,style:{background:"no-repeat center url(".concat(i,")"),backgroundSize:"cover"}}),r.a.createElement("div",{className:l.a.textBlock},r.a.createElement("h2",null,t),r.a.createElement("h1",null,"\u041d\u043e\u043c\u0435\u0440"),r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:a},style:{lineHeight:"1",fontSize:window.matchMedia("(max-width: 490px)").matches?n[0]:n[1]}}),r.a.createElement(c.Link,{to:"gallery",spy:!0,smooth:!0,offset:-150,duration:700},r.a.createElement("div",{className:l.a.descriptionBtn},"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u043e\u0442\u043e \u2193")))),r.a.createElement(o.a,null))},m=a(649),A=a(27),d=a(771),u=a.n(d),p=a(635),_=a(643),g=a(646),E=a(72),v=a.n(E),f=a(3),b=function(e){var t=e.data,a=e.img,n=r.a.useState(!1),i=Object(A.a)(n,2),l=i[0],c=i[1],o=r.a.useState(!1),s=Object(A.a)(o,2),m=s[0],d=s[1],E=r.a.useState(!1),b=Object(A.a)(E,2),k=b[0],S=b[1];return r.a.createElement("div",{className:u.a.container},r.a.createElement(p.a,{subtitle:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",title:"\u043d\u043e\u043c\u0435\u0440\u0430"}),r.a.createElement("div",{className:u.a.link},r.a.createElement(f.b,{to:""},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0441 \u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u043c\u043e\u0440\u0435 \u2192")),r.a.createElement(_.a,{onClick:function(){return c(!l)},accordeonStatus:l}),r.a.createElement("div",{className:u.a.grid},r.a.createElement("div",{className:u.a.listPart},r.a.createElement("div",{className:u.a.leftBlock},r.a.createElement("div",{className:u.a.firstCol},r.a.createElement("p",{className:u.a.colTitle,onClick:function(){return d(!m)}},r.a.createElement("img",{src:v.a,className:m?u.a.arrow+" "+u.a.rotated:u.a.arrow,alt:""}),r.a.createElement("b",null,"\u0412 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e",r.a.createElement("span",null,":"))),r.a.createElement(g.a,{status:m,withBtn:!1,zeroHeight:!0},r.a.createElement("ul",null,t.includedInPrice.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))),r.a.createElement("div",{className:u.a.secondCol},r.a.createElement("p",{className:u.a.colTitle,onClick:function(){return S(!k)}},r.a.createElement("img",{src:v.a,className:k?u.a.arrow+" "+u.a.rotated:u.a.arrow,alt:""}),r.a.createElement("b",null,"\u041e\u0441\u043d\u0430\u0449\u0435\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430",r.a.createElement("span",null,":"))),r.a.createElement(g.a,{status:k,withBtn:!1,zeroHeight:!0},r.a.createElement("ul",null,t.roomEquipment.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))),r.a.createElement("img",{src:a,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043a\u043e\u0440\u043f\u0443\u0441\u0430",className:u.a.rightBlock})),r.a.createElement("div",{className:u.a.iconsPart},t.features.map((function(e,t){return r.a.createElement("div",{key:t,className:u.a.icon},r.a.createElement("img",{src:e.icon,alt:""}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.desc}}))}))),r.a.createElement("div",{className:u.a.descriptionPart},r.a.createElement(g.a,{withBtn:!1,zeroHeight:!0,status:l},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.roomDescription}})))))},k=a(687),S=a(644),h=a(633);t.default=function(e){var t=e.data;return r.a.useEffect((function(){return document.title="".concat(t.campusName," ").concat(t.roomName," \u2013 \u043d\u043e\u043c\u0435\u0440\u0430 \u0438 \u0446\u0435\u043d\u044b \u2013 \u043e\u0442\u0435\u043b\u044c Riviera Sunrise esort & SPA \u2013 \u0410\u043b\u0443\u0448\u0442\u0430, \u041a\u0440\u044b\u043c")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{bannerImg:t.bannerImg,campusName:t.campusName,roomName:t.roomName,roomNameFontSize:t.roomNameFontSize}),r.a.createElement("section",{className:"section first"},r.a.createElement(b,{data:t.descriptionBlockData,img:t.topBlockImg})),r.a.createElement("section",{className:"section"},r.a.createElement(k.a,{blockName:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043d\u043e\u043c\u0435\u0440\u0430",slideTitle:t.campusName+" "+t.roomName,slides:t.largeGallerySlides})),r.a.createElement("section",{className:"section"},r.a.createElement(m.a,{title:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430",type:"room",slides:t.centeredSlides})),r.a.createElement("section",{className:"section"},r.a.createElement(S.a,{subtitle:"\u041b\u0443\u0447\u0448\u0438\u0435",title:"\u0441\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f",btnLink:"/offers",slides:t.specialsSlides})),r.a.createElement("section",{className:"section last"},r.a.createElement(h.a,null)))}}}]);
//# sourceMappingURL=12.a6456fd8.chunk.js.map