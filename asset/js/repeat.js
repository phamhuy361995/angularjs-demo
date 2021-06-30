(function () {
    'use strict';

    angular
        .module('appRep', [])
        .controller('repeatController', repeatController);

    // repeatController.$inject = ['$location'];
    function repeatController($scope) {
        var employees = [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough"
                },
                phone: "1-770-736-8031 x56442",
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv",
                address: {
                    street: "Victor Plains",
                    suite: "Suite 879",
                    city: "Wisokyburgh"
                },
                phone: "010-692-6593 x09125"
            },
            {
                id: 3,
                name: "Clementine Bauch",
                username: "Samantha",
                email: "Nathan@yesenia.net",
                address: {
                    street: "Douglas Extension",
                    suite: "Suite 847",
                    city: "McKenziehaven"
                },
                phone: "1-463-123-4447"
            },
            {
                id: 4,
                name: "Patricia Lebsack",
                username: "Karianne",
                email: "Julianne.OConner@kory.org",
                address: {
                    street: "Hoeger Mall",
                    suite: "Apt. 692",
                    city: "South Elvis"
                },
                phone: "493-170-9623 x156"
            }
        ];

        $scope.employees = employees;
    }
})();