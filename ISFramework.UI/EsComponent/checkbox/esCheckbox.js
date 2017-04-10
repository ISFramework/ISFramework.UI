var checkboxModule = angular.module('esCheckbox', []);

app.directive('esCheckbox', ["$compile",
    function ($compile) {
        return {
            restrict: 'A',
            scope: false,
            controller: function ($element) {
            },
            compile: function (tElem, tAttrs) {
                return {
                    pre: function (scope, iElem, iAttrs) {
                        iElem.wrap("<label class='checkbox es-checkbox'/>");
                        if (iAttrs.checkboxText) {
                            var keyEl = angular.element('<text class="es-checkbox-text">' + iAttrs.checkboxText + '</text>');
                            iElem.after(keyEl);
                            $compile(keyEl)(scope);
                        }
                        iElem.after("<span/>");
                    },
                    post: function (scope, iElem, iAttrs, ctrl) {
                    }
                }
            }
        };
    }]);