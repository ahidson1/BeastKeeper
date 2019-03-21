/// <reference path="../Models/beastKeeperModels.ts"/>
/// <reference path="../Index/main.ts"/>


class BeastListController {
    $scope: IBeastScope;
    $window: ng.IWindowService;
    httpService: ng.IHttpService;
    
    static $inject = ['$scope', '$window', '$http'];
    

    constructor($scope: IBeastScope, window: ng.IWindowService, $http: ng.IHttpService) {
        this.$scope = $scope;
        this.$window = window;
        this.httpService = $http;

           $scope.Beasts = [];
           $scope.ctrl = this;
            this.getBeasts();
        }

    getBeasts() {
        var beastService = new ListBeastService(this.httpService);
        beastService.getBeasts().then(result => {
            this.$scope.Beasts = result.list;
        });
        

    }

    beastSelected(beastId: number) {
        this.$window.location.href = '/Home/BeastProfile/' + beastId;
    }
}

class ListDataservice {
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


class ListBeastService extends ListDataservice {
    static $inject = ['$http'];

    constructor($http: ng.IHttpService) {
        super($http);
        this.url = 'Home/';
    }

    getBeasts(): ng.IPromise<any> {
        this.url += "GetBeasts";
        var params: any = {};
        return this.useGetHandler(params);
    }

}
