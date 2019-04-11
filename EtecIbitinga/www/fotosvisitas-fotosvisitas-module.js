(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fotosvisitas-fotosvisitas-module"],{

/***/ "./src/app/fotosvisitas/fotosvisitas.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fotosvisitas/fotosvisitas.module.ts ***!
  \*****************************************************/
/*! exports provided: FotosvisitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosvisitasPageModule", function() { return FotosvisitasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fotosvisitas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fotosvisitas.page */ "./src/app/fotosvisitas/fotosvisitas.page.ts");







var routes = [
    {
        path: '',
        component: _fotosvisitas_page__WEBPACK_IMPORTED_MODULE_6__["FotosvisitasPage"]
    }
];
var FotosvisitasPageModule = /** @class */ (function () {
    function FotosvisitasPageModule() {
    }
    FotosvisitasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fotosvisitas_page__WEBPACK_IMPORTED_MODULE_6__["FotosvisitasPage"]]
        })
    ], FotosvisitasPageModule);
    return FotosvisitasPageModule;
}());



/***/ }),

/***/ "./src/app/fotosvisitas/fotosvisitas.page.html":
/*!*****************************************************!*\
  !*** ./src/app/fotosvisitas/fotosvisitas.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"cpsRed\">\n    <ion-buttons>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"cpsWhite\">\n      Fotos Visitas Tecnicas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fotosvisitas/fotosvisitas.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/fotosvisitas/fotosvisitas.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdG9zdmlzaXRhcy9mb3Rvc3Zpc2l0YXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fotosvisitas/fotosvisitas.page.ts":
/*!***************************************************!*\
  !*** ./src/app/fotosvisitas/fotosvisitas.page.ts ***!
  \***************************************************/
/*! exports provided: FotosvisitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosvisitasPage", function() { return FotosvisitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FotosvisitasPage = /** @class */ (function () {
    function FotosvisitasPage() {
    }
    FotosvisitasPage.prototype.ngOnInit = function () {
    };
    FotosvisitasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fotosvisitas',
            template: __webpack_require__(/*! ./fotosvisitas.page.html */ "./src/app/fotosvisitas/fotosvisitas.page.html"),
            styles: [__webpack_require__(/*! ./fotosvisitas.page.scss */ "./src/app/fotosvisitas/fotosvisitas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FotosvisitasPage);
    return FotosvisitasPage;
}());



/***/ })

}]);
//# sourceMappingURL=fotosvisitas-fotosvisitas-module.js.map