var app = angular.module('twitterApp', [
	'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.grid'
]);

app
	.config([
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: 'views/tweets.html'
				});
		}
	]);