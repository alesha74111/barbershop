/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/buttonUp.js":
/*!***********************************!*\
  !*** ./src/js/import/buttonUp.js ***!
  \***********************************/
/***/ (() => {

(function () {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  function toggleScrollTopBtn() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }
  }
  window.addEventListener("scroll", toggleScrollTopBtn);
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  toggleScrollTopBtn();
})();

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/header.js":
/*!*********************************!*\
  !*** ./src/js/import/header.js ***!
  \*********************************/
/***/ (() => {

(function () {
  function changeHeaderBackground() {
    var header = document.querySelector("[data-header]");
    var headerOffsetTrigger = header.offsetHeight - 50;
    var pageOffset = window.scrollY;
    var logo = document.querySelector("#logo");
    if (pageOffset > headerOffsetTrigger) {
      header.classList.add("header__wrapper--scrolled");
      logo.classList.remove("logo--black");
    } else {
      header.classList.remove("header__wrapper--scrolled");
      logo.classList.add("logo--black");
    }
  }
  window.addEventListener("scroll", changeHeaderBackground);
  changeHeaderBackground();
})();

/***/ }),

/***/ "./src/js/import/mobile.js":
/*!*********************************!*\
  !*** ./src/js/import/mobile.js ***!
  \*********************************/
/***/ (() => {

(function () {
  var mobileRefs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    mobileMenu: document.querySelector("[data-mobile-menu]")
  };
  mobileRefs.openMobileBtn.addEventListener("click", toggleModal);
  mobileRefs.closeMobileBtn.addEventListener("click", toggleModal);
  mobileRefs.mobileMenu.addEventListener("click", removeModal);
  var mobileLinks = document.querySelectorAll(".mobile-menu__item .nav__link");
  var mobileButton = document.querySelector(".mobile-menu__item .mobile-menu__button");
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileRefs.mobileMenu.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    });
  });
  mobileButton.addEventListener("click", function () {
    mobileRefs.mobileMenu.classList.remove("is-open");
    document.body.classList.add("no-scroll");
  });
  function toggleModal() {
    document.body.classList.toggle("no-scroll");
    mobileRefs.mobileMenu.classList.toggle("is-open");
  }
  function removeModal(e) {
    if (e.target === mobileRefs.mobileMenu) {
      toggleModal();
    }
  }
})();

/***/ }),

/***/ "./src/js/import/modal.js":
/*!********************************!*\
  !*** ./src/js/import/modal.js ***!
  \********************************/
/***/ (() => {

(function () {
  var modalRefs = {
    openModalBtns: document.querySelectorAll("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]")
  };
  modalRefs.openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", toggleModal);
  });
  modalRefs.closeModalBtn.addEventListener("click", toggleModal);
  modalRefs.backdrop.addEventListener("click", onModalBackdropClick);
  function toggleModal() {
    document.body.classList.toggle("no-scroll");
    modalRefs.backdrop.classList.toggle("is-hidden");
  }
  function onModalBackdropClick(event) {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }
})();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/import/slider.js":
/*!*********************************!*\
  !*** ./src/js/import/slider.js ***!
  \*********************************/
/***/ (() => {

$(document).ready(function () {
  $('.sidebar-hero__slider').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: true,
    prevArrow: $('.sidebar-hero__control-link[aria-label="Previous slide"]'),
    nextArrow: $('.sidebar-hero__control-link[aria-label="Next slide"]')
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_buttonUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/buttonUp */ "./src/js/import/buttonUp.js");
/* harmony import */ var _import_buttonUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_buttonUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/header */ "./src/js/import/header.js");
/* harmony import */ var _import_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/slider */ "./src/js/import/slider.js");
/* harmony import */ var _import_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_import_slider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/modal */ "./src/js/import/modal.js");
/* harmony import */ var _import_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _import_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/mobile */ "./src/js/import/mobile.js");
/* harmony import */ var _import_mobile__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_import_mobile__WEBPACK_IMPORTED_MODULE_6__);







})();

/******/ })()
;
//# sourceMappingURL=main.js.map