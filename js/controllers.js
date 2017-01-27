// Declaring our app
var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json')
        .then(function (res) {
            $scope.artists = res.data;
        }, function (err) {
            console.log('HTTP request failed with result: ' + err);
        });
}]);
