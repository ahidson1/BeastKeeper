"use strict";
/// <reference path="../Models/beastKeeperModels.ts"/>
/// <reference path="../Profile/main.ts"/>
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
var BeastProfileController = /** @class */ (function () {
    function BeastProfileController($scope, window, $http) {
        this.$scope = $scope;
        this.$window = window;
        this.httpService = $http;
        $scope.Beast = {};
        $scope.ctrl = this;
        this.getBeast();
    }
    BeastProfileController.prototype.getBeast = function () {
        var _this = this;
        var beastId = +document.getElementById('BeastId').value;
        var beastService = new ProfileBeastService(this.httpService);
        beastService.getBeast(beastId).then(function (result) {
            _this.$scope.Beast = result.beast;
        });
    };
    BeastProfileController.prototype.beastSelected = function (beastId) {
        this.$window.location.href = '/Home/BeastProfile/' + beastId;
    };
    BeastProfileController.$inject = ['$scope', '$window', '$http'];
    return BeastProfileController;
}());
var ProfileDataservice = /** @class */ (function () {
    function ProfileDataservice($http) {
        this.httpService = $http;
        this.url = "";
    }
    ProfileDataservice.prototype.useGetHandler = function (params) {
        var _this = this;
        var result = this.httpService.get(this.url, params)
            .then(function (response) { return _this.handlerResponded(response, params); });
        return result;
    };
    ProfileDataservice.prototype.usePostHandler = function (params) {
        var _this = this;
        var result = this.httpService.post(this.url, params)
            .then(function (response) { return _this.handlerResponded(response, params); });
        return result;
    };
    ProfileDataservice.prototype.handlerResponded = function (response, params) {
        response.data.requestParams = params;
        return response.data;
    };
    return ProfileDataservice;
}());
var ProfileBeastService = /** @class */ (function (_super) {
    __extends(ProfileBeastService, _super);
    function ProfileBeastService($http) {
        var _this = _super.call(this, $http) || this;
        _this.url = '';
        return _this;
    }
    ProfileBeastService.prototype.getBeast = function (beastId) {
        this.url += "../GetBeast/" + beastId;
        var params = {};
        return this.useGetHandler(params);
    };
    ProfileBeastService.$inject = ['$http'];
    return ProfileBeastService;
}(ProfileDataservice));
