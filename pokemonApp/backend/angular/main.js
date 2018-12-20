(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n  margin-top: 1rem;\r\n  width: 80%;\r\n  margin: 1rem auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header/header.component */ "./src/app/header/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pokemon_pokemon_create_pokemon_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pokemon/pokemon-create/pokemon-create.component */ "./src/app/pokemon/pokemon-create/pokemon-create.component.ts");
/* harmony import */ var _pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pokemon/pokemon-list/pokemon-list.component */ "./src/app/pokemon/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _pokemon_moveset_create_moveset_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pokemon/moveset-create/moveset-create.component */ "./src/app/pokemon/moveset-create/moveset-create.component.ts");
/* harmony import */ var _pokemon_moveset_list_moveset_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pokemon/moveset-list/moveset-list.component */ "./src/app/pokemon/moveset-list/moveset-list.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _pokemon_attack_create_attack_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pokemon/attack-create/attack-create.component */ "./src/app/pokemon/attack-create/attack-create.component.ts");
/* harmony import */ var _pokemon_attack_list_attack_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pokemon/attack-list/attack-list.component */ "./src/app/pokemon/attack-list/attack-list.component.ts");
/* harmony import */ var _pokemon_display_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pokemon/display_dashboard/dashboard/dashboard.component */ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _pokemon_stats_create_stats_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pokemon/stats-create/stats-create.component */ "./src/app/pokemon/stats-create/stats-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"],
                _header_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"],
                _pokemon_pokemon_create_pokemon_create_component__WEBPACK_IMPORTED_MODULE_10__["PokemonCreateComponent"],
                _pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_11__["PokemonListComponent"],
                _pokemon_moveset_create_moveset_create_component__WEBPACK_IMPORTED_MODULE_12__["MovesetCreateComponent"],
                _pokemon_moveset_list_moveset_list_component__WEBPACK_IMPORTED_MODULE_13__["MovesetListComponent"],
                _pokemon_attack_create_attack_create_component__WEBPACK_IMPORTED_MODULE_15__["AttackCreateComponent"],
                _pokemon_attack_list_attack_list_component__WEBPACK_IMPORTED_MODULE_16__["AttackListComponent"],
                _pokemon_display_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _pokemon_stats_create_stats_create_component__WEBPACK_IMPORTED_MODULE_18__["StatsCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_14__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nimg {\r\n  height: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/header/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <img src=\"assets/resources/pokeball.svg\">\r\n  <span>Pokemon DB</span>\r\n  <span id=\"spacer\"></span>\r\n  <mat-menu #appMenu=\"matMenu\">\r\n    <a routerLink=\"\"><button mat-menu-item> Create Pokemon</button></a>\r\n    <a routerLink=\"attack\"><button mat-menu-item>Add Attacks</button></a>\r\n    <a routerLink=\"moveset\"><button mat-menu-item >Add Movesets</button></a>\r\n    <a routerLink=\"addStats\"><button mat-menu-item>Add Stats</button></a>\r\n    <a routerLink=\"list\"><button mat-menu-item>Pokemon DB</button></a>\r\n  </mat-menu>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/header/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/attack-create/attack-create.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pokemon/attack-create/attack-create.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n  background-color: aliceblue;\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/attack-create/attack-create.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pokemon/attack-create/attack-create.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 style=\"text-align: center\">Add an Attack</h1>\r\n  <form (submit)=\"onSubmit(attacksForm)\" #attacksForm=\"ngForm\">\r\n    <mat-card>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput type=\"number\" ngModel name=\"attackNumber\" placeholder=\"Enter Attack No.\" required #attackNo=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"attackNo.invalid\">\r\n          Please enter an attack number\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput name=\"attackName\" ngModel placeholder=\"Enter Attack Name\" required #attackName=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"attackName.invalid\">\r\n          Please enter an attack name\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput name=\"powerpoints\" ngModel placeholder=\"Enter Power Points\" required #pp=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"pp.invalid\">\r\n          Please enter the power points\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput name=\"power\" ngModel placeholder=\"Enter Power\" required #power=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"power.invalid\">\r\n          Please enter the power\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput name=\"accuracy\" ngModel placeholder=\"Enter Accuracy\" required #accuracy=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"accuracy.invalid\">\r\n          Please enter the accuracy\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput name=\"type\" ngModel placeholder=\"Entery Type\" required #type=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"type.invalid\">\r\n          Please enter a Type\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <div class=\"input-group\">\r\n          <input matInput name=\"category\" ngModel placeholder=\"Enter Category\" required #category=\"ngModel\">\r\n        </div>\r\n        <mat-error *ngIf=\"category.invalid\">\r\n          Please enter a category\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <hr>\r\n      <button class=\"btn btn-primary\" type=\"submit\">Add</button>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pokemon/attack-create/attack-create.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pokemon/attack-create/attack-create.component.ts ***!
  \******************************************************************/
/*! exports provided: AttackCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackCreateComponent", function() { return AttackCreateComponent; });
/* harmony import */ var _services_attacks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/attacks.service */ "./src/app/services/attacks.service.ts");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttackCreateComponent = /** @class */ (function () {
    function AttackCreateComponent(snackbar, pokemonService, attackService) {
        this.snackbar = snackbar;
        this.pokemonService = pokemonService;
        this.attackService = attackService;
    }
    AttackCreateComponent.prototype.ngOnInit = function () {
    };
    AttackCreateComponent.prototype.onSubmit = function (form) {
        if (form.invalid) {
            return;
        }
        var attack = {
            id: null,
            attackNumber: form.value.attackNumber,
            attackName: form.value.attackName,
            power: form.value.power,
            PP: form.value.powerpoints,
            accuracy: form.value.accuracy,
            type: form.value.type,
            category: form.value.category
        };
        this.attackService.addAttack(attack);
        form.resetForm();
        this.snackbar.open('Attack Added', 'Close', {
            duration: 3000
        });
    };
    AttackCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-attack-create',
            template: __webpack_require__(/*! ./attack-create.component.html */ "./src/app/pokemon/attack-create/attack-create.component.html"),
            styles: [__webpack_require__(/*! ./attack-create.component.css */ "./src/app/pokemon/attack-create/attack-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"], _services_attacks_service__WEBPACK_IMPORTED_MODULE_0__["AttacksService"]])
    ], AttackCreateComponent);
    return AttackCreateComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/attack-list/attack-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pokemon/attack-list/attack-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pokemon/attack-list/attack-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pokemon/attack-list/attack-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  attack-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pokemon/attack-list/attack-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pokemon/attack-list/attack-list.component.ts ***!
  \**************************************************************/
