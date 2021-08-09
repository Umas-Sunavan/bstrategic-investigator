(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/umas/Documents/伍瑪斯/projects/bstrategic-investigator/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GSEy":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class IntroductionComponent {
    constructor(activatedRoute, location) {
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.categories = [
            {
                name: '印刷電路板',
                description: '台灣電子產業發展至今已將近四十年歷史, 從1970年間政府全力主導半導體技術引進, 以及早期推動PC組裝和周邊零組件標準化,衍生出完電子產業生態鏈, 在產業高度聚效應推動,已在全球電子產業站穩關鍵 性地位,並累積堅強OEM/ODM研與製實力。 台電子產業在全球CT的供應鏈體系中,表現極為亮眼,',
                heroImagePath: '/assets/category-icons/IC半導體_主視覺.png',
                investigators: [
                    {
                        quote: 'Just ask questions',
                        name: '楊立昌',
                        award: '第31屆青年創業楷模得獎人',
                        title: '聚積科技(股)公司董事長',
                        imagePath: '/assets/logos/1.IC半導體_PCB/1.png',
                        link: 'www.corn/dog/porn.tw'
                    }, {
                        quote: 'Just ask questions',
                        name: '余維斌',
                        award: '第31屆青年創業楷模得獎人',
                        title: '宜特科技(股)公司/董事長',
                        imagePath: '/assets/logos/1.IC半導體_PCB/2.png',
                        link: 'www.corn/dog/porn.tw'
                    }, {
                        quote: 'Just ask questions',
                        name: '曾榮孟',
                        award: '第21屆青年創業楷模得獎人',
                        title: '希華晶體科技(股)公司/總經理',
                        imagePath: '/assets/logos/1.IC半導體_PCB/3.png',
                        link: 'www.corn/dog/porn.tw'
                    }, {
                        quote: 'Just ask questions',
                        name: '吳元超',
                        award: '第36屆青年創業楷模得獎人',
                        title: '興普科技(股)公司/董事長',
                        imagePath: '/assets/logos/1.IC半導體_PCB/4.png',
                        link: 'www.corn/dog/porn.tw'
                    }, {
                        quote: 'Just ask questions',
                        name: '簡榮坤',
                        award: '第36屆青年創業楷模得獎人',
                        title: '邑昇實業(股)公司/董事長',
                        imagePath: '/assets/logos/1.IC半導體_PCB/5.png',
                        link: 'www.corn/dog/porn.tw'
                    },
                ]
            }
        ];
        this.categoryMap = new Map();
        this.convertPath = (relavieLink) => this.location.prepareExternalUrl(relavieLink);
    }
    ngOnInit() {
        const pathParam = this.activatedRoute.snapshot.paramMap.get('categoryName') || '';
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 385, vars: 1, consts: [[1, "app__nav", "container-fluid"], [1, "container"], [1, "justify-content-between", "row"], [1, "col-md-3", "col-6"], ["href", "/", 1, "navigation__logo-area"], ["width", "34", "height", "42", "viewBox", "0 0 34 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.4549 14.4248H11.0263H6.58203C6.9026 15.3191 7.39317 16.1365 8.0246 16.8289C9.36032 15.3528 11.2983 14.4248 13.4549 14.4248Z", "fill", "#E5CDB0"], ["d", "M20.5957 19.2332H23.0146H27.4637C27.1431 18.3389 26.6526 17.5215 26.0211 16.8291C24.6903 18.3052 22.7523 19.2332 20.5957 19.2332Z", "fill", "#E5CDB0"], ["d", "M20.5957 14.4248H13.4557C11.2991 14.4248 9.3611 15.3528 8.02539 16.8289C9.3611 18.3051 11.2991 19.233 13.4557 19.233H20.5957C22.7522 19.233 24.6902 18.3051 26.026 16.8289C24.6902 15.3528 22.7522 14.4248 20.5957 14.4248Z", "fill", "#E5CDB0"], ["d", "M19.5699 34.98C20.7745 36.3119 19.3077 37.6245 17.0248 37.6245C14.7419 37.6245 13.2702 36.3119 14.4797 34.98C13.7219 35.5089 12.8477 36.9033 12.8477 38.2496C12.8477 39.5959 13.5422 40.5912 13.5422 40.5912C13.5422 40.5912 14.2708 41.8413 16.7965 41.9904C16.8694 42 16.9422 42 17.0248 42C17.1074 42 17.1802 42 17.2531 41.9904C19.7788 41.8413 20.5074 40.5912 20.5074 40.5912C20.5074 40.5912 21.2019 39.5959 21.2019 38.2496C21.2019 36.9033 20.3277 35.5089 19.5699 34.98Z", "fill", "#00779F"], ["d", "M24.2955 26.4453V7.21236C24.2955 3.23114 21.0315 0 17.0098 0C18.3503 0 19.4383 1.07705 19.4383 2.40412V31.2536C19.4383 32.5807 18.3503 33.6577 17.0098 33.6577C21.0363 33.6577 24.2955 30.4266 24.2955 26.4453Z", "fill", "#00779F"], ["d", "M14.5818 31.2536V2.40412C14.5818 1.07705 15.6697 0 17.0103 0C12.9886 0 9.72461 3.23114 9.72461 7.21236V26.4453C9.72461 30.4266 12.9886 33.6577 17.0103 33.6577C15.6697 33.6577 14.5818 32.5807 14.5818 31.2536Z", "fill", "#00779F"], ["d", "M4.37143 16.4923C4.37143 6.23631 7.82 2.26951 11.696 0.788574C4.90571 2.99075 0 9.3184 0 16.7808C0 25.3587 6.47943 32.4364 14.8629 33.4798C9.928 32.8355 4.37143 29.5082 4.37143 16.4923Z", "fill", "#00779F"], ["d", "M33.9996 16.7808C33.9996 9.3184 29.0939 2.99075 22.3036 0.788574C26.1796 2.26951 29.6282 6.23631 29.6282 16.4923C29.6282 29.5082 24.0716 32.8355 19.1367 33.4798C27.5202 32.4364 33.9996 25.3587 33.9996 16.7808Z", "fill", "#00779F"], ["d", "M23.0235 9.61635H27.4677C26.4672 6.81314 23.7715 4.80811 20.5949 4.80811H13.4549C10.2832 4.80811 7.5826 6.81314 6.58203 9.61635H11.0263H23.0235Z", "fill", "#E5CDB0"], ["d", "M11.0166 24.041H6.58203C7.5826 26.8442 10.2783 28.8493 13.4549 28.8493H20.5949C23.7666 28.8493 26.4672 26.8442 27.4677 24.041H23.0186H11.0166Z", "fill", "#E5CDB0"], [1, "d-flex", "align-items-center", "col-md-8"], [1, "navigation__list"], [1, "nav-item"], ["href", "/activity", 1, "nav-item__link"], ["width", "18", "height", "16", "viewBox", "0 0 18 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.9154 13.25V12.0833C11.9154 11.4645 11.6695 10.871 11.2319 10.4334C10.7944 9.99583 10.2009 9.75 9.58203 9.75H4.91536C4.29653 9.75 3.70303 9.99583 3.26545 10.4334C2.82786 10.871 2.58203 11.4645 2.58203 12.0833V13.25", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.2513 7.41667C8.53997 7.41667 9.58464 6.372 9.58464 5.08333C9.58464 3.79467 8.53997 2.75 7.2513 2.75C5.96264 2.75 4.91797 3.79467 4.91797 5.08333C4.91797 6.372 5.96264 7.41667 7.2513 7.41667Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15.418 13.2498V12.0832C15.4176 11.5662 15.2455 11.064 14.9288 10.6554C14.612 10.2468 14.1685 9.95493 13.668 9.82568", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11.332 2.82568C11.8339 2.95419 12.2788 3.24609 12.5965 3.65536C12.9142 4.06464 13.0866 4.568 13.0866 5.0861C13.0866 5.6042 12.9142 6.10756 12.5965 6.51684C12.2788 6.92611 11.8339 7.21801 11.332 7.34652", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-item__text"], ["href", "/journal", 1, "nav-item__link"], ["d", "M9 3.9165V12.0832", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.9457 5.0835H8.02908C7.66809 5.0835 7.32189 5.23714 7.06663 5.51063C6.81137 5.78412 6.66797 6.15506 6.66797 6.54183C6.66797 6.9286 6.81137 7.29954 7.06663 7.57303C7.32189 7.84652 7.66809 8.00016 8.02908 8.00016H9.97352C10.3345 8.00016 10.6807 8.15381 10.936 8.4273C11.1912 8.70079 11.3346 9.07172 11.3346 9.4585C11.3346 9.84527 11.1912 10.2162 10.936 10.4897C10.6807 10.7632 10.3345 10.9168 9.97352 10.9168H6.66797", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.0013 13.8332C12.223 13.8332 14.8346 11.2215 14.8346 7.99984C14.8346 4.77818 12.223 2.1665 9.0013 2.1665C5.77964 2.1665 3.16797 4.77818 3.16797 7.99984C3.16797 11.2215 5.77964 13.8332 9.0013 13.8332Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.16602 3.75H6.66602C7.28485 3.75 7.87835 3.99583 8.31593 4.43342C8.75352 4.871 8.99935 5.46449 8.99935 6.08333V14.25C8.99935 13.7859 8.81497 13.3408 8.48679 13.0126C8.1586 12.6844 7.71348 12.5 7.24935 12.5H3.16602V3.75Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.8333 3.75H11.3333C10.7145 3.75 10.121 3.99583 9.68342 4.43342C9.24583 4.871 9 5.46449 9 6.08333V14.25C9 13.7859 9.18437 13.3408 9.51256 13.0126C9.84075 12.6844 10.2859 12.5 10.75 12.5H14.8333V3.75Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-item", "nav-item__expansion"], ["d", "M6.33398 8H6.34398", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.06414 5.33318C8.71219 5.33317 8.87507 5.33316 9.33399 5.33316C10.2625 5.33317 10.334 5.33317 10.334 5.33317M4.33398 4.6665C4.66732 4.6665 5.39748 4.8566 5.65145 5.617C4.85926 5.97159 4.25686 6.63098 3.93693 7.43785C3.60876 8.26552 3.23852 9.12087 2.34817 9.12087V9.12087C2.25144 9.12087 2.68113 11.054 2.68113 11.054L4.34593 11.2175C4.76357 11.8163 5.49668 12.4268 6.25462 12.7366C6.25462 12.7366 6.55621 13.739 6.55621 13.9896C6.85779 13.9896 7.73483 14.0126 7.76256 13.9896V13.9896C8.23634 13.5959 8.49754 12.9872 9.11353 12.9872H10.4768L10.7784 13.9896C11.08 13.9896 12.2864 13.9896 12.2864 13.9896L12.588 12.628C14.0129 12.0131 15.0007 10.6739 15.0007 9.12087C15.0007 7.37264 14.0637 6.38089 13.0007 5.85464", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.9999 7.99554C14.9999 7.99554 15.7321 7.85811 16.327 6.98792", "stroke", "#00779F", "stroke-miterlimit", "10", "stroke-linecap", "round"], ["d", "M10.666 5.33333C10.8753 5.05475 10.9994 4.70845 10.9994 4.33317C10.9994 3.4127 10.2532 2.6665 9.33268 2.6665C8.41221 2.6665 7.66602 3.4127 7.66602 4.33317C7.66602 4.70845 7.79005 5.05475 7.99935 5.33333", "stroke", "#00779F", "stroke-linecap", "round"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.75 6.625L7.5 10.375L11.25 6.625", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-dropdown"], ["d", "M10.5574 5.62314C10.4599 5.72259 10.4053 5.8563 10.4053 5.99556C10.4053 6.13482 10.4599 6.26852 10.5574 6.36798L11.4087 7.21922C11.5081 7.3167 11.6418 7.3713 11.7811 7.3713C11.9203 7.3713 12.054 7.3167 12.1535 7.21922L14.1592 5.21348C14.4268 5.80466 14.5078 6.46333 14.3914 7.10172C14.2751 7.7401 13.967 8.32787 13.5082 8.78671C13.0493 9.24555 12.4616 9.55365 11.8232 9.66997C11.1848 9.78628 10.5261 9.70528 9.93496 9.43776L6.25866 13.1141C6.04701 13.3257 5.75995 13.4446 5.46063 13.4446C5.1613 13.4446 4.87424 13.3257 4.66259 13.1141C4.45094 12.9024 4.33203 12.6153 4.33203 12.316C4.33203 12.0167 4.45094 11.7296 4.66259 11.518L8.33888 7.84168C8.07136 7.2505 7.99036 6.59183 8.10667 5.95345C8.22299 5.31507 8.53109 4.72729 8.98993 4.26846C9.44877 3.80962 10.0365 3.50152 10.6749 3.3852C11.3133 3.26889 11.972 3.34989 12.5632 3.61741L10.5627 5.61782L10.5574 5.62314Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "/login", 1, "nav-item__link"], ["href", "/signup", 1, "nav-item__link"], ["href", "/password-reset", 1, "nav-item__link"], [1, "app__main"], [1, "hero", "bg_gray"], [1, "mx-auto", "d-block", 3, "src"], [1, "d-flex", "p-5"], [1, "d-flex", "flex-column", "col"], [1, "d-flex", "mb-4"], [1, "question-card", "d-flex", "p-3", "flex-column"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6.81754 6.74994C6.99386 6.24869 7.3419 5.82602 7.8 5.55679C8.2581 5.28756 8.79671 5.18914 9.32042 5.27897C9.84413 5.3688 10.3191 5.64108 10.6613 6.04758C11.0035 6.45409 11.1908 6.96858 11.19 7.49994C11.19 8.99994 8.94003 9.74994 8.94003 9.74994", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 12.75H9.0075", "stroke", "black", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "m-0", "pt-1"], [1, "d-flex", "flex-column", "col", "align-items-end"], [1, "suitable-investigator", "bg_gray"], [1, "container", "d-flex", "align-items-start", "w-75", "px-5"], [1, "icon-card", "p-5", "mx-5"], ["width", "100", "height", "100", "viewBox", "0 0 100 100", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M50.0001 91.6666C73.0119 91.6666 91.6668 73.0118 91.6668 49.9999C91.6668 26.9881 73.0119 8.33325 50.0001 8.33325C26.9882 8.33325 8.3334 26.9881 8.3334 49.9999C8.3334 73.0118 26.9882 91.6666 50.0001 91.6666Z", "stroke", "#567999", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M50 25V50L66.6667 58.3333", "stroke", "#567999", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "d-flex", "flex-column", "px-5", "ms-5"], [1, "title", "pb-4"], [1, "d-flex", "flex-column", "px-5", "mx-5", "ms-0"], [1, "title", "pb-4", "text-end"], ["d", "M70.8334 87.5V79.1667C70.8334 74.7464 69.0774 70.5072 65.9518 67.3816C62.8262 64.256 58.587 62.5 54.1667 62.5H20.8334C16.4131 62.5 12.1738 64.256 9.04824 67.3816C5.92263 70.5072 4.16669 74.7464 4.16669 79.1667V87.5", "stroke", "#567999", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M37.5 45.8333C46.7047 45.8333 54.1667 38.3714 54.1667 29.1667C54.1667 19.9619 46.7047 12.5 37.5 12.5C28.2952 12.5 20.8333 19.9619 20.8333 29.1667C20.8333 38.3714 28.2952 45.8333 37.5 45.8333Z", "stroke", "#567999", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M95.8333 87.5001V79.1668C95.8305 75.474 94.6014 71.8866 92.3389 68.9681C90.0765 66.0495 86.9088 63.9649 83.3333 63.0417", "stroke", "#567999", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M66.6667 13.0417C70.2518 13.9597 73.4294 16.0447 75.6986 18.968C77.9677 21.8914 79.1994 25.4869 79.1994 29.1876C79.1994 32.8883 77.9677 36.4837 75.6986 39.4071C73.4294 42.3305 70.2518 44.4155 66.6667 45.3334", "stroke", "#567999", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "investigator-compare", "bg_gray"], [1, "container", "align-items-center", "d-flex", "flex-column"], [1, "d-flex", "w-75", "p-4", "mt-4", "text-center", "justify-content-end", "align-items-baseline"], [1, "title", "col-4", "strategic-text"], [1, "col-1"], [1, "title", "col-4", "financial-text"], [1, "compare-card", "d-flex", "w-75", "p-4", "mt-4"], [1, "col-2", "text-end"], [1, "col-4", "strategic-text"], [1, "col-1", "d-flex", "justify-content-center"], [1, "vertical-line"], [1, "col-4", "financial-text"], [1, "features"], [1, "row", "m-5", "align-items-center"], ["src", "/assets/introduction-features/\u2014Pngtree\u2014hand drawn business men and_4999457 1.png", 1, "illustration", "col", "m-5"], [1, "col", "d-flex", "flex-column", "px-3"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-4"], ["src", "/assets/introduction-features/chat-bubble.png", 1, "feature-number", "align-self-center"], [1, "align-self-center", "text-white"], [1, "title"], ["src", "/assets/introduction-features/\u2014Pngtree\u2014cartoon teamwork puzzle decryption illustration_4978783 1.png", 1, "illustration", "col", "m-5"], ["src", "/assets/introduction-features/\u7B56\u75652_\u5DE5\u4F5C\u5340\u57DF 1 1.png", 1, "illustration", "col", "m-5"], ["src", "/assets/introduction-features/\u7B56\u7565_\u5DE5\u4F5C\u5340\u57DF 1 1.png", 1, "illustration", "col", "m-5"], [1, "categories", "bg_gray"], [1, "m-5", "d-flex", "flex-column"], [1, "px-5"], [1, "title", "mb-3"], [1, "w-75"], [1, "row", "category-list", "m-4"], [1, "col-4", "p-4"], ["href", "/", "routerLink", "category/ic", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/IC\u534A\u5C0E\u9AD4.png", 1, "w-100", "mb-4"], [1, "subtitle"], ["href", "/", "routerLink", "category/e-retail", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u96FB\u5B50\u96F6\u552E.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/network", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u901A\u8A0A\u7DB2\u8DEF.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/automobile", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u6C7D\u8ECA.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/machine", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u96FB\u6A5F\u6A5F\u68B0.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/chainstore", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u6D41\u901A\u9023\u9396.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/biotechnology", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u751F\u6280.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/new-material", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u65B0\u9032\u6750\u6599.png", 1, "w-100", "mb-4"], ["href", "/", "routerLink", "category/new-service", 1, "category-card", "p-4", "d-block"], ["src", "/assets/category-icons/simplified/\u5275\u65B0\u670D\u52D9.png", 1, "w-100", "mb-4"], [1, "app__footer", "container-fluid"], [1, "footer"], [1, "row", "mx-5", "py-5"], [1, "col-3", "p-4"], [1, "mb-1"], ["src", "/assets/footer/\u4E2D\u4F01\u8655LOGO_2 1.png", 1, "w-100", "mb-4"], ["src", "/assets/footer/\u53F0\u7D93\u9662LOGO_2 2.png", 1, "w-100", "mb-4"], [1, "contact-list", "col-3", "p-4"], ["href", "/"], [1, "relative-link-list", "col-3", "p-4"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5275\u696D\u5E6B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u7DDA\u4E0B\u6D3B\u52D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u7372\u53D6\u8CC7\u91D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u5275\u696D\u624B\u672D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u5275\u696D\u8CC7\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u5275\u696D\u5DE5\u5177");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u8A3B\u518A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u5FD8\u5BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u4F55\u8B02\u7B56\u7565\u6027\u6295\u8CC7\u4EBA?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u5B83\u5C0D\u6211\u6709\u4EC0\u9EBC\u5E6B\u52A9?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u9019\u8DDF\u8CA1\u52D9\u6027\u6295\u8CC7\u4EBA\u6709\u4EC0\u9EBC\u5DEE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u7B56\u7565\u6027\u6295\u8CC7\u59D4\u54E1\u6703\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u6709\u4EC0\u9EBC\u7533\u8ACB\u8CC7\u683C\u5462\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u6211\u9069\u5408\u627E\u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u55CE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "svg", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h2", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u6211\u9069\u5408\u627E\u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u55CE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u300C\u6295\u8CC7\u300D\u672C\u8EAB\u5C31\u662F\u4E00\u500B\u6642\u6A5F\uFF08timing\uFF09\u554F\u984C\uFF0C\u6700\u597D\u662F\u5728\u5C0D\u7684\u6642\u9593\u627E\u5230\u5C0D\u7684\u4EBA\u3002\u8CC7\u91D1\u5982\u540C\u5404\u9805\u5275\u696D\u6240\u9700\u8981\u7684\u8CC7\u6E90\u4E00\u6A23\uFF0C\u4E26\u4E0D\u6703\u6709\u6240\u8B02\u6700\u597D\u7684\u8CC7\u91D1\uFF0C\u800C\u662F\u5728\u5BA2\u89C0\u689D\u4EF6\u4E0B\u76E1\u91CF\u628A\u8CC7\u6E90\u6700\u9069\u5316\uFF0C\u53D6\u5F97\u4E00\u500B\u5E73\u8861\u9EDE\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u4F55\u8B02\u7B56\u7565\u6027\u6295\u8CC7\u4EBA?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u662F\u4EE5\u6295\u8CC7\u6A19\u7684\u7684\u696D\u52D9\u3001\u7522\u54C1\u6216\u7814\u767C\u6210\u679C\u7B49\u9805\u76EE\u70BA\u5176\u6295\u8CC7\u91CD\u9EDE\uFF0C\u8003\u91CF\u4E0A\u8FF0\u9805\u76EE\u4E4B\u767C\u5C55\u662F\u5426\u80FD\u52A0\u901F\u672C\u8EAB\u71DF\u904B\u767C\u5C55\u6216\u589E\u52A0\u7372\u5229\u80FD\u529B\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u6295\u8CC7\u6A19\u7684\u9078\u53D6\u901A\u5E38\u6703\u5148\u4EE5\u8A72\u7522\u696D\u7684\u4E0A\u4E0B\u6E38\u6216\u540C\u696D\u9593\u70BA\u4E3B\uFF0C\u4F8B\u5982\u5782\u76F4(Vertical Merger)\u6216\u6C34\u5E73(Horizontal or Vertical Merger)\u9032\u884C\u6574\u5408\uFF0C\u5E0C\u671B\u900F\u904E\u5171\u540C\u7814\u767C\u3001\u96C6\u4E2D\u63A1\u8CFC\u539F\u6599\u3001\u6574\u5408\u884C\u92B7\u7BA1\u9053\u7B49\u65B9\u5F0F\uFF0C\u5F62\u6210\u751F\u7522\u4E0A\u7684\u898F\u6A21\u7D93\u6FDF\u3001\u964D\u4F4E\u6210\u672C\uFF0C\u9032\u800C\u63D0\u9AD8\u7AF6\u722D\u80FD\u529B\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "svg", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "section", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h1", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u7B56\u7565\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u6295\u8CC7\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " v.s. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h1", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u8CA1\u52D9\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u6295\u8CC7\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u6295\u8CC7\u4EBA\u7684\u8003\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u672A\u4F86\u7372\u5229\u7684\u80FD\u529B\u3001\u7A69\u5B9A\u7684\u91D1\u6D41\u3001\u5F8C\u7E8C\u9000\u5834\u7684\u6A5F\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u696D\u52D9\u3001\u7522\u54C1\u3001\u7814\u767C\u6210\u679C\u7B49\u662F\u5426\u53EF\u52A0\u901F\u71DF\u904B\u6216\u7372\u5229");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u5438\u5F15\u6295\u8CC7\u4EBA\u7684\u91CD\u9EDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u7522\u696D\u524D\u666F\u5206\u6790\u3001\u516C\u53F8\u8CA1\u52D9\u72C0\u6CC1\u5206\u6790\u53CA\u672A\u4F86\u8CA1\u52D9\u9810\u6E2C\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u696D\u52D9\u3001\u7522\u54C1\u6216\u7814\u767C\u6210\u679C\u7B49\u9805\u76EE\u512A\u52E2\uFF0C\u4E26\u7D9C\u5408\u6295\u8CC7\u4EBA\u7684\u516C\u53F8\u7522\u751F\u984D\u5916\u6548\u76CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\u4ECB\u5165\u4F01\u696D\u7684\u7A0B\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\u5728\u610F\u76E3\u7406\u89D2\u8272\uFF0C\u5176\u4ECB\u5165\u6B62\u65BC\u8463\u4E8B\u6703\u5C64\u9762\u3002\u5982CXO\u5C64\u7D1A\u7684\u6C7A\u7B56\u3002\u9802\u591A\u5EFA\u8B70\u8CA1\u52D9\u9577\u7684\u4EBA\u9078\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u5728\u610F\u6280\u8853\u8DDF\u516C\u53F8\u7684\u767C\u5C55\u9032\u7A0B\u3002\u9664\u8463\u4E8B\u5E2D\u6B21\u5916\uFF0C\u4EA6\u63D0\u4F9B\u5404\u65B9\u9762\u5EFA\u8B70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\uFF08\u5982\u71DF\u904B\u7BA1\u7406\u3001\u91CD\u5927\u4F9B\u61C9\u5546\u3001\u6280\u8853\u5718\u968A\u3001\u696D\u52D9\u5E03\u5C40\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\u3002\u85C9\u4EE5\u6E1B\u5C11\u7E5E\u8DEF\u751A\u81F3\u964D\u4F4E\u6210\u672C\uFF0C\u4F46\u4ECB\u5165\u5E72\u6D89\u7684\u611F\u53D7\u5F37\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u4ECB\u5165\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\u63D0\u4F9B\u5EFA\u8B70\u7D66\u5275\u696D\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\uFF08\u5982\u5728\u8463\u4E8B\u6703\u7684\u6C7A\u7B56\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\uFF0C\u4E26\u5C0A\u91CD\u6700\u5F8C\u6C7A\u5B9A\u3002\u6295\u8CC7\u4EBA\u5047\u5B9A\u5718\u968A\u7684\u5C08\u696D\u512A\u52E2\u8DDF\u80FD\u529B\u4E88\u4EE5\u5EFA\u8B70\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u6295\u8CC7\u4EBA\u4F9D\u64DA\u4ED6\u5011\u5728\u7522\u696D\u7684\u7D93\u9A57\u4ECB\u5165\u6C7A\u7B56\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\u51FA\u5834\u6642\u6A5F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u5176\u5275\u6295\u57FA\u91D1\u901A\u5E38\u6709\u5E74\u9650\uFF0C\u5728\u57FA\u91D1\u521D\u671F\u7D04\u6709\u4E94\u5230\u516D\u5E74\uFF0C\u56E0\u6B64\u65B0\u5275\u5718\u968A\u6703\u671F\u671B\u52A0\u901F\u5230\u6295\u8CC7\u4EBA\u51FA\u5834\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u901A\u5E38\u6C92\u6709\u5E74\u9650");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\uFF08\u5C24\u5176\u7576\u6295\u8CC7\u4EBA\u662F\u4E00\u822C\u4F01\u696D\u6295\u8CC7\u90E8\uFF0C\u6216\u662F\u4F01\u696D\u7368\u7ACB\u7684\u6295\u8CC7\u516C\u53F8\u6642\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "section", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\u5F37\u5316\u8CA1\u52D9\u7D50\u69CB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "\u8CC7\u91D1\u7684\u6339\u6CE8\u8207\u61C9\u7528\u5C0D\u7B56\uFF0C\u76F8\u8F14\u76F8\u6210\uFF0C \u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u7D66\u4F60\u4E0D\u50C5\u9650\u65BC\u7D93\u6FDF\u4E0A\u7684\u63F4\u52A9\uFF0C \u66F4\u662F\u4F60\u7684\u5DE8\u4EBA\uFF0C\u7AD9\u5728\u80A9\u4E0A\uFF0C \u91D0\u6E05\u516C\u53F8\u8CA1\u52D9\u6240\u9700\u7684\u7CFB\u7D71\u7BA1\u7406\u3001\u6703\u8A08\u4EBA\u624D\u3001\u4E2D\u9577\u7A0B\u8A08\u756B\uFF0C \u8B93\u6BCF\u4E00\u5206\u9322\uFF0C\u7528\u5728\u5200\u53E3\uFF0C \u66F4\u672A\u516C\u53F8\u6253\u4E0B\u6DF1\u6DF1\u7684\u5730\u57FA\uFF0C\u7ACB\u65BC\u4E0D\u6557\u4E4B\u5730\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u4EBA\u624D\u532F\u6D41 \u4E0A\u4E0B\u6E38\u6574\u5408");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "\u5C0D\u5916\uFF0C\u7522\u696D\u8A0A\u606F\u8207\u7522\u54C1\u92B7\u8DEF\u65B9\u5411\uFF1B\u5C0D\u5167\uFF0C\u4E0A\u4E0B\u6E38\u7684\u6574\u5408\uFF0C \u5728\u751F\u7522\u3001\u7BA1\u7406\u3001\u7814\u767C\u3001\u92B7\u552E\u4E0A\uFF0C\u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u53EF\u4EE5\u63D0\u4F9B\u6709\u6548\u7684\u5EFA\u8B70\uFF0C \u6574\u5408\u4E0A\u4E0B\u6E38\u8CC7\u6E90\u767C\u5C55\uFF0C\u5275\u6295\u8DEF\u4E0A\u66F4\u9806\u5229\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "\u5E02\u5834\u8CC7\u8A0A \u77E5\u8B58\u52A0\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "\u4E0D\u8AD6\u5C0D\u65BC\u5E02\u5834\u654F\u611F\u5EA6\u3001\u7522\u54C1\u63A5\u53D7\u5EA6\uFF0C \u500B\u9818\u57DF\u7684\u6295\u8CC7\u4EBA\u5DF2\u6709\u591A\u5E74\u6D89\u7565\uFF0C \u6211\u5011\u6709\u66F4\u591A\u7684\u7BA1\u9053\u8207\u8CC7\u6E90\uFF0C\u60A8\u6709\u65B0\u7A4E\u7684\u9EDE\u5B50\u8207\u4E0D\u540C\u7684\u898B\u89E3\uFF0C \u6700\u5927\u5316\u96D9\u65B9\u7684\u8CC7\u6E90\u8207\u8CC7\u8A0A\uFF0C\u5275\u9020\u66F4\u591A\u7684\u6A5F\u6703\u5427\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u964D\u4F4E\u98A8\u96AA\u63D0\u9AD8\u5B58\u6D3B\u7387");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "\u54C1\u8CEA\u7BA1\u7406\u3001\u5EAB\u5B58\u7BA1\u7406\u3001\u98A8\u96AA\u7BA1\u7406\u3001 \u74B0\u5883\u9700\u6C42\u3001\u6703\u8A08\u9700\u6C42\u3001\u65B0\u8CC7\u91D1\u5C0E\u5165\u7B49\u7B49\u74F6\u9838\uFF0C \u662F\u6BCF\u500B\u65B0\u5275\u4F01\u696D\u53EF\u80FD\u6703\u9047\u5230\u7684\u554F\u984C\uFF0C \u900F\u904E\u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u5C0D\u5275\u6295\u7522\u696D\u7684\u4E86\u89E3\uFF0C \u8A55\u4F30\u5404\u500B\u9762\u5411\u7684\u98A8\u96AA\u8207\u53EF\u4EE5\u63D0\u4F9B\u7684\u5EFA\u8B70\u8207\u5354\u52A9\uFF0C \u7AD9\u5728\u524D\u982D\u70BA\u60A8\u6392\u9664\u842C\u96E3\uFF01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "section", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h2", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "\u627E\u54EA\u500B\u7522\u696D\u7684\u6295\u8CC7\u4EBA\u5462\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\u7B56\u7565\u6027\u6295\u8CC7\u4EBA\u6BD4\u8D77\u8CA1\u52D9\u6027\u6295\u8CC7\u4EBA\u66F4\u770B\u7A2E\u5F7C\u6B64\u5728\u7522\u696D\u4E0A\u7684\u5207\u5408\u5EA6\uFF0C\u56E0\u6B64\u65B0\u7E3D\u7684\u7B56\u7565\u6027 \u6295\u8CC7\u59D4\u54E1\u6703\u5C07\u6295\u8CC7\u4EBA\u5011\u5206\u70BA9\u500B\u7D44\u5225\uFF0C\u9664\u4E86\u8B93\u696D\u8005\u53EF\u4EE5\u91DD\u5C0D\u81EA\u5DF1\u7684\u7279\u9577\u6311\u9078\u5408\u9069\u7D44\u5225 \u9032\u884C\u7533\u8ACB\u5916\uFF0C\u6BCF\u4E00\u7D44\u90FD\u6709\u6578\u540D\u7522\u696D\u524D\u8F29\u64D4\u4EFB\u62DB\u96C6\u4EBA\uFF0C\u904B\u7528\u4ED6\u5011\u5C0D\u65BC\u7522\u696D\u7684\u4E86\u89E3\u53CA\u7D93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h4", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "IC\u534A\u5C0E\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "h3", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "h3", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "\u4E3B\u8FA6\u55AE\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "h3", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "\u7DAD\u8B77\u55AE\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "h3", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "\u806F\u7D61\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "\u8A08\u756B\u4E3B\u65E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "\u806F\u7D61\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\u670D\u52D9\u689D\u6B3E\u53CA\u96B1\u79C1\u8AAA\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "h3", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "\u76F8\u95DC\u7DB2\u7AD9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "FINDIT\u65E9\u671F\u8CC7\u91D1\u6295\u8CC7\u5E73\u53F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "\u5973\u6027\u5275\u696D\u98DB\u96C1\u8A08\u756B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "\u670D\u52D9\u689D\u6B3E\u53CA\u96B1\u79C1\u8AAA\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "\u4E2D\u5C0F\u4F01\u696D\u7DB2\u8DEF\u5927\u5B78\u6821");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "\u5FAE\u578B\u5275\u696D\u9CF3\u51F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "\u7D93\u6FDF\u90E8\u4E2D\u5C0F\u4F01\u696D\u8655");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.convertPath("/assets/introduction-hero/hero-title.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap\");\n.nav-item[_ngcontent-%COMP%] {\n  width: 13.5%;\n  margin: 0 12px;\n}\n.nav-item__expansion[_ngcontent-%COMP%], .nav-item__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav-item__text[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 1.25rem 3px;\n  border-bottom: 2px solid transparent;\n  color: #00779f;\n}\n.navigation__list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0;\n  list-style: none;\n  font-size: 12px;\n}\n.navigation__logo-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 36px;\n  color: #00779f;\n}\n.navigation__logo-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-left: 10%;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.text-theme-color[_ngcontent-%COMP%] {\n  color: #365d82;\n}\n.app__footer[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n  background-color: #00779f;\n}\n.footer[_ngcontent-%COMP%] {\n  min-height: 40vh;\n}\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans TC\", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.bg_gray[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: bold;\n  color: #00779F;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  font-weight: bold;\n  color: #00779F;\n}\nsection[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.investigators-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #00779F;\n  padding: 6px 8px;\n  text-decoration: none;\n  font-size: 0.875rem;\n  min-width: 64px;\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  line-height: 1.75;\n  border-radius: 4px;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  border: 0;\n}\n.investigators-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  box-shadow: 0 6px 13px 0 rgba(0, 128, 171, 0.4);\n  background-color: #00779F;\n}\n.hero[_ngcontent-%COMP%] {\n  background-image: url('/bstrategic-investigator/asssets/introduction-hero/hero-cover.png');\n  background-size: cover;\n  background-position: center;\n}\n.hero[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n  box-shadow: none;\n}\n.suitable-investigator[_ngcontent-%COMP%] {\n  color: #00779F;\n}\n.suitable-investigator[_ngcontent-%COMP%]   .icon-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n  box-shadow: none;\n}\n.suitable-investigator[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: normal;\n}\n.investigator-compare[_ngcontent-%COMP%] {\n  color: #7d828e;\n}\n.investigator-compare[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: normal;\n}\n.investigator-compare[_ngcontent-%COMP%]   .strategy-investigator-card[_ngcontent-%COMP%] {\n  background-color: #203352;\n  color: #F1F6EC;\n  border-radius: 2rem;\n}\n.investigator-compare[_ngcontent-%COMP%]   .financial-investigator-card[_ngcontent-%COMP%] {\n  background-color: #F1F6EC;\n  color: #203352;\n  border-radius: 2rem;\n}\n.investigator-compare[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20%;\n  background-color: #4C5E8C;\n  color: #F2E8DE;\n  border-radius: 1rem;\n}\n.investigator-compare[_ngcontent-%COMP%]   .compare-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n  box-shadow: none;\n}\n.investigator-compare[_ngcontent-%COMP%]   .compare-card[_ngcontent-%COMP%]:hover {\n  background-color: #00779F;\n  color: #FFF;\n}\n.investigator-compare[_ngcontent-%COMP%]   .compare-card[_ngcontent-%COMP%]:hover   .strategic-text[_ngcontent-%COMP%], .investigator-compare[_ngcontent-%COMP%]   .compare-card[_ngcontent-%COMP%]:hover   .financial-text[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.investigator-compare[_ngcontent-%COMP%]   .compare-card[_ngcontent-%COMP%]:hover   .vertical-line[_ngcontent-%COMP%] {\n  background-color: #FFF;\n}\n.investigator-compare[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 1px;\n  background-color: #7d828e;\n}\n.investigator-compare[_ngcontent-%COMP%]   .strategic-text[_ngcontent-%COMP%] {\n  color: #00779F;\n}\n.investigator-compare[_ngcontent-%COMP%]   .financial-text[_ngcontent-%COMP%] {\n  color: #7d828e;\n}\n.investigator-compare[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.features[_ngcontent-%COMP%] {\n  color: #00779F;\n}\n.features[_ngcontent-%COMP%]   .feature-number[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.features[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n}\n.features[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 4rem;\n}\n.categories[_ngcontent-%COMP%] {\n  color: #00779F;\n}\n.categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n}\n.categories[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover {\n  color: white;\n  box-shadow: 0 6px 13px 0 rgba(0, 128, 171, 0.4);\n}\n.categories[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.categories[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n}\n.categories[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: normal;\n  color: #FFF;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-decoration: underline;\n  font-size: 1.125rem;\n}\n.footer[_ngcontent-%COMP%]   .relative-link-list[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRVEsOEZBQUE7QUF4RVI7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQUZKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBVUE7O0VBRUUscUJBQUE7QUFQRjtBQWdCQTtFQUNFLGNBQUE7QUFiRjtBQWlCQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUFkRjtBQWlCQTtFQUNFLGdCQUFBO0FBZEY7QUF5QkE7O0VBRUUsdUNBQUE7QUF0QkY7QUFnRkE7RUFDRSxhQUFBO0FBN0VGO0FBaUZFO0VBQ0UseUJBQUE7QUE5RUo7QUFrRkE7RUE3REUsa0JBQUE7RUErREEsaUJBQUE7RUFDQSxjQXBFVztBQVhiO0FBa0ZBO0VBMURFLGlCQUFBO0VBQ0EsaUJBQUE7RUEyREEsaUJBQUE7RUFDQSxjQTFFVztBQUpiO0FBaUZBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQTlFRjtBQWlGQTtFQTNERSxtQkFBQTtBQWxCRjtBQWlGQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHFLQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBL0VGO0FBaUZFO0VBQ0UsWUFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7QUEvRUo7QUFxRkE7RUFDRSxxRUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFsRkY7QUFvRkU7RUExRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBRUEsa0NBQUE7RUF3RUUsZ0JBQUE7QUE5RUo7QUFrRkE7RUFDRSxjQTNIVztBQTRDYjtBQWlGRTtFQW5GQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFFQSxrQ0FBQTtFQWlGRSxnQkFBQTtBQTNFSjtBQThFRTtFQTlIQSxrQkFBQTtFQWdJRSxtQkFBQTtBQTVFSjtBQWlGQTtFQUNFLGNBeklnQjtBQTJEbEI7QUFnRkU7RUF4SUEsa0JBQUE7RUEwSUUsbUJBQUE7QUE5RUo7QUFpRkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQS9FSjtBQWtGRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBaEZKO0FBbUZFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFqRko7QUFvRkU7RUEzSEEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBRUEsa0NBQUE7RUF5SEUsZ0JBQUE7QUE5RUo7QUFnRkk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUE5RU47QUFnRk07RUFDRSxXQUFBO0FBOUVSO0FBaUZNO0VBQ0Usc0JBQUE7QUEvRVI7QUFvRkU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQXpMYztBQXVHbEI7QUFxRkU7RUFDRSxjQTlMUztBQTJHYjtBQXNGRTtFQUNFLGNBak1jO0FBNkdsQjtBQXVGRTtFQTFLQSxtQkFBQTtBQXNGRjtBQXlGQTtFQUNFLGNBM01XO0FBcUhiO0FBd0ZFO0VBQ0UsV0FBQTtBQXRGSjtBQXlGRTtFQTdNQSxrQkFBQTtBQXVIRjtBQTBGRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQXhGSjtBQTRGQTtFQUNFLGNBNU5XO0FBbUliO0FBMkZFO0VBcExBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUVBLGtDQUFBO0FBNEZGO0FBdUZJO0VBQ0UsWUFBQTtFQUNBLCtDQUFBO0FBckZOO0FBMEZFO0VBak5BLG1CQUFBO0FBMEhGO0FBMkZFO0VBeE9BLGtCQUFBO0FBZ0pGO0FBNkZJO0VBcE9GLGlCQUFBO0VBQ0EsaUJBQUE7QUEwSUY7QUFnR0U7RUE3TkEsbUJBQUE7RUErTkUsbUJBQUE7RUFDQSxXQUFBO0FBN0ZKO0FBZ0dFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQTFPRixtQkFBQTtBQTZJRjtBQWlHRTtFQTFPQSxtQkFBQTtBQTRJRiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDos6Los6LnmoRDU1NcblxuLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEzLjUlO1xuICBtYXJnaW46IDAgMTJweDtcblxuICAmX19leHBhbnNpb24sXG4gICZfX2xpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICZfX3RleHQge1xuICAgIG1hcmdpbjogMS4yNXJlbSAwIDEuMjVyZW0gM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwNzc5ZjtcbiAgfVxufVxuXG4ubmF2aWdhdGlvbiB7XG4gICZfX2xpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgJl9fbG9nby1hcmVhIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGNvbG9yOiAjMDA3NzlmO1xuICB9XG5cbiAgJl9fbG9nby1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG59XG5cbmEsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vLyDnlLHmlrzpnIDopoHomZXnkIZiZy1jb2xvcu+8jOaJgOS7peS4jeeUqC5tYWluXG4vLyAubWFpbiB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuLy8gICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4vLyB9XG5cbi50ZXh0LXRoZW1lLWNvbG9yIHtcbiAgY29sb3I6ICMzNjVkODI7XG59XG5cblxuLmFwcF9fZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzc5Zjtcbn1cblxuLmZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDQwdmg7XG59XG5cbi8vIOizouizoueahENTUy0tRU5EXG5cblxuXG4vLyBHdWlkZWxpbmUgVmFyaWFibGVzXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytUQzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbmgxLFxucCB7XG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIFRDJywgc2Fucy1zZXJpZjtcbn1cblxuJHRoZW1lLWNvbG9yOiMwMDc3OUY7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjN2Q4MjhlO1xuXG5AbWl4aW4gYXJ0aWNsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbn1cblxuQG1peGluIGFydGljbGUtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1peGluIHByaW1hcnktc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtaXhpbiBwcmltYXJ5LXRleHQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LXRleHQge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG5AbWl4aW4gaW1wb3J0YW50LWhpbnQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vLyBDdXN0b20gVmFyaWFibGVzXG5cbkBtaXhpbiBoaW50IHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG5AbWl4aW4gY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMjVweCByZ2IoMCAxMjggMTcxIC8gMTYlKTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjFzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbjtcbn1cblxuQG1peGluIGdpYW50LXRleHQge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi8vIHNoYXJlZCBjbGFzc2VzXG5cbi5kZXNjcmlwdGlvbiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5iZyB7XG4gICZfZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgfVxufVxuXG4udGl0bGUge1xuICBAaW5jbHVkZSBhcnRpY2xlLXRpdGxlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbn1cblxuLnN1YnRpdGxlIHtcbiAgQGluY2x1ZGUgcHJpbWFyeS1zZWN0aW9uLXRpdGxlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cblxucCB7XG4gIEBpbmNsdWRlIHByaW1hcnktdGV4dDtcbn1cblxuLmludmVzdGlnYXRvcnMtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NzlGO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWluLXdpZHRoOiA2NHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLCBib3gtc2hhZG93IDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLCBib3JkZXIgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyODU3ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTNweCAwIHJnYigwIDEyOCAxNzEgLyA0MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3OUY7XG4gIH1cbn1cblxuLy8gc2VjdGlvbnNcblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ15zcmMvYXNzc2V0cy9pbnRyb2R1Y3Rpb24taGVyby9oZXJvLWNvdmVyLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgLnF1ZXN0aW9uLWNhcmQge1xuICAgIEBpbmNsdWRlIGNhcmQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4uc3VpdGFibGUtaW52ZXN0aWdhdG9yIHtcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcblxuICAuaWNvbi1jYXJkIHtcbiAgICBAaW5jbHVkZSBjYXJkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAudGl0bGUge1xuICAgIEBpbmNsdWRlIGFydGljbGUtdGl0bGU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbFxuICB9XG59XG5cblxuLmludmVzdGlnYXRvci1jb21wYXJlIHtcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG5cbiAgLnRpdGxlIHtcbiAgICBAaW5jbHVkZSBhcnRpY2xlLXRpdGxlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAuc3RyYXRlZ3ktaW52ZXN0aWdhdG9yLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDMzNTI7XG4gICAgY29sb3I6ICNGMUY2RUM7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgfVxuXG4gIC5maW5hbmNpYWwtaW52ZXN0aWdhdG9yLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY2RUM7XG4gICAgY29sb3I6ICMyMDMzNTI7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgfVxuXG4gIC5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNUU4QztcbiAgICBjb2xvcjogI0YyRThERTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB9XG5cbiAgLmNvbXBhcmUtY2FyZCB7XG4gICAgQGluY2x1ZGUgY2FyZDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NzlGO1xuICAgICAgY29sb3I6ICNGRkY7XG5cbiAgICAgIC5zdHJhdGVnaWMtdGV4dCwgLmZpbmFuY2lhbC10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICB9XG5cbiAgICAgIC52ZXJ0aWNhbC1saW5lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudmVydGljYWwtbGluZSB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxuXG4gIC5zdHJhdGVnaWMtdGV4dCB7XG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgfVxuXG4gIC5maW5hbmNpYWwtdGV4dCB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cblxuICBzbWFsbCB7XG4gICAgQGluY2x1ZGUgc2Vjb25kYXJ5LXRleHQ7XG4gIH1cbn1cblxuLmZlYXR1cmVzIHtcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcblxuICAuZmVhdHVyZS1udW1iZXIge1xuICAgIHdpZHRoOiA4cmVtO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBAaW5jbHVkZSBhcnRpY2xlLXRpdGxlO1xuICB9XG5cbiAgaDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cblxuLmNhdGVnb3JpZXMge1xuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xuXG4gIC5jYXRlZ29yeS1jYXJkIHtcbiAgICBAaW5jbHVkZSBjYXJkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxM3B4IDAgcmdiKDAgMTI4IDE3MSAvIDQwJSk7XG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NzlGO1xuICAgIH1cbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgQGluY2x1ZGUgcHJpbWFyeS10ZXh0O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBAaW5jbHVkZSBhcnRpY2xlLXRpdGxlO1xuICB9XG5cbiAgLmNhdGVnb3J5LWxpc3Qge1xuICAgIC50aXRsZSB7XG4gICAgICBAaW5jbHVkZSBwcmltYXJ5LXNlY3Rpb24tdGl0bGU7XG4gICAgfVxuICB9XG59XG5cbi5mb290ZXIge1xuICBzbWFsbCB7XG4gICAgQGluY2x1ZGUgc2Vjb25kYXJ5LXRleHQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBAaW5jbHVkZSBwcmltYXJ5LXRleHQ7XG4gIH1cbiAgXG4gIC5yZWxhdGl2ZS1saW5rLWxpc3Qge1xuICAgIEBpbmNsdWRlIHNlY29uZGFyeS10ZXh0O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'bstrategic-investigator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "clsX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"],
        _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "clsX":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CategoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 362, vars: 0, consts: [[1, "app__nav", "container-fluid"], [1, "container"], [1, "justify-content-between", "row"], [1, "col-md-3", "col-6"], ["href", "/", 1, "navigation__logo-area"], ["width", "34", "height", "42", "viewBox", "0 0 34 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.4549 14.4248H11.0263H6.58203C6.9026 15.3191 7.39317 16.1365 8.0246 16.8289C9.36032 15.3528 11.2983 14.4248 13.4549 14.4248Z", "fill", "#E5CDB0"], ["d", "M20.5957 19.2332H23.0146H27.4637C27.1431 18.3389 26.6526 17.5215 26.0211 16.8291C24.6903 18.3052 22.7523 19.2332 20.5957 19.2332Z", "fill", "#E5CDB0"], ["d", "M20.5957 14.4248H13.4557C11.2991 14.4248 9.3611 15.3528 8.02539 16.8289C9.3611 18.3051 11.2991 19.233 13.4557 19.233H20.5957C22.7522 19.233 24.6902 18.3051 26.026 16.8289C24.6902 15.3528 22.7522 14.4248 20.5957 14.4248Z", "fill", "#E5CDB0"], ["d", "M19.5699 34.98C20.7745 36.3119 19.3077 37.6245 17.0248 37.6245C14.7419 37.6245 13.2702 36.3119 14.4797 34.98C13.7219 35.5089 12.8477 36.9033 12.8477 38.2496C12.8477 39.5959 13.5422 40.5912 13.5422 40.5912C13.5422 40.5912 14.2708 41.8413 16.7965 41.9904C16.8694 42 16.9422 42 17.0248 42C17.1074 42 17.1802 42 17.2531 41.9904C19.7788 41.8413 20.5074 40.5912 20.5074 40.5912C20.5074 40.5912 21.2019 39.5959 21.2019 38.2496C21.2019 36.9033 20.3277 35.5089 19.5699 34.98Z", "fill", "#00779F"], ["d", "M24.2955 26.4453V7.21236C24.2955 3.23114 21.0315 0 17.0098 0C18.3503 0 19.4383 1.07705 19.4383 2.40412V31.2536C19.4383 32.5807 18.3503 33.6577 17.0098 33.6577C21.0363 33.6577 24.2955 30.4266 24.2955 26.4453Z", "fill", "#00779F"], ["d", "M14.5818 31.2536V2.40412C14.5818 1.07705 15.6697 0 17.0103 0C12.9886 0 9.72461 3.23114 9.72461 7.21236V26.4453C9.72461 30.4266 12.9886 33.6577 17.0103 33.6577C15.6697 33.6577 14.5818 32.5807 14.5818 31.2536Z", "fill", "#00779F"], ["d", "M4.37143 16.4923C4.37143 6.23631 7.82 2.26951 11.696 0.788574C4.90571 2.99075 0 9.3184 0 16.7808C0 25.3587 6.47943 32.4364 14.8629 33.4798C9.928 32.8355 4.37143 29.5082 4.37143 16.4923Z", "fill", "#00779F"], ["d", "M33.9996 16.7808C33.9996 9.3184 29.0939 2.99075 22.3036 0.788574C26.1796 2.26951 29.6282 6.23631 29.6282 16.4923C29.6282 29.5082 24.0716 32.8355 19.1367 33.4798C27.5202 32.4364 33.9996 25.3587 33.9996 16.7808Z", "fill", "#00779F"], ["d", "M23.0235 9.61635H27.4677C26.4672 6.81314 23.7715 4.80811 20.5949 4.80811H13.4549C10.2832 4.80811 7.5826 6.81314 6.58203 9.61635H11.0263H23.0235Z", "fill", "#E5CDB0"], ["d", "M11.0166 24.041H6.58203C7.5826 26.8442 10.2783 28.8493 13.4549 28.8493H20.5949C23.7666 28.8493 26.4672 26.8442 27.4677 24.041H23.0186H11.0166Z", "fill", "#E5CDB0"], [1, "d-flex", "align-items-center", "col-md-8"], [1, "navigation__list"], [1, "nav-item"], ["href", "/activity", 1, "nav-item__link"], ["width", "18", "height", "16", "viewBox", "0 0 18 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.9154 13.25V12.0833C11.9154 11.4645 11.6695 10.871 11.2319 10.4334C10.7944 9.99583 10.2009 9.75 9.58203 9.75H4.91536C4.29653 9.75 3.70303 9.99583 3.26545 10.4334C2.82786 10.871 2.58203 11.4645 2.58203 12.0833V13.25", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.2513 7.41667C8.53997 7.41667 9.58464 6.372 9.58464 5.08333C9.58464 3.79467 8.53997 2.75 7.2513 2.75C5.96264 2.75 4.91797 3.79467 4.91797 5.08333C4.91797 6.372 5.96264 7.41667 7.2513 7.41667Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15.418 13.2498V12.0832C15.4176 11.5662 15.2455 11.064 14.9288 10.6554C14.612 10.2468 14.1685 9.95493 13.668 9.82568", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11.332 2.82568C11.8339 2.95419 12.2788 3.24609 12.5965 3.65536C12.9142 4.06464 13.0866 4.568 13.0866 5.0861C13.0866 5.6042 12.9142 6.10756 12.5965 6.51684C12.2788 6.92611 11.8339 7.21801 11.332 7.34652", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-item__text"], ["href", "/journal", 1, "nav-item__link"], ["d", "M9 3.9165V12.0832", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.9457 5.0835H8.02908C7.66809 5.0835 7.32189 5.23714 7.06663 5.51063C6.81137 5.78412 6.66797 6.15506 6.66797 6.54183C6.66797 6.9286 6.81137 7.29954 7.06663 7.57303C7.32189 7.84652 7.66809 8.00016 8.02908 8.00016H9.97352C10.3345 8.00016 10.6807 8.15381 10.936 8.4273C11.1912 8.70079 11.3346 9.07172 11.3346 9.4585C11.3346 9.84527 11.1912 10.2162 10.936 10.4897C10.6807 10.7632 10.3345 10.9168 9.97352 10.9168H6.66797", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.0013 13.8332C12.223 13.8332 14.8346 11.2215 14.8346 7.99984C14.8346 4.77818 12.223 2.1665 9.0013 2.1665C5.77964 2.1665 3.16797 4.77818 3.16797 7.99984C3.16797 11.2215 5.77964 13.8332 9.0013 13.8332Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.16602 3.75H6.66602C7.28485 3.75 7.87835 3.99583 8.31593 4.43342C8.75352 4.871 8.99935 5.46449 8.99935 6.08333V14.25C8.99935 13.7859 8.81497 13.3408 8.48679 13.0126C8.1586 12.6844 7.71348 12.5 7.24935 12.5H3.16602V3.75Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.8333 3.75H11.3333C10.7145 3.75 10.121 3.99583 9.68342 4.43342C9.24583 4.871 9 5.46449 9 6.08333V14.25C9 13.7859 9.18437 13.3408 9.51256 13.0126C9.84075 12.6844 10.2859 12.5 10.75 12.5H14.8333V3.75Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-item", "nav-item__expansion"], ["d", "M6.33398 8H6.34398", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8.06414 5.33318C8.71219 5.33317 8.87507 5.33316 9.33399 5.33316C10.2625 5.33317 10.334 5.33317 10.334 5.33317M4.33398 4.6665C4.66732 4.6665 5.39748 4.8566 5.65145 5.617C4.85926 5.97159 4.25686 6.63098 3.93693 7.43785C3.60876 8.26552 3.23852 9.12087 2.34817 9.12087V9.12087C2.25144 9.12087 2.68113 11.054 2.68113 11.054L4.34593 11.2175C4.76357 11.8163 5.49668 12.4268 6.25462 12.7366C6.25462 12.7366 6.55621 13.739 6.55621 13.9896C6.85779 13.9896 7.73483 14.0126 7.76256 13.9896V13.9896C8.23634 13.5959 8.49754 12.9872 9.11353 12.9872H10.4768L10.7784 13.9896C11.08 13.9896 12.2864 13.9896 12.2864 13.9896L12.588 12.628C14.0129 12.0131 15.0007 10.6739 15.0007 9.12087C15.0007 7.37264 14.0637 6.38089 13.0007 5.85464", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.9999 7.99554C14.9999 7.99554 15.7321 7.85811 16.327 6.98792", "stroke", "#00779F", "stroke-miterlimit", "10", "stroke-linecap", "round"], ["d", "M10.666 5.33333C10.8753 5.05475 10.9994 4.70845 10.9994 4.33317C10.9994 3.4127 10.2532 2.6665 9.33268 2.6665C8.41221 2.6665 7.66602 3.4127 7.66602 4.33317C7.66602 4.70845 7.79005 5.05475 7.99935 5.33333", "stroke", "#00779F", "stroke-linecap", "round"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.75 6.625L7.5 10.375L11.25 6.625", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-dropdown"], ["d", "M10.5574 5.62314C10.4599 5.72259 10.4053 5.8563 10.4053 5.99556C10.4053 6.13482 10.4599 6.26852 10.5574 6.36798L11.4087 7.21922C11.5081 7.3167 11.6418 7.3713 11.7811 7.3713C11.9203 7.3713 12.054 7.3167 12.1535 7.21922L14.1592 5.21348C14.4268 5.80466 14.5078 6.46333 14.3914 7.10172C14.2751 7.7401 13.967 8.32787 13.5082 8.78671C13.0493 9.24555 12.4616 9.55365 11.8232 9.66997C11.1848 9.78628 10.5261 9.70528 9.93496 9.43776L6.25866 13.1141C6.04701 13.3257 5.75995 13.4446 5.46063 13.4446C5.1613 13.4446 4.87424 13.3257 4.66259 13.1141C4.45094 12.9024 4.33203 12.6153 4.33203 12.316C4.33203 12.0167 4.45094 11.7296 4.66259 11.518L8.33888 7.84168C8.07136 7.2505 7.99036 6.59183 8.10667 5.95345C8.22299 5.31507 8.53109 4.72729 8.98993 4.26846C9.44877 3.80962 10.0365 3.50152 10.6749 3.3852C11.3133 3.26889 11.972 3.34989 12.5632 3.61741L10.5627 5.61782L10.5574 5.62314Z", "stroke", "#00779F", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "/login", 1, "nav-item__link"], ["href", "/signup", 1, "nav-item__link"], ["href", "/password-reset", 1, "nav-item__link"], [1, "app__main"], [1, "hero", "container"], [1, "d-flex", "align-items-center", "row"], [1, "hero__text", "col-4"], [1, "title"], [1, "description"], [1, "col-8"], ["src", "/assets/category-icons/IC\u534A\u5C0E\u9AD4_\u4E3B\u8996\u89BA.png", "alt", "IC\u534A\u5C0E\u9AD4_\u4E3B\u8996\u89BA", 1, "w-100"], [1, "w-100", "d-flex", "justify-content-center"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "align-items-center"], ["d", "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", "stroke", "#00779F", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M8 12L12 16L16 12", "stroke", "#00779F", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 8V16", "stroke", "#00779F", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "invstigators", "container"], [1, "list", "row"], [1, "item", "col-6", "p-3"], ["src", "/assets/logos/1.IC\u534A\u5C0E\u9AD4_PCB/1.png", 1, "p-5"], [1, "motto-card", "p-4", "m-3"], [1, "quote-sign", "me-auto"], ["width", "26", "height", "23", "viewBox", "0 0 26 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0.511875 14.2812C0.511875 10.1562 1.07438 7.1875 2.19938 5.375C3.38688 3.5625 5.38688 1.96875 8.19938 0.59375L11.6681 5.1875C9.41813 6.375 8.04313 7.40625 7.54313 8.28125C7.10563 9.09375 6.88688 10.125 6.88688 11.375H11.7619V22.625H0.511875V14.2812ZM14.1056 14.2812C14.1056 10.1562 14.6681 7.1875 15.7931 5.375C16.9181 3.5625 18.9181 1.96875 21.7931 0.59375L25.1681 5.1875C22.9806 6.375 21.6369 7.40625 21.1369 8.28125C20.6369 9.09375 20.3869 10.125 20.3869 11.375H25.2619V22.625H14.1056V14.2812Z", "fill", "#006F95"], [1, "motto", "col", "text-center", "m-0"], [1, "quote-sign", "ms-auto"], ["d", "M25.7166 8.71875C25.7166 12.8437 25.1541 15.8125 24.0291 17.625C22.8416 19.4375 20.8416 21.0313 18.0291 22.4062L14.5604 17.8125C16.8104 16.625 18.1854 15.5938 18.6854 14.7187C19.1229 13.9063 19.3416 12.875 19.3416 11.625H14.4666L14.4666 0.375L25.7166 0.375L25.7166 8.71875ZM12.1229 8.71875C12.1229 12.8437 11.5604 15.8125 10.4354 17.625C9.31039 19.4375 7.31039 21.0312 4.43539 22.4062L1.06039 17.8125C3.24789 16.625 4.59164 15.5938 5.09164 14.7187C5.59164 13.9062 5.84164 12.875 5.84164 11.625H0.96664V0.375H12.1229V8.71875Z", "fill", "#006F95"], [1, "intro-card", "px-4", "py-3", "m-3"], [1, "title", "m-0"], [1, "award", "m-0"], [1, "company", "m-0"], ["src", "/assets/logos/1.IC\u534A\u5C0E\u9AD4_PCB/2.png", 1, "p-5"], [1, "quote", "me-auto"], [1, "quote", "ms-auto"], ["src", "/assets/logos/1.IC\u534A\u5C0E\u9AD4_PCB/3.png", 1, "p-5"], ["src", "/assets/logos/1.IC\u534A\u5C0E\u9AD4_PCB/4.png", 1, "p-5"], ["src", "/assets/logos/1.IC\u534A\u5C0E\u9AD4_PCB/5.png", 1, "p-5"], [1, "operation-flow", "container"], [1, "row"], [1, "col"], [1, "m-4"], [1, "image-card", "w-100", "p-5"], ["src", "/assets/operation-flow-icons/002-detective.svg", 1, "w-100"], [1, "title", "pt-3"], [1, "description", "pt-1"], [1, "image-card", "p-5"], ["src", "/assets/operation-flow-icons/006-building.svg", 1, "w-100"], ["src", "/assets/operation-flow-icons/004-guarantee.svg", 1, "w-100"], ["src", "/assets/operation-flow-icons/001-invest.svg", 1, "w-100"], [1, "col-6", "d-none", "d-lg-block"], [1, "description", "row", "align-items-start"], ["srcset", "/assets/operation-flow-diagram/flow-xl.svg", "media", "(min-width: 1400px)", 1, "w-100"], ["srcset", "/assets/operation-flow-diagram/flow-l.svg", "media", "(min-width: 1200px)", 1, "w-100"], ["srcset", "/assets/operation-flow-diagram/flow-m.svg", "media", "(min-width: 992px)", 1, "w-100"], ["src", "/assets/operation-flow-diagram/test6-as-m.svg", 1, "w-100"], [1, "card-list", "card-list-right", "col"], [1, "m-4", 2, "margin-top", "100% !important"], ["src", "/assets/operation-flow-icons/005-consultation.svg", 1, "w-100"], [1, "m-4", 2, "margin-top", "90% !important"], ["src", "/assets/operation-flow-icons/007-authentication.svg", 1, "w-100"], ["src", "/assets/operation-flow-icons/008-chat.svg", 1, "w-100"], [1, "qualification", "bg_gray"], [1, "col-3", "p-4"], [1, "icon-card", "m-2"], [1, "image", "p-5"], [1, "text-card", "p-4", "mx-2", "my-4"], [1, "qualification-header"], [1, "m-0"], [1, "subtitle"], [1, "text-card", "p-4"], [1, "application-number"], [1, "boost-business", "container"], [1, "row", "mt-5"], ["src", "/assets/category-boost-business-illustration.svg", 1, "col-6", "p-5"], [1, "col-6", "p-5"], [1, "text-end", "title", "mb-3"], [1, "text-end", "my-2", "mb-5"], [1, "w-75"], [1, "investigators-button", "float-end", "w-75"], [1, "mt-5", "d-flex", "flex-column", "align-items-end"], [1, "text-end", "subtitle", "m-0"], [1, "text-end", "my-2", "m-0"], [1, "w-50", "d-flex"], [1, "d-flex", "flex-grow-1", "m-2"], [1, "investigators-button", "w-100"], [1, "app__footer", "container-fluid"], [1, "footer"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5275\u696D\u5E6B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u7DDA\u4E0B\u6D3B\u52D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u7372\u53D6\u8CC7\u91D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u5275\u696D\u624B\u672D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u5275\u696D\u8CC7\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u5275\u696D\u5DE5\u5177");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u8A3B\u518A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u5FD8\u5BC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u5370\u5237\u96FB\u8DEF\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u53F0\u7063\u96FB\u5B50\u7522\u696D\u767C\u5C55\u81F3\u4ECA\u5DF2\u5C07\u8FD1\u56DB\u5341\u5E74\u6B77\u53F2, \u5F9E1970\u5E74\u9593\u653F\u5E9C\u5168\u529B\u4E3B\u5C0E\u534A\u5C0E\u9AD4\u6280\u8853\u5F15\u9032, \u4EE5\u53CA\u65E9\u671F\u63A8\u52D5PC\u7D44\u88DD\u548C\u5468\u908A\u96F6\u7D44\u4EF6\u6A19\u6E96\u5316,\u884D\u751F\u51FA\u5B8C\u96FB\u5B50\u7522\u696D\u751F\u614B\u93C8, \u5728\u7522\u696D\u9AD8\u5EA6\u805A\u6548\u61C9\u63A8\u52D5,\u5DF2\u5728\u5168\u7403\u96FB\u5B50\u7522\u696D\u7AD9\u7A69\u95DC\u9375 \u6027\u5730\u4F4D,\u4E26\u7D2F\u7A4D\u5805\u5F37OEM/ODM\u7814\u8207\u88FD\u5BE6\u529B\u3002 \u53F0\u96FB\u5B50\u7522\u696D\u5728\u5168\u7403CT\u7684\u4F9B\u61C9\u93C8\u9AD4\u7CFB\u4E2D,\u8868\u73FE\u6975\u70BA\u4EAE\u773C, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u672C\u7D44\u6295\u8CC7\u53EC\u96C6\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Just ask questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u694A\u7ACB\u660C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u7B2C31\u5C46\u9752\u5E74\u5275\u696D\u6977\u6A21\u5F97\u734E\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u805A\u7A4D\u79D1\u6280(\u80A1)\u516C\u53F8\u8463\u4E8B\u9577");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Just ask questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u4F59\u7DAD\u658C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u7B2C31\u5C46\u9752\u5E74\u5275\u696D\u6977\u6A21\u5F97\u734E\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u5B9C\u7279\u79D1\u6280(\u80A1)\u516C\u53F8/\u8463\u4E8B\u9577");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Just ask questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u66FE\u69AE\u5B5F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u7B2C21\u5C46\u9752\u5E74\u5275\u696D\u6977\u6A21\u5F97\u734E\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u5E0C\u83EF\u6676\u9AD4\u79D1\u6280(\u80A1)\u516C\u53F8/\u7E3D\u7D93\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Just ask questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u5433\u5143\u8D85");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u7B2C36\u5C46\u9752\u5E74\u5275\u696D\u6977\u6A21\u5F97\u734E\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u8208\u666E\u79D1\u6280(\u80A1)\u516C\u53F8/\u8463\u4E8B\u9577");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Just ask questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "svg", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u7C21\u69AE\u5764");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u7B2C36\u5C46\u9752\u5E74\u5275\u696D\u6977\u6A21\u5F97\u734E\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u9091\u6607\u5BE6\u696D(\u80A1)\u516C\u53F8/\u8463\u4E8B\u9577");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "section", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u904B\u4F5C\u6D41\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " \u8CC7\u683C\u5BE9\u67E5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " \u4F9D\u64DA\u696D\u8005\u7533\u8ACB\u7684\u7D44\u5225\uFF0C\u7531\u5DE5\u4F5C\u5C0F\u7D44\u78BA\u8A8D\u662F\u5426\u7B26\u5408\u8CC7\u683C\uFF0C\u8CC7\u6599\u662F\u5426\u9F4A\u5168\uFF0C\u82E5\u6709\u9700\u8981\u5247\u6703\u901A\u77E5\u696D\u8005\u88DC\u4EF6\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " \u5BE6\u5730\u8A2A\u8996 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " \u53EC\u96C6\u4EBA\u6307\u6D3E\u7522\u696D\u5C0E\u5E2B\u8207\u5DE5\u4F5C\u5C0F\u7D44\u4E00\u8D77\u9032\u884C\uFF0C\u8A2A\u8996\u5B8C\u5F8C\u65BC\u53EC\u96C6\u4EBA\u6703\u8B70\u4E2D\u63D0\u51FA\u5831\u544A\uFF0C\u4E26\u7531\u6240\u5C6C\u7D44\u5225\u53EC\u96C6\u4EBA\u88DC\u5145\u8AAA\u660E\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " \u5177\u6295\u8CC7\u53EF\u884C\u6027 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " \u9080\u8ACB\u696D\u8005\u524D\u4F86\u9032\u884C\u7C21\u5831\uFF0C\u4E26\u7531\u5404\u7D44\u9032\u884C\u9032\u4E00\u6B65\u8A0E\u8AD6\u662F\u5426\u6295\u8CC7\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " \u6295\u8CC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " \u7531\u5DE5\u4F5C\u5C0F\u7D44\u9032\u884C\u76E1\u8CAC\u8ABF\u67FB (\u6703\u540C\u8CA1\u52D9\u53CA\u6CD5\u52D9) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "source", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "source", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "source", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " \u6295\u59D4\u6703\u806F\u5408\u5BE9\u67FB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " \u5DE5\u4F5C\u5C0F\u7D44\u65BC\u5404\u7D44\u6708\u6703\u4E2D\u63D0\u51FA\u7576\u6708\u7533\u8ACB\u7684\u500B\u6848\u4E26\u9010\u6848\u5BE9\u67FB\u88C1\u5B9A\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "1. \u6307\u6D3E\u7522\u696D\u5C0E\u5E2B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "2. \u9032\u884C\u9577\u671F\u89C0\u5BDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "3. \u53EF\u4EE5\u8F49\u4ECB\u5176\u4ED6\u8CC7\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "4. \u7686\u4E0D\u7B26\u5408\u5247\u7D50\u6848");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " \u672A\u5177\u6295\u8CC7\u53EF\u884C\u6027 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " \u8F49\u4ECB\u5176\u4ED6\u8CC7\u6E90\uFF0C\u6216\u662F\u7D50\u6848\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " \u7522\u696D\u5C0E\u5E2B\u8F14\u5C0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " \u8A72\u696D\u8005\u5177\u53EF\u767C\u5C55\u6027\u4F46\u5C1A\u672A\u5177\u6295\u8CC7\u53EF\u884C\u6027\uFF0C\u5217\u5165\u9577\u671F\u89C0\u5BDF\uFF0C\u4E26\u7531\u6240\u5C6C\u7D44\u5225\u53EC\u96C6\u4EBA\u6307\u6D3E\u7522\u696D\u5C0E\u5E2B\u8207\u5DE5\u4F5C\u5C0F\u7D44\u5171\u540C\u9032\u884C\u8F14\u5C0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "section", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\u904B\u4F5C\u6D41\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h2", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\u8A72\u6E96\u5099\u54EA\u4E9B\u6587\u4EF6\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h3", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h3", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "h3", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h3", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h2", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "\u4E0D\u9055\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "\u6700\u8FD1\u4E09\u5E74\u6709\u56B4\u91CD\u9055\u53CD\u74B0\u5883\u4FDD\u8B77\u3001\u52DE\u5DE5\u6216\u98DF\u54C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "section", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "h1", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\u885D\u523A\u4F60\u7684\u4E8B\u696D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "\u7531\u5DE5\u4F5C\u5C0F\u7D44\u9032\u884C\u76E1\u8CAC\u8ABF\u67E5 (\u6703\u540C\u8CA1\u52D9\u53CA\u6CD5\u52D9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " \u7ACB\u5373\u7533\u8ACB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "h1", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u4ECD\u6709\u554F\u984C\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\u7531\u5DE5\u4F5C\u5C0F\u7D44\u9032\u884C\u76E1\u8CAC\u8ABF\u67E5 (\u6703\u540C\u8CA1\u52D9\u53CA\u6CD5\u52D9)\u7531");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " \u7ACB\u5373\u7533\u8ACB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " \u7ACB\u5373\u7533\u8ACB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap\");\n.nav-item[_ngcontent-%COMP%] {\n  width: 13.5%;\n  margin: 0 12px;\n}\n.nav-item__expansion[_ngcontent-%COMP%], .nav-item__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav-item__text[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 1.25rem 3px;\n  border-bottom: 2px solid transparent;\n  color: #00779f;\n}\n.navigation__list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0;\n  list-style: none;\n  font-size: 12px;\n}\n.navigation__logo-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 36px;\n  color: #00779f;\n}\n.navigation__logo-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-left: 10%;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.text-theme-color[_ngcontent-%COMP%] {\n  color: #365d82;\n}\n.app__footer[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n  background-color: #00779f;\n}\n.footer[_ngcontent-%COMP%] {\n  min-height: 40vh;\n}\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans TC\", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.bg_gray[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: #00779F;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  font-weight: bold;\n  color: #00779F;\n}\nsection[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n  padding-left: 6rem;\n  padding-right: 6rem;\n  color: #00779F;\n}\n.investigators-button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #00779F;\n  padding: 6px 8px;\n  text-decoration: none;\n  font-size: 0.875rem;\n  min-width: 64px;\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  line-height: 1.75;\n  border-radius: 4px;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  border: 0;\n}\n.investigators-button[_ngcontent-%COMP%]:hover {\n  color: white;\n  box-shadow: 0 6px 13px 0 rgba(0, 128, 171, 0.4);\n  background-color: #00779F;\n}\n.hero__text[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: bold;\n}\n.hero__text[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  object-fit: contain;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  object-fit: contain;\n  background-color: #f3f3f3;\n  padding: 20px;\n  position: relative;\n  bottom: -40px;\n  z-index: -1;\n  border-radius: 12px;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .motto-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .motto-card[_ngcontent-%COMP%]   .quote-sign[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .motto-card[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: bold;\n  font-weight: bold;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%]   .award[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.invstigators[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.operation-flow[_ngcontent-%COMP%]   .image-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n}\n.operation-flow[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  font-weight: bold;\n}\n.operation-flow[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.qualification[_ngcontent-%COMP%]   .icon-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n}\n.qualification[_ngcontent-%COMP%]   .text-card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 2px 2px 25px rgba(0, 128, 171, 0.16);\n  transition: transform 0.1s ease-in;\n  box-shadow: none;\n}\n.qualification[_ngcontent-%COMP%]   .text-card[_ngcontent-%COMP%]   .qualification-header[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.qualification[_ngcontent-%COMP%]   .text-card[_ngcontent-%COMP%]   .application-number[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-style: italic;\n}\n.boost-business[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.boost-business[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #00779F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFUSw4RkFBQTtBQXRFUjtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQUY7QUFFRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFJRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBRko7QUFPRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTEo7QUFRRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFVQTs7RUFFRSxxQkFBQTtBQVBGO0FBZ0JBO0VBQ0UsY0FBQTtBQWJGO0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQWRGO0FBaUJBO0VBQ0UsZ0JBQUE7QUFkRjtBQXVCQTs7RUFFRSx1Q0FBQTtBQXBCRjtBQTZFQTtFQUNFLGFBQUE7QUExRUY7QUE4RUU7RUFDRSx5QkFBQTtBQTNFSjtBQStFQTtFQTdERSxrQkFBQTtFQStEQSxjQWxFVztBQVZiO0FBK0VBO0VBekRFLGlCQUFBO0VBQ0EsaUJBQUE7RUEwREEsaUJBQUE7RUFDQSxjQXhFVztBQUhiO0FBOEVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWhGVztBQUtiO0FBOEVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUtBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUE1RUY7QUE4RUU7RUFDRSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtBQTVFSjtBQXFGSTtFQTlERixlQUFBO0VBZ0VJLGlCQUFBO0FBbEZOO0FBcUZJO0VBMUZGLG1CQUFBO0FBUUY7QUF1RkU7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBckZOO0FBNEZNO0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQTFGUjtBQTZGTTtFQXRHSixzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFFQSxrQ0FBQTtBQVlGO0FBeUZRO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBdkZWO0FBMEZRO0VBMUlOLGlCQUFBO0VBQ0EsaUJBQUE7QUFtREY7QUEyRk07RUFsSEosc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBRUEsa0NBQUE7QUEwQkY7QUF1RlE7RUE3SU4sbUJBQUE7RUFDQSxpQkFBQTtFQThJUSxpQkFBQTtBQXBGVjtBQXVGUTtFQTdJTixtQkFBQTtBQXlERjtBQXdGUTtFQTdJTixtQkFBQTtBQXdERjtBQStGRTtFQXhJQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFFQSxrQ0FBQTtBQTZDRjtBQTJGRTtFQXpLQSxpQkFBQTtFQUNBLGlCQUFBO0VBMEtFLGlCQUFBO0FBeEZKO0FBMkZFO0VBaEtBLG1CQUFBO0FBd0VGO0FBK0ZFO0VBeEpBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUVBLGtDQUFBO0FBNkRGO0FBMkZFO0VBNUpBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUVBLGtDQUFBO0VBMEpFLGdCQUFBO0FBckZKO0FBdUZJO0VBN0xGLGlCQUFBO0VBQ0EsaUJBQUE7QUF5R0Y7QUF1Rkk7RUExTUYsa0JBQUE7RUE0TUksa0JBQUE7QUFyRk47QUE2RkU7RUF0S0EsZUFBQTtBQTZFRjtBQTZGRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQTNGSiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOizouizoueahENTU1xuXG4ubmF2LWl0ZW0ge1xuICB3aWR0aDogMTMuNSU7XG4gIG1hcmdpbjogMCAxMnB4O1xuXG4gICZfX2V4cGFuc2lvbixcbiAgJl9fbGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgbWFyZ2luOiAxLjI1cmVtIDAgMS4yNXJlbSAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDA3NzlmO1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgJl9fbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAmX19sb2dvLWFyZWEgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY29sb3I6ICMwMDc3OWY7XG4gIH1cblxuICAmX19sb2dvLWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbn1cblxuYSxcbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8vIOeUseaWvOmcgOimgeiZleeQhmJnLWNvbG9y77yM5omA5Lul5LiN55SoLm1haW5cbi8vIC5tYWluIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4vLyAgIG1hcmdpbi1yaWdodDogM3JlbTtcbi8vIH1cblxuLnRleHQtdGhlbWUtY29sb3Ige1xuICBjb2xvcjogIzM2NWQ4Mjtcbn1cblxuXG4uYXBwX19mb290ZXIge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NzlmO1xufVxuXG4uZm9vdGVyIHtcbiAgbWluLWhlaWdodDogNDB2aDtcbn1cblxuLy8g6LOi6LOi55qEQ1NTLS1FTkRcblxuLy8gR3VpZGVsaW5lIFZhcmlhYmxlc1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrVEM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG5oMSxcbnAge1xuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBUQycsIHNhbnMtc2VyaWY7XG59XG5cbiR0aGVtZS1jb2xvcjojMDA3NzlGO1xuXG5AbWl4aW4gYXJ0aWNsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbn1cblxuQG1peGluIGFydGljbGUtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1peGluIHByaW1hcnktc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1peGluIHNlY29uZGFyeS1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtaXhpbiBwcmltYXJ5LXRleHQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG5AbWl4aW4gc2Vjb25kYXJ5LXRleHQge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG5AbWl4aW4gaW1wb3J0YW50LWhpbnQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vLyBDdXN0b20gVmFyaWFibGVzXG5cbkBtaXhpbiBoaW50IHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG5AbWl4aW4gY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMjVweCByZ2IoMCAxMjggMTcxIC8gMTYlKTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjFzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbjtcbn1cblxuQG1peGluIGdpYW50LXRleHQge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi8vIHNoYXJlZCBjbGFzc2VzXG5cbi5kZXNjcmlwdGlvbiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5iZyB7XG4gICZfZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgfVxufVxuXG4udGl0bGUge1xuICBAaW5jbHVkZSBhcnRpY2xlLXRpdGxlO1xuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xufVxuXG4uc3VidGl0bGUge1xuICBAaW5jbHVkZSBwcmltYXJ5LXNlY3Rpb24tdGl0bGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDZyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDZyZW07XG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XG59XG5cbi5pbnZlc3RpZ2F0b3JzLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzc5RjtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG1pbi13aWR0aDogNjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcywgYm94LXNoYWRvdyAyNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcywgYm9yZGVyIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjg1N2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEzcHggMCByZ2IoMCAxMjggMTcxIC8gNDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NzlGO1xuICB9XG59XG5cbi8vIHNlY3Rpb25zXG5cbi5oZXJvIHtcbiAgJl9fdGV4dCB7XG5cbiAgICA+LnRpdGxlIHtcbiAgICAgIEBpbmNsdWRlIGdpYW50LXRleHQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICA+LmRlc2NyaXB0aW9uIHtcbiAgICAgIEBpbmNsdWRlIHNlY29uZGFyeS10ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG59XG5cbi5pbnZzdGlnYXRvcnMge1xuICA+Lmxpc3Qge1xuICAgID4uaXRlbSB7XG4gICAgICBpbWcge1xuICAgICAgICAvLyAgIExvZ2/mr5TkvovkuI3kuIDpgYLntbHkuIDpq5jluqZcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAtNDBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5tb3R0by1jYXJkIHtcbiAgICAgICAgQGluY2x1ZGUgY2FyZDtcblxuICAgICAgICAucXVvdGUtc2lnbiB7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdHRvIHtcbiAgICAgICAgICBAaW5jbHVkZSBwcmltYXJ5LXNlY3Rpb24tdGl0bGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmludHJvLWNhcmQge1xuICAgICAgICBAaW5jbHVkZSBjYXJkO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgQGluY2x1ZGUgc2Vjb25kYXJ5LXNlY3Rpb24tdGl0bGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXdhcmQge1xuICAgICAgICAgIEBpbmNsdWRlIHByaW1hcnktdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYW55IHtcbiAgICAgICAgICBAaW5jbHVkZSBzZWNvbmRhcnktdGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ub3BlcmF0aW9uLWZsb3cge1xuXG4gIC5pbWFnZS1jYXJkIHtcbiAgICBAaW5jbHVkZSBjYXJkO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBAaW5jbHVkZSBwcmltYXJ5LXNlY3Rpb24tdGl0bGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIEBpbmNsdWRlIHNlY29uZGFyeS10ZXh0O1xuICB9XG59XG5cblxuLnF1YWxpZmljYXRpb24ge1xuICAuaWNvbi1jYXJkIHtcbiAgICBAaW5jbHVkZSBjYXJkO1xuICB9XG5cbiAgLnRleHQtY2FyZCB7XG4gICAgQGluY2x1ZGUgY2FyZDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgLnF1YWxpZmljYXRpb24taGVhZGVyIHtcbiAgICAgIEBpbmNsdWRlIHByaW1hcnktc2VjdGlvbi10aXRsZTtcbiAgICB9XG5cbiAgICAuYXBwbGljYXRpb24tbnVtYmVyIHtcbiAgICAgIEBpbmNsdWRlIGFydGljbGUtdGl0bGU7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICB9XG5cbn1cblxuLmJvb3N0LWJ1c2luZXNzIHtcblxuICAudGl0bGUge1xuICAgIEBpbmNsdWRlIGdpYW50LXRleHQ7XG4gIH1cblxuICAuY3RhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzc5RjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category/category.component */ "clsX");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"]
    },
    {
        path: 'category/:categoryName',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map