(this["webpackJsonpriviera-react"] = this["webpackJsonpriviera-react"] || []).push([[6],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../../../img/specials-slider/specials-bg.jpg */ "./src/img/specials-slider/specials-bg.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../../../img/specials-slider/specials-bg-mobile.jpg */ "./src/img/specials-slider/specials-bg-mobile.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".SpecialsSlider_wrapper__mEqLN {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.SpecialsSlider_wrapper__mEqLN:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background: no-repeat center url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.SpecialsSlider_container__2OogO {\n  box-sizing: border-box;\n  position: relative;\n  padding-top: 225px;\n  max-width: 1200px;\n  height: 640px;\n  width: 100%;\n  margin: 0 auto; }\n\n.SpecialsSlider_leftBlock__3-yY2 {\n  box-sizing: border-box;\n  width: 420px;\n  padding: 0 25px 0 15px; }\n\n.SpecialsSlider_leftBlock__3-yY2 p {\n  font-family: \"Helvetica Neue Light\", sans-serif;\n  font-size: 16px;\n  text-align: justify;\n  margin: 1em 0; }\n\n@media screen and (min-width: 700px) {\n  .SpecialsSlider_leftBlock__3-yY2 h2 {\n    font-size: 34px; } }\n\n.SpecialsSlider_leftBlock__3-yY2 a {\n  font-size: 14px;\n  font-family: \"Helvetica Neue Roman\", sans-serif; }\n\n.SpecialsSlider_leftBlock__3-yY2 a img {\n  width: 18px;\n  position: relative;\n  top: 4px;\n  margin-left: 5px; }\n\n.SpecialsSlider_rightBlock__1A0_V {\n  position: absolute;\n  overflow: hidden;\n  width: 960px;\n  height: 640px;\n  bottom: 0;\n  right: -180px; }\n\n@media screen and (max-width: 1200px) {\n  .SpecialsSlider_leftBlock__3-yY2 {\n    width: 100%;\n    padding: 0 20px;\n    margin-bottom: 20px; }\n  .SpecialsSlider_leftBlock__3-yY2 p {\n    margin-bottom: 18px; }\n  .SpecialsSlider_rightBlock__1A0_V {\n    overflow: visible;\n    position: relative;\n    width: 100%;\n    height: unset;\n    bottom: unset;\n    right: unset; }\n  .SpecialsSlider_wrapper__mEqLN:before {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: left bottom;\n    background-size: contain;\n    opacity: 0.3; }\n  .SpecialsSlider_container__2OogO {\n    height: unset;\n    padding-bottom: 37px;\n    padding-top: 0; } }\n\n@media screen and (max-width: 768px) {\n  .SpecialsSlider_leftBlock__3-yY2 p {\n    font-size: 14px; }\n  .SpecialsSlider_container__2OogO {\n    padding-top: 0; } }\n", ""]);
// Exports
exports.locals = {
	"wrapper": "SpecialsSlider_wrapper__mEqLN",
	"container": "SpecialsSlider_container__2OogO",
	"leftBlock": "SpecialsSlider_leftBlock__3-yY2",
	"rightBlock": "SpecialsSlider_rightBlock__1A0_V"
};
module.exports = exports;


/***/ }),

/***/ "./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecialsSlider.module.scss */ "./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss");
/* harmony import */ var _SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpecialsSliderItem_SpecialsSliderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecialsSliderItem/SpecialsSliderItem */ "./src/components/shared/sliders/SpecialsSlider/SpecialsSliderItem/SpecialsSliderItem.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Headline_Headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Headline/Headline */ "./src/components/shared/Headline/Headline.jsx");
/* harmony import */ var _img_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../img/icons/right-arrow.svg */ "./src/img/icons/right-arrow.svg");
/* harmony import */ var _img_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_icons_right_arrow_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SliderArrows_sliderArrowButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SliderArrows/sliderArrowButtons */ "./src/components/shared/sliders/SliderArrows/sliderArrowButtons.jsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Button/Button */ "./src/components/shared/Button/Button.jsx");
/* harmony import */ var _additional_ContactForm_PopupContactForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../additional/ContactForm/PopupContactForm */ "./src/components/additional/ContactForm/PopupContactForm.jsx");
var _jsxFileName = "/Users/yaroslavvyletkov/Desktop/\u0420\u0410\u0411\u041E\u0422\u0410/riviera-react/src/components/shared/sliders/SpecialsSlider/SpecialsSlider.jsx";










const SliderStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-slider {
    margin-top: 17%;
  }
  .slick-dots li {
    margin: 0
  }
  
.slick-slide img {
  width: 100%;
  margin: 0 40px 0 0;
}

.slick-track {
  margin: 0 auto;
}
@media screen and (max-width: 1200px){
  .slick-slider {
    margin-top: 0;
  }
}
`;

const SpecialsSlider = ({
  title = "Заголовок",
  subtitle = "Какой-то",
  btnLink,
  slides,
  text,
  btnText = 'Смотреть все предложения'
}) => {
  let [popupOpen, setPopupOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  if (!text) text = 'Отель Riviera Sunrise Resort&SPA предлагает вашему вниманию выгодные предложения, которые позволят сделать ваш отдых не только прекрасным и насыщенным, но и оптимальным по цене!';
  const settings = {
    infinite: true,
    centerPadding: "60px",
    variableWidth: true,
    speed: 500,
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderArrows_sliderArrowButtons__WEBPACK_IMPORTED_MODULE_7__["NextArrow"], {
      positionStyles: {
        bottom: "15px",
        left: "670px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 20
      }
    }),
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderArrows_sliderArrowButtons__WEBPACK_IMPORTED_MODULE_7__["PrevArrow"], {
      positionStyles: {
        bottom: "15px",
        left: "610px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 20
      }
    }),
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  };
  const items = slides.map((item, index) => {
    const {
      img,
      title,
      subtitle,
      key,
      link
    } = item;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "SliderElement",
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpecialsSliderItem_SpecialsSliderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      img: img,
      title: title,
      subtitle: subtitle,
      active: index === 1,
      link: link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.leftBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Headline_Headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    subtitle: subtitle,
    title: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: btnText,
    onClick: !btnLink ? () => setPopupOpen(true) : null,
    link: btnLink ? btnLink : null,
    style: !window.matchMedia("(max-width: 768px)").matches ? {
      width: "210px"
    } : {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_additional_ContactForm_PopupContactForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    popupOpen: popupOpen,
    setPopupOpen: setPopupOpen,
    popupTitleText: 'Для этого, пожалуйста, оставьте свои контактные данные️',
    submitBtnText: btnText,
    formName: `Форма из блока "Дополнительные услуги" (получить прайс по услугам)`,
    swalText: 'мы отправим всю необходимую информацию на указанную Вами почту в самое ближайшее время!',
    withEmail: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _SpecialsSlider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SliderStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }), items)))));
};

/* harmony default export */ __webpack_exports__["default"] = (SpecialsSlider);

/***/ }),

/***/ "./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/resolve-url-loader??ref--6-oneOf-6-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./SpecialsSlider.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/resolve-url-loader??ref--6-oneOf-6-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./SpecialsSlider.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/resolve-url-loader??ref--6-oneOf-6-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./SpecialsSlider.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/shared/sliders/SpecialsSlider/SpecialsSlider.module.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/img/icons/right-arrow.svg":
/*!***************************************!*\
  !*** ./src/img/icons/right-arrow.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/right-arrow.279196e3.svg";

/***/ })

}]);
//# sourceMappingURL=6.chunk.js.map