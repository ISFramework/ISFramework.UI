var app = angular.module('app',
    [
        'esPanel',
        'esTextbox',
        'esCheckbox',
        'ui.router'
    ]);
app.config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/panelDemo");
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
}]);