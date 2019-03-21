"use strict";
/// <reference path="../Models/beastKeeperModels.ts"/>
/// <reference path="../Index/main.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BeastListController = /** @class */ (function () {
    function BeastListController($scope, window, $http) {
        this.$scope = $scope;
        this.$window = window;
        this.httpService = $http;
        $scope.Beasts = [];
        $scope.ctrl = this;
        this.getBeasts();
    }
    BeastListController.prototype.getBeasts = function () {
        var _this = this;
        var beastService = new ListBeastService(this.httpService);
        beastService.getBeasts().then(function (result) {
            _this.$scope.Beasts = result.list;
        });
    };
    BeastListController.prototype.beastSelected = function (beastId) {
        this.$window.location.href = '/Home/BeastProfile/' + beastId;
    };
    BeastListController.$inject = ['$scope', '$window', '$http'];
    return BeastListController;
}());
var ListDataservice = /** @class */ (function () {
    function ListDataservice($http) {
        this.httpService = $http;
        this.url = "";
    }
    ListDataservice.prototype.useGetHandler = function (params) {
        var _this = this;
        var result = this.httpService.get(this.url, params)
            .then(function (response) { return _this.handlerResponded(response, params); });
        return result;
    };
    ListDataservice.prototype.usePostHandler = function (params) {
        var _this = this;
        var result = this.httpService.post(this.url, params)
            .then(function (response) { return _this.handlerResponded(response, params); });
        return result;
    };
    ListDataservice.prototype.handlerResponded = function (response, params) {
        response.data.requestParams = params;
        return response.data;
    };
    return ListDataservice;
}());
var ListBeastService = /** @class */ (function (_super) {
    __extends(ListBeastService, _super);
    function ListBeastService($http) {
        var _this = _super.call(this, $http) || this;
        _this.url = 'Home/';
        return _this;
    }
    ListBeastService.prototype.getBeasts = function () {
        this.url += "GetBeasts";
        var params = {};
        return this.useGetHandler(params);
    };
    ListBeastService.$inject = ['$http'];
    return ListBeastService;
}(ListDataservice));
