(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finalizar-adocao-finalizar-adocao-module"],{

/***/ "8m/4":
/*!*************************************************************!*\
  !*** ./src/app/finalizar-adocao/finalizar-adocao.module.ts ***!
  \*************************************************************/
/*! exports provided: FinalizarAdocaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarAdocaoPageModule", function() { return FinalizarAdocaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _finalizar_adocao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finalizar-adocao-routing.module */ "ZhSJ");
/* harmony import */ var _finalizar_adocao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finalizar-adocao.page */ "QX1h");







let FinalizarAdocaoPageModule = class FinalizarAdocaoPageModule {
};
FinalizarAdocaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finalizar_adocao_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinalizarAdocaoPageRoutingModule"]
        ],
        declarations: [_finalizar_adocao_page__WEBPACK_IMPORTED_MODULE_6__["FinalizarAdocaoPage"]]
    })
], FinalizarAdocaoPageModule);



/***/ }),

/***/ "QX1h":
/*!***********************************************************!*\
  !*** ./src/app/finalizar-adocao/finalizar-adocao.page.ts ***!
  \***********************************************************/
/*! exports provided: FinalizarAdocaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarAdocaoPage", function() { return FinalizarAdocaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_finalizar_adocao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./finalizar-adocao.page.html */ "f8vH");
/* harmony import */ var _finalizar_adocao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finalizar-adocao.page.scss */ "Ts27");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FinalizarAdocaoPage = class FinalizarAdocaoPage {
    constructor() { }
    ngOnInit() {
    }
};
FinalizarAdocaoPage.ctorParameters = () => [];
FinalizarAdocaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-finalizar-adocao',
        template: _raw_loader_finalizar_adocao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finalizar_adocao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FinalizarAdocaoPage);



/***/ }),

/***/ "Ts27":
/*!*************************************************************!*\
  !*** ./src/app/finalizar-adocao/finalizar-adocao.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluYWxpemFyLWFkb2Nhby9maW5hbGl6YXItYWRvY2FvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsaXphci1hZG9jYW8vZmluYWxpemFyLWFkb2Nhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9Il19 */");

/***/ }),

/***/ "ZhSJ":
/*!*********************************************************************!*\
  !*** ./src/app/finalizar-adocao/finalizar-adocao-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FinalizarAdocaoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarAdocaoPageRoutingModule", function() { return FinalizarAdocaoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _finalizar_adocao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalizar-adocao.page */ "QX1h");




const routes = [
    {
        path: '',
        component: _finalizar_adocao_page__WEBPACK_IMPORTED_MODULE_3__["FinalizarAdocaoPage"]
    }
];
let FinalizarAdocaoPageRoutingModule = class FinalizarAdocaoPageRoutingModule {
};
FinalizarAdocaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinalizarAdocaoPageRoutingModule);



/***/ }),

/***/ "f8vH":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finalizar-adocao/finalizar-adocao.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-icon slot=\"start\" src=\"../../assets/icone-app.svg\" style=\"margin-left: 14px; font-size: xx-large\"></ion-icon>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title><b>S.O.S Animal</b></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <!-- OBS:. Todos os estilos utilizados estão no global.css -->\n\n  <!-- div com classe para centralizar o conteúdo -->\n  <div class=\"ion-justify-content-center\" id=\"container\">\n    <div class=\"app-logo\">\n      <ion-icon src=\"../../assets/finalizar-adocao.svg\"></ion-icon>\n      <h1>FINALIZAR ADOÇÃO</h1>\n    </div>\n    <!-- grade para manter os elementos um embaixo do outro (um botão em cada linha) -->\n    <ion-grid>\n      <h5><b>Selecione uma das opções para entrar em contato com o doador:</b></h5>\n      <!-- forma de contato com o doador -->\n      <ion-row>\n        <ion-col> <!-- como tem apenas uma coluna o botão ficará no centro da linha -->\n          <ion-button class=\"login\" color=\"success\" fill=\"solid\">\n            <ion-icon name=\"call-outline\"></ion-icon>\n            Entrar em contato por ligação.\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"login\" color=\"light\" fill=\"solid\">\n            <ion-icon name=\"mail-outline\"></ion-icon>\n            Entrar em contato por e-mail.\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- fim da forma de contato com o doador -->\n      <ion-row>\n        <ion-col>\n          <h5><b>Aconteceu algum problema? Conte para nós!</b></h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=finalizar-adocao-finalizar-adocao-module-es2015.js.map