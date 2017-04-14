var esPanel = angular.module('esPanel', []);
esPanel.directive('esPanel', ["$interpolate",function ($interpolate) {
    return {
        restrict: "E",
        replace: true,
        template:'<div></div>',
        transclude: true,
        link: function (scope, element, attr, ctrl, transclude) {
            element.addClass("panel panel-default");
            scope.$watch(attr.panelLoading, function (value) {
                if (value)
                {
                    $(element).find(".panel-body").hide();
                }
                else
                    $(element).find(".panel-body").show();
            });
            transclude(function (clone) {
                element.append(clone);
            });
        }
    }
}]);
esPanel.directive('panelHeading', [function () {
    return {
        restrict: "E",
        replace: true,
        template: '<div></div>',
        transclude: true,
        link: function (scope, element, attr, ctrl, transclude) {
            element.addClass("panel-heading");
            transclude(function (clone) {
                element.append(clone);
            });
        }
    }
}]);
esPanel.directive('panelBody', [function () {
    return {
        restrict: "E",
        replace: true,
        template: '<div></div>',
        transclude: true,
        link: function (scope, element, attr, ctrl, transclude) {
            element.addClass("panel-body");
            transclude(function (clone) {
                var loading = angular.element("<div class='es-text-input-wrapper'>");
                element.append(clone);
            });
        }
    }
}]);
esPanel.directive('panelTitle', [function () {
    return {
        restrict: "E",
        replace: true,
        template: '<div></div>',
        transclude: true,
        link: function (scope, element, attr, ctrl, transclude) {
            element.addClass("panel-title");
            transclude(function (clone) {
                element.append(clone);
            });
        }
    }
}]);
esPanel.directive('panelFooter', [function () {
    return {
        restrict: "E",
        replace: true,
        template: '<div></div>',
        transclude: true,
        link: function (scope, element, attr, ctrl, transclude) {
            element.addClass("panel-footer");
            transclude(function (clone) {
                element.append(clone);
            });
        }
    }
}]);