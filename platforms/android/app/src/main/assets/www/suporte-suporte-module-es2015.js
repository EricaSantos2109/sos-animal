(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suporte-suporte-module"],{

/***/ "0NE1":
/*!***************************************************!*\
  !*** ./src/app/suporte/suporte-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SuportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageRoutingModule", function() { return SuportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suporte.page */ "27eb");




const routes = [
    {
        path: '',
        component: _suporte_page__WEBPACK_IMPORTED_MODULE_3__["SuportePage"]
    }
];
let SuportePageRoutingModule = class SuportePageRoutingModule {
};
SuportePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuportePageRoutingModule);



/***/ }),

/***/ "27eb":
/*!*****************************************!*\
  !*** ./src/app/suporte/suporte.page.ts ***!
  \*****************************************/
/*! exports provided: SuportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePage", function() { return SuportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_suporte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./suporte.page.html */ "iLSr");
/* harmony import */ var _suporte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suporte.page.scss */ "WR8A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SuportePage = class SuportePage {
    constructor() { }
    ngOnInit() {
    }
};
SuportePage.ctorParameters = () => [];
SuportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-suporte',
        template: _raw_loader_suporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SuportePage);



/***/ }),

/***/ "K6Oj":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.module.ts ***!
  \*******************************************/
/*! exports provided: SuportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuportePageModule", function() { return SuportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _suporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suporte-routing.module */ "0NE1");
/* harmony import */ var _suporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suporte.page */ "27eb");







let SuportePageModule = class SuportePageModule {
};
SuportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _suporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuportePageRoutingModule"]
        ],
        declarations: [_suporte_page__WEBPACK_IMPORTED_MODULE_6__["SuportePage"]]
    })
], SuportePageModule);



/***/ }),

/***/ "WR8A":
/*!*******************************************!*\
  !*** ./src/app/suporte/suporte.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vwb3J0ZS9zdXBvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N1cG9ydGUvc3Vwb3J0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "iLSr":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/suporte/suporte.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon slot=\"start\" src=\"../../assets/icone-app.svg\" style=\"margin-left: 14px; font-size: xx-large\"></ion-icon>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title><b>S.O.S Animal</b></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-router-outlet></ion-router-outlet>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <!-- div com classe para centralizar o conteúdo -->\r\n  <div class=\"ion-justify-content-center\" id=\"container\">\r\n    <div class=\"app-logo\">\r\n      <ion-icon src=\"../../assets/ponto-de-interrogacao.svg\"></ion-icon>\r\n      <h1>SUPORTE</h1>\r\n    </div>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\r\n      <!-- grade para manter os elementos um embaixo do outro (um botão em cada linha) -->\r\n      <ion-grid>\r\n        <!-- inicio da descrição-->\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <h4>Qual o problema?</h4>\r\n          <ion-col size=\"9\">\r\n            <ion-input class=\"light\" placeholder=\"Descreva detalhadamente\" type=\"text\" color=\"light\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- fim da descrição -->\r\n\r\n        <!-- botão de salvar -->\r\n        <ion-row style=\"padding-top: 28px;\">\r\n          <ion-col>\r\n            <ion-button color=\"dark\" fill=\"outline\"> Enviar </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- fim do botão de entrar -->\r\n      </ion-grid>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=suporte-suporte-module-es2015.js.map