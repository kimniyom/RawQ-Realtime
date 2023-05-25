(self["webpackChunkRawQ_App"] = self["webpackChunkRawQ_App"] || []).push([["src_app_rootpage_rootpage_module_ts"],{

/***/ 65525:
/*!*****************************************************!*\
  !*** ./src/app/rootpage/rootpage-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootpagePageRoutingModule": function() { return /* binding */ RootpagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rootpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootpage.page */ 1159);




const routes = [
    {
        path: '',
        component: _rootpage_page__WEBPACK_IMPORTED_MODULE_0__.RootpagePage
    }
];
let RootpagePageRoutingModule = class RootpagePageRoutingModule {
};
RootpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RootpagePageRoutingModule);



/***/ }),

/***/ 56321:
/*!*********************************************!*\
  !*** ./src/app/rootpage/rootpage.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootpagePageModule": function() { return /* binding */ RootpagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rootpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootpage-routing.module */ 65525);
/* harmony import */ var _rootpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootpage.page */ 1159);







let RootpagePageModule = class RootpagePageModule {
};
RootpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rootpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.RootpagePageRoutingModule
        ],
        declarations: [_rootpage_page__WEBPACK_IMPORTED_MODULE_1__.RootpagePage]
    })
], RootpagePageModule);



/***/ }),

/***/ 1159:
/*!*******************************************!*\
  !*** ./src/app/rootpage/rootpage.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootpagePage": function() { return /* binding */ RootpagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rootpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rootpage.page.html */ 93869);
/* harmony import */ var _rootpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootpage.page.scss */ 22465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);





let RootpagePage = class RootpagePage {
    constructor(router) {
        this.router = router;
        this.ip = "";
        this.port = "";
        this.ip = localStorage.getItem('ip');
        this.port = localStorage.getItem('port');
    }
    ngOnInit() {
        if (this.ip) {
            this.router.navigate(['/main']);
        }
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.ip || !this.port) {
                alert("กรอกข้อมูลไม่ครบ...");
            }
            else {
                localStorage.setItem('ip', this.ip);
                localStorage.setItem('port', this.port);
                this.ngOnInit();
            }
        });
    }
};
RootpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RootpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-rootpage',
        template: _raw_loader_rootpage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rootpage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RootpagePage);



/***/ }),

/***/ 22465:
/*!*********************************************!*\
  !*** ./src/app/rootpage/rootpage.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290cGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 93869:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rootpage/rootpage.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Setting IP</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"padding: 10px;\">\n    <div id=\"container\">\n        <div class=\"fullheight\">\n\n            <ion-list-header>\n                <b>ตั้งค่า IP</b>\n            </ion-list-header>\n            <ion-card mode=\"ios\">\n                <ion-card-content>\n                    <ion-list>\n                        <ion-item>\n                            <ion-label position=\"floating\">IP SERVER</ion-label>\n                            <ion-input name=\"ip\" [(ngModel)]=\"ip\" placeholder=\"xxx.xx.xxx.x\"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">PORT API</ion-label>\n                            <ion-input name=\"port\" [(ngModel)]=\"port\"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <ion-button color=\"success\" shape=\"round\" expand=\"block\" (click)=\"save()\">\n                        <ion-icon slot=\"start\" name=\"save\"></ion-icon>บันทึก\n                    </ion-button>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_rootpage_rootpage_module_ts-es2015.js.map