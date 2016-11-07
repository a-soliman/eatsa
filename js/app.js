var app = angular.module('multiPageApp', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/whyMe', {
		templateUrl: 'views/whyme.html'
	})
	.when('/plan', {
		templateUrl: 'views/plan.html'
	})
	.when('/story', {
		templateUrl: 'views/story.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})