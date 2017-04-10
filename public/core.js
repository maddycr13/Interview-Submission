angular.module('myModule', ['ui.bootstrap'])
    .directive('tabController', function() {
        return {
            restrict: 'A',
            controller: '@',
            name: 'tabController'
        }
    })
    .controller('MyCustomController', function() {
        var vm = this;
        vm.title = 'Tab1';
        vm.outPut = [];
        vm.getExcelColumnCode = function(numb) {
            for (var result = '', a = 1, b = 26; (numb -= a) >= 0; a = b, b *= 26) {
                result = String.fromCharCode(parseInt((numb % b) / a) + 65) + result;
            }
            vm.convertedNumb = result;
        }
    })
    .controller('MyCustomController2', function() {
        var vm = this;
        vm.title = 'Tab2';
        vm.convertToWordRepresentation = function() {
            vm.str = vm.str.replace(/\d+/g, function (val) {
                return numberToWords.toWords(parseInt(val));
            });
        }

    })
    .controller('MyCustomController3', function() {
        var vm = this;
        vm.title = 'Tab3';
    })
    .controller('MyCustomController4', function() {
        var vm = this;
        vm.title = 'Tab4';
    });