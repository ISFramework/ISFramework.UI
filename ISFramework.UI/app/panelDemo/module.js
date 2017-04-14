(function (module) {
    module.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('penelDemo', {
            url: '/panelDemo',
            templateUrl: 'app/panelDemo/template/panelDemo.html',
            controller: 'panelDemo',
            controllerAs:'panelDemo'
        });
    }]);
    module.controller('panelDemo',[function () {
        var vm = this;
        vm.x = true;
    }]);
})(angular.module('app'));