// Declaring our app
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
    $scope.author = {
        'name' : 'Devon J. Hogencamp',
        'title' : 'Jedi Master Programmer',
        'company' : 'The Jedi Counsel'
    };
});
