(function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '',
            templateUrl: 'app/dashboard/template/dashboard.html',
            controller: 'dashboard',
            controllerAs:'dashboard'
        });
    }]);
    module.controller('dashboard',[function () {
        var vm = this;
        vm.x = "111";
    }]);
})(angular.module('app'));
angular.bootstrap(document, ['app']);
$("#document-loading").hide();