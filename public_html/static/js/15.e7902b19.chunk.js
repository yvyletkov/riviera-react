(this["webpackJsonpriviera-react"]=this["webpackJsonpriviera-react"]||[]).push([[15],{629:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(637),c=a.n(r);t.a=function(e){var t=e.title,a=e.style;return i.a.createElement("h2",{style:a,className:c.a.headlineCenter},t)}},634:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(642),i=a(639),r=a.n(i),c=a(640),l=a.n(c),s=a(641),A=a.n(s),o=a(0),m=a.n(o);function d(e){var t=e.style,a=e.positionStyles,i=e.onClick;return m.a.createElement("div",{className:r.a.nextArrow,style:Object(n.a)({},t,{backgroundImage:"url("+l.a+")"},a),onClick:i})}function p(e){var t=e.style,a=e.positionStyles,i=e.onClick;return m.a.createElement("div",{className:r.a.prevArrow,style:Object(n.a)({},t,{backgroundImage:"url("+A.a+")"},a),onClick:i})}},635:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(648),c=a.n(r);t.a=function(e){var t=e.subtitle,a=e.title,n=void 0===a?"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":a;return i.a.createElement("div",{className:c.a.wrapper},t&&i.a.createElement("h4",{className:c.a.subtitle},t),i.a.createElement("h2",{className:c.a.title},n))}},637:function(e,t,a){e.exports={headlineCenter:"HeadlineCenter_headlineCenter__2zhKw"}},638:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),c=a.n(r),l=a(631);function s(){var e=Object(i.a)(["\n  ","\n    display: block;\n"]);return s=function(){return e},e}var A=l.a.img(s(),(function(e){var t;return null!==(t=e.$style)&&void 0!==t?t:{}}));t.a=function(e){var t=e.src,a=e.alt,i=e.style,l=e.className,s=Object(r.useState)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88B8AAuUB8e2ujYwAAAAASUVORK5CYII="),o=Object(n.a)(s,2),m=o[0],d=o[1],p=Object(r.useState)(),u=Object(n.a)(p,2),g=u[0],_=u[1];return Object(r.useEffect)((function(){var e,a=!1;return g&&m!==t&&(IntersectionObserver?(e=new IntersectionObserver((function(n){n.forEach((function(n){!a&&(n.intersectionRatio>0||n.isIntersecting)&&(d(t),e.unobserve(g))}))}),{threshold:.01,rootMargin:"75%"})).observe(g):d(t)),function(){a=!0,e&&e.unobserve&&e.unobserve(g)}}),[t,m,g]),c.a.createElement(A,{$style:i,className:l,ref:_,src:m,alt:a,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){}})}},639:function(e,t,a){e.exports={nextArrow:"sliderArrowButtons_nextArrow__1SbIM",prevArrow:"sliderArrowButtons_prevArrow__3X5_u"}},640:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMAjOCJCyrYDbW5tijfigwrtCcOrryy2S2PsdH7WQAAAEZJREFUCNdj4BJnAAMJMVYIg5mHG8LgZeOHMBiZBKFSbKwwETDFIswBotg5udhBFAcnC5Di4+QA8YQEwDwGETCPgUEUohUAXBIBpMCdUXQAAAAASUVORK5CYII="},641:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMA2OC2CyqMDbm1iSsoiieuDN/Zjy20vLIOSWloaQAAAERJREFUCNcti9kSgDAIA1PbCnjf+v9f6hCalw3LBPBcmajH6Zj2wTGm2bF0PX+JEnEBthZSsgpLUYsiplsz99fME6P6/lUZAaQZGQ8HAAAAAElFTkSuQmCC"},646:function(e,t,a){"use strict";var n=a(27),i=a(0),r=a.n(i),c=a(665),l=a.n(c);t.a=function(e){var t=e.status,a=void 0!==t&&t,i=e.children,c=e.zeroHeight,s=void 0!==c&&c,A=e.withBtn,o=void 0===A||A,m=r.a.useState(a),d=Object(n.a)(m,2),p=d[0],u=d[1];r.a.useEffect((function(){u(a)}),[a]);return r.a.createElement("div",{className:s?l.a.accordeon+" "+l.a.zeroHeight:l.a.accordeon},r.a.createElement("div",{className:p||window.matchMedia("(min-width: 500px)").matches?l.a.text+" "+l.a.opened:s?l.a.text+" "+l.a.zeroHeight:l.a.text},i),o&&r.a.createElement("div",{onClick:function(){u(!p)},className:window.matchMedia("(min-width: 500px)").matches?l.a.btnHidden:p?l.a.btn+" "+l.a.opened:l.a.btn},p?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))}},648:function(e,t,a){e.exports={wrapper:"Headline_wrapper__3qi0s",title:"Headline_title__2Zuf6",subtitle:"Headline_subtitle__TkAsW"}},657:function(e,t,a){"use strict";var n=a(630),i=a(0),r=a.n(i),c=a(632),l=a.n(c),s=a(673),A=a.n(s);function o(){var e=Object(n.a)(["\n\n  .slick-next:before,\n  .slick-prev:before {\n    color: #B4B4B4;\n  }\n  .slick-list {\n    transition: all 0.3s;\n    overflow: hidden;\n  }\n  .slick-next, .slick-prev {\n    color: #000;\n  }\n  .slick-dots li button:before, .slick-next:before, .slick-prev:before {font-family: 'Helvetica Neue Medium';}\n  .slick-prev {left: -20px}\n  .slick-next {right: -20px}\n  .slick-list {margin: -2px 0;}\n  .slick-slide>div {padding: 2px 0;}\n \n  .slick-vertical .slick-slide {\n    border: none\n  }\n"]);return o=function(){return e},e}var m=a(631).a.div(o());t.a=function(e){var t=e.setCurrentSlide,a=e.currentSlide,n=e.slideNames.map((function(e,n){return r.a.createElement("div",{onClick:function(){return t(n)},className:a===n?"".concat(A.a.miniSliderItem," ").concat(A.a.active," miniSliderTarget"):"".concat(A.a.miniSliderItem," miniSliderTarget"),key:n},e)})),i=r.a.useRef();return r.a.useEffect((function(){i.current.slickGoTo(a)}),[a]),r.a.createElement("div",{className:A.a.wrapper},r.a.createElement(m,null,r.a.createElement(l.a,Object.assign({ref:i,className:A.a.slider},{centerPadding:"0",centerMode:!0,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1,infinite:!0,speed:500,responsive:[{breakpoint:768,settings:{vertical:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,arrows:!1,verticalSwiping:!1,swipeToSlide:!1}}]}),n)))}},665:function(e,t,a){e.exports={accordeon:"Accordeon_accordeon__1EEOx",zeroHeight:"Accordeon_zeroHeight__28bqr",text:"Accordeon_text__2xctf",opened:"Accordeon_opened__yFVex",btn:"Accordeon_btn__2IqMv",btnHidden:"Accordeon_btnHidden__HCJUA"}},668:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),c=a.n(r),l=a(632),s=a.n(l),A=a(694),o=a.n(A),m=a(695),d=a.n(m),p=a(3),u=function(e){var t=e.img,a=e.isActive,n=e.title,i=e.subtitle,r=e.link;return c.a.createElement("div",{className:d.a.cardWrapper},c.a.createElement(p.b,{onClick:function(e){r||e.preventDefault()},to:r||"#"},c.a.createElement("div",{className:a?"".concat(d.a.card," ").concat(d.a.lifted):d.a.card},c.a.createElement("img",{className:d.a.img,src:t,alt:"\u0410\u0444\u0438\u0448\u0430"}),c.a.createElement("div",{className:d.a.content},c.a.createElement("p",{className:d.a.title},n),c.a.createElement("p",{className:d.a.subtitle},i),r&&c.a.createElement("a",{href:""},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192")))))},g=a(631),_=a(634),E=a(629);function v(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .center .slick-center .SliderElement {\n    opacity: 1;\n    transition: all 0.3s;\n    -ms-transform: scale(1.08);\n    transform: scale(1.08);\n  }\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  .slick-dots li {\n    margin: 0\n  }\n  \n.slick-slide img {\n  width: 100%;\n  margin: 0 40px 0 0;\n}\n\n.slick-track {\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    margin-top: 0;\n  }\n}\n"]);return v=function(){return e},e}var f=Object(g.a)(s.a)(v());t.a=function(e){var t=e.title,a=void 0===t?"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":t,i=(e.subtitle,e.textLink,e.slides),l=(e.text,e.btnText,Object(r.useState)(0)),A=Object(n.a)(l,2),m=A[0],d=A[1],p={afterChange:function(e){return d(e)},centerMode:!0,infinite:!0,variableWidth:!0,speed:500,nextArrow:c.a.createElement(_.a,{positionStyles:{bottom:"15px",left:"50.5%"}}),prevArrow:c.a.createElement(_.b,{positionStyles:{bottom:"15px",right:"50.5%"}}),responsive:[{breakpoint:1200,settings:{centerPadding:0,centerMode:!1,dots:!0,arrows:!1}}]},g=i.map((function(e,t){var a=e.img,n=e.title,i=(e.subtitle,e.key),r=e.link;return c.a.createElement("div",{className:"SliderElement",key:i},c.a.createElement(u,{img:a,title:n,isActive:m===t,link:r}))}));return c.a.createElement("div",{className:o.a.wrapper},c.a.createElement(E.a,{title:a,style:{marginBottom:"30px"}}),c.a.createElement("div",{className:o.a.container},c.a.createElement(f,null,c.a.createElement(s.a,p,g))))}},673:function(e,t,a){e.exports={wrapper:"MiniSlider_wrapper__1IEGG",miniSliderItem:"MiniSlider_miniSliderItem__1B9P6",active:"MiniSlider_active__3qQCq"}},677:function(e,t,a){"use strict";var n=a(27),i=a(0),r=a.n(i),c=a(711),l=a.n(c),s=a(173),A=a(643),o=a(518);t.a=function(e){var t=e.subtitle,a=e.title1,c=e.title2,m=e.title3,d=e.title1Style,p=e.title2Style,u=e.title3Style,g=e.icons,_=e.backgroundStyle,E=e.styleCirqleTip,v=Object(i.useState)(!1),f=Object(n.a)(v,2),S=f[0],b=f[1],x=r.a.useState(!1),k=Object(n.a)(x,2),h=k[0],w=k[1];return g=g.map((function(e){return r.a.createElement("div",{className:l.a.icon,key:e.key},r.a.createElement("img",{src:e.img,alt:e.desc}),r.a.createElement("p",null,e.text))})),r.a.createElement("div",{className:l.a.wrapper},r.a.createElement("div",{className:l.a.container},r.a.createElement("div",{className:l.a.background,style:_}),r.a.createElement("div",{className:l.a.headings},r.a.createElement("h2",null,t),r.a.createElement("h1",null,r.a.createElement("span",{style:d},a),r.a.createElement("span",{style:p},c),r.a.createElement("span",{style:u},m)),r.a.createElement("div",{className:l.a.cirqleTipWrapper,style:E},r.a.createElement(A.a,{onClick:function(){return b(!S)},accordeonStatus:S}))),r.a.createElement("div",{className:l.a.icons},g),r.a.createElement(s.a,{style:window.matchMedia("(min-width:426px) and (max-width:1201px)").matches?{maxWidth:"200px",zIndex:"1",position:"relative",marginTop:"15px",marginLeft:"50px"}:{marginBottom:"15vh",maxWidth:"200px",zIndex:"1",position:"relative"},text:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043c\u0435\u0442\u0443",onClick:function(){return w(!0)}}),r.a.createElement(o.a,{popupOpen:h,setPopupOpen:w,popupTitleText:"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\ufe0f",submitBtnText:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043c\u0435\u0442\u0443",formName:"\u0424\u043e\u0440\u043c\u0430 \u0441 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0431\u0430\u043d\u043d\u0435\u0440\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b MICE (\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043c\u0435\u0442\u0443)",swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!",withEmail:!0,withPhone:!0})),r.a.createElement("div",{className:l.a.descriptionWrapper},r.a.createElement("div",{className:S?l.a.description+" "+l.a.shown:l.a.description},r.a.createElement("p",null,"Riviera Sunrise Resort & SPA \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u043d\u044b\u0435 \u0437\u0430\u043b\u044b \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0441\u0442\u0438 \u0441 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043a\u043b\u0430\u0441\u0441\u0430, \u0431\u0435\u0437\u0443\u043f\u0440\u0435\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043e\u043f\u0446\u0438\u0439, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044e \u043d\u0430 \u0432\u044b\u0441\u0448\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435. \u041a \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0443 \u043d\u0430\u0441 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0439 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430."))))}},678:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(712),c=a.n(r),l=a(635),s=a(713),A=a.n(s);t.a=function(e){return i.a.createElement("div",{className:c.a.wrapper,style:window.matchMedia("(min-width:768px)").matches?e.style:e.styleMobile},i.a.createElement("div",{className:c.a.container},i.a.createElement("div",{className:c.a.leftSide},i.a.createElement("img",{src:A.a,alt:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"})),i.a.createElement("div",{className:c.a.rightSide},i.a.createElement(l.a,{subtitle:"\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043c \u0434\u043b\u044f \u0432\u0430\u0441 \u043b\u044e\u0431\u043e\u0435",title:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435"}),i.a.createElement("p",null,"Riviera Sunrise Resort & SPA \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u043d\u044b\u0435 \u0437\u0430\u043b\u044b \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0441\u0442\u0438 \u0441 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u043c\u0438\u0443\u043c-\u043a\u043b\u0430\u0441\u0441\u0430, \u0431\u0435\u0437\u0443\u043f\u0440\u0435\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043e\u043f\u0446\u0438\u0439, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044e \u043d\u0430 \u0432\u044b\u0441\u0448\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435. \u041a \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0443 \u043d\u0430\u0441 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u0439 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430. "))))}},694:function(e,t,a){e.exports={wrapper:"WidthSpecialsSlider_wrapper__1RUkg",container:"WidthSpecialsSlider_container__1L1yP",title:"WidthSpecialsSlider_title__3_YWc",leftBlock:"WidthSpecialsSlider_leftBlock__2QKWx"}},695:function(e,t,a){e.exports={cardWrapper:"WidthSpecialsSliderItem_cardWrapper__1EE1k",card:"WidthSpecialsSliderItem_card__3haAE",lifted:"WidthSpecialsSliderItem_lifted__3Kp5U",content:"WidthSpecialsSliderItem_content__TJUK0",title:"WidthSpecialsSliderItem_title__2Al_g",subtitle:"WidthSpecialsSliderItem_subtitle__26uqW"}},711:function(e,t,a){e.exports={wrapper:"MicePageBanner_wrapper__1qQDH",container:"MicePageBanner_container__1XUrB",background:"MicePageBanner_background__m7t5b",bannerImgTop:"MicePageBanner_bannerImgTop__1HCjG",animatedMouseWrapper:"MicePageBanner_animatedMouseWrapper__1MtiY",headings:"MicePageBanner_headings__vv4FN",icons:"MicePageBanner_icons__2d5gP",icon:"MicePageBanner_icon__k8L9S",cirqleTipWrapper:"MicePageBanner_cirqleTipWrapper__2lU7O",descriptionWrapper:"MicePageBanner_descriptionWrapper__1cQyU",description:"MicePageBanner_description__buhE_",shown:"MicePageBanner_shown__3I6yp"}},712:function(e,t,a){e.exports={wrapper:"TextBlock_wrapper__2srW8",container:"TextBlock_container__20OhX",rightSide:"TextBlock_rightSide__306AR",leftSide:"TextBlock_leftSide__2x_EF"}},713:function(e,t,a){e.exports=a.p+"static/media/2.f85776a1.jpg"},714:function(e,t,a){e.exports=a.p+"static/media/14.9be43ce1.jpg"},806:function(e,t,a){e.exports={conferencesDecisionBlock:"EventTourismPage_conferencesDecisionBlock__2DLKU",wrapper:"EventTourismPage_wrapper__32Mn8",grid:"EventTourismPage_grid__21aWD",imageBlock:"EventTourismPage_imageBlock__240B_",textBlock:"EventTourismPage_textBlock__q5xcz",textContent:"EventTourismPage_textContent__3OgB5"}},807:function(e,t,a){e.exports=a.p+"static/media/2.c3bbe100.jpg"},878:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(677),c=a(678),l=a(7),s=a(668),A=a(645),o=a(806),m=a.n(o),d=a(635),p=(a(173),a(644)),u=a(714),g=a.n(u),_=a(633),E=a(807),v=a.n(E),f=a(174),S=(a(724),a(689));t.default=function(){return i.a.useEffect((function(){return document.title="\u0421\u043e\u0431\u044b\u0442\u0438\u0439\u043d\u044b\u0439 \u0442\u0443\u0440\u0438\u0437\u043c \u0432 \u041a\u0440\u044b\u043c\u0443 \u2013 Riviera Sunrise Resort & SPA \u2013 \u0410\u043b\u0443\u0448\u0442\u0430, \u041a\u0440\u044b\u043c"}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{subtitle:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",title1:"\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432",title1Style:{fontSize:"30px",margin:"25px 0 10px"},title2:"\u0424\u043e\u0440\u0443\u043c\u0430",title3:"\u0421\u043e\u0437\u0432\u0435\u0437\u0434\u0438\u044f",title3Style:{fontSize:"32px",backgroundColor:"#ffbb28",padding:"5px 10px",marginTop:"10px"},icons:l.g.conferenceIconsBanner,backgroundStyle:{backgroundImage:"url(".concat(v.a,")")},styleCirqleTip:{left:"220px",bottom:"4px"}}),i.a.createElement("section",{className:"section first"},i.a.createElement(A.a,{subtitle:"\u041a\u043e\u0440\u043f\u0443\u0441",title:"\u041c\u043e\u0434\u0435\u0440\u043d",textContent:l.k.modernDescr,data:l.k.modernSlides}),i.a.createElement(A.a,{lastOfTwo:!0,subtitle:"\u041a\u043e\u0440\u043f\u0443\u0441",title:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",textContent:l.k.classicDescr,data:l.k.classicSlides})),i.a.createElement("section",{className:"section"},i.a.createElement(s.a,{slides:l.g.widthSpecialsEventTourism,title:"\u0414\u043b\u044f \u0434\u0435\u043b\u043e\u0432\u044b\u0445 \u0432\u0441\u0442\u0440\u0435\u0447"})),i.a.createElement("section",{className:"section"},i.a.createElement(S.a,null)),i.a.createElement("section",{className:"section"},i.a.createElement(c.a,null)),i.a.createElement("section",{className:"section"},i.a.createElement(p.a,{subtitle:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",title:"\u0443\u0441\u043b\u0443\u0433\u0438",btnText:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0430\u0439\u0441 \u043f\u043e \u0443\u0441\u043b\u0443\u0433\u0430\u043c",text:"\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u0432 \u043e\u0442\u0435\u043b\u0435 Riviera Sunrise Resort & SPA, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u0443\u0433\u0430\u043c\u0438. \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0438\u0445 \u0441 \u0436\u0435\u043b\u0430\u043d\u0438\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0448\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u043c \u0438 \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c \u0433\u043e\u0441\u0442\u044f\u043c \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u0438 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f!",slides:l.g.specialsSlides})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:m.a.conferencesDecisionBlock},i.a.createElement("div",{className:m.a.wrapper},i.a.createElement("div",{className:m.a.grid},i.a.createElement("div",{className:m.a.imageBlock},i.a.createElement("img",{src:g.a,alt:"Riviera Sunrise"})),i.a.createElement("div",{className:m.a.textBlock},i.a.createElement("div",{className:m.a.textContent},i.a.createElement(d.a,{subtitle:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043e\u0432\u0435\u0442\u043e\u0432\u0430\u0442\u044c\u0441\u044f",title:"\u0421 \u043a\u043e\u043b\u043b\u0435\u0433\u0430\u043c\u0438?"}),i.a.createElement("p",null,"\u0414\u043b\u044f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0433\u043e \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u043d\u0430\u0448\u0438\u043c\u0438 \u0437\u0430\u043b\u0430\u043c\u0438 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f."),i.a.createElement("p",null,"\u041f\u043e\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433!"),i.a.createElement(f.a,{withEmail:!0,formName:'\u0424\u043e\u0440\u043c\u0430 \u0438\u0437 \u0431\u043b\u043e\u043a\u0430 "\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043e\u0432\u0435\u0442\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441 \u043a\u043e\u043b\u043b\u0435\u0433\u0430\u043c\u0438?" (\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435)',swalText:"\u0441\u0435\u0439\u0447\u0430\u0441 \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0412\u0430\u043c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443",submitBtnText:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}))))))),i.a.createElement("section",{className:"section"},i.a.createElement(_.a,null)))}}}]);
//# sourceMappingURL=15.e7902b19.chunk.js.map