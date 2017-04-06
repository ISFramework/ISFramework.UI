(function () {
var module = angular.module('esTextbox', []);
module.directive('esTextbox', ["$http", "$parse", "$compile", "$interpolate",
    function ($http, $parse, $compile, $interpolate) {
        return {
            restrict: 'A',
            controller: function ($scope, $element, $attrs) {
            },
            compile: function (tElem, tAttrs) {
                return {
                    pre: function (scope, iElem, iAttrs) {

                    },
                    post: function (scope, iElem, iAttrs, Ctrl) {
                        if (iAttrs.textboxIcon) {
                            var placeholderIcon = $interpolate(iAttrs.textboxIcon)(scope);
                            iAttrs.$observe('textboxIcon', function (value) {
                                placeholderIcon = value;
                            });
                        }
                        iElem.addClass('form-control');
                        var texInputWrapper = angular.element("<div class='es-text-input-wrapper'>");
                        iElem.wrap(texInputWrapper);

                        if (placeholderIcon) {
                            $(iElem).parent(".es-text-input-wrapper").addClass("es-icon-placeholder-left");
                            var texInputIcon = angular.element("<span class='es-icon-placeholder'></span>");
                            texInputIcon.addClass(placeholderIcon);
                            iElem.after(texInputIcon);
                        }
                    }
                }
            },
        }
    }]);
})();
