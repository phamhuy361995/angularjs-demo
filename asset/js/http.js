(function () {
    'use strict';

    angular
        .module('demo', [])
        .controller('httpController', httpController);

    httpController.$inject = ['$scope', '$http', '$log'];
    function httpController($scope, $http, $log) {
        const successCall = function (response) {
            const { data: { data } } = response
            $log.info(data)
            $scope.data = response.data
        }

        const errorCall = function (reason) {
            $log.info(reason)
        }

        $http({
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
            headers: {
                "x-rapidapi-key": "962b67c4a0mshd70164a9ca25741p1184f3jsnef09009dcdf2",
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
            },
        })
            .then(successCall, errorCall)

    }
})();