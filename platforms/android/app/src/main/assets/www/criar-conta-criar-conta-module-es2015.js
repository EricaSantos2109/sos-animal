(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-conta-criar-conta-module"],{

/***/ "9Lcu":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/criar-conta/criar-conta.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n\n  <!-- div com classe para centralizar o conteúdo -->\n  <div class=\"ion-justify-content-center\" id=\"container\">\n    <div class=\"app-logo\">\n      <ion-icon src=\"../../assets/icone-app.svg\"></ion-icon>\n      <h1>S.O.S ANIMAL</h1>\n      <h4>Cadastro</h4>\n    </div>\n\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n      <!-- grade para manter os elementos um embaixo do outro (um botão em cada linha) -->\n      <ion-grid>\n        <!-- inicio do cadastro -->\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"9\">\n            <ion-input class=\"light\" placeholder=\"Nome Completo\" type=\"text\" color=\"light\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"9\">\n            <ion-input class=\"light\" placeholder=\"E-mail\" type=\"text\" color=\"light\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"9\">\n            <ion-input class=\"light\" placeholder=\"Senha\" type=\"password\" color=\"light\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"9\">\n            <ion-input class=\"light\" placeholder=\"Confirmar Senha\" type=\"password\" color=\"light\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <!-- fim do cadastro -->\n\n        <!-- botão de entrar -->\n        <ion-row style=\"padding-top: 28px;\">\n          <ion-col>\n            <ion-button color=\"dark\" fill=\"outline\"> Salvar </ion-button>\n          </ion-col>\n        </ion-row>\n        <!-- fim do botão de entrar -->\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Ns64":
/*!*************************************************!*\
  !*** ./src/app/criar-conta/criar-conta.page.ts ***!
  \*************************************************/
/*! exports provided: CriarContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarContaPage", function() { return CriarContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_criar_conta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./criar-conta.page.html */ "9Lcu");
/* harmony import */ var _criar_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./criar-conta.page.scss */ "UD/q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CriarContaPage = class CriarContaPage {
    constructor() { }
    ngOnInit() {
    }
};
CriarContaPage.ctorParameters = () => [];
CriarContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-criar-conta',
        template: _raw_loader_criar_conta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_criar_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CriarContaPage);



/***/ }),

/***/ "OkYa":
/*!***************************************************!*\
  !*** ./src/app/criar-conta/criar-conta.module.ts ***!
  \***************************************************/
/*! exports provided: CriarContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarContaPageModule", function() { return CriarContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _criar_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-conta-routing.module */ "irAY");
/* harmony import */ var _criar_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar-conta.page */ "Ns64");







let CriarContaPageModule = class CriarContaPageModule {
};
CriarContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _criar_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarContaPageRoutingModule"]
        ],
        declarations: [_criar_conta_page__WEBPACK_IMPORTED_MODULE_6__["CriarContaPage"]]
    })
], CriarContaPageModule);



/***/ }),

/***/ "UD/q":
/*!***************************************************!*\
  !*** ./src/app/criar-conta/criar-conta.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JpYXItY29udGEvY3JpYXItY29udGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY3JpYXItY29udGEvY3JpYXItY29udGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4iXX0= */");

/***/ }),

/***/ "irAY":
/*!***********************************************************!*\
  !*** ./src/app/criar-conta/criar-conta-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CriarContaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarContaPageRoutingModule", function() { return CriarContaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _criar_conta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criar-conta.page */ "Ns64");




const routes = [
    {
        path: '',
        component: _criar_conta_page__WEBPACK_IMPORTED_MODULE_3__["CriarContaPage"]
    }
];
let CriarContaPageRoutingModule = class CriarContaPageRoutingModule {
};
CriarContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CriarContaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=criar-conta-criar-conta-module-es2015.js.map