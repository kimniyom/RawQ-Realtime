(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkRawQ_App"] = self["webpackChunkRawQ_App"] || []).push([["src_app_config_config_module_ts"], {
    /***/
    85768: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigPageRoutingModule": function ConfigPageRoutingModule() {
          return (
            /* binding */
            _ConfigPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config.page */
      98756);

      var routes = [{
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_0__.ConfigPage
      }];

      var _ConfigPageRoutingModule = function ConfigPageRoutingModule() {
        _classCallCheck(this, ConfigPageRoutingModule);
      };

      _ConfigPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConfigPageRoutingModule);
      /***/
    },

    /***/
    94726: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigPageModule": function ConfigPageModule() {
          return (
            /* binding */
            _ConfigPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config-routing.module */
      85768);
      /* harmony import */


      var _config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config.page */
      98756);

      var _ConfigPageModule = function ConfigPageModule() {
        _classCallCheck(this, ConfigPageModule);
      };

      _ConfigPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _config_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigPageRoutingModule],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_1__.ConfigPage]
      })], _ConfigPageModule);
      /***/
    },

    /***/
    98756: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfigPage": function ConfigPage() {
          return (
            /* binding */
            _ConfigPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./config.page.html */
      32437);
      /* harmony import */


      var _config_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config.page.scss */
      36830);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ConfigPage = /*#__PURE__*/function () {
        function ConfigPage(router) {
          _classCallCheck(this, ConfigPage);

          this.router = router;
          localStorage.clear();
        }

        _createClass(ConfigPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.navigate(['/rootpage']);
            /*
            let ip = localStorage.getItem('ip');
            if(ip != null){
              this.router.navigate(['/home']);
            } else {
              this.router.navigate(['/main']);
            }
            */
          }
        }]);

        return ConfigPage;
      }();

      _ConfigPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ConfigPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-config',
        template: _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_config_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ConfigPage);
      /***/
    },

    /***/
    36830: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    32437: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>HOME</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_config_config_module_ts-es5.js.map