/// <reference path="../Models/beastKeeperModels.ts"/>
/// <reference path="../Profile/main.ts"/>


class BeastProfileController {
    $scope: IBeastProfileScope;

    $window: ng.IWindowService;
    httpService: ng.IHttpService;
    
    static $inject = ['$scope', '$window', '$http'];
    

    constructor($scope: IBeastProfileScope, window: ng.IWindowService, $http: ng.IHttpService) {
        this.$scope = $scope;
        this.$window = window;
        this.httpService = $http;

        $scope.Beast = <IBeast>{};
        $scope.ctrl = this;
        this.getBeast();
        }

    getBeast() {
        var beastId = +(<HTMLInputElement>document.getElementById('BeastId')).value;
        var beastService = new ProfileBeastService(this.httpService);
        beastService.getBeast(beastId).then(result => {
            this.$scope.Beast = result.beast;
        });

    }

    beastSelected(beastId: number) {
        this.$window.location.href = '/Home/BeastProfile/' + beastId;
    }
}

class ProfileDataservice {
    httpService: ng.IHttpService;
    url: string;

    constructor($http: ng.IHttpService) {

        this.httpService = $http;
        this.url = "";
    }

    useGetHandler(params: any): ng.IPromise<any> {
        var result: ng.IPromise<any> = this.httpService.get(this.url, params)
            .then((response: any): ng.IPromise<any> => this.handlerResponded(response, params));
        return result;
    }

    usePostHandler(params: any): ng.IPromise<any> {
        var result: ng.IPromise<any> = this.httpService.post(this.url, params)
            .then((response: any): ng.IPromise<any> => this.handlerResponded(response, params));
        return result;
    }

    handlerResponded(response: any, params: any): any {
        response.data.requestParams = params;
        return response.data;
    }
}


class ProfileBeastService extends ProfileDataservice {
    static $inject = ['$http'];

    constructor($http: ng.IHttpService) {
        super($http);
        this.url = '';
    }

    getBeast(beastId: number): ng.IPromise<any> {
        this.url += "../GetBeast/" + beastId;
        var params: any = { };
        return this.useGetHandler(params);
    }

}
