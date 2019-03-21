/// <reference path="../Models/beastKeeperModels.ts"/>
/// <reference path="../Index/controller.ts"/>

angular.module('BeastKeeperList', [])
    .controller('BeastListController', BeastListController)

interface IBeastScope extends ng.IScope {
    Beasts: IBeast[];
    ctrl: BeastListController;
}

