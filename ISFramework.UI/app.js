var app = angular.module('app',
    [
        'esPanel',
        'esTextbox',
        'esCheckbox',
        'ui.router'
    ]);
app.config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("");
}]);

app.run(function ($rootScope) {
    $rootScope.direction = 'ltr';
});
app.controller('layout', ['$rootScope', function ($rootScope) {
    $rootScope.toggleDirection = function () {
        if ($rootScope.direction == 'rtl'){
            $rootScope.direction = 'ltr';
        }
        else {
            $rootScope.direction = 'rtl';

        }
    }
    $rootScope.setDirection = function (direction) {
        if ($rootScope.direction == direction) {
            $rootScope.direction = direction;
        }
        else {
            $rootScope.direction = direction;

        }
    }
}]);