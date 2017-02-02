// Declaring our app
var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function ListController($scope, $http) {
    $http.get('js/data.json')
        .then(function (res) {
            $scope.artists = res.data;
            $scope.artistOrder = 'name';
        }, function (err) {
            console.log('HTTP request failed with result: ' + err);
        });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', function ListController($scope, $http) {
    $http.get('js/data.json')
        .then(function (res) {
            $scope.artists = res.data;
            $scope.whichItem = $routeParams.itemId;
        }, function (err) {
            console.log('HTTP request failed with result: ' + err);
        });
}]);
