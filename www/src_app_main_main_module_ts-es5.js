(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkRawQ_App"] = self["webpackChunkRawQ_App"] || []).push([["src_app_main_main_module_ts"], {
    /***/
    19853: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPageRoutingModule": function MainPageRoutingModule() {
          return (
            /* binding */
            _MainPageRoutingModule
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


      var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main.page */
      64332);

      var routes = [{
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
      }];

      var _MainPageRoutingModule = function MainPageRoutingModule() {
        _classCallCheck(this, MainPageRoutingModule);
      };

      _MainPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MainPageRoutingModule);
      /***/
    },

    /***/
    65705: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPageModule": function MainPageModule() {
          return (
            /* binding */
            _MainPageModule
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


      var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main-routing.module */
      19853);
      /* harmony import */


      var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main.page */
      64332);

      var _MainPageModule = function MainPageModule() {
        _classCallCheck(this, MainPageModule);
      };

      _MainPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
      })], _MainPageModule);
      /***/
    },

    /***/
    64332: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainPage": function MainPage() {
          return (
            /* binding */
            _MainPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./main.page.html */
      52788);
      /* harmony import */


      var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main.page.scss */
      37960);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/text-to-speech/ngx */
      98400);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _MainPage = /*#__PURE__*/function () {
        function MainPage(navCtrl, router, tts, http) {
          _classCallCheck(this, MainPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.tts = tts;
          this.http = http;
          this.ip = ""; //flagname: any = true;

          this.department = "";
          this.queuestart = "ขอเชิญคิวหมายเลข";
          this.queunumber = "RX001";
          this.queuename = "คุณวันนี้ อากาศดีจัง";
          this.queuedepartment = "";
          this.queuechannel = "1";
          this.monitornumber = "";
          this.port = "";
          this.depList = [];
          this.depNumber = [];
          this.ip = localStorage.getItem('ip');
          this.port = localStorage.getItem('port');
        }

        _createClass(MainPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.department = localStorage.getItem('department');
            this.queuedepartment = localStorage.getItem('queuedepartment');
            this.saylevel = localStorage.getItem('saylevel');
            this.monitornumber = localStorage.getItem('monitornumber');
            this.getDepartment();

            if (this.department) {
              this.setConfig();
            }
          }
        }, {
          key: "getDepartment",
          value: function getDepartment() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var api, res;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      api = "http://" + this.ip + "/rawq/service/getdepartment";
                      _context.next = 3;
                      return this.http.get(api).toPromise();

                    case 3:
                      res = _context.sent;
                      this.depList = res;
                      console.log(res.status);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getMonitor",
          value: function getMonitor(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var department, api, res;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      department = e.detail.value;
                      api = "http://" + this.ip + "/rawq/service/getdepartmentrow/" + department;
                      _context2.next = 4;
                      return this.http.get(api).toPromise();

                    case 4:
                      res = _context2.sent;
                      this.depNumber = res; //console.log(res.status);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setFlagname",
          value: function setFlagname($event) {
            /*
            const fFlagname = this.flagname;
            if(fFlagname == true){
              this.flagname = true;
              localStorage.setItem('flagnamecall',"1");
            } else {
              this.flagname = false;
              localStorage.setItem('flagnamecall',"2");
            }
            localStorage.setItem('flagname',fFlagname);
            */
          }
        }, {
          key: "setConfig",
          value: function setConfig() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.department || !this.queuedepartment || !this.saylevel || !this.monitornumber) {
                        alert("กรอกข้อมูลไม่ครบ...");
                      } else {
                        localStorage.setItem('department', this.department);
                        localStorage.setItem('queuedepartment', this.queuedepartment);
                        localStorage.setItem('saylevel', this.saylevel);
                        localStorage.setItem('monitornumber', this.monitornumber);
                        this.router.navigateByUrl('/home');
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "voiceTest",
          value: function voiceTest() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var qNumber;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      qNumber = "ขอเชิญคิวหมายเลข  " + this.queunumber + " " + this.queuename + " " + this.queuedepartment + 1;
                      this.tts.speak({
                        text: qNumber,
                        rate: this.saylevel,
                        locale: 'th-TH'
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "resetConfig",
          value: function resetConfig() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.router.navigateByUrl('/config');

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return MainPage;
      }();

      _MainPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__.TextToSpeech
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }];
      };

      _MainPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MainPage);
      /***/
    },

    /***/
    37960: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".setcenter {\n  text-align: center;\n}\n\nion-content {\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0Y2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    52788: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>RawQ Setting</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"padding: 10px;\">\n    <div id=\"container\">\n        <div class=\"fullheight\">\n\n            <ion-card mode=\"ios\">\n                <ion-card-content>\n                    <ion-button color=\"success\" shape=\"round\" expand=\"block\" (click)=\"resetConfig()\">\n                        <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>ResetConfig\n                    </ion-button>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"ip != ''\">\n                <ion-card-content>\n                    <ion-list-header>\n                        <b>ตั้งค่า</b>\n                    </ion-list-header>\n                    <ion-item>\n                        <ion-label>จุดบริการ(สามารถดูได้ที่เครื่อง Client)</ion-label>\n                        <ion-select placeholder=\"Select One\" [(ngModel)]=\"department\" (ionChange)=\"getMonitor($event)\">\n                            <ion-select-option *ngFor=\"let item of depList\" value=\"{{ item.id }}\">{{item.id + ' ' + item.department}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n\n                </ion-card-content>\n                <ion-card-content>\n                    <ion-item>\n                        <ion-label>จุดแสดงหน้าจอแสดงคิว</ion-label>\n                        <ion-select placeholder=\"Select One\" [(ngModel)]=\"monitornumber\">\n                            <ion-select-option *ngFor=\"let item of depNumber\" value=\"{{ item.id }}\">{{item.monitornumber}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card mode=\"ios\" *ngIf=\"ip != ''\">\n                <ion-card-content>\n                    <div>\n                        <ion-list>\n                            <ion-list-header style=\"display: none;\">\n                                <b>ตั้งค่าขานชื่อ</b>\n                            </ion-list-header>\n                            <ion-item style=\"display: none;\">\n                                <ion-label>ขานชื่อ</ion-label>\n                                <ion-toggle [(ngModel)]=\"flagname\" [checked]=\"flagname\" (ionChange)=\"setFlagname($event)\" mode=\"ios\"></ion-toggle>\n                            </ion-item>\n\n                            <ion-list-header>\n                                <b>ตั้งค่าอ่านคิว</b>\n                            </ion-list-header>\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col>\n                                            <ion-input name=\"queuestart\" [(ngModel)]=\"queuestart\" style=\"text-align: center;border-radius: 10px; background-color: aliceblue;\" readonly></ion-input>\n                                        </ion-col>\n                                        <ion-col>\n                                            <ion-input name=\"queunumber\" [(ngModel)]=\"queunumber\" style=\"text-align: center; background-color: aliceblue; border-radius: 10px;\" readonly></ion-input>\n                                        </ion-col>\n                                        <ion-col>\n                                            <ion-input name=\"queuename\" [(ngModel)]=\"queuename\" style=\"text-align: center;background-color: aliceblue;border-radius: 10px;\" readonly></ion-input>\n                                        </ion-col>\n                                        <ion-col>\n                                            <ion-input name=\"queuedepartment\" [(ngModel)]=\"queuedepartment\" style=\"text-align: center;border-radius: 10px;background-color: bisque;\"></ion-input>\n                                        </ion-col>\n                                        <ion-col>\n                                            <ion-input name=\"queuechannel\" [(ngModel)]=\"queuechannel\" style=\"text-align: center;background-color: aliceblue;border-radius: 10px;\" readonly></ion-input>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                        </ion-list>\n                        <ion-list>\n                            <ion-radio-group value=\"biff\" [(ngModel)]=\"saylevel\">\n                                <ion-list-header>\n                                    <ion-label><b>ความเร็วการอ่าน</b></ion-label>\n                                </ion-list-header>\n\n                                <ion-item>\n                                    <ion-label>ช้า</ion-label>\n                                    <ion-radio slot=\"start\" value=\"0.5\"></ion-radio>\n                                </ion-item>\n\n                                <ion-item>\n                                    <ion-label>ปกติ</ion-label>\n                                    <ion-radio slot=\"start\" value=\"0.7\"></ion-radio>\n                                </ion-item>\n\n                                <ion-item>\n                                    <ion-label>เร็ว</ion-label>\n                                    <ion-radio slot=\"start\" value=\"0.8\"></ion-radio>\n                                </ion-item>\n\n                                <ion-item>\n                                    <ion-label>เร็วขึ้น</ion-label>\n                                    <ion-radio slot=\"start\" value=\"0.9\"></ion-radio>\n                                </ion-item>\n\n                                <ion-item>\n                                    <ion-label>เร็วมาก</ion-label>\n                                    <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n                                </ion-item>\n                            </ion-radio-group>\n                        </ion-list>\n                        <ion-list>\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col size=\"6\">\n                                        <ion-button color=\"primary\" shape=\"round\" expand=\"block\" size=\"large\" (click)=\"setConfig()\">\n                                            <ion-icon slot=\"start\" name=\"cog\"></ion-icon>บันทึกการตั้งค่า\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col size=\"6\">\n                                        <ion-button color=\"danger\" shape=\"round\" expand=\"block\" size=\"large\" (click)=\"voiceTest()\">\n                                            <ion-icon slot=\"start\" name=\"radio-outline\"></ion-icon>ทดสอบเสียง\n                                        </ion-button>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-list>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_main_main_module_ts-es5.js.map