var myApp = angular.module('appAng', []);

myApp.controller('myController', initinal);
myApp.controller('rootTest', rootTest);

initinal.$inject = ['$scope', 'stringService']
function initinal($scope, stringService) {
    // $scope.name = 'denied';
    // $scope.changeText = function() {
    //     $scope.name = 'cc' + $scope.name
    // }

    $scope.output = ''
    $scope.name = 'okfsdafsd'
    $scope.tranform = function(input) {
        $scope.output = stringService.tranform(input)
    }
}

function rootTest($scope) {
    $scope.name = 'eee'
}