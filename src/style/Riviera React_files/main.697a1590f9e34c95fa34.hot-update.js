webpackHotUpdate("main",{

/***/ "./src/components/pages/MedicalSpaPage/MedicalSpaPage.jsx":
/*!****************************************************************!*\
  !*** ./src/components/pages/MedicalSpaPage/MedicalSpaPage.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicalSpaPage.module.scss */ "./src/components/pages/MedicalSpaPage/MedicalSpaPage.module.scss");
/* harmony import */ var _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_sliders_RoomsSlider_RoomsSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sliders/RoomsSlider/RoomsSlider */ "./src/components/shared/sliders/RoomsSlider/RoomsSlider.jsx");
/* harmony import */ var _shared_sliders_CenteredSlider_CenteredSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sliders/CenteredSlider/CenteredSlider */ "./src/components/shared/sliders/CenteredSlider/CenteredSlider.jsx");
/* harmony import */ var _shared_sliders_GridSlider_GridSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sliders/GridSlider/GridSlider */ "./src/components/shared/sliders/GridSlider/GridSlider.jsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data */ "./src/data.js");
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/Button/Button */ "./src/components/shared/Button/Button.jsx");
/* harmony import */ var _additional_ContactForm_PopupContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../additional/ContactForm/PopupContactForm */ "./src/components/additional/ContactForm/PopupContactForm.jsx");
/* harmony import */ var _img_events_wedding_weddingPageBanner_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../img/events/wedding/weddingPageBanner.jpg */ "./src/img/events/wedding/weddingPageBanner.jpg");
/* harmony import */ var _img_events_wedding_weddingPageBanner_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_events_wedding_weddingPageBanner_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_AnimatedMouseIcon_AnimatedMouseIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/AnimatedMouseIcon/AnimatedMouseIcon */ "./src/components/shared/AnimatedMouseIcon/AnimatedMouseIcon.jsx");
/* harmony import */ var _img_medical_spa_bannerIcons_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../img/medical-spa/bannerIcons/1.png */ "./src/img/medical-spa/bannerIcons/1.png");
/* harmony import */ var _img_medical_spa_bannerIcons_1_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_medical_spa_bannerIcons_1_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_medical_spa_bannerIcons_2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../img/medical-spa/bannerIcons/2.png */ "./src/img/medical-spa/bannerIcons/2.png");
/* harmony import */ var _img_medical_spa_bannerIcons_2_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_medical_spa_bannerIcons_2_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_medical_spa_bannerIcons_3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../img/medical-spa/bannerIcons/3.png */ "./src/img/medical-spa/bannerIcons/3.png");
/* harmony import */ var _img_medical_spa_bannerIcons_3_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_medical_spa_bannerIcons_3_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_medical_spa_bannerIcons_4_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../img/medical-spa/bannerIcons/4.png */ "./src/img/medical-spa/bannerIcons/4.png");
/* harmony import */ var _img_medical_spa_bannerIcons_4_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_medical_spa_bannerIcons_4_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_medical_spa_bannerIcons_5_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../img/medical-spa/bannerIcons/5.png */ "./src/img/medical-spa/bannerIcons/5.png");
/* harmony import */ var _img_medical_spa_bannerIcons_5_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_medical_spa_bannerIcons_5_png__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/Users/yaroslavvyletkov/Desktop/\u0420\u0410\u0411\u041E\u0422\u0410/riviera-react/src/components/pages/MedicalSpaPage/MedicalSpaPage.jsx";
















const MedicalSpaPage = ({
  bannerImg,
  icons
}) => {
  let [popupOpen, setPopupOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bannerWrapper,
    style: {
      background: window.matchMedia("(max-width: 620px)").matches ? `center no-repeat url("${bannerImg}")` : `center no-repeat url("${bannerImg}")`,
      backgroundSize: "cover"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headings,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Medical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "SPA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043E\u0442\u0434\u044B\u0445\u0430"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_medical_spa_bannerIcons_1_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "\u0412\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[0].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_medical_spa_bannerIcons_2_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "\u0424\u043E\u0442\u043E\u0437\u043E\u043D\u044B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[1].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_medical_spa_bannerIcons_3_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[2].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_medical_spa_bannerIcons_4_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[2].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_medical_spa_bannerIcons_4_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[2].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      width: "fit-content",
      marginTop: "20px"
    },
    onClick: () => setPopupOpen(true),
    text: "Подробнее",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_additional_ContactForm_PopupContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    popupOpen: popupOpen,
    setPopupOpen: setPopupOpen,
    popupTitleText: 'Чтобы получить точную информацию о стоимости, позвольте нам связаться с Вами',
    submitBtnText: "\u0423\u0437\u043D\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
    formName: `Форма с верхнего баннера страницы Медикал СПА (кнопка "Подробнее")`,
    swalText: 'очень скоро наши менеджеры с Вами свяжутся. Также не забывайте проверять указанную почту :)',
    withEmail: true,
    withPhone: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icons,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icons[0].img,
    alt: "\u0412\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[0].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icons[1].img,
    alt: "\u0424\u043E\u0442\u043E\u0437\u043E\u043D\u044B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[1].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icons[2].img,
    alt: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: icons[2].descr
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MedicalSpaPage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.animatedMouseWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_AnimatedMouseIcon_AnimatedMouseIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_sliders_RoomsSlider_RoomsSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: 'Корпус',
    title: 'Модерн',
    textContent: _data__WEBPACK_IMPORTED_MODULE_5__["roomsAndPricesPageData"].modernDescr,
    data: _data__WEBPACK_IMPORTED_MODULE_5__["roomsAndPricesPageData"].modernSlides,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_sliders_RoomsSlider_RoomsSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lastOfTwo: true,
    subtitle: 'Корпус',
    title: 'Классик',
    textContent: _data__WEBPACK_IMPORTED_MODULE_5__["roomsAndPricesPageData"].classicDescr,
    data: _data__WEBPACK_IMPORTED_MODULE_5__["roomsAndPricesPageData"].classicSlides,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_sliders_GridSlider_GridSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slides: _data__WEBPACK_IMPORTED_MODULE_5__["roomsAndPricesPageData"].gridSlides,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section last",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_sliders_CenteredSlider_CenteredSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Сегодня в программе',
    slides: _data__WEBPACK_IMPORTED_MODULE_5__["roomsAndPricesPageData"].centeredSlides,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MedicalSpaPage);

/***/ })

})
//# sourceMappingURL=main.697a1590f9e34c95fa34.hot-update.js.map