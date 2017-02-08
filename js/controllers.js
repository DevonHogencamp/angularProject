// Declaring our app
var artistControllers = angular.module('artistControllers', [
    'ngAnimate'
]);

artistControllers.controller('ListController', ['$scope', '$http', function ListController($scope, $http) {
    $http.get('js/data.json')
        .then(function (res) {
            $scope.artists = res.data;
            $scope.artistOrder = 'name';
        }, function (err) {
            console.log('HTTP request failed with result: ' + err);
        });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ListController($scope, $http, $routeParams) {
    $http.get('js/data.json')
        .then(function (res) {
            $scope.artists = res.data;
            $scope.whichItem = $routeParams.itemId;

            // Set $scope variable for next and prev array items
            if ($routeParams.itemId > 0) {
                $scope.prevItem = Number($routeParams.itemId) - 1;
            }
            else {
                $scope.prevItem = $scope.artists.length - 1;
            }

            if ($routeParams.itemId < $scope.artists.length - 1) {
                $scope.nextItem = Number($routeParams.itemId) + 1;
            }
            else {
                $scope.nextItem = 0;
            }

        }, function (err) {
            console.log('HTTP request failed with result: ' + err);
        });
}]);

artistControllers.controller('ApplyController', ['$scope', function ($scope) {
    $scope.register = function () {
            $scope.message = 'Thank you for applying!';
        };
}]);
