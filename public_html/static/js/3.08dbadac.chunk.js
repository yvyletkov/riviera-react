(this["webpackJsonpriviera-react"]=this["webpackJsonpriviera-react"]||[]).push([[3],{629:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(637),o=n.n(r);t.a=function(e){var t=e.title,n=e.style;return a.a.createElement("h2",{style:n,className:o.a.headlineCenter},t)}},634:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n(642),a=n(639),r=n.n(a),o=n(640),l=n.n(o),A=n(641),c=n.n(A),s=n(0),d=n.n(s);function u(e){var t=e.style,n=e.positionStyles,a=e.onClick;return d.a.createElement("div",{className:r.a.nextArrow,style:Object(i.a)({},t,{backgroundImage:"url("+l.a+")"},n),onClick:a})}function p(e){var t=e.style,n=e.positionStyles,a=e.onClick;return d.a.createElement("div",{className:r.a.prevArrow,style:Object(i.a)({},t,{backgroundImage:"url("+c.a+")"},n),onClick:a})}},635:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(648),o=n.n(r);t.a=function(e){var t=e.subtitle,n=e.title,i=void 0===n?"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":n;return a.a.createElement("div",{className:o.a.wrapper},t&&a.a.createElement("h4",{className:o.a.subtitle},t),a.a.createElement("h2",{className:o.a.title},i))}},637:function(e,t,n){e.exports={headlineCenter:"HeadlineCenter_headlineCenter__2zhKw"}},638:function(e,t,n){"use strict";var i=n(27),a=n(630),r=n(0),o=n.n(r),l=n(631);function A(){var e=Object(a.a)(["\n  ","\n    display: block;\n"]);return A=function(){return e},e}var c=l.a.img(A(),(function(e){var t;return null!==(t=e.$style)&&void 0!==t?t:{}}));t.a=function(e){var t=e.src,n=e.alt,a=e.style,l=e.className,A=Object(r.useState)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88B8AAuUB8e2ujYwAAAAASUVORK5CYII="),s=Object(i.a)(A,2),d=s[0],u=s[1],p=Object(r.useState)(),m=Object(i.a)(p,2),f=m[0],v=m[1];return Object(r.useEffect)((function(){var e,n=!1;return f&&d!==t&&(IntersectionObserver?(e=new IntersectionObserver((function(i){i.forEach((function(i){!n&&(i.intersectionRatio>0||i.isIntersecting)&&(u(t),e.unobserve(f))}))}),{threshold:.01,rootMargin:"75%"})).observe(f):u(t)),function(){n=!0,e&&e.unobserve&&e.unobserve(f)}}),[t,d,f]),o.a.createElement(c,{$style:a,className:l,ref:v,src:d,alt:n,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){}})}},639:function(e,t,n){e.exports={nextArrow:"sliderArrowButtons_nextArrow__1SbIM",prevArrow:"sliderArrowButtons_prevArrow__3X5_u"}},640:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMAjOCJCyrYDbW5tijfigwrtCcOrryy2S2PsdH7WQAAAEZJREFUCNdj4BJnAAMJMVYIg5mHG8LgZeOHMBiZBKFSbKwwETDFIswBotg5udhBFAcnC5Di4+QA8YQEwDwGETCPgUEUohUAXBIBpMCdUXQAAAAASUVORK5CYII="},641:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMA2OC2CyqMDbm1iSsoiieuDN/Zjy20vLIOSWloaQAAAERJREFUCNcti9kSgDAIA1PbCnjf+v9f6hCalw3LBPBcmajH6Zj2wTGm2bF0PX+JEnEBthZSsgpLUYsiplsz99fME6P6/lUZAaQZGQ8HAAAAAElFTkSuQmCC"},646:function(e,t,n){"use strict";var i=n(27),a=n(0),r=n.n(a),o=n(665),l=n.n(o);t.a=function(e){var t=e.status,n=void 0!==t&&t,a=e.children,o=e.zeroHeight,A=void 0!==o&&o,c=e.withBtn,s=void 0===c||c,d=r.a.useState(n),u=Object(i.a)(d,2),p=u[0],m=u[1];r.a.useEffect((function(){m(n)}),[n]);return r.a.createElement("div",{className:A?l.a.accordeon+" "+l.a.zeroHeight:l.a.accordeon},r.a.createElement("div",{className:p||window.matchMedia("(min-width: 500px)").matches?l.a.text+" "+l.a.opened:A?l.a.text+" "+l.a.zeroHeight:l.a.text},a),s&&r.a.createElement("div",{onClick:function(){m(!p)},className:window.matchMedia("(min-width: 500px)").matches?l.a.btnHidden:p?l.a.btn+" "+l.a.opened:l.a.btn},p?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))}},648:function(e,t,n){e.exports={wrapper:"Headline_wrapper__3qi0s",title:"Headline_title__2Zuf6",subtitle:"Headline_subtitle__TkAsW"}},649:function(e,t,n){"use strict";var i=n(27),a=n(630),r=n(0),o=n.n(r),l=n(632),A=n.n(l),c=n(669),s=n.n(c),d=n(670),u=n.n(d),p=n(671),m=n.n(p),f=n(672),v=n.n(f),S=n(3),w=function(e){var t=e.img,n=e.link,i=e.title,a=e.subtitle,r=e.time,l=e.date,A=e.campus,c=e.campusName,s=e.type,d=void 0===s?"home-page":s,p=e.subsubtitle,f=e.fontsizeSubsubtitle,w=e.active,g=e.capacity,b=e.area;switch(d){case"home-page":return o.a.createElement("div",{className:w?u.a.card+" "+u.a.active:u.a.card},n&&o.a.createElement(S.b,{className:u.a.link,to:n},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192"),o.a.createElement("img",{className:u.a.img,src:t,alt:i}),o.a.createElement("div",{className:u.a.content},o.a.createElement("p",{className:u.a.title},i),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:a},className:u.a.subtitle}),o.a.createElement("p",{className:u.a.time},r,o.a.createElement("span",null,l)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:A},className:u.a.campus}),o.a.createElement("div",null,c)));case 2:return o.a.createElement("div",{className:w?u.a.card+" "+u.a.active:u.a.card},o.a.createElement("img",{className:u.a.img,src:t,alt:i}),o.a.createElement("div",{className:u.a.content},o.a.createElement("p",{className:u.a.title},i),o.a.createElement("p",{className:u.a.subtitle1},a),o.a.createElement("p",{className:u.a.subsubtitle,style:{fontSize:f}},p)));case"room":return o.a.createElement("div",{className:w?u.a.card+" "+u.a.active:u.a.card},o.a.createElement(S.b,{onClick:function(e){n||e.preventDefault()},to:n||"#"},o.a.createElement("img",{className:u.a.img,src:t,alt:i}),o.a.createElement("div",{className:u.a.content},o.a.createElement("p",{className:u.a.roomSubtitle},a),o.a.createElement("p",{className:u.a.roomTitle},i),o.a.createElement("div",{className:u.a.imgContainer},o.a.createElement("img",{src:v.a,alt:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043d\u043e\u043c\u0435\u0440\u0430"}),b," \u043c",o.a.createElement("sup",null,"2")),o.a.createElement("div",{className:u.a.imgContainer},o.a.createElement("img",{src:m.a,alt:"\u0412\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"}),g))));default:return null}},g=n(631),b=n(629),h=n(634);function y(){var e=Object(a.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  \n  .slick-dots {\n    bottom: -32px;\n  }\n  .slick-dots li {\n    margin: 0\n  }\n\n.slick-slide img {\n  width: 100%;\n  margin: 0 40px 0 0;\n}\n\n.slick-track {\n  margin: 0 auto;\n}\n\n"]);return y=function(){return e},e}var E=g.a.div(y());t.a=function(e){var t=e.title,n=void 0===t?"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":t,a=e.slides,r=e.type,l=void 0===r?"home-page":r,c=o.a.useState(window.matchMedia("(min-width: 769px)").matches?4===a.length?2:2===a.length?1:0:0),d=Object(i.a)(c,2),u=d[0],p=d[1],m=a.map((function(e,t){var n=e.img,i=e.link,a=e.title,r=e.subtitle,A=e.time,c=e.date,s=e.campus,d=e.campusName,p=e.key,m=e.subsubtitle,f=void 0===m?"":m,v=e.fontsizeSubsubtitle,S=void 0===v?"":v,g=e.capacity,b=e.area;return o.a.createElement("div",{className:"sliderElement",key:p},o.a.createElement(w,{active:u===t,link:i,type:l,img:n,title:a,subtitle:r,subsubtitle:f,fontsizeSubsubtitle:S,time:A,date:c,campus:s,campusName:d,capacity:g,area:b}))})),f={initialSlide:4===a.length?2:2===a.length?1:0,afterChange:function(e){return p(e)},dots:!1,className:"center",centerMode:!0,infinite:"home-page"!==l,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:o.a.createElement(h.a,{onClick:function(){return p(u+1)},positionStyles:{bottom:"-90px",right:"50%",transform:"translateX(120%)"}}),prevArrow:o.a.createElement(h.b,{onClick:function(){return p(u-1)},positionStyles:{bottom:"-90px",left:"50%",transform:"translateX(-120%)"}}),responsive:[{breakpoint:480,settings:{initialSlide:0,className:!1,centerMode:!1,slidesToShow:1,slidesToScroll:1,infinite:"home-page"!==l,dots:!0,arrows:!1}}]};o.a.useEffect((function(){v.current.slickGoTo(u)}),[u]);var v=o.a.useRef();return o.a.createElement("div",{className:s.a.wrapper},o.a.createElement(b.a,{title:n}),o.a.createElement(E,null,o.a.createElement(A.a,Object.assign({ref:v},f),m)))}},650:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAjCAMAAABB9MFTAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAkFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDIYgjAAAAL3RSTlMA027UXm8c/f4Nvr1dD78bDh0McV9gXMAa0tVyYfBwtX3Hu9a8FVZbiozjl0+zHjFxxlUAAACjSURBVCjPdZDZFoIwDERbRWhRFBBU3Bfcl/n/vzM+Mql9vGduMo0x9C73M6PI4UZolgBXSgkaKBHbLqp0qoYWJdXrorVGI6fQT5xSStBKt6eNlVNipMfXTolSIiFkNsCej7gDDhNi2RzoKzgG7IKgF9gUBPOh6DHBUqDlpE+Bk9KPIV2SS4ZZ+qeS5WQe+pGXSk0cqKQWla3M/AT0J5/Tvx+vL69AEuooqPOcAAAAAElFTkSuQmCC"},657:function(e,t,n){"use strict";var i=n(630),a=n(0),r=n.n(a),o=n(632),l=n.n(o),A=n(673),c=n.n(A);function s(){var e=Object(i.a)(["\n\n  .slick-next:before,\n  .slick-prev:before {\n    color: #B4B4B4;\n  }\n  .slick-list {\n    transition: all 0.3s;\n    overflow: hidden;\n  }\n  .slick-next, .slick-prev {\n    color: #000;\n  }\n  .slick-dots li button:before, .slick-next:before, .slick-prev:before {font-family: 'Helvetica Neue Medium';}\n  .slick-prev {left: -20px}\n  .slick-next {right: -20px}\n  .slick-list {margin: -2px 0;}\n  .slick-slide>div {padding: 2px 0;}\n \n  .slick-vertical .slick-slide {\n    border: none\n  }\n"]);return s=function(){return e},e}var d=n(631).a.div(s());t.a=function(e){var t=e.setCurrentSlide,n=e.currentSlide,i=e.slideNames.map((function(e,i){return r.a.createElement("div",{onClick:function(){return t(i)},className:n===i?"".concat(c.a.miniSliderItem," ").concat(c.a.active," miniSliderTarget"):"".concat(c.a.miniSliderItem," miniSliderTarget"),key:i},e)})),a=r.a.useRef();return r.a.useEffect((function(){a.current.slickGoTo(n)}),[n]),r.a.createElement("div",{className:c.a.wrapper},r.a.createElement(d,null,r.a.createElement(l.a,Object.assign({ref:a,className:c.a.slider},{centerPadding:"0",centerMode:!0,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:1,infinite:!0,speed:500,responsive:[{breakpoint:768,settings:{vertical:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,arrows:!1,verticalSwiping:!1,swipeToSlide:!1}}]}),i)))}},665:function(e,t,n){e.exports={accordeon:"Accordeon_accordeon__1EEOx",zeroHeight:"Accordeon_zeroHeight__28bqr",text:"Accordeon_text__2xctf",opened:"Accordeon_opened__yFVex",btn:"Accordeon_btn__2IqMv",btnHidden:"Accordeon_btnHidden__HCJUA"}},669:function(e,t,n){e.exports={wrapper:"CenteredSlider_wrapper__1icd8"}},670:function(e,t,n){e.exports={card:"CenteredSliderItem_card__21_3j",active:"CenteredSliderItem_active__1vNGT",img:"CenteredSliderItem_img__3oN5q",content:"CenteredSliderItem_content__2dalT",subtitle:"CenteredSliderItem_subtitle__HDdue",title:"CenteredSliderItem_title__sCJbW",subtitle1:"CenteredSliderItem_subtitle1__B66KX",subsubtitle:"CenteredSliderItem_subsubtitle__1vMED",time:"CenteredSliderItem_time__cu9z8",campus:"CenteredSliderItem_campus__3_Fc1",link:"CenteredSliderItem_link__2EVH1",roomSubtitle:"CenteredSliderItem_roomSubtitle__36Dzy",roomTitle:"CenteredSliderItem_roomTitle__si2ZE",imgContainer:"CenteredSliderItem_imgContainer__3-B_9"}},671:function(e,t,n){e.exports=n.p+"static/media/capacity-white.f0240ef3.png"},672:function(e,t,n){e.exports=n.p+"static/media/ploshchad-white.3dc622e9.png"},673:function(e,t,n){e.exports={wrapper:"MiniSlider_wrapper__1IEGG",miniSliderItem:"MiniSlider_miniSliderItem__1B9P6",active:"MiniSlider_active__3qQCq"}},680:function(e,t,n){"use strict";var i=n(27),a=n(642),r=n(630),o=n(0),l=n.n(o),A=n(632),c=n.n(A),s=n(635),d=n(753),u=n.n(d),p=n(631),m=n(3),f=n(638);function v(){var e=Object(r.a)(["\n  .slick-list { \n     overflow:visible;\n  }\n  .slick-vertical .slick-slide {\n     box-sizing: border-box;\n  }\n  .slick-list:before {\n    content: none !important;\n  }\n"]);return v=function(){return e},e}var S=p.a.div(v()),w=function(e){var t=e.firstRowItems,n=e.secondRowItems,i={infinite:!1,slidesToShow:1,speed:500,arrows:!1};return l.a.createElement("div",{className:u.a.innerSlider},l.a.createElement(S,null,l.a.createElement(c.a,i,t,n)))},g=function(e){var t=e.firstRow,n=e.secondRow,i=t.map((function(e,t){return l.a.createElement(m.b,{onClick:function(t){e.href||t.preventDefault()},to:e.href?e.href:"#",key:e.title+t,className:u.a.block},l.a.createElement(f.a,{className:u.a.img,src:e.img,alt:e.title,style:{borderRadius:"5px"}}),l.a.createElement("div",{className:u.a.content},l.a.createElement("p",null,e.title)))})),a=n.map((function(e,t){return l.a.createElement(m.b,{onClick:function(t){e.href||t.preventDefault()},to:e.href?e.href:"#",className:u.a.block,href:e.href},l.a.createElement(f.a,{className:u.a.img,src:e.img,alt:e.title,style:{borderRadius:"5px"}}),l.a.createElement("div",{className:u.a.content},l.a.createElement("p",null,e.title)))}));return window.matchMedia("screen and (max-width: 768px)").matches?l.a.createElement(w,{firstRowItems:i,secondRowItems:a}):l.a.createElement("div",{className:u.a.wrapper},l.a.createElement("div",{className:u.a.grid},l.a.createElement("div",{className:u.a.row+" "+u.a.top},i),l.a.createElement("div",{className:u.a.row+" "+u.a.bottom},a)))},b=n(754),h=n.n(b),y=n(650),E=n.n(y),k=n(755),I=n.n(k),N=n(657),j=n(756),C=n.n(j);function M(){var e=Object(r.a)(["\n  .slick-slide {\n    opacity: .18;\n    transition: all 500ms;\n  }\n  .slick-slide.slick-active {\n    opacity: 1;\n    filter: brightness(1);\n  }\n  .slick-next:before, .slick-prev:before {\n    color: #000;\n  }\n  .center .slick-center .SliderElement {\n    opacity: 1;\n    -ms-transform: scale(1.08);\n    transform: scale(1.08);\n  }\n  .slick-list { \n    overflow:visible;\n  }\n  .slick-vertical .slick-slide {\n     box-sizing: border-box;\n  }\n@media screen and (max-width: 768px) {\n\n  .slick-slide {\n    opacity: 1;\n    filter: brightness(0.9);\n    transition: all 500ms;\n  }\n\n    .slick-list { \n        overflow:visible;\n    }\n    .slick-track { \n        overflow:hidden;\n    }\n    \n    .slick-vertical .slick-slide {\n        border: none;\n    }\n\n  .slick-list {margin: -18px 0 -18px -20px;}\n  .slick-slide>div {padding: 18px 0 18px 20px;}\n    \n    .slick-dots {bottom: -8px}\n    \n}\n.slick-dots li {\n    margin: 0\n}\n\n"]);return M=function(){return e},e}var L=p.a.div(M());function R(e){var t=e.style,n=e.onClick;return l.a.createElement("div",{className:h.a.nextArrow,style:Object(a.a)({},t,{backgroundImage:"url("+E.a+")"}),onClick:n})}function X(e){var t=e.style,n=e.onClick;return l.a.createElement("div",{className:h.a.prevArrow,style:Object(a.a)({},t,{backgroundImage:"url("+E.a+")"}),onClick:n})}t.a=function(e){var t=e.slides,n=l.a.useState(0),a=Object(i.a)(n,2),r=a[0],o=a[1],A=t.map((function(e,t){return l.a.createElement(g,{key:e.name+t,firstRow:e.firstRow,secondRow:e.secondRow})})),d={afterChange:function(e){return o(e)},infinite:!0,slidesToShow:1,nextArrow:l.a.createElement(R,null),prevArrow:l.a.createElement(X,null),speed:600,responsive:[{breakpoint:768,settings:{speed:400,slidesToShow:1,infinite:!1,vertical:!0,arrows:!1,dots:!0,swipe:!1}}]},u=l.a.useRef();l.a.useEffect((function(){u.current.slickGoTo(r)}),[r]);var p=t.map((function(e){return e.name}));return l.a.createElement("div",{id:"verticalSliderWrapper",className:r===t.length-1?h.a.wrapper+" "+h.a.minified:h.a.wrapper},l.a.createElement("div",{className:h.a.container},l.a.createElement("div",{className:h.a.headlineWrapper},l.a.createElement("div",{id:"whiteGridSliderBg"}),l.a.createElement(s.a,{subtitle:"\u0423\u0441\u043b\u0443\u0433\u0438 \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",title:t[r].name}),l.a.createElement("div",{className:h.a.miniSliderWrapper},l.a.createElement(N.a,{setCurrentSlide:o,currentSlide:r,slideNames:p}))),l.a.createElement(L,null,l.a.createElement(C.a,{allowMouseEvents:!0,tolerance:80,onSwipeMove:function(e){return!0},onSwipeUp:function(){console.log("up"),r!==t.length-1&&u.current.slickNext()},onSwipeDown:function(){0!==r&&u.current.slickPrev()}},l.a.createElement(c.a,Object.assign({},d,{ref:u}),A))),l.a.createElement("img",{src:I.a,alt:"",className:h.a.animatedHand})))}},753:function(e,t,n){e.exports={wrapper:"GridSliderItem_wrapper__XzNRF",row:"GridSliderItem_row___Ot1D",top:"GridSliderItem_top__3trYT",block:"GridSliderItem_block__1GoZb",content:"GridSliderItem_content__3bXX_",bottom:"GridSliderItem_bottom__2UN57",innerSlider:"GridSliderItem_innerSlider__1TRFI"}},754:function(e,t,n){e.exports={container:"GridSlider_container__29zmQ",nextArrow:"GridSlider_nextArrow__KiO_3",prevArrow:"GridSlider_prevArrow__1Ep47",wrapper:"GridSlider_wrapper__ImTUF",headlineWrapper:"GridSlider_headlineWrapper__2gbYQ",miniSliderWrapper:"GridSlider_miniSliderWrapper__25lNN",minified:"GridSlider_minified__14-rV",animatedHand:"GridSlider_animatedHand__2D0OT",animationFrames:"GridSlider_animationFrames__19e5R"}},755:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACpCAYAAABAtVPzAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOdQAADnUBuWNRMgAAIv5JREFUeJztnQm0JUWRhmnQlp1GYQARWmVRQRhBEUQUF3RkcWNRcRlER9xBHHcHgXEZEReQ1RUXFGFQAReEQVsFUYTBDQQVbFDAlRmRcdQR+p/8OrK4l8d7r7PiVlXeWzf/c+J4Dr5+L6sqIjMy4o+IlVYqKCgoKBgvSFoQZOUgawb5uyDbBNk+yBZB7hPkXkFW5+dyr7WgYOIQDWyNIPcPsm+Qo4N8IcjlQX4W5HdBfh/kpiA/D3JlkCVBjgnyj0EeGo1w5dzPUlAwthgytF2CvCfIt6Jx/U1puC3ILUF+HOQjQfaKhldOvoKCYQSjuFuQvw9yRDSYVCObC/z7X0TD+4cgqwXJ/ZgFBfkRDGH9IK8O8pMgfx3R0GZimeyUfLfsvldOu4LpBCdOkHsH+XCQ/27Y0GYCQz4ryHZBVsn97AUFnUJ2X7uvLBjS9Kk2F24P8o0guwe5W+53UFDQCaKxEdY/Xxbo6BL8Pe6I/xRkjdzvoqCgVcjcyA2DnKnRAyNecNKRXjg4yOq530lBQWuQJagPD/KXTMZWAaNbGuSlQdbM/V4KChpHUOxVghwQ5FcNGMyyBn4HIIJJKmLt3O+noKBRBKXeLMjXncaC+3ljkIuDfCLIiUE+FuTcINcE+dMIRvdfQV4fZFHud1RQ0Ahkie0jg/xPTWMggnlRkBcEWSxzSfldcCs5MVeV3Ql3C3KGjGniAWmJ9/K7cr+rgoKRIUs6X+YwAk6eTbQCXqQs8rlOkGcEuUp2R6uLPwY5IchaXb2XgoLGITuNnqd6p8/SIM+VnWh1/hanHlzMc4L82WF0uKYk4jet83cLClqHLMSf8nNrBfmU0k8d7lQHBVnoXBcGTsUAqYf/cxod90RO1kIFK+ge0bi4Oy0KsnGQrYPsKDtNdpIlsreU8SJXjUpf/bsHyJLNKeDO9tH4d0ZZL39/W9lJ50lBcDpCfN6sGF1BJxgyMurSnhbkKBk1CpIxoX3uWLiJnEg3y9j53NMIXrwmyMNk96q9lc6VpLZtp1GMbWj9C6LBfMRpdBg/UdAHF6OLiEpRVQTjvy+U7bALo7KsEv//3EudKMT3h6IdGY2AgAKh+ZSQ/rKo4BjgOVFpU1gluH8fVIM5sfjtuY99Msj/JqxhtjWdLTvBp7egVWZg1DgtloWEnx3kdUHeL8vPHCdjNBwSZD+ZC4SbghGW3WoOxPcKqfhdQa6T7w40DIyvzt3twKYVW2Z095MZsydfh3vJprFj02sba8hOM04vChVfGeQ0WQj4lvhSbosfuJLb439jZ/ulrIKYsC/RL+4ay+8ZBXe8W9y/VwT5kUY3NA/gN+7U0vNhdBvJcm03O9aGe4n+UEXef6MLD3l32eX734JcEeRW+XItt8UX/jlZzma9qXiB80BmbETkaGvwB8c7bQr0LHlAy8+5OMg7gvzWsT42oe8Gebz6WlMn25lgEnCiQevx5FZmw+3xpX8myOOC3ENTetrJNjJyT16WRlO4NMiWLT8r+kTR6+FBfu1YI3fR78jaNvTL6GQu3w5BviTfaZaKG4IcqhFD0ZMI2Y5/nvK4kDNBcOYhHT03uUHc59871sl1BfcX9/LuXay3dciM7YlBvq1u6qbw0dnloSDlfvxOIHOnP6DxMDbAxsfJ0UlQS9bnkl4qNznWitGxQXAtWbWL9bYG2X3tGfFFNFWGkfoSIcoSAu51JFNGmeI+3JSL3gQIbh2mDk8NWaT7ObL+lnV1jZ8n9XFIl2tuFDIf+0lqpmbKC+4SpBF6aXTxHT9BPneqTaDAXw1y347fB5HvF8oS+h6jQ1dfHuQeXa57ZMjcyEcE+aHjwZvGJbL8Hqdt7lfTGGSROhLB8Azr3ov5JiTAcaVOD/I+WfCBqB+u6YVBfqPRrgBEScmndnpiyE46GDEXO98LATgKWdfpct1uaBCaJlw/LncKwtQYXW8imDIGCW0F6kYkSRhfFP8tvf3X0oDNg6CwcCyfLEswUyzqCXShvNDDOmd2yE66PeN396yddNMbgqzb5bpdiA+LL1y3QLECuypKxIe+VsaSYNf5k/PlVSDZuUdcX+7XNDJkm9oXVc+D4NSCefIgGVVuvt9ftSt/dnx3nhZ4bLjwMeFwdurWyzYRjA4Px6M3tGw4XONsdLLT7SFBvlfz4VAaDJRk5Ntld78HykLd0JMo0WC4A6UhME08Ldn4G1fL6rkm/qSTBaN+V+P5b/I8u8ww4WLC/PcYHd+KNnqbq3uj42oD8ZoIucfo2OTfKZv00+XS0xA/5htVj1zKiQbjhIpgQvmz7rwa7LjcDUlye05QjI5Tc3kIeCxfYgJkisRdK3XjIYL5WjmDAfHvwWH8pHzRUNZJo1hO1q6NDr3ZWVYd4dmo4YVyx8XN7nLpK4bsTvCfNR4GAyBZ+2iZC5D6d9hx3iSLKnmiUYSOOTGzDoaQKQObFJNhNtFgXhocU054giJrawZRW8aV/E6N5z1VIwYBNCAOf0h+o+Nbbzv6m6u99op4QeMjTyCIANAH4vN3vfy5ERbzKqWfbijCf8hcjVqXapnriqISjfLkXQB0oJfJlLetVzLb2jEeTvKnygZToISc8NfLXETqzbi0/yb+N1IbRBKJnBH4gUWzvdLpTOzQeAUjnywaEIePlY+riVtH9HDrJt5lzbVjdA8P8u/yVRrgUX1WGU7puR4IV/BUpfvK3KcepREiWLJQP4P+fiqf0XEfZJNonQoW10rlMndULvIYQqqLw7NxfyKQhGt2mtLvU19Wg12JNahLOzo+Q13wzOjJek2tqcba2ewYAoJrfKtj7RgqBst3zGt0MtcnNViCUULFGTnBGF8ip8U18l2MCSZwf2xFAWQKSpTubbKTrIm6tFS3iPfBnbpR5dCAOMwzedxLcoDPbXpdiWuvgkDQ/zyFrPybs+PvyFedEv74I5XuZnAibdTw3yeyiUJ7jA53gR27sZNO5vZyR+QEvtK5rlGBYu/cyAPN/ozk8P5FPheNqGcWlr5swyAIcrJ8wbfqPsq9MI/Rye5DqW4OnZQaHzMkK8/5vnzKzc4F04IAxqjrWCn+HkLKf3SspSlwJ3xoQ693rmetiMN1FRc2y2ptrm0F665m2h3jWDvAy1gS5BG5HuBNSnN1+BmSqW2tA/+aaJTH6HD3Ph5kA+/6NKBc0R4i96ALorhbNfyKZ3tmAlgvlgV6UsGmm7UOTYPqeDZGz30UHWODJ+3Q6cI5oo9SmpJzWW3NzYnrIaTuZRiwIUBpcuVdZMb2eXU3nHA+4OLv0MIrnu25cZ+5l92QsC7eDYXI+aN9K91R3kSTpTpEggqV0T2+s+eRhVzxh1Mihewk23SwJhgqZ8in+BgdRrOVavjost3yFOU/2Srw7BhBm696+Pk56aBT0Utlrs2O/07QYf1OFpWIsJ51ZXPmiAR7crtUKDxdXVQayE64DyculDxTq/eKoXWRM4JE7TEAnoX8F8noFRqdLFrKXSZnL5HZQHCiy7o00h9EjZfI7kaVTlT0PbpmQdUbi9NtGLINk44B18tndDTJpSav3bupzOA4klPySuy67IKtrmlobVyMyVt5G4hy0pG7mdPoZHcBmp4udfyNYVQdyposaSLf2Wn1u2zzIUFMESoEa8jPZwV5s6yr89g2e5Klt6ik+KXjO/DzpKf2V9sTWWWzllPcNxZ1ZJcvXcbB5AT2hK8xAMpZ2JVnveTLwuPnymcoBGquj/8eBgecx7cEOUl2D/2t8/dWYBOke3Knw+dlmxA5L979uvF/561QGBfIXGOofx5CBT+/VOaetje9R9a3JDW8Cg+w00mVssjjCTXWOAyMjsgnFKlVZvxe5LGqz1zgd5I3pAEObbwrhVw5CqcEikquhyAOVC6v4UHYhq86dm7cuEJGbofk7q0ep2UDG1077qWsRVsqvw/l3LVrBZBFo2gg6mEYVDxAXEeMofqdfJhP1/xdGD1pAwI78zax1YA3ShTsq/IXg7J2orfF6BIhI9QTdLpSPqODxUTLhjXaWtx5NRYGxy8Hnw42CQnu1KEUM18ipzPV0MvLe2Rts+v0FMFFpEC3FntfZpikKnCNPYx31v4V2YnZrz6MLSJ+ZwqXuVbULe/hnZOb/Fc1QKiYubAqcJLKFeS+h+I3b/0rXivRKChJ3mQnpftQtnADCQykfghO1sODrOlcd1WadLx8nEz+zQWyRO3YBi7GDTIPg2ZNS2p862GQ34N32rjR0YuwThdcQugcuWs1upC0tUJJYoPwtMquehm+RLbzpYJTfaT8k8zo7im713lzjBRjEnktJ10iZB7cY2QRV4+HwUl3aPx2jS2KwRqUL9S5Z2D9b2l0IenrJUgBJcmT7ATV4JHU53xaU88oO6XfIR9bn2f9gaw8qtPo5SRDg5YNbJweD4PDiEBKM31S4oKepvq93im4pJlpp8Wgcc0IF+PrHS+wDmjz3liFRFw3ngG5LS+zpapJLEaXCA0mshKv8HgYVSClGUaKzGgIv9eNphG5Yyacmzg84rrx0W90vMAUsBtSc9co7UeDsV+kFrwMF1IG+za9tj5DFq+gwTBNrTy5XYJsB6gpl1527P7CsRAWT8+MLA1bZEbnWfeKQBoEpW4lUCG7XxwgXxAIsNHQ0avc6RIhMzpYM4xB9riX18laZoyeppHx6QgoeNjXuEd0Eyav13kkTZbcbrpglDIZXLfWcmCy3CBGw4nluY8SPIItxKyCtpbZK8iMjuZPeHR1G/JWed3NG3nfMleHYIjH1WHHoO8Fx3YOo4M5QsmFJwQ8Gzg1qYhvNeksO+meJWNHeMAGyf0iazezSYIGhawQKuqymNAvjHX0dIEGVc/cyzx+Licd5TVZGrbITrrL1IzR4bPTAqL1zUPmXdDNLKUubTYQwGIgBjnGtpfbG8iGjcIeqqvrnIz/rKYoYDI61SnydUlC2eEwJpXINA1ZF2la+Y3a+IfN4wXqKBooi6SRM7rWuV7aQlDB70rQTytkAT9P305ydMQPmjlYZFXQNNL0uJeV0dFTsOuhEPjo8A/P0egnHc/fGWFbZnQwSrzuJe7RQSopg1rQoAazbnKc/PV9mlwIfq7XveSCSX/4HJNYqurxCxwvcRgofieFt0Nrx+geKh/jHTCOly7QXS574iGLPZyneoE3uL0UMDc3hVXmXpLgvtnx8Vk8dyqIpJ3vurJoFA1EvUlmTkjq3bqel8YpjdF4Kg0wUhrllnRBDWgwH/FCpW90/BytKeg811zMQkbhInrpYeujMAx5JADR+WhY2SlN2wXveN9q9nXXpzQKQJrlfNU3OjaJyZ59nQEywvN+qtfJjFgBm3qzncBlbJS3yjcql52ASuinBFnY3KqS115NkfG4xqydkVy57qOcdLRKr3MfZXJMMTgHZAR5qgTqBAyhfjUf0ZYlasn51NkBhlFNwMnhXtL34v01X+QwaAnfaiJ8jnVjdPQ3YcNIOekwTFIEpZTHCRmh/zSlb3J8F4gf92xjMSgAd4Rf1dHWIdDohZxTDveSPBX3Ua97eZWsejxHEIhI2tlasdGRVsAV7XKJvUJ83zvE7516n+O6tXcruiFjR9Dl6Gc1FbYCJyRNRTtnR8iSzAyO97Yzh0+Ha9xpUEKmBPRLoZB1rg0D12YvldNtZGhAdUzVEwyTplIbtqLTcUH7yNcPEPw+PtCarSxw/rVXNXXemeaUMqHYOYxu9bj2y+L6OfHYXWltRzqh5OAaQHzXuJakClJdS3LW+7emF7I7HbV0TFD1VtQeIXOXur4bIdx1vOU9S2XE4RwbBu8dZYDNQ2cvOoh1XoHfd8iuT9WhkgIOni/Hb9Paojgtdpc16vEYHScdgxk6bXw6tP6qt77nlIbgTBApC1tftml0/nenCbI8NENMUqmCVHC0G1yTGR3Jv0tqLGwYuETviw/X2jrnWf+LZHczj9FxQnJSlhOmh5CdcnR8W5qoDxw6FC530jqdTD2JWk8ZO4EACgPv3bXiyjYM7mS0L/AYHUWkEIc7bzdR0D5kKaUP1tCNr8km6La+MIwOtn7dRG0FDJUGre35wHOvHaOD/e096bgw02ym88ZKBe0i6jXXptSCVTbgZ6qLoJrsXsFQCHiAHqPjSGZ6TDvh1fnXDp0KxgAnnad6HL4pPS/HaqxTweiQHQIXJ+oBukOR6qIuF8iRymnlcS+5B5Lk7bzNt2w3o78LdC7PhkHe5kQVo+sVZJvxq2ro86XqYJLtzEUullFePMwOTjqqx+ES5uAwch/9pnyRVzibJKg37HLdBe1B5rk9WOnBE6LvT8+xUHJEtCbzDOPg31BICnE4R56O+yg1dZ47HSVB2bqZFTQPGTPq1ER9YKN+S9d6Wy2U6B0RSG/LBtINsChytGwgalqnRmomvqAMkdeCdiAbh5XqVtJIuN30wDwLhU2Cm1W3NRmoqsdx83IYHX0vvEEgQCk+FehdL72gYcjiCqmtJJcGuV/OxXLSka/yGF01BJ0Ee+fVzLLENiUyXqPjlOQOUGa9TTBkbmVqtBKu6+65F0yJDBNwPNXjoKoez1FTB4WL+eHePikQYenxUoxuQiELqMGKSkkb8TMHZ//esoazL5N/Ag5lQQcoz5w6yMo0EPXeR3GNs/R4KWgGsntcSvcAdJvOb53Xfs62aGrqaKbpLe9ZKmsJ1/lAC9mG8R75WghWjZVg+peTbgIRv13qtCl6pHbWanFeyNxLpshcKx+zA7b+gcrA1pc1jWEsrbebGeHlZqdrFnQC2UTbKxK/NVXjG+de8x2QFbLSKYl2Y56TDoVnFHEOo+OUptLAc9Lxb5rr3FvQGeJ3/2IN/XxY7jXfCbKCStoWcDfzEodfqzzFoGwYUH7qjp3ilHujSv/IiYOM5pUaOIG88bjca74LZGx9jO7H8hkdUU8y+zlmj7Nh0C7i5hpr52PR0Cj/hbqgNmQbfErtJz+zX+71zgoNeutfJt+djsgh1eOdT2SVGR3DP1KDQLAVaBlYGv5MIMJ3e77SOnoTmT4o93rnhCzPsYssuegxOly7Y5SnkBXfnpYNP09YJ+7z1l2vsaAZyHr5pKYGXp97vfNCgxIZjM7D7IDJQolM51FADbqZ3TTP+vDrD1FxJycW4dvtqvRg2VG515sE2WBHWjZ4mB34zh+XcThzrH07WU3f8No5sWmES/6xtCKfYMgYQ6lt/0/Mvd5kyKrHvS0bMDpq6ugIlmMiK6kKGtDQCpAqdu54kF/LvW3CITsMUknMJ+Veby1Eg2Fgnqd6nFOFk2brHEYX11/a2fUMsnKxlFQQd7jjcq+3NmSz3hiw4Jn1hlsHcXi7XEZX0C8EPdpR6VUv7869Xhdk4X7IoJ5KA1xSgjCdz3or6B9kHa9TDI4T7ujc63VD5l4S9vdyGGnL/qhidAWjQNY2L2U2BQZ3RO71jgQZeRSWRuqldeYLuFxWyFqMrsAF2VyJlOsNm/yhudc7MmQlMuSyPNXjAEbIE4rRFdSFLAgGjTAlck6kfO/ca24EspnMzHqrSxyucI2Mv1mKQQuSISNmpLY+h2746NxrbgwyOtXBIxgdrc2h6RTWR0ESZGyiLyTqF9eeB+Vec6OIL4C6NApSPZUGnHS0fFgz97MUjD9k8yOuTNStn6qPDYFl7iXse88wDn6eO12hXBWsELKkdyqtix426+RecyuQnXREjzyFrPw8TY2WD1jM/SwF4wtZaU5q+34off29rsgKWemK9UOH0QGGcdDGr/OOYAXjD1nA5Filt8njqtJvdpOskPUxMv/ZY3SUzzDFstzpCu4E2dXlokQ9YvPeOfeaO4EsV4Kv/d0RjA5Gy71yP0vB+CDow+ZKv79xtdko95o7hayMAjqXp3ocPx3uZnEvC5ZDVmKVWp/5FeUa5pETsurxL8k3pw76zidUhnFMPWTsprMS9YYN/u2aViaTbLAjcwE8c+qow2MCzpbF6KYXsmLoXybqDOT6p+Rec1aEF7BVkM/IV8iKG0Hzz/sXo5s+yAJxr1ZaazxAKdiWudedHeElbCgbO+UpZMVN+Lqst3zuRynoELJazMtr6MlRKnd/Q3gR68uCId6WDbAHCMb0O79SsByy3BsTc1I3abp57a1pvb/NBtlwyFNqvMRhkGb4miztUIyu55ANnfmo0tNLuJOkD3IvfbwQXsjaQd4qS1DWRTV26knF6PoL2elG57XrE/WCGjmGy0xfOiAFsgEg+NveWW/fD/JYFfehl5B1F6DVYmrujQbAO6hswnMjvJz1ZLPeUhkEM43ue0H2VJmE0yvITjda1/8qURdwOc9UX6sDmoQsqclwSG8hK/kZCllL9XhPIDvdLlT63Y12H3QQKKdbCmTE1NfI15wIMMRj/yALcz9LwWiQVZ0w0jp1ljtGyXjh9XKvfaIQX/Qzg9zgNLrfyhKkZZebYITv90ilB0oAhknqoNzl60LGKjhAVj3uAW5p/+ugegrZqLMvK53wzs/BYFqUe+0TAVkpz4JoaFSNM0V1cZA3y9dwFpBqeFOQe+R+voJ0yKLWlGXVIUVwEtL6vGyww5jFsAiUcDGGlLxrkOcEOUxWHXBhfJGp3LnZQEv2vXI/d0EaZB3gcAvrRKvRjw9p2ttyDBkXd7LVgqwrK7GhVIdoIk1kGYxOzdKP4ktmV/MUq84H5tuVdMGYQzYymnzqd2roAD/HTHpa5+d+hO6gwanFDgV7ZFMZ7Wq/IG+UkZW/JYsicuq0YVhz4desKfc7Kpgf4Rs9PMg3VG8OIWQJAmT9vjZocHIx8JByGSbiEKQ4Tnai/DQq+p9rvsA2wMCH9XO/s4K5IasEoLC07qRdxqdBhM/9CM1D5iJy7FNe8whZkvpUWRPXW+LL6urUqoOlKr0uxxayOfAnqX7lCE2Hd1LfAiWy04yENMMUKVmnJonENJfVcTSwYbC+49W3j9ITyIyNKoC6xvanIAeqb/0mZcEO7mLwHAlseEppcuKKIFvlfo8Fd0X4LotklSJ1W25wRTk5yFq5n6ExyNxHCMWUOfxAvuY/OcFH4QK+a+53WXBXyHJtb1D9Sbp4LNS60dukH16LLNqI+5g6nSQn+AAYF7QeGOWXBPlYkGerNJEdS8iKSV8pcwvrAo+F+EHux2gGsrD+0+XnMbYFDAv6Di4t90cmpxDVepfMl6f+iWgVQZ3cr7FgDsiuKBCSb3LoABvqXurRycbLeKfS5ia3BQyLaCd+/W9kxaW0xyPXsq+seRDMFFgqhaQ6QYjf7OD4XesCbuwL1TNjw6fu8q6GK8iJBcPk6iDnypgnzwvy6CD3kbkfK/fmRU8pZJ4HG2ZqIekw2HzZcCc/tSMLjhCafZv8hZ+zYZnufFpRMkMyHLbJ6bKTlLFWu8kuwAzYYwcshtUzyPiyzA1MbeA6DO55zAycfJ6kzNhg5TOcfFRjw7jIpUC1gXBMcx/KK94vKyjF9yYQs5HsNOXUyv0KClqGLH9bpwHQMPB+GEu1di90JSr9vs6XURkZLigTSiAgc2qxk+0io3utE//Ggl68sIJakAXgniAb5FIXeEYkxNfrhe7ITjeK/C6Wb1IptWY0Y8W35q7FqVXcwYLlkF0P4Nd6hnJibFC9FvXJ2Eg8Hq36ZFECHVC7XixzD0vZS8GdIPNodg1yqcPY0K/PyuIKuR+lGcjcPDob1Q3PEvxg+g2h+X5x2AoaQTS2B8gmlNadB4ixnaM+jSXTICp5nurtPlBwiGRukPsZCsYT0dgeIqPUeYZvUmqzaW+MDchOt91Uj8NG6Q3uZ3+O+YLGEXTjfkEukK/+8evx3+d+jGYhSwPQoCX1dCM0+2n16ZgvaByywNlnnMZGS4UH9k6/ZEf+zrKCzFTgi2+Te+0F4wtZ8OyLDkMDFC9vkvsZWoEsL0LbudTTjRzbPrnXXTC+CPqxcZAPO40NAjMNpXI/RjuQsek/n/gyMEq4jZNPqSloBTI3kBC+Z6jmjbKZ77kfoz3IIkhXJ74QEtt75F5zwXhCdqc/x2lsEJif3HdjQ56l9NIbQrv9KWEvaAQybuQTZQwlT4NeCOz9HysmSwe8Q2n3N3Io9DDJveyCMYFsw4YbC1f2mkQ9mgmIFtMxTkxWj3Rq4oshFbBb7jUXjAei7lBCxZRabycAah5fNBXGBmQRyrMSXw470Ya511yQF7I0EqUx8GbpJeJt6AvJYrrGSMnY/EsSXxDtyMvI1imGrKM2d7XTVb+z1jCoj6TVfb/vbDMhqw74duJLuirIarnXXNAtZPd89IRBiNSiUaXv4USCZfHfMy5s+lJLssk1VyS+LKq1SzXAFCAaGS0Q6Hr2+iBfkl0pRp0HQVHyQVNpbEAWYfpBjZdVps30ENHAuF7Q+Qya36tkfTwZ+URvT++JNgx6/j8/yBq5nzcb4ku+IPGFkfTeNveapxmyMPzwjL1qHFglBMGYXrRqFLqbLYoCo4iBK5sE2SrI9kEeJ+uGRiftj0RdILxPXrap6Ua4kXhRzGefzpOtgiy0e1qNF0cKoVennO6sxHeRWX52ge6q7Cg5yk4LgdWjcO+hdAm3HSIv/MLFQTaXFWNSsEsDJdw2BgfuKms/8OQo5LYwhpfKhlS+LsjhssEp7w1ygmzC56dkQQzoedDuqGn8piwJTXU1PTxpkPsTmTFx0uAeUl5F9yuq+5s4wWYDSXDGlFFiU1ptyJTmiBovnFOOblsokfdvztyl51PiSu4WBYVeGIUdHIYDpzQ7OUp+z7i2ajdH0aEbbSZT8gfLqGwM+cN1os/lk6LsLQtTM96YkDdz7WjFxgWfhD+1f8y5g5TLIMkzZDQmFHyJTMG/K1NwdnRc8GtlOSo4gig5XdBuju8RV42T5C9R/hoVFPlblNuG5PYoy4ZEGt9JRXQCeLf6yvr3QtZBqU5bBRSDSzSUMHZoqnGpe9pCtntvHf8703XYuR8j27lp30A3MBT6BUFeEuRQmQEzvxulpsMXSn2i7A7B7n1mkLNlO+USWQ9LAjjf02DnJmVBlzGY5gx8pO05ys0ujnKzk1eKjfKi1JXytrW7Tyt4n3wjvvXC3Po9dpD59Oc7XixKSz5leAevFJ3/zu7NLk45T7WDo+yVCzOs7OO6SxfUAxsbm+ZiTVuOLRUy9wwX6paMH6pgcsGmSW6Nyu7d1YfW421CdofCLcRtKydNQSoqQ4MayBgwmrOWwEgKZMGIfWRk0oKC+cBVgmsEAaMDZIGp6eFDNgHZKQchlVKdP+b6kgVjC04z9IJmv0xTIoeHvhRD80JmdOxWH5evYregXyC4RSCMGQAMX3mqLMBWhls2BZnR8VLpSXFrpg9d0C04vXATOcFwFUmWQ4aAQ8kAFmZNkPMs97M2oMFJB7OB0vemKD4Fs6NKj1RzySupkuCkVEitEHJnEyTlUiXQyTnSC+Q6GYuEnOSPZDlKkvC0M6SZKlOMaFlHYIxoIjlOxjJD6XpFkP1l1QA0AIJPCZGAk6xMOOoCGsyI20O22/1Ok5cgXjaP3D4klYJX7I5hJYctUSk6JwBKTmCJ6BynAcMEUXSaMMEuwf2igemFMl4iLJTPyTwGkvinyDiLx8sS/DAxoGodKWO0cKpAHIbOBaseehcRwP1kxAEoXxAVHisjFOwkGybPnYpuV9vKjGZL2WiwxTKPBdYNhgQDByYOpHVYOhUdDTZPMa7ckFGsOO1gDZwRlevWqKCzUYxSlfqvUf6swe5dKTb5wD9E5cbQq10c5YYHCKuEnZz6PGhUXOQvkfEHl8j4hETQYKjA/fyEjHPIPeTYqOC0BWDgJEWQBAGYMf1y2fTVSsn3iUq+R1TwxwfZUUYLo2/iNlGgjG0xQ8FxwzaICr4oKjkb2BpRKnJxpfBIRV+r6Gwrz5AFs0gtLmjBBCF+9A2jAtI49oSozCj3WdEgUXCKFE+WEWzfI9u9DxtS7FcGOVBGzIUexmV8z6jQu0SlRpGhiG0WFXjjqLRwJYmOrRal4lZWijqbchYlLJhs6M6E45k78h3KHn92QVH2gnHF/wNZkd/pAmfFFQAAAABJRU5ErkJggg=="},756:function(e,t,n){var i,a,r;a=[t,n(757)],void 0===(r="function"===typeof(i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=t)&&n.__esModule?n:{default:n};e.default=i.default})?i.apply(t,a):i)||(e.exports=r)},757:function(e,t,n){var i,a,r;a=[t,n(0),n(1)],void 0===(r="function"===typeof(i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=d;var i=r(t),a=r(n);function r(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var A=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=!1;function d(e){s=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){d(!0)}}))}catch(f){}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return s?e:e.capture}function p(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var m=function(e){function t(){var e;l(this,t);for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];var r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return r._handleSwipeStart=r._handleSwipeStart.bind(r),r._handleSwipeMove=r._handleSwipeMove.bind(r),r._handleSwipeEnd=r._handleSwipeEnd.bind(r),r._onMouseDown=r._onMouseDown.bind(r),r._onMouseMove=r._onMouseMove.bind(r),r._onMouseUp=r._onMouseUp.bind(r),r._setSwiperRef=r._setSwiperRef.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),A(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=p(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=p(e),n=t.x,i=t.y,a=n-this.moveStart.x,r=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:a,y:r},e)&&e.cancelable&&e.preventDefault(),this.movePosition={deltaX:a,deltaY:r}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,a=e.children,r=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return i.default.createElement(this.props.tagName,o({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},r),a)}}]),t}(t.Component);m.displayName="ReactSwipe",m.propTypes={tagName:a.default.string,className:a.default.string,style:a.default.object,children:a.default.node,allowMouseEvents:a.default.bool,onSwipeUp:a.default.func,onSwipeDown:a.default.func,onSwipeLeft:a.default.func,onSwipeRight:a.default.func,onSwipeStart:a.default.func,onSwipeMove:a.default.func,onSwipeEnd:a.default.func,innerRef:a.default.func,tolerance:a.default.number.isRequired},m.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=m})?i.apply(t,a):i)||(e.exports=r)}}]);
//# sourceMappingURL=3.08dbadac.chunk.js.map