(self["webpackChunkRawQ_App"] = self["webpackChunkRawQ_App"] || []).push([["src_app_popupqueue_popupqueue_module_ts"],{

/***/ 42048:
/*!*********************************************************!*\
  !*** ./src/app/popupqueue/popupqueue-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupqueuePageRoutingModule": function() { return /* binding */ PopupqueuePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _popupqueue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupqueue.page */ 88662);




const routes = [
    {
        path: '',
        component: _popupqueue_page__WEBPACK_IMPORTED_MODULE_0__.PopupqueuePage
    }
];
let PopupqueuePageRoutingModule = class PopupqueuePageRoutingModule {
};
PopupqueuePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PopupqueuePageRoutingModule);



/***/ }),

/***/ 4272:
/*!*************************************************!*\
  !*** ./src/app/popupqueue/popupqueue.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupqueuePageModule": function() { return /* binding */ PopupqueuePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _popupqueue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupqueue-routing.module */ 42048);
/* harmony import */ var _popupqueue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupqueue.page */ 88662);







let PopupqueuePageModule = class PopupqueuePageModule {
};
PopupqueuePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _popupqueue_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopupqueuePageRoutingModule
        ],
        declarations: [_popupqueue_page__WEBPACK_IMPORTED_MODULE_1__.PopupqueuePage]
    })
], PopupqueuePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_popupqueue_popupqueue_module_ts-es2015.js.map