/*! exports provided: AttackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackListComponent", function() { return AttackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttackListComponent = /** @class */ (function () {
    function AttackListComponent() {
    }
    AttackListComponent.prototype.ngOnInit = function () {
    };
    AttackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attack-list',
            template: __webpack_require__(/*! ./attack-list.component.html */ "./src/app/pokemon/attack-list/attack-list.component.html"),
            styles: [__webpack_require__(/*! ./attack-list.component.css */ "./src/app/pokemon/attack-list/attack-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttackListComponent);
    return AttackListComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pokemon/display_dashboard/dashboard/dashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-spinner{\r\n\r\n  margin-top: 10em;\r\n  margin-bottom: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/*img {\r\n  width: 200px;\r\n  height: 200px;\r\n}*/\r\n.weaknesses, .resistances {\r\n  margin-top: 5em;\r\n}\r\nmat-card{\r\n  width: 100%;\r\n}\r\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pokemon/display_dashboard/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!finishedLoading\" [diameter]=\"200\" [strokeWidth]=\"10\" mode=\"indeterminate\"></mat-spinner>\r\n<div *ngIf=\"pokemon && finishedLoading\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-4\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <div mat-card-avatar [style]=\"updateBackground()\">\r\n            </div>\r\n            <mat-card-title>{{pokemon.pokemonName}}</mat-card-title>\r\n            <mat-card-subtitle>Kdex: #{{pokemon.kdex}}</mat-card-subtitle>\r\n            <mat-card-subtitle>Type: {{pokemon.types}}</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"basic-pokemon-info\">\r\n              <p> Evolution: <a href=\"\">{{pokemon.evolution.pokemonName}}</a></p>\r\n              <p> Ability: {{pokemon.abilities.abilityName}}</p>\r\n              <p> Height: {{pokemon.height}}\"</p>\r\n              <p> Weight: {{pokemon.weight}} lbs.</p>\r\n              <p> Description: {{pokemon.description}}</p>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-8 col-xs-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-sm-6\">\r\n            <mat-accordion>\r\n              <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                  <h5>Reistances</h5>\r\n                </mat-expansion-panel-header>\r\n                <div>\r\n                  <div *ngFor=\"let t of pokemon.resistances.resistances\">\r\n                    <p>{{t}}</p>\r\n                  </div>\r\n                </div>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6\">\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <h5>Weaknesses</h5>\r\n              </mat-expansion-panel-header>\r\n              <div>\r\n                <div *ngFor=\"let t of pokemon.weaknesses.weaknesses\">\r\n                  <p>{{t}}</p>\r\n                </div>\r\n              </div>\r\n            </mat-expansion-panel>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top: 2em;\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <mat-card>\r\n              <mat-card-header>\r\n                <mat-card-title>Moveset</mat-card-title>\r\n              </mat-card-header>\r\n              <mat-card-content>\r\n                <table mat-table *ngIf=\"pokemon.moveset != undefined\" [dataSource]=\"pokemon.moveset.attacks\" class=\"mat-elevation-z8\">\r\n                  <ng-container matColumnDef=\"attackNo\">\r\n                    <th mat-header-cell *matHeaderCellDef>Attack No.</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.attackNumber}}</td>\r\n                    <td mat-cell><button>Remove</button></td>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"attackName\">\r\n                    <th mat-header-cell *matHeaderCellDef>Attack Name</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.attackName}}</td>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"PP\">\r\n                    <th mat-header-cell *matHeaderCellDef>Power Points</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.PP}}</td>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"power\">\r\n                    <th mat-header-cell *matHeaderCellDef>Power</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.power}}</td>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"accuracy\">\r\n                    <th mat-header-cell *matHeaderCellDef>Accuracy</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.accuracy}}</td>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"type\">\r\n                    <th mat-header-cell *matHeaderCellDef>Type</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.type}}</td>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"category\">\r\n                    <th mat-header-cell *matHeaderCellDef>Category</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.category}}</td>\r\n                  </ng-container>\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <mat-card>\r\n          <mat-card-title>Stats</mat-card-title>\r\n          <mat-card-content>\r\n            <div *ngIf=\"pokemon.stats != undefined\">\r\n              <p><b>HP:</b> {{pokemon.stats.hp}}</p>\r\n              <p><b>Attack:</b> {{pokemon.stats.attack}}</p>\r\n              <p><b>Defense:</b> {{pokemon.stats.defense}}</p>\r\n              <p><b>Special Attack:</b> {{pokemon.stats.special_attack}}</p>\r\n              <p><b>Special Defense:</b> {{pokemon.stats.special_defense}}</p>\r\n              <p><b>Speed</b> {{pokemon.stats.speed}}</p>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pokemon/display_dashboard/dashboard/dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, pokemonService, sanitizer) {
        this.route = route;
        this.pokemonService = pokemonService;
        this.sanitizer = sanitizer;
        this.chart = [];
        this.data = [];
        this.displayedColumns = ['attackNo', 'attackName', 'PP', 'accuracy', 'type', 'category'];
        this.finishedLoading = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.finishedLoading = false;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) { return params['id']; })).subscribe(function (id) {
            _this.id = id;
        });
        this.pokemonService.getAPokemon(this.id);
        this.pokemonSub = this.pokemonService.getPokemonUpdatedListener().subscribe(function (p) {
            _this.pokemon = p;
            console.log(_this.pokemon);
            // this.data = this.pokemon
            /**This was used to help visualize the progress spinner */
            /*this.timeSub = interval(3000).subscribe(() => {
      
            });*/
            _this.finishedLoading = true;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // if i don't unsubsribe, the number of items in the feed will increase (n+1)
        this.pokemonSub.unsubscribe();
        // this.timeSub.unsubscribe();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    // little hack for now. will implement sprite upload soon but this'll be a good format to have.
    DashboardComponent.prototype.updateBackground = function () {
        var p = this.pokemon.pokemonName.toLowerCase();
        var imageUrl = "https://img.pokemondb.net/sprites/silver/normal/" + p + ".png";
        return this.sanitizer.bypassSecurityTrustStyle('background-image: url(' + imageUrl + '); background-size: cover');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chart'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "chartRef", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_pokemon_service__WEBPACK_IMPORTED_MODULE_0__["PokemonService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/moveset-create/moveset-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pokemon/moveset-create/moveset-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: aliceblue;\r\n  width: 100%;\r\n}\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n#add_button {\r\n  z-index: 1;\r\n}\r\n#first{\r\n  margin-bottom: 1.5em;\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pokemon/moveset-create/moveset-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pokemon/moveset-create/moveset-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-xs-12\">\r\n      <div>\r\n        <h1 style=\"text-align: left\">Create/Edit Moveset</h1>\r\n        <!--Some reason, the editor says this is wrong, but it is working-->\r\n        <form (submit)=\"addMoveset(movesetForm)\" #movesetForm=\"ngForm\" [formGroup]=\"movesetFormGroup\">\r\n          <mat-card id=\"first\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Pokemon\" name=\"selectedPokemon\" [formControl]=\"pokmonControl\" required\r\n                disableOptionCentering=\"false\" (selectionChange)=\"onselect($event.value)\">\r\n                <mat-option>--</mat-option>\r\n                <mat-option *ngFor=\"let s of selectOptions\" [value]=\"s\">\r\n                  {{s.pokemonName}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"pokmonControl.hasError('required')\">\r\n                Please select a Pokemon\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Select Attack\" name=\"selectedAttack\" [formControl]=\"attackControl\" required\r\n                disableOptionCentering=\"false\" (selectionChange)=\"onselectAttack($event.value)\">\r\n                <mat-option [value]=\"'none'\">--</mat-option>\r\n                <mat-option *ngFor=\"let a of selectAttackOptions\" [value]=\"a\">\r\n                  {{a.attackName}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"attackControl.hasError('required')\">\r\n                Please select an attack\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <hr>\r\n            <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n          </mat-card>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xs-12\">\r\n      <app-moveset-list></app-moveset-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pokemon/moveset-create/moveset-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pokemon/moveset-create/moveset-create.component.ts ***!
  \********************************************************************/
/*! exports provided: MovesetCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovesetCreateComponent", function() { return MovesetCreateComponent; });
/* harmony import */ var _services_attacks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/attacks.service */ "./src/app/services/attacks.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovesetCreateComponent = /** @class */ (function () {
    function MovesetCreateComponent(pokemonService, attackService, snackbar) {
        this.pokemonService = pokemonService;
        this.attackService = attackService;
        this.snackbar = snackbar;
        this.selectedAttacks = [];
        this.doesMovesetExist = false;
        this.pokmonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.attackControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.movesetFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            pokemonContrl: this.pokmonControl, attackControl: this.attackControl
        });
    }
    MovesetCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getPokemonOptions();
        this.pokemonSubs = this.pokemonService.getPokemonOptionsUpdateListener()
            .subscribe(function (options) {
            _this.selectOptions = options;
        });
        this.attackService.getAttackOptions();
        // Subscribe to the feed that has the total list of all the attacks (and the total list updates in real time)
        // from the database
        this.attackListSubscription = this.attackService.getAttacksListUpdatedListener().subscribe(function (attacks) {
            _this.selectAttackOptions = attacks;
        });
        // Subscribe to the feed that has all of the selectd attacks
        /**This component has the responsiblity of adding all of the
         * the selected attacks to the moveset collection in the cloud db.
         * We are pushing the list of selected attacks in a feed because
         * the moveset list component will retrieve the attacks from the feed
         * and can remove items from the feed.
         * This component will be listening to the event the total selected attacks feed has had
         * new entries added to it or removed from it.
         */
        this.selectedAttackListSub = this.attackService.getAllSelectedAttacks().subscribe(function (attacks) {
            _this.selectedAttacks = attacks;
        });
        // We extract the boolean value from the feed to see if the moveset already exists in the DB
        this.movesetExists = this.attackService.getMovesetExistFeedUpdateListener().subscribe(function (value) {
            console.log('Does moveset exist(1)? ' + value);
            _this.doesMovesetExist = value;
        });
        this.movesetSub = this.attackService.getMovesetUpdateListener().subscribe(function (value) {
            _this.moveset = value;
        });
    };
    MovesetCreateComponent.prototype.ngOnDestroy = function () {
        this.pokemonSubs.unsubscribe();
        this.attackListSubscription.unsubscribe();
        this.selectedAttackListSub.unsubscribe();
        this.movesetExists.unsubscribe();
        this.movesetSub.unsubscribe();
    };
    MovesetCreateComponent.prototype.onselect = function (pokemon) {
        // I want to pass the selected option from mat-select
        try {
            if (pokemon === undefined) {
                throw console.error('Error while selecting pokemon');
            }
            // Adding it to the feed so the moveset list component can look into this feed.
            this.pokemonService.addToSelectedPokemonFeed(pokemon);
            this.selectedPokemon = pokemon;
            this.attackService.checkIfMovesetExists(this.selectedPokemon);
        }
        catch (err) {
            console.log(err);
        }
    };
    MovesetCreateComponent.prototype.onselectAttack = function (attack) {
        try {
            if (attack === undefined) {
                console.log('Cannot select undefined');
            }
            else {
                // console.log(attack.id);
                console.log(attack);
                if (attack !== 'none') {
                    // instead, add a single attack to the feed
                    /**Send the selected attack to the moveset-list component */
                    this.attackService.addToSelectedAttackFeed(attack);
                    /**And add the list to the total selected attacks */
                    this.attackService.addToAllSelectedAttacksFeed(attack);
                }
            }
        }
        catch (err) {
        }
    };
    MovesetCreateComponent.prototype.addMoveset = function (form) {
        console.log('Here: ' + this.selectedAttacks.length);
        if (form.invalid && this.selectedAttacks.length !== 0) {
            return;
        }
        var attackIds = [];
        this.selectedAttacks.forEach(function (a) {
            attackIds.push(a.id);
        });
        if (!this.doesMovesetExist) {
            console.log('Adding Moveset');
            var moveset = {
                pokemonId: this.selectedPokemon.id,
                attacks: attackIds
            };
            this.attackService.addMoveset(moveset);
        }
        else {
            console.log('Updating Moveset');
            var updateMoveset = {
                id: this.moveset.id,
                pokemonId: this.selectedPokemon.id,
                attacks: attackIds
            };
            console.log(updateMoveset);
            this.attackService.updateMoveset(updateMoveset);
        }
        form.resetForm();
        this.attackService.removeAllFromSelectedAttackFeed();
        this.attackService.clearSelectedAttacksFeeed();
        // This step is done to reset the Header above the table in the UI
        this.pokemonService.addToSelectedPokemonFeed({ id: null, kdex: null, pokemonName: '' });
        this.snackbar.open('Moveset Added', 'Close', {
            duration: 3000
        });
    };
    MovesetCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-moveset-create',
            template: __webpack_require__(/*! ./moveset-create.component.html */ "./src/app/pokemon/moveset-create/moveset-create.component.html"),
            styles: [__webpack_require__(/*! ./moveset-create.component.css */ "./src/app/pokemon/moveset-create/moveset-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"], _services_attacks_service__WEBPACK_IMPORTED_MODULE_0__["AttacksService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], MovesetCreateComponent);
    return MovesetCreateComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/moveset-list/moveset-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pokemon/moveset-list/moveset-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin-top: 2em;\r\n  margin-bottom: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/moveset-list/moveset-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pokemon/moveset-list/moveset-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"selectedPokemonName == ''\">Moveset</h1>\r\n<h1 *ngIf=\"selectedPokemonName != ''\">{{selectedPokemonName}}'s Moveset</h1>\r\n<mat-spinner *ngIf=\"!finishedLoading\" [diameter]=\"200\" [strokeWidth]=\"10\" mode=\"indeterminate\"></mat-spinner>\r\n<div *ngIf=\"finishedLoading\">\r\n  <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"attackNo\">\r\n      <th mat-header-cell *matHeaderCellDef>Attack No.</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.attackNumber}}</td>\r\n      <td mat-cell><button>Remove</button></td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"attackName\">\r\n      <th mat-header-cell *matHeaderCellDef>Attack Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.attackName}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"PP\">\r\n      <th mat-header-cell *matHeaderCellDef>Power Points</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.PP}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"power\">\r\n      <th mat-header-cell *matHeaderCellDef>Power</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.power}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"accuracy\">\r\n      <th mat-header-cell *matHeaderCellDef>Accuracy</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.accuracy}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef>Type</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.type}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef>Category</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.category}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>Action</th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <button mat-icon-button (click)=\"removeAttack(row)\">\r\n          <mat-icon>remove_circle_outline</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pokemon/moveset-list/moveset-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pokemon/moveset-list/moveset-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MovesetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovesetListComponent", function() { return MovesetListComponent; });
/* harmony import */ var _services_attacks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/attacks.service */ "./src/app/services/attacks.service.ts");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovesetListComponent = /** @class */ (function () {
    function MovesetListComponent(pokemonService, attackService) {
        this.pokemonService = pokemonService;
        this.attackService = attackService;
        this.data = [];
        this.attacksFromMoveList = [];
        this.doesMovesetExist = false;
        this.selectedPokemonName = '';
        this.finishedLoading = false;
        this.displayedColumns = ['attackNo', 'attackName', 'PP', 'accuracy', 'type', 'category', 'actions'];
    }
    MovesetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.finishedLoading = true;
        this.selectedPokemonName = '';
        this.selectedPokemonFeed = this.pokemonService.getSelectedPokemon().subscribe(function (selectedPokemon) {
            _this.selectedPokemon = selectedPokemon;
            _this.selectedPokemonName = _this.selectedPokemon.pokemonName;
            // this.attackService.checkIfMovesetExists(this.selectedPokemon);
            // this.data = [];
            // this will get the latest pokemon in the 'select-pokemon-feed'
            // and use it to query for the list of attacks belonging to that pokemon
            // this.pokemonService.queryForSelectedPokemon(this.pokemonToQueryFor);
            if (_this.selectedPokemon.pokemonName === '') {
                _this.finishedLoading = true;
            }
            else {
                _this.finishedLoading = false;
            }
            _this.data.splice(0);
            _this.data = _this.data.slice();
        });
        // this.results = this.pokemonService.getAttackListsFromQuery().subscribe();
        this.selectedAttacksFeed = this.attackService.getSelectedAttacks().subscribe(function (selectedAttack) {
            if (_this.attacksFromMoveList.length === 0) {
                _this.data = _this.data.concat(selectedAttack);
            }
            else {
                _this.data = _this.data.concat(selectedAttack);
            }
            console.log(_this.data);
        });
        this.movesetFeed = this.attackService.getMovesetUpdateListener().subscribe(function (value) {
            _this.attacksFromMoveList = value.attacks;
            if (_this.attacksFromMoveList.length > 0) {
                _this.data = _this.attacksFromMoveList;
                _this.attackService.addToAllSelectedAttacksFeed2(_this.attacksFromMoveList);
                console.log('has attacks');
            }
        });
        this.movesetExist = this.attackService.getMovesetExistFeedUpdateListener().subscribe(function (value) {
            if (!value) {
                _this.data.splice(0);
                _this.data = _this.data.slice();
            }
            _this.finishedLoading = true;
        });
        this.clearSelectedAttacksListener = this.attackService.getClearSignal().subscribe(function (value) {
            if (value) {
                _this.data.splice(0);
                _this.data = _this.data.slice();
            }
        });
    };
    MovesetListComponent.prototype.removeAttack = function (attackRemoving) {
        console.log('Removing attack: ' + attackRemoving.attackName);
        // remove the attack from the data!
        // this.data = this.data.filter(attack => attack.attackName !== attackRemoving.attackName);
        // remove the attack from the feed too!!
        var index = this.data.findIndex(function (a) { return a.attackName === attackRemoving.attackName; });
        console.log('From the component: ' + index);
        if (index !== -1) {
            this.data.splice(index, 1);
            // need to notify the DOM that the data array has been updated by setting it equal to the spread
            this.data = this.data.slice();
            console.log(this.data);
            this.attackService.addToAllSelectedAttacksFeed2(this.data);
        }
    };
    MovesetListComponent.prototype.ngOnDestroy = function () {
        this.selectedPokemonFeed.unsubscribe();
        this.selectedAttacksFeed.unsubscribe();
        this.movesetFeed.unsubscribe();
        this.clearSelectedAttacksListener.unsubscribe();
        this.movesetExist.unsubscribe();
    };
    MovesetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-moveset-list',
            template: __webpack_require__(/*! ./moveset-list.component.html */ "./src/app/pokemon/moveset-list/moveset-list.component.html"),
            styles: [__webpack_require__(/*! ./moveset-list.component.css */ "./src/app/pokemon/moveset-list/moveset-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"], _services_attacks_service__WEBPACK_IMPORTED_MODULE_0__["AttacksService"]])
    ], MovesetListComponent);
    return MovesetListComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/pokemon-create/pokemon-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pokemon/pokemon-create/pokemon-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron  {\r\n  background-color: aliceblue;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n#add_button{\r\n  margin-left: 0;\r\n  float: right;\r\n  z-index: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/pokemon-create/pokemon-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pokemon/pokemon-create/pokemon-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 style=\"text-align: center\">Create Pokemon Entry</h1>\r\n  <form (submit)=\"onAddPokemon(pokemonForm)\" #pokemonForm=\"ngForm\">\r\n    <mat-card>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"name\" ngModel placeholder=\"Enter Pokemon Name\" required minlength=\"3\" #title=\"ngModel\">\r\n        <mat-error *ngIf=\"title.invalid\">\r\n          Please enter a Pokemon name\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"kdex\" ngModel placeholder=\"Enter kdex number\" required #kdex=\"ngModel\">\r\n        <mat-error *ngIf=\"kdex.invalid\">\r\n          Please enter a kDex number\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n       <mat-select placeholder=\"Select a Type\" (selectionChange)=\"updateSelectedTypes($event.value)\" multiple #types>\r\n         <mat-option>--</mat-option>\r\n         <mat-option *ngFor=\"let t of types_OptionsArray\" [value]=\"t\" #type [disabled]=\"selectedTypesCount >= maxTypesCount && !type.selected\">\r\n          {{t}}\r\n         </mat-option>\r\n       </mat-select>\r\n        <mat-error *ngIf=\"\">\r\n          Please enter its type\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"evolutionName\" ngModel placeholder=\"Enter an evolution\" required #evolution=\"ngModel\">\r\n        <mat-error *ngIf=\"evolution.invalid\">\r\n          Please enter an evolution\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n\r\n        <mat-select placeholder=\"Select a Resistance\" (selectionChange)=\"updateSelectedResistances($event.value)\" multiple>\r\n          <mat-option>--</mat-option>\r\n          <mat-option *ngFor=\"let t of types_OptionsArray\" [value] = \"t\">\r\n            {{t}}\r\n          </mat-option>\r\n        </mat-select>\r\n\r\n        <mat-error *ngIf=\"\">\r\n          Please enter a reistance\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Select a Weakness\" (selectionChange)=\"updateSelectedWeaknesses($event.value)\" multiple>\r\n          <mat-option>--</mat-option>\r\n          <mat-option *ngFor=\"let t of types_OptionsArray\" [value]=\"t\">\r\n           {{t}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"\">\r\n          Enter a weakness\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"ability\" ngModel placeholder=\"Enter an ability\" required #ability=\"ngModel\">\r\n        <mat-error *ngIf=\"ability.invalid\">\r\n          Please enter an ability\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" name=\"height\" ngModel placeholder=\"Enter height\" required #height=\"ngModel\">\r\n        <mat-error *ngIf=\"height.invalid\">\r\n          Please enter a height\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" name=\"weight\" ngModel placeholder=\"Enter weight\" required #weight=\"ngModel\">\r\n        <mat-error *ngIf=\"weight.invalid\">\r\n          Please enter a weight\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <textarea matInput rows=\"4\" name=\"description\" ngModel placeholder=\"Enter a description\" required #description=\"ngModel\">\r\n\r\n        </textarea>\r\n        <mat-error *ngIf=\"description.invalid\">\r\n          Please enter a description\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <hr>\r\n      <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pokemon/pokemon-create/pokemon-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pokemon/pokemon-create/pokemon-create.component.ts ***!
  \********************************************************************/
/*! exports provided: PokemonCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonCreateComponent", function() { return PokemonCreateComponent; });
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonCreateComponent = /** @class */ (function () {
    function PokemonCreateComponent(pokemonService, snackbar) {
        this.pokemonService = pokemonService;
        this.snackbar = snackbar;
        this.types_OptionsArray = [];
        this.selectedResistances = [];
        this.selectedWeaknesses = [];
        this.selectedTypes = [];
        this.maxTypesCount = 2;
        this.selectedTypesCount = 0;
    }
    PokemonCreateComponent.prototype.ngOnInit = function () {
        this.types_OptionsArray = [
            'Fire',
            'Water',
            'Grass',
            'Bug',
            'Dragon',
            'Ice',
            'Fighting',
            'Flying',
            'Ghost',
            'Ground',
            'Normal',
            'Poison',
            'Psychic',
            'Rock',
            'Electric'
        ];
    };
    PokemonCreateComponent.prototype.onAddPokemon = function (form) {
        if (form.invalid) {
            return;
        }
        var resistance = {
            id: null,
            kdex: form.value.kdex,
            pokemonName: form.value.name,
            resistances: this.selectedResistances
        };
        var evolutions = {
            id: null,
            kdex: form.value.kdex,
            pokemonName: form.value.evolutionName
        };
        var weakness = {
            id: null,
            kdex: form.value.kdex,
            pokemonName: form.value.name,
            weaknesses: this.selectedWeaknesses
        };
        var ability = {
            id: null,
            kdex: form.value.kdex,
            abilityName: form.value.ability
        };
        var pokemon = {
            id: null,
            pokemonName: form.value.name,
            kdex: form.value.kdex,
            types: this.selectedTypes,
            resistances: resistance,
            evolution: evolutions,
            weaknesses: weakness,
            abilities: ability,
            moveset: null,
            stats: null,
            height: form.value.height,
            weight: form.value.weight,
            description: form.value.description
        };
        this.pokemonService.addPokemon(pokemon);
        form.resetForm();
        this.snackbar.open('Pokemon Added', 'Close', {
            duration: 2000
        });
    };
    PokemonCreateComponent.prototype.updateSelectedWeaknesses = function (value) {
        this.selectedWeaknesses = value.slice();
        /*const index = this.types_OptionsArray.findIndex((t) => t.typeName === value);
        this.types_OptionsArray[index].selected = true;*/
        console.log(this.selectedWeaknesses);
    };
    PokemonCreateComponent.prototype.updateSelectedResistances = function (value) {
        this.selectedResistances = value.slice();
        /*const index = this.types_OptionsArray.findIndex((t) => t.typeName === value);
        this.types_OptionsArray[index].selected = true;*/
        console.log(this.selectedResistances);
    };
    PokemonCreateComponent.prototype.updateSelectedTypes = function (value) {
        this.selectedTypesCount = value.length;
        if (this.selectedTypesCount > this.maxTypesCount) {
            alert('You can only select at most 2 types');
        }
        else {
            this.selectedTypes = value.slice();
        }
        console.log(this.selectedTypes);
    };
    PokemonCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-create',
            template: __webpack_require__(/*! ./pokemon-create.component.html */ "./src/app/pokemon/pokemon-create/pokemon-create.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-create.component.css */ "./src/app/pokemon/pokemon-create/pokemon-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_0__["PokemonService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], PokemonCreateComponent);
    return PokemonCreateComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/pokemon-list/pokemon-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pokemon/pokemon-list/pokemon-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  margin-top: 0.8em;\r\n  margin-bottom: 0.5em;\r\n}\r\nul {\r\n  width: 70%;\r\n  margin: auto;\r\n  list-style-type: none;\r\n}\r\nli{\r\n  display: inline-block;\r\n  margin-left: 0.2em;\r\n  margin-right: 0.2em;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\ntable {\r\n  border-collapse: separate;\r\n  border-spacing: 2.5em 0.5em;\r\n}\r\nimg {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\np{\r\n  text-align: center;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\na {\r\n  color: inherit;\r\n}\r\ndiv.jumbotron {\r\n  background-color: white;\r\n  height: 90%;\r\n}\r\nmat-spinner{\r\n  margin-top: 10em;\r\n  margin-bottom: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\np.item {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 0.15em;\r\n}\r\n.typesContainer {\r\n  width: 5em;\r\n  display: flex;\r\n  align-items: center;\r\n  margin: auto;\r\n}\r\n.pokemon {\r\n  margin-bottom: 2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/pokemon-list/pokemon-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pokemon/pokemon-list/pokemon-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!finishedLoading\" [diameter]=\"200\" [strokeWidth]=\"10\" mode=\"indeterminate\"></mat-spinner>\r\n<div *ngIf=\"finishedLoading\">\r\n  <h1 style=\"text-align: center\">Pokemon Database</h1>\r\n  <div class=\"container-fluid\">\r\n    <div>\r\n      <mat-card>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 col-md-2 col-sm-2 pokemon\" *ngFor=\"let n of pokemonList\">\r\n            <img [src]=\"getImage(n.pokemonName)\" alt=\"Bulbasaur\">\r\n            <p style=\"font-size: 12px; color: darkgrey;\">Kdex: #{{n.kdex}}</p>\r\n            <p class=\"name\" style=\"font-size: 1em; color: skyblue\"><a [routerLink]=\"['/display', n.id]\">{{n.pokemonName}}</a></p>\r\n            <div class=\"typesContainer\">\r\n              <p class=\"item\" [style.font-size]=\"'0.75em'\" *ngFor=\"let t of n.types\" [style.color]=\"changeColor(t)\" >\r\n                <b>{{t}}</b>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pokemon/pokemon-list/pokemon-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pokemon/pokemon-list/pokemon-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(pokemonService, sanitizer) {
        this.pokemonService = pokemonService;
        this.sanitizer = sanitizer;
        this.Colors = {
            grass: '#0b7c38',
            fire: 'orange',
            water: 'blue',
            electric: 'gold',
            flying: 'skyblue',
            ground: 'brown',
            poison: 'purple',
            psychic: 'deeppink',
            rock: '#DEB887',
            normal: 'grey',
            bug: '	#8FBC8F',
            dragon: 'crimson',
            fighting: 'firebrick',
            ice: 'powderblue',
            ghost: 'mediumpurple'
        };
        this.pokemonList = [];
        /**
         * The following until OnInit will be used for the organized table
         */
        this.pokeData = []; // Array of pokemon
        this.pokeListName = ''; // checks for empty name in html
        this.displayedColumns = ['kdex', 'Nep', 'pokemonName', 'type'];
        /**
         * End of organized table
         */
        this.linkedList = [];
        this.finishedLoading = false;
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.finishedLoading = false;
        this.pokemonService.getPokemon();
        this.pokeListSubs = this.pokemonService.getPokemonGetListUpdatedListener().subscribe(function (pokeArr) {
            console.log(pokeArr);
            _this.pokemonList = pokeArr;
            _this.finishedLoading = true;
            // console.log(this.linkedList[1].pokemonNodeLists);
        });
    };
    PokemonListComponent.prototype.ngOnDestroy = function () {
        this.pokeListSubs.unsubscribe();
    };
    PokemonListComponent.prototype.changeColor = function (types) {
        /*if ( types[0].toLowerCase() === 'grass') {
          console.log('here');
          return `#0b7c38`;
        }*/
        console.log(types);
        return this.Colors[types.toLowerCase()];
    };
    // litte hack for now: will implement uploading of sprites soon
    PokemonListComponent.prototype.getImage = function (n) {
        var p = n.toLowerCase();
        var imageUrl = "https://img.pokemondb.net/sprites/silver/normal/" + p + ".png";
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    };
    PokemonListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pokemon-list',
            template: __webpack_require__(/*! ./pokemon-list.component.html */ "./src/app/pokemon/pokemon-list/pokemon-list.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-list.component.css */ "./src/app/pokemon/pokemon-list/pokemon-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/stats-create/stats-create.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pokemon/stats-create/stats-create.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/stats-create/stats-create.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pokemon/stats-create/stats-create.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onAddStatsForm(statsForm)\" #statsForm=\"ngForm\">\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Select a Pokemon\" (selectionChange)=\"updateSelectedPokemon($event.value)\">\r\n      <mat-option>--</mat-option>\r\n      <mat-option *ngFor=\"let p of pokemonOptions\" [value]=\"p\">\r\n        {{p.pokemonName}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div *ngIf=\"selectedPokemon != undefined\">\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" name=\"hp\" ngModel placeholder=\"Enter HP\" required #hp=\"ngModel\">\r\n      <mat-error *ngIf=\"hp.invalid\">\r\n        Please enter HP\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" name=\"attack\" ngModel placeholder=\"Enter Attack\" required #attack=\"ngModel\">\r\n      <mat-error *ngIf=\"attack.invalid\">\r\n        Please enter Attack\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" name=\"defense\" ngModel placeholder=\"Enter Defense\" required #defense=\"ngModel\">\r\n      <mat-error *ngIf=\"defense.invalid\">\r\n        Please enter Defense\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" name=\"special_attack\" ngModel placeholder=\"Enter Special Attack\" required #special_attack=\"ngModel\">\r\n      <mat-error *ngIf=\"special_attack.invalid\">\r\n        Please enter Special Attack\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" name=\"special_defense\" ngModel placeholder=\"Enter Special Defense\" required #special_defense=\"ngModel\">\r\n      <mat-error *ngIf=\"special_defense.invalid\">\r\n        Please enter Special Defense\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" name=\"speed\" ngModel placeholder=\"Enter Speed\" required\r\n        #speed=\"ngModel\">\r\n      <mat-error *ngIf=\"speed.invalid\">\r\n        Please enter Speed\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <hr>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pokemon/stats-create/stats-create.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pokemon/stats-create/stats-create.component.ts ***!
  \****************************************************************/
/*! exports provided: StatsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCreateComponent", function() { return StatsCreateComponent; });
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stats.service */ "./src/app/services/stats.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsCreateComponent = /** @class */ (function () {
    function StatsCreateComponent(pokemonService, statsService) {
        this.pokemonService = pokemonService;
        this.statsService = statsService;
        this.pokemonOptions = [];
        this.selectedPokemon = undefined;
    }
    StatsCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getPokemonOptions();
        this.pokemonOptionSub = this.pokemonService.getPokemonOptionsUpdateListener()
            .subscribe(function (options) {
            _this.pokemonOptions = options;
            console.log(_this.pokemonOptions);
        });
    };
    StatsCreateComponent.prototype.ngOnDestroy = function () {
        this.pokemonOptionSub.unsubscribe();
    };
    StatsCreateComponent.prototype.updateSelectedPokemon = function (pokemon) {
        console.log(pokemon);
        this.selectedPokemon = pokemon;
    };
    StatsCreateComponent.prototype.onAddStatsForm = function (form) {
        if (form.invalid) {
            return;
        }
        var stats = {
            id: null,
            hp: form.value.hp,
            attack: form.value.attack,
            defense: form.value.defense,
            special_attack: form.value.special_attack,
            special_defense: form.value.special_defense,
            speed: form.value.speed
        };
        this.statsService.addStat(this.selectedPokemon, stats);
        form.resetForm();
    };
    StatsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats-create',
            template: __webpack_require__(/*! ./stats-create.component.html */ "./src/app/pokemon/stats-create/stats-create.component.html"),
            styles: [__webpack_require__(/*! ./stats-create.component.css */ "./src/app/pokemon/stats-create/stats-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_0__["PokemonService"], src_app_services_stats_service__WEBPACK_IMPORTED_MODULE_2__["StatsService"]])
    ], StatsCreateComponent);
    return StatsCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: aliceblue;\r\n  height: 100%;\r\n  padding: 50px 50px 50px 50px;\r\n  border-radius: 5px;\r\n  margin-top: 30px;\r\n}\r\n\r\nmat-form-field, textarea {\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1>First component of mock app</h1>\r\n  <mat-card>\r\n    <form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\">\r\n    <mat-form-field>\r\n      <input\r\n      matInput\r\n      type=\"text\"\r\n      name = \"title\"\r\n      ngModel\r\n      placeholder=\"Enter Title\"\r\n      required\r\n      minlength=\"3\"\r\n      #title=\"ngModel\">\r\n      <mat-error *ngIf=\"title.invalid\">\r\n        Please enter a post title\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea\r\n      matInput\r\n      rows=\"4\"\r\n      name = \"content\"\r\n      ngModel\r\n      placeholder=\"Enter Text\"\r\n      required\r\n      #content=\"ngModel\">\r\n      </textarea>\r\n      <mat-error\r\n      *ngIf=\"content.invalid\"\r\n      >\r\n      Please enter content\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <hr>\r\n    <button\r\n    class=\"btn btn-primary\"\r\n    type=\"submit\">Submit</button>\r\n    </form>\r\n  </mat-card>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postService) {
        this.postService = postService;
        this.enteredContent = '';
        this.enteredTitle = '';
    }
    PostCreateComponent.prototype.ngOnInit = function () {
    };
    PostCreateComponent.prototype.onAddPost = function (form) {
        if (form.invalid) {
            return;
        }
        this.postService.addPost(form.value.title, form.value.content);
        form.resetForm();
    };
    PostCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_0__["PostsService"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.info-text {\r\n  text-align: center;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: aliceblue;\r\n  height: 100%;\r\n  padding: 50px 50px 50px 50px;\r\n  border-radius: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"jumbotron\">\r\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0\">\r\n  <mat-expansion-panel *ngFor=\"let p of posts\">\r\n    <mat-expansion-panel-header>\r\n      {{p.title}}\r\n    </mat-expansion-panel-header>\r\n    <p>{{p.content}}</p>\r\n    <mat-action-row>\r\n      <button mat-button color=\"primary\">EDIT</button>\r\n      <button mat-button color=\"warn\" (click) = \"onDelete(p.id)\">DELETE</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts yet</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/posts.service */ "./src/app/services/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        /*posts = [
          { title: 'First post', content: 'This is the first post\'s content' },
          { title: 'Second post', content: `This is the second post's content`}
        ];*/
        this.posts = [];
        this.postsService = postService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        this.postsService.deletePost(postId);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _pokemon_attack_create_attack_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pokemon/attack-create/attack-create.component */ "./src/app/pokemon/attack-create/attack-create.component.ts");
/* harmony import */ var _pokemon_moveset_create_moveset_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pokemon/moveset-create/moveset-create.component */ "./src/app/pokemon/moveset-create/moveset-create.component.ts");
/* harmony import */ var _pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pokemon/pokemon-list/pokemon-list.component */ "./src/app/pokemon/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _pokemon_pokemon_create_pokemon_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pokemon/pokemon-create/pokemon-create.component */ "./src/app/pokemon/pokemon-create/pokemon-create.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pokemon_display_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pokemon/display_dashboard/dashboard/dashboard.component */ "./src/app/pokemon/display_dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _pokemon_stats_create_stats_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pokemon/stats-create/stats-create.component */ "./src/app/pokemon/stats-create/stats-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _pokemon_pokemon_create_pokemon_create_component__WEBPACK_IMPORTED_MODULE_3__["PokemonCreateComponent"] },
    { path: 'list', component: _pokemon_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_2__["PokemonListComponent"] },
    { path: 'moveset', component: _pokemon_moveset_create_moveset_create_component__WEBPACK_IMPORTED_MODULE_1__["MovesetCreateComponent"] },
    { path: 'attack', component: _pokemon_attack_create_attack_create_component__WEBPACK_IMPORTED_MODULE_0__["AttackCreateComponent"] },
    { path: 'display/:id', component: _pokemon_display_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'addStats', component: _pokemon_stats_create_stats_create_component__WEBPACK_IMPORTED_MODULE_7__["StatsCreateComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/attacks.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/attacks.service.ts ***!
  \*********************************************/
/*! exports provided: AttacksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttacksService", function() { return AttacksService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AttacksService = /** @class */ (function () {
    function AttacksService(http) {
        this.http = http;
        // this value is used as a buffer to store all of the attacks from the db
        this.attackList = [];
        // this will store all the atacks in a feed. This is important for mat select to show the options
        this.allAttacksListUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // this array will store all the selected attacks from mat-select
        this.selectedAttacks = [];
        // this array store the selected attack from mat-select in the feed
        this.selectedAttackFeed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // this array will store all of the selected attacks in the the feed
        this.allSelectedAttacks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // this will store the moveset_exists value in a feed
        this.moveset_existsFeed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // this will store the selected moveset in a feed
        this.selectedMoveset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.clearSelectedAttacks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AttacksService.prototype.addAttack = function (a) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/addAttack/';
        console.log(a.attackName);
        this.http.post(url, a)
            .subscribe(function (responseData) {
            var id = responseData.attackId;
            a.id = id;
            _this.attackList.push(a);
            _this.allAttacksListUpdated.next(_this.attackList.slice());
        });
    };
    // something is broken with this.
    // maybe I have to fix the req body!
    AttacksService.prototype.addMoveset = function (moveset) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/addMoveset';
        this.http.post(url, moveset).subscribe();
    };
    AttacksService.prototype.getMoveset = function (selectedPokemon) {
        var url = "http://localhost:3000/api/getMoveset/" + selectedPokemon.id;
    };
    AttacksService.prototype.updateMoveset = function (m) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/updateMoveset';
        var argument = m;
        this.http.put(url, argument).subscribe();
    };
    AttacksService.prototype.checkIfMovesetExists = function (selectedPokemon) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + ("/checkMovesetExists/" + selectedPokemon.id + "/" + selectedPokemon.kdex + "/" + selectedPokemon.pokemonName);
        return this.http.get(url)
            .subscribe(function (response) {
            // solution failed!! the stream is out of sync!!!!
            _this.moveset_exists = response.exists;
            _this.moveset_existsFeed.next(_this.moveset_exists);
            if (_this.moveset_exists) {
                console.log(response.moveset);
                _this.selectedMoveset.next(response.moveset);
            }
        });
    };
    AttacksService.prototype.getAttackOptions = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/getAttackOptions';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (attackData) {
            return attackData.attacks.map(function (a) {
                return {
                    id: a._id,
                    attackNumber: a.attackNumber,
                    attackName: a.attackName,
                    PP: a.PP,
                    power: a.power,
                    accuracy: a.accuracy,
                    type: a.type,
                    category: a.category
                };
            });
        }))
            .subscribe(function (tranformedAttack) {
            _this.attackList = tranformedAttack;
            _this.allAttacksListUpdated.next(_this.attackList.slice());
        });
    };
    AttacksService.prototype.getAttacksListUpdatedListener = function () {
        return this.allAttacksListUpdated.asObservable();
    };
    // This will get the selected attack from mat-select and push it into this attack feed
    AttacksService.prototype.addToSelectedAttackFeed = function (attacks) {
        // this.selectedAttacks.push(attacks);
        this.selectedAttackFeed.next(attacks);
    };
    // this will get the all of the attacks and put them into a feed
    AttacksService.prototype.addToAllSelectedAttacksFeed = function (attacks) {
        this.selectedAttacks.push(attacks);
        this.allSelectedAttacks.next(this.selectedAttacks.slice());
    };
    AttacksService.prototype.addToAllSelectedAttacksFeed2 = function (attacks) {
        this.selectedAttacks = attacks;
        this.allSelectedAttacks.next(this.selectedAttacks.slice());
    };
    // this will get a selected attack and remove it from the feed that contains all of the attacks
    AttacksService.prototype.removeFromSelectedAttackFeed = function (attack) {
        var index = this.selectedAttacks.findIndex(function (a) { return a.attackName === attack.attackName; });
        console.log('From the service: ' + index);
        if (index !== -1) {
            this.selectedAttacks.splice(index, 1);
        }
        this.allSelectedAttacks.next(this.selectedAttacks.slice());
    };
    // this will remove everything the feed that contains all of the selected attacks
    AttacksService.prototype.removeAllFromSelectedAttackFeed = function () {
        // Remove all the entries in the array
        this.selectedAttacks.splice(0);
        this.allSelectedAttacks.next(this.selectedAttacks.slice());
    };
    AttacksService.prototype.getSelectedAttacks = function () {
        return this.selectedAttackFeed.asObservable();
    };
    AttacksService.prototype.getAllSelectedAttacks = function () {
        return this.allSelectedAttacks.asObservable();
    };
    AttacksService.prototype.addToMovesetExistsFeed = function (exist) {
        this.moveset_existsFeed.next(exist);
    };
    // is the stream that tells us if the moveset exists
    AttacksService.prototype.getMovesetExistFeedUpdateListener = function () {
        return this.moveset_existsFeed.asObservable();
    };
    // if the moveset exists, will get the selected pokemon's moveset from the feed
    AttacksService.prototype.getMovesetUpdateListener = function () {
        return this.selectedMoveset.asObservable();
    };
    AttacksService.prototype.clearSelectedAttacksFeeed = function () {
        this.clearSelectedAttacks.next(true);
    };
    AttacksService.prototype.getClearSignal = function () {
        return this.clearSelectedAttacks.asObservable();
    };
    AttacksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AttacksService);
    return AttacksService;
}());



