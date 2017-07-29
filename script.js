var app = angular.module('myModule', ['ngRoute']);
app.controller('myController', function($scope){});

app.config(function($routeProvider, $locationProvider) {
$routeProvider
.when('/cat',
{
controller: 'myController',
templateUrl: 'cat.html'
})
.when('/dog',
{
controller: 'myController',
templateUrl: 'dog.html'
})
.when('/catdog',
  {
  controller: 'myController',
  templateUrl: 'catdog.html'
});
// .otherwise({ redirectTo: '/' });
$locationProvider.hashPrefix('');
});
