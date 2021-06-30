(function() {
    'use strict';

    var app = angular
        .module('app', [])
        .controller('filterController', filterController);

    filterController.$inject = ['$scope'];
    function filterController($scope) {
        var employees = [
            { name:'Demo Filter', birthday: new Date('3/10/1999'), salary: 2000000, gender: 'Male', status: 1 },
            { name:'No 1', birthday: new Date('5/1/1999'), salary: 1000000, gender: 'Male', status: 1 },
            { name:'Hello world', birthday: new Date('5/10/1996'), salary: 2200000, gender: 'Female', status: 1 },
            { name:'Demo 3', birthday: new Date('1/05/1997'), salary: 3000000, gender: 'Female', status: 0 },
            { name:'Demo 4', birthday: new Date('10/03/1998'), salary: 4000000, gender: 'Male', status: 0 }
        ];

        $scope.tableView = 'includes/tableView.html';
        $scope.employees = employees;
        $scope.limitRow = employees.length;
        $scope.reverse = false;
        $scope.search = '';
        $scope.hideSalary = false;

        $scope.sortData = function(column) {
            if($scope.sortColumn == column){
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.reverse = false;
            }

            $scope.sortColumn = column;
        }

        $scope.getSortClass = function(col) {
            if ($scope.sortColumn === col) {
                return $scope.reverse ? 'fa-angle-up' : 'fa-angle-down';
            }

            return '';
        }
    }

    app.filter('status', function() {
        return function(input) {
            if( input === 1){
                return 'Hoạt động';
            } else {
                return 'Khoá';
            }
        }
    })
})();