/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.pokemonUpdatedOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pokemonUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pokemonList = [];
        this.pokemonUpdatedList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Used for pokemon-list to display the list of pokemon (pokedex)
        this.pokemonGetList = [];
        this.pokemonGetListUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedPokemonFeed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PokemonService.prototype.addPokemon = function (p) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/addPokemon';
        this.http.post(url, p)
            .subscribe(function (responseData) {
            var id = responseData.pokemonId;
            p.id = id;
            _this.pokemonList.push(p);
            _this.pokemonUpdatedList.next(_this.pokemonList.slice());
        });
    };
    PokemonService.prototype.getPokemonOptions = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/getPokemonOptions';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (pokemonData) {
            return pokemonData.pokemon.map(function (p) {
                return {
                    id: p._id,
                    kdex: p.kdex,
                    pokemonName: p.pokemonName
                };
            });
        }))
            .subscribe(function (transformedPokemon) {
            _this.pokemonOptions = transformedPokemon;
            // console.log(this.pokemonOptions);
            _this.pokemonUpdatedOptions.next(_this.pokemonOptions.slice());
        });
    };
    // for pokemon-list Won't work for some reason
    PokemonService.prototype.getPokemon = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + '/getPokemon';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            return responseData.pokemon.map(function (p) {
                return {
                    id: p.id,
                    kdex: p.kdex,
                    pokemonName: p.pokemonName,
                    types: p.types
                };
            });
        }))
            .subscribe(function (responseData) {
            _this.pokemonGetList = responseData;
            _this.pokemonGetListUpdated.next(_this.pokemonGetList.slice());
        });
    };
    PokemonService.prototype.getAPokemon = function (id) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + ("/getPokemon/" + id);
        return this.http.get(url).subscribe(function (resposeData) {
            _this.retrievedPokemon = resposeData.pokemon;
            _this.pokemonUpdated.next(_this.retrievedPokemon);
        });
    };
    PokemonService.prototype.getPokemonOptionsUpdateListener = function () {
        return this.pokemonUpdatedOptions.asObservable();
    };
    // Getting the feed of the selected pokemon
    PokemonService.prototype.addToSelectedPokemonFeed = function (pokemon) {
        this.selectedPokemonFeed.next(pokemon);
    };
    // The Movset List Component will retrieve the value selected from the form
    PokemonService.prototype.getSelectedPokemon = function () {
        return this.selectedPokemonFeed.asObservable();
    };
    // Used for pokemon-list and will be able to access desired data
    PokemonService.prototype.getPokemonGetListUpdatedListener = function () {
        return this.pokemonGetListUpdated.asObservable();
    };
    PokemonService.prototype.getPokemonUpdatedListener = function () {
        return this.pokemonUpdated.asObservable();
    };
    PokemonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PostsService.prototype.getPosts = function () {
        var _this = this;
        var url = 'http://localhost:3000/api/posts';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    title: post.title,
                    content: post.content,
                    id: post._id
                };
            });
        }))
            .subscribe(function (transfomredPosts) {
            _this.posts = transfomredPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService.prototype.addPost = function (title, content) {
        var _this = this;
        var url = 'http://localhost:3000/api/posts';
        var post = {
            id: null,
            title: title,
            content: content
        };
        this.http.post(url, post)
            .subscribe(function (responseData) {
            var id = responseData.postId;
            post.id = id;
            _this.posts.push(post);
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.deletePost = function (postId) {
        var _this = this;
        var url = 'http://localhost:3000/api/posts/';
        this.http.delete(url + postId).subscribe(function () {
            var updatedPosts = _this.posts.filter(function (post) { return post.id.toString() !== postId; });
            _this.posts = updatedPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/services/stats.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stats.service.ts ***!
  \*******************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsService = /** @class */ (function () {
    function StatsService(http) {
        this.http = http;
    }
    StatsService.prototype.addStat = function (pokemon, stats) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + ("/addStats/" + pokemon.id);
        this.http.post(url, stats).subscribe(function (response) {
            console.log(response.message);
        });
    };
    StatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Armando Leon\Desktop\workspace\DBProject\pokemonMEAN\pokemonApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map