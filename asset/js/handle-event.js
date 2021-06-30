var app = angular.module('app', []);

app.controller('handleEventController', ['$scope', function($scope) {
    var techs = [
        { Name: 'C#', Likes: 0, Dislikes: 0},
        { Name: 'ASP.NET', Likes: 0, Dislikes: 0},
        { Name: 'Java', Likes: 0, Dislikes: 0},
        { Name: 'PHP', Likes: 0, Dislikes: 0},
    ]

    $scope.techs = techs;

    $scope.increaseLike = function(tech){
        console.log(tech);
        tech.Likes++;
    }

    $scope.increaseDislike = function(tech){
        tech.Dislikes++;
    }
}]);