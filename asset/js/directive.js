var myApp = angular
    .module('appAng', [])
    .controller('myController', function($scope) {

    })
    .directive('wlc', function() {
        return {
            template: "this is demo"
        }
    })
