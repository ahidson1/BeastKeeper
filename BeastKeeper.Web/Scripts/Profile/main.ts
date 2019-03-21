/// <reference path="../Models/beastKeeperModels.ts"/>
/// <reference path="../Profile/controller.ts"/>

angular.module('BeastKeeperProfile', [])
    .controller('BeastProfileController', BeastProfileController)

interface IBeastProfileScope extends ng.IScope {
    Beast: IBeast;
    ctrl: BeastProfileController;
}

