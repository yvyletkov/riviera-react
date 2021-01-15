(this["webpackJsonpriviera-react"]=this["webpackJsonpriviera-react"]||[]).push([[13],{629:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(637),l=a.n(r);t.a=function(e){var t=e.title,a=e.style;return i.a.createElement("h2",{style:a,className:l.a.headlineCenter},t)}},633:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(636),l=a.n(r),c=a(629);t.a=function(){return i.a.createElement("div",{className:l.a.container},i.a.createElement(c.a,{title:"\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u0435\u043b\u044f"}),i.a.createElement("div",{className:l.a.mapWrapper},i.a.createElement("iframe",{className:l.a.map,title:"Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17670.485251664963!2d34.410430747343334!3d44.66780165237019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb37b086ceb9e7%3A0xc25f18ce70fde775!2z0YPQuy4g0JvQtdC90LjQvdCwLCAyLCDQkNC70YPRiNGC0LA!5e0!3m2!1sru!2sru!4v1602843875837!5m2!1sru!2sru",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})))}},634:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(642),i=a(639),r=a.n(i),l=a(640),c=a.n(l),A=a(641),s=a.n(A),o=a(0),m=a.n(o);function d(e){var t=e.style,a=e.positionStyles,i=e.onClick;return m.a.createElement("div",{className:r.a.nextArrow,style:Object(n.a)({},t,{backgroundImage:"url("+c.a+")"},a),onClick:i})}function u(e){var t=e.style,a=e.positionStyles,i=e.onClick;return m.a.createElement("div",{className:r.a.prevArrow,style:Object(n.a)({},t,{backgroundImage:"url("+s.a+")"},a),onClick:i})}},635:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(648),l=a.n(r);t.a=function(e){var t=e.subtitle,a=e.title,n=void 0===a?"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":a;return i.a.createElement("div",{className:l.a.wrapper},t&&i.a.createElement("h4",{className:l.a.subtitle},t),i.a.createElement("h2",{className:l.a.title},n))}},636:function(e,t,a){e.exports={container:"MapSection_container__3mcTu",mapWrapper:"MapSection_mapWrapper__3ZhXp"}},637:function(e,t,a){e.exports={headlineCenter:"HeadlineCenter_headlineCenter__2zhKw"}},638:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),l=a.n(r),c=a(631);function A(){var e=Object(i.a)(["\n  ","\n    display: block;\n"]);return A=function(){return e},e}var s=c.a.img(A(),(function(e){var t;return null!==(t=e.$style)&&void 0!==t?t:{}}));t.a=function(e){var t=e.src,a=e.alt,i=e.style,c=e.className,A=Object(r.useState)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88B8AAuUB8e2ujYwAAAAASUVORK5CYII="),o=Object(n.a)(A,2),m=o[0],d=o[1],u=Object(r.useState)(),p=Object(n.a)(u,2),g=p[0],v=p[1];return Object(r.useEffect)((function(){var e,a=!1;return g&&m!==t&&(IntersectionObserver?(e=new IntersectionObserver((function(n){n.forEach((function(n){!a&&(n.intersectionRatio>0||n.isIntersecting)&&(d(t),e.unobserve(g))}))}),{threshold:.01,rootMargin:"75%"})).observe(g):d(t)),function(){a=!0,e&&e.unobserve&&e.unobserve(g)}}),[t,m,g]),l.a.createElement(s,{$style:i,className:c,ref:v,src:m,alt:a,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){}})}},639:function(e,t,a){e.exports={nextArrow:"sliderArrowButtons_nextArrow__1SbIM",prevArrow:"sliderArrowButtons_prevArrow__3X5_u"}},640:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMAjOCJCyrYDbW5tijfigwrtCcOrryy2S2PsdH7WQAAAEZJREFUCNdj4BJnAAMJMVYIg5mHG8LgZeOHMBiZBKFSbKwwETDFIswBotg5udhBFAcnC5Di4+QA8YQEwDwGETCPgUEUohUAXBIBpMCdUXQAAAAASUVORK5CYII="},641:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAMAAADUg/YpAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGXRSTlMA2OC2CyqMDbm1iSsoiieuDN/Zjy20vLIOSWloaQAAAERJREFUCNcti9kSgDAIA1PbCnjf+v9f6hCalw3LBPBcmajH6Zj2wTGm2bF0PX+JEnEBthZSsgpLUYsiplsz99fME6P6/lUZAaQZGQ8HAAAAAElFTkSuQmCC"},644:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),l=a.n(r),c=a(632),A=a.n(c),s=a(658),o=a.n(s),m=a(651),d=a(631),u=a(635),p=(a(659),a(634)),g=a(173),v=a(518);function E(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  .slick-slider {\n    margin-top: 17%;\n  }\n  .slick-dots li {\n    margin: 0\n  }\n  \n.slick-slide img {\n  width: 100%;\n  margin: 0 40px 0 0;\n}\n\n.slick-track {\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    margin-top: 0;\n  }\n}\n"]);return E=function(){return e},e}var _=Object(d.a)(A.a)(E());t.a=function(e){var t=e.title,a=void 0===t?"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":t,i=e.subtitle,r=void 0===i?"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e":i,c=e.btnLink,s=e.slides,d=e.text,E=e.btnText,b=void 0===E?"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f":E,S=l.a.useState(!1),f=Object(n.a)(S,2),h=f[0],w=f[1];d||(d="\u041e\u0442\u0435\u043b\u044c Riviera Sunrise Resort&SPA \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044e \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0448 \u043e\u0442\u0434\u044b\u0445 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u043c \u0438 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u043c, \u043d\u043e \u0438 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u043e \u0446\u0435\u043d\u0435!");var k={infinite:!0,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:l.a.createElement(p.a,{positionStyles:{bottom:"15px",left:"670px"}}),prevArrow:l.a.createElement(p.b,{positionStyles:{bottom:"15px",left:"610px"}}),responsive:[{breakpoint:1200,settings:{dots:!0,arrows:!1}}]},x=s.map((function(e,t){var a=e.img,n=e.title,i=e.subtitle,r=e.key,c=e.link;return l.a.createElement("div",{className:"SliderElement",key:r},l.a.createElement(m.a,{img:a,title:n,subtitle:i,active:1===t,link:c}))}));return l.a.createElement("div",{className:o.a.wrapper},l.a.createElement("div",{className:o.a.container},l.a.createElement("div",{className:o.a.leftBlock},l.a.createElement(u.a,{subtitle:r,title:a}),l.a.createElement("p",null,d),l.a.createElement(v.a,{popupOpen:h,setPopupOpen:w,popupTitleText:"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\ufe0f",submitBtnText:b,formName:'\u0424\u043e\u0440\u043c\u0430 \u0438\u0437 \u0431\u043b\u043e\u043a\u0430 "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438" (\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0430\u0439\u0441 \u043f\u043e \u0443\u0441\u043b\u0443\u0433\u0430\u043c)',swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!",withEmail:!0})),l.a.createElement("div",{className:o.a.rightBlock},l.a.createElement(_,null,l.a.createElement(A.a,k,x))),l.a.createElement(g.a,{text:b,onClick:c?function(){return window.location=c}:function(){return w(!0)},link:c||null,style:window.matchMedia("(max-width: 768px)").matches?{width:"calc(100vw - 40px)",margin:"0 auto",marginTop:"40px"}:{width:"210px",marginLeft:"10px"}})))}},648:function(e,t,a){e.exports={wrapper:"Headline_wrapper__3qi0s",title:"Headline_title__2Zuf6",subtitle:"Headline_subtitle__TkAsW"}},649:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),l=a.n(r),c=a(632),A=a.n(c),s=a(669),o=a.n(s),m=a(670),d=a.n(m),u=a(671),p=a.n(u),g=a(672),v=a.n(g),E=a(3),_=function(e){var t=e.img,a=e.link,n=e.title,i=e.subtitle,r=e.time,c=e.date,A=e.campus,s=e.campusName,o=e.type,m=void 0===o?"home-page":o,u=e.subsubtitle,g=e.fontsizeSubsubtitle,_=e.active,b=e.capacity,S=e.area;switch(m){case"home-page":return l.a.createElement("div",{className:_?d.a.card+" "+d.a.active:d.a.card},a&&l.a.createElement(E.b,{className:d.a.link,to:a},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192"),l.a.createElement("img",{className:d.a.img,src:t,alt:n}),l.a.createElement("div",{className:d.a.content},l.a.createElement("p",{className:d.a.title},n),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:i},className:d.a.subtitle}),l.a.createElement("p",{className:d.a.time},r,l.a.createElement("span",null,c)),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:A},className:d.a.campus}),l.a.createElement("div",null,s)));case 2:return l.a.createElement("div",{className:_?d.a.card+" "+d.a.active:d.a.card},l.a.createElement("img",{className:d.a.img,src:t,alt:n}),l.a.createElement("div",{className:d.a.content},l.a.createElement("p",{className:d.a.title},n),l.a.createElement("p",{className:d.a.subtitle1},i),l.a.createElement("p",{className:d.a.subsubtitle,style:{fontSize:g}},u)));case"room":return l.a.createElement("div",{className:_?d.a.card+" "+d.a.active:d.a.card},l.a.createElement(E.b,{onClick:function(e){a||e.preventDefault()},to:a||"#"},l.a.createElement("img",{className:d.a.img,src:t,alt:n}),l.a.createElement("div",{className:d.a.content},l.a.createElement("p",{className:d.a.roomSubtitle},i),l.a.createElement("p",{className:d.a.roomTitle},n),l.a.createElement("div",{className:d.a.imgContainer},l.a.createElement("img",{src:v.a,alt:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043d\u043e\u043c\u0435\u0440\u0430"}),S," \u043c",l.a.createElement("sup",null,"2")),l.a.createElement("div",{className:d.a.imgContainer},l.a.createElement("img",{src:p.a,alt:"\u0412\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"}),b))));default:return null}},b=a(631),S=a(629),f=a(634);function h(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n\n  .slick-list {\n    transition: all 0.3s;\n    overflow: visible;\n  }\n  \n  .slick-dots {\n    bottom: -32px;\n  }\n  .slick-dots li {\n    margin: 0\n  }\n\n.slick-slide img {\n  width: 100%;\n  margin: 0 40px 0 0;\n}\n\n.slick-track {\n  margin: 0 auto;\n}\n\n"]);return h=function(){return e},e}var w=b.a.div(h());t.a=function(e){var t=e.title,a=void 0===t?"\u041a\u0430\u043a\u043e\u0439-\u0442\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a":t,i=e.slides,r=e.type,c=void 0===r?"home-page":r,s=l.a.useState(window.matchMedia("(min-width: 769px)").matches?4===i.length?2:2===i.length?1:0:0),m=Object(n.a)(s,2),d=m[0],u=m[1],p=i.map((function(e,t){var a=e.img,n=e.link,i=e.title,r=e.subtitle,A=e.time,s=e.date,o=e.campus,m=e.campusName,u=e.key,p=e.subsubtitle,g=void 0===p?"":p,v=e.fontsizeSubsubtitle,E=void 0===v?"":v,b=e.capacity,S=e.area;return l.a.createElement("div",{className:"sliderElement",key:u},l.a.createElement(_,{active:d===t,link:n,type:c,img:a,title:i,subtitle:r,subsubtitle:g,fontsizeSubsubtitle:E,time:A,date:s,campus:o,campusName:m,capacity:b,area:S}))})),g={initialSlide:4===i.length?2:2===i.length?1:0,afterChange:function(e){return u(e)},dots:!1,className:"center",centerMode:!0,infinite:"home-page"!==c,centerPadding:"60px",variableWidth:!0,speed:500,nextArrow:l.a.createElement(f.a,{onClick:function(){return u(d+1)},positionStyles:{bottom:"-90px",right:"50%",transform:"translateX(120%)"}}),prevArrow:l.a.createElement(f.b,{onClick:function(){return u(d-1)},positionStyles:{bottom:"-90px",left:"50%",transform:"translateX(-120%)"}}),responsive:[{breakpoint:480,settings:{initialSlide:0,className:!1,centerMode:!1,slidesToShow:1,slidesToScroll:1,infinite:"home-page"!==c,dots:!0,arrows:!1}}]};l.a.useEffect((function(){v.current.slickGoTo(d)}),[d]);var v=l.a.useRef();return l.a.createElement("div",{className:o.a.wrapper},l.a.createElement(S.a,{title:a}),l.a.createElement(w,null,l.a.createElement(A.a,Object.assign({ref:v},g),p)))}},650:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAjCAMAAABB9MFTAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAAkFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDIYgjAAAAL3RSTlMA027UXm8c/f4Nvr1dD78bDh0McV9gXMAa0tVyYfBwtX3Hu9a8FVZbiozjl0+zHjFxxlUAAACjSURBVCjPdZDZFoIwDERbRWhRFBBU3Bfcl/n/vzM+Mql9vGduMo0x9C73M6PI4UZolgBXSgkaKBHbLqp0qoYWJdXrorVGI6fQT5xSStBKt6eNlVNipMfXTolSIiFkNsCej7gDDhNi2RzoKzgG7IKgF9gUBPOh6DHBUqDlpE+Bk9KPIV2SS4ZZ+qeS5WQe+pGXSk0cqKQWla3M/AT0J5/Tvx+vL69AEuooqPOcAAAAAElFTkSuQmCC"},651:function(e,t,a){"use strict";var n=a(647),i=a(27),r=a(0),l=a.n(r),c=a(652),A=a.n(c),s=a(3),o=a(68),m=a.n(o);a(638);t.a=function(e){var t,a=e.img,r=e.active,c=e.title,o=e.subtitle,d=e.link,u=e.decolorized,p=e.oneLine,g=e.smallText,v=l.a.useState(r),E=Object(i.a)(v,2),_=E[0],b=E[1],S=m()(A.a.card,(t={},Object(n.a)(t,A.a.lifted,_),Object(n.a)(t,A.a.noLink,!d),Object(n.a)(t,A.a.small,p),Object(n.a)(t,A.a.smallText,g),t));return l.a.createElement("div",{className:A.a.cardWrapper},l.a.createElement(s.b,{onClick:function(e){d||e.preventDefault()},to:d||"#"},l.a.createElement("div",{className:S,onMouseEnter:function(){return window.matchMedia("screen and (max-width: 1200px)").matches?null:b(!0)},onMouseLeave:function(){return window.matchMedia("screen and (max-width: 1200px)").matches?null:b(!1)}},l.a.createElement("img",{className:u?A.a.img+" "+A.a.decolorized:A.a.img,src:a,alt:"\u0410\u0444\u0438\u0448\u0430"}),l.a.createElement("div",{className:A.a.content},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:o},className:A.a.subtitle}),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:c},className:A.a.title}),d&&l.a.createElement("div",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u2192")))))}},652:function(e,t,a){e.exports={cardWrapper:"SpecialsSliderItem_cardWrapper__10UUN",card:"SpecialsSliderItem_card__3YU28",lifted:"SpecialsSliderItem_lifted__3iMi6",noLink:"SpecialsSliderItem_noLink__1YEPC",small:"SpecialsSliderItem_small__3qIdc",decolorized:"SpecialsSliderItem_decolorized__2zSjz",content:"SpecialsSliderItem_content__1ylKF",smallText:"SpecialsSliderItem_smallText__3yd86",title:"SpecialsSliderItem_title__vG68z",subtitle:"SpecialsSliderItem_subtitle__1RI0O"}},653:function(e,t,a){"use strict";var n=a(642),i=a(674),r=a.n(i),l=a(629),c=a(632),A=a.n(c),s=a(0),o=a.n(s),m=a(650),d=a.n(m);function u(e){var t=e.style,a=e.onClick;return o.a.createElement("div",{className:r.a.nextArrow,style:Object(n.a)({},t,{backgroundImage:"url("+d.a+")"}),onClick:a})}function p(e){var t=e.style,a=e.onClick;return o.a.createElement("div",{className:r.a.prevArrow,style:Object(n.a)({},t,{backgroundImage:"url("+d.a+")"}),onClick:a})}t.a=function(e){var t=e.title,a=e.icons,n={infinite:!1,slidesToShow:e.slidesToShow||a.length,nextArrow:o.a.createElement(u,null),prevArrow:o.a.createElement(p,null),arrows:!0,dots:!1,responsive:[{breakpoint:1e3,settings:{arrows:!1,variableWidth:!0,slidesToShow:1,dots:!0}}]};return o.a.createElement("div",{className:r.a.wrapper},o.a.createElement("div",{className:r.a.container},o.a.createElement(l.a,{title:t}),o.a.createElement("div",{className:r.a.sliderWrapper},o.a.createElement(A.a,n,a.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("div",{className:r.a.iconWrapper},o.a.createElement("img",{src:e.img,alt:""}),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text}})))}))))))}},658:function(e,t,a){e.exports={wrapper:"SpecialsSlider_wrapper__mEqLN",container:"SpecialsSlider_container__2OogO",leftBlock:"SpecialsSlider_leftBlock__3-yY2",rightBlock:"SpecialsSlider_rightBlock__1A0_V"}},659:function(e,t,a){e.exports=a.p+"static/media/right-arrow.279196e3.svg"},669:function(e,t,a){e.exports={wrapper:"CenteredSlider_wrapper__1icd8"}},670:function(e,t,a){e.exports={card:"CenteredSliderItem_card__21_3j",active:"CenteredSliderItem_active__1vNGT",img:"CenteredSliderItem_img__3oN5q",content:"CenteredSliderItem_content__2dalT",subtitle:"CenteredSliderItem_subtitle__HDdue",title:"CenteredSliderItem_title__sCJbW",subtitle1:"CenteredSliderItem_subtitle1__B66KX",subsubtitle:"CenteredSliderItem_subsubtitle__1vMED",time:"CenteredSliderItem_time__cu9z8",campus:"CenteredSliderItem_campus__3_Fc1",link:"CenteredSliderItem_link__2EVH1",roomSubtitle:"CenteredSliderItem_roomSubtitle__36Dzy",roomTitle:"CenteredSliderItem_roomTitle__si2ZE",imgContainer:"CenteredSliderItem_imgContainer__3-B_9"}},671:function(e,t,a){e.exports=a.p+"static/media/capacity-white.f0240ef3.png"},672:function(e,t,a){e.exports=a.p+"static/media/ploshchad-white.3dc622e9.png"},674:function(e,t,a){e.exports={wrapper:"AdvantagesBlock_wrapper__2R4_T",container:"AdvantagesBlock_container__2ZWmT",sliderWrapper:"AdvantagesBlock_sliderWrapper__2UCO-",iconWrapper:"AdvantagesBlock_iconWrapper__2ADtx",nextArrow:"AdvantagesBlock_nextArrow__2aXqs",prevArrow:"AdvantagesBlock_prevArrow__2_G1m"}},683:function(e,t,a){"use strict";var n=a(27),i=a(630),r=a(0),l=a.n(r),c=a(632),A=a.n(c),s=a(684),o=a.n(s),m=a(631),d=a(629),u=a(634),p=a(173);function g(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .slick-list {\n    overflow: visible;\n  }\n\n.slick-track {\n  margin: 0 auto;\n  display: flex;\n  justify-content: start;\n}\n@media screen and (min-width: 481px){\n .slick-slider {\n    height: unset;\n    padding-bottom: 40px;\n  }\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    height: unset\n  }\n}\n"]);return g=function(){return e},e}function v(){var e=Object(i.a)(["\n  .slick-next:before,\n  .slick-prev:before {\n    color: #000;\n  }\n  .slick-list {\n    overflow: visible;\n  }\n\n.slick-track {\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (min-width: 481px){\n .slick-slider {\n    height: unset;\n    padding-bottom: 40px;\n  }\n}\n@media screen and (max-width: 1200px){\n  .slick-slider {\n    height: unset\n  }\n}\n"]);return v=function(){return e},e}var E=Object(m.a)(A.a)(v()),_=Object(m.a)(A.a)(g());t.a=function(e){var t=e.slides,a=e.title,n=e.titleMobile,i=e.initialSlideIndex,r=void 0===i?0:i,c=e.manySlides,s=void 0!==c&&c,m=e.withButton,p=void 0!==m&&m,g=e.activatePopup,v={initialSlide:r,infinite:!0,slidesToShow:3,centerMode:!0,arrows:s,variableWidth:!0,nextArrow:l.a.createElement(u.a,{positionStyles:{bottom:"-30px",right:"50%",transform:"translateX(120%)"}}),prevArrow:l.a.createElement(u.b,{positionStyles:{bottom:"-30px",left:"50%",transform:"translateX(-120%)"}}),speed:500,responsive:[{breakpoint:1024,settings:{slidesToShow:1,initialSlide:0,centerMode:!1,dots:!0,arrows:!1}}]},S=t.map((function(e,t){var a=e.img,n=e.title,i=e.key,r=e.descr,c=e.popupData;return l.a.createElement("div",{className:"SliderElement",key:i},l.a.createElement(b,{key:i,index:t,withButton:p,img:a,title:n,descr:r,popupData:c,activatePopup:g,active:!window.matchMedia("(max-width: 490px").matches&&1===t}))}));return l.a.createElement("div",{className:o.a.wrapper},l.a.createElement("div",{className:s?o.a.container+" "+o.a.withPadding:o.a.container},l.a.createElement(d.a,{title:window.matchMedia("(max-width: 490px").matches?n:a}),s?l.a.createElement(_,null,l.a.createElement(A.a,v,S)):l.a.createElement(E,null,l.a.createElement(A.a,v,S))))};var b=function(e){var t=e.img,a=e.title,i=e.descr,r=e.active,c=e.index,A=e.withButton,s=e.activatePopup,m=l.a.useState(r),d=Object(n.a)(m,2),u=d[0],g=d[1];return l.a.createElement("div",{className:u?o.a.card+" "+o.a.active:o.a.card},l.a.createElement("img",{className:o.a.img,src:t,alt:""}),l.a.createElement("div",{className:o.a.content},l.a.createElement("h6",{className:o.a.title},a),l.a.createElement("div",{className:o.a.descr},l.a.createElement("p",{style:{marginBottom:A?"10px":"0"}},i),A&&l.a.createElement(p.a,{style:{marginTop:"17px"},onClick:function(){return s(c+1)},text:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435"})),l.a.createElement("div",{className:o.a.moreBtn,onClick:function(){return g(!u)}},u?A?"":"C\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")))}},684:function(e,t,a){e.exports={wrapper:"EventMainSlider_wrapper__2fWqs",container:"EventMainSlider_container__d9cWz",withPadding:"EventMainSlider_withPadding__2CzOC",card:"EventMainSlider_card__1w6Y7",content:"EventMainSlider_content__2m_5s",descr:"EventMainSlider_descr__2Hlve",moreBtn:"EventMainSlider_moreBtn__1Ej9M",title:"EventMainSlider_title__sHFCW",active:"EventMainSlider_active__3sjEY",lifted:"EventMainSlider_lifted__1SUwF"}},696:function(e,t,a){e.exports=a.p+"static/media/kitchen.9c91f980.jpg"},798:function(e,t,a){e.exports={birthdayPlanningBlock:"BirthdayPage_birthdayPlanningBlock__3nseS",wrapper:"BirthdayPage_wrapper__1ymuH",container:"BirthdayPage_container__15hWl",title:"BirthdayPage_title__2uzn0",birthdayDecisionBlock:"BirthdayPage_birthdayDecisionBlock__3TtTt",grid:"BirthdayPage_grid__10JEd",imageBlock:"BirthdayPage_imageBlock__2K_I2",textBlock:"BirthdayPage_textBlock__1ObJv",textContent:"BirthdayPage_textContent__3HzpU"}},799:function(e,t,a){e.exports=a.p+"static/media/birthdayBanner.80ae8fe9.jpg"},800:function(e,t,a){e.exports=a.p+"static/media/birthdayBanner-mob.8b60bd8a.jpg"},801:function(e,t,a){e.exports=a.p+"static/media/text-img-block.14e8a84a.jpg"},876:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(798),l=a.n(r),c=a(7),A=a(690),s=a.n(A),o=a(799),m=a.n(o),d=a(800),u=a.n(d),p=a(801),g=a.n(p),v=a(696),E=a.n(v),_=a(691),b=a(635),S=a(683),f=a(644),h=a(633),w=a(653),k=a(692),x=a(693),N=a(649),y=a(174);t.default=function(){return i.a.useEffect((function(){return document.title="\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432 \u041a\u0440\u044b\u043c\u0443 \u2013 Riviera Sunrise Resort & SPA \u2013 \u0410\u043b\u0443\u0448\u0442\u0430, \u041a\u0440\u044b\u043c"}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{fontSize:["75px","75px","52px"],mobileFontSize:["11.7vw","13vw","8.2vw"],titles:["\u041d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u044b\u0439","\u0434\u0435\u043d\u044c","\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","\u0432 \u041a\u0440\u044b\u043c\u0443"],icons:c.c.birthdayPage.birthdayBannerIcons,bannerImg:m.a,bannerImgMobile:u.a,blackFont:!0}),i.a.createElement("section",{className:"section first"},i.a.createElement(N.a,{title:"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u0434 \u0412\u0430\u0448\u0438 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f",slides:c.c.birthdayPage.centeredSlides,type:2})),i.a.createElement("section",{className:"section"},i.a.createElement(S.a,{initialSlideIndex:1,manySlides:!0,slides:c.c.birthdayPage.birthdayMainSlides,title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043f\u0440\u0430\u0437\u0434\u043d\u043e\u0432\u0430\u043d\u0438\u044f",titleMobile:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e"})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:l.a.birthdayPlanningBlock},i.a.createElement("div",{className:l.a.wrapper},i.a.createElement("div",{className:l.a.container},i.a.createElement("h4",{className:l.a.title},i.a.createElement("span",null,"\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),i.a.createElement("span",null,"\u0441\u0432\u043e\u0439 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u043b\u0443\u0447\u0448\u0435"),i.a.createElement("span",null,"\u0437\u0430\u0440\u0430\u043d\u0435\u0435")),i.a.createElement("p",null,"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u0432\u0430\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u0442"),i.a.createElement(y.a,{submitBtnText:"\u0423\u0437\u043d\u0430\u0442\u044c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u0442\u044b",formName:'\u0424\u043e\u0440\u043c\u0430 "\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435" (\u0443\u0437\u043d\u0430\u0442\u044c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u0442\u044b)',withPhone:!0,swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!"}))))),i.a.createElement("section",{className:"section"},i.a.createElement(w.a,{title:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432 \u043d\u0430\u0448\u0435\u043c \u043e\u0442\u0435\u043b\u0435",icons:c.c.birthdayPage.birthdayIcons})),i.a.createElement("section",{className:"section"},i.a.createElement(x.a,{subtitle:"\u0414\u043b\u044f \u0412\u0430\u0441",title:"\u041b\u0443\u0447\u0448\u0438\u0439 \u0434\u0435\u043d\u044c",img:g.a,text:"\u0414\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u043e\u0442\u0435\u043b\u044f Rivera Sunrise Resort & SPA \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043a\u0440\u0443\u0433\u0443 \u0441\u0432\u043e\u0438\u0445 \u0431\u043b\u0438\u0437\u043a\u0438\u0445 \u0432 \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u043e\u0439 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0435 \u0440\u043e\u0441\u043a\u043e\u0448\u043d\u043e\u0433\u043e \u043a\u0443\u0440\u043e\u0440\u0442\u0430!",forWedding:!1,listArray:["\u0432\u0435\u0441\u0435\u043b\u0430\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430 \u0441 \u0434\u0438\u0441\u043a\u043e\u0442\u0435\u043a\u043e\u0439 \u0438 \u0444\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043a\u043e\u043c,","\u0432\u0440\u0435\u043c\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u0432 \u0421\u041f\u0410, \u043a\u0443\u043f\u0430\u043d\u0438\u0435 \u0432 \u0431\u0430\u0441\u0441\u0435\u0439\u043d\u0430\u0445 \u0438 \u0432 \u043c\u043e\u0440\u0435,","\u0443\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0439 \u0440\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u043f\u0440\u0430\u0437\u0434\u043d\u043e\u0432\u0430\u043d\u0438\u044f,","\u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u0434\u043e\u043c\u0430 \u0438 \u0443\u0433\u043e\u0449\u0435\u043d\u0438\u044f \u043e\u0442 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0448\u0435\u0444\u0430"]})),i.a.createElement("section",{className:"section"},i.a.createElement(k.a,{firstImg:E.a})),i.a.createElement("section",{className:"section"},i.a.createElement(f.a,{subtitle:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",title:"\u0443\u0441\u043b\u0443\u0433\u0438",btnText:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0430\u0439\u0441 \u043f\u043e \u0443\u0441\u043b\u0443\u0433\u0430\u043c",text:"\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u0432 \u043e\u0442\u0435\u043b\u0435 Riviera Sunrise Resort & SPA, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u0443\u0433\u0430\u043c\u0438. \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0438 \u0438\u0445 \u0441 \u0436\u0435\u043b\u0430\u043d\u0438\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0448\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u043c \u0438 \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u044c \u0433\u043e\u0441\u0442\u044f\u043c \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u0438 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u044f!",slides:c.c.specialsSlides})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:l.a.birthdayDecisionBlock},i.a.createElement("div",{className:l.a.wrapper},i.a.createElement("div",{className:l.a.grid},i.a.createElement("div",{className:l.a.imageBlock},i.a.createElement("img",{src:s.a,alt:"Riviera Sunrise"})),i.a.createElement("div",{className:l.a.textBlock},i.a.createElement("div",{className:l.a.textContent},i.a.createElement(b.a,{subtitle:"\u0412\u0430\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442",title:"\u041b\u0435\u0433\u043a\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435"}),i.a.createElement("p",null,"\u041b\u0443\u0447\u0448\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0435\u0433\u043e, \u0432\u043b\u0430\u0434\u0435\u044f \u043f\u043e\u043b\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043d\u0430 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u0434\u043d\u044f \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432 \u043d\u0430\u0448\u0435\u043c \u043e\u0442\u0435\u043b\u0435."),i.a.createElement(y.a,{submitBtnText:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",formName:'\u0424\u043e\u0440\u043c\u0430 "\u0412\u0430\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u043b\u0435\u0433\u043a\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435" (\u0441\u043a\u0430\u0447\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435)',withEmail:!0,swalText:"\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0412\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u0432 \u0441\u0430\u043c\u043e\u0435 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f!"}))))))),i.a.createElement("section",{className:"section"},i.a.createElement(h.a,null)))}}}]);
//# sourceMappingURL=13.efc5c938.chunk.js.map