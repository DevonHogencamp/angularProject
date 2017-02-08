/*
    App.js
*/
// Define our app
var myApp = angular.module('myApp', [
    // Dependencies
    // ngRoute helps us with deep linking so we can change our url without actually taking them to a diffrent page because this is a Single Page App
    'ngRoute',
    'artistControllers'
]);

// Config our app to use routeProvider
myApp.config(['$routeProvider', function ($routeProvider) {
    // Config our routes
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/apply', {
        templateUrl: 'partials/apply.html',
        controller: 'ApplyController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);
