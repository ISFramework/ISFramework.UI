var app = angular.module('app', ['esPanel','esTextbox']);
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