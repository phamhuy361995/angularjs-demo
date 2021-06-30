(function () {
    'use strict';

    angular
        .module('home', ['ui.router'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/ver1/includes/home.html',
                })
                .state('country', {
                    url: '/country',
                    templateUrl: '/ver1/includes/country.html',
                    controller: 'countryController'
                })
                .state('city', {
                    url: '/city',
                    templateUrl: '/ver1/includes/city.html',
                    controller: 'cityController'
                })
                .state('state', {
                    url: '/state',
                    templateUrl: '/ver1/includes/state.html',
                    controller: 'stateController'
                })
            $urlRouterProvider.otherwise('/home');
            $locationProvider.html5Mode(true);
        })
        .controller('countryController', countryController)
        .controller('cityController', cityController)
        .controller('stateController', stateController)

    // countryController.$inject = ['$scope', '$http', '$log'];
    function countryController($scope, $http, $log) {
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

    function cityController($scope) {
        $scope.city = 'Hanoi'
    }
    function stateController($scope) {
        $scope.state = 'Caugiay'
    }
})();