var radioModule = angular.module('esRadio', []);

radioModule.directive('esRadio', ["$compile",
    function ($compile) {
        return {
            restrict: 'A',
            scope: false,
            controller: function ($element) {
            },
            compile: function (tElem, tAttrs) {
                return {
                    pre: function (scope, iElem, iAttrs) {
                        console.log('tt');
                        iElem.wrap("<label class='radio es-radio'/>");
                        if (iAttrs.radioText) {
                            var keyEl = angular.element('<text class="es-radio-text">' + iAttrs.radioText + '</text>');
                            iElem.after(keyEl);
                            $compile(keyEl)(scope);
                        }
                        iElem.after("<span/>");
                    },
                    post: function (scope, iElem, iAttrs, ctrl) {
                    }
                }
            },
        };
    }]);