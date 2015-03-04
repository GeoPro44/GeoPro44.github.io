var app = angular.module('testApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
    	.when('/',
		{
			controller: 'HomeController',
			templateUrl: 'templates/home.html'
		})
		.when('/other',
		{
			controller: 'RController',
			templateUrl: 'templates/other.html'
		})
		.when('/pic',
		{
			controller: 'HomeController',
			templateUrl: 'templates/pic.html'
		});
    });

/*app.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/home");
	//
	// Now set up the states
	$stateProvider
	.state('home', {
	  url: "/home",
	  templateUrl: "templates/home.html",
	  controller: 'HomeController'
	})
	.state('page2', {
	  url: "/page2",
	  templateUrl: "templates/page2.html",
	  controller: 'Page2Controller'
	});
});*/
	
app.controller('NavController', function ($scope, $rootScope, $location, $timeout) {	

	$scope.nav2 = function(place) {
	
		//console.log('Nav Button pressed: ' + place);		
		$location.path('/');

		$timeout(function() {
			$rootScope.$broadcast('nav-button-clicked', { 'page': place });
		}, 1);

		
	}
});

app.controller('HomeController', function ($scope, $document, $timeout) {
	
	$scope.name = "Geo";
	$scope.showMain = true;

    function init() {
	

    }

    init();

});

app.controller('RController', function ($scope, $document, $timeout) {
	
	$scope.pics = [ 
		{'imgSrc': 'img/image.jpg', 'name': 'luke' },
		{'imgSrc': 'img/image2.jpg', 'name': 'new stang' },
		{'imgSrc': 'img/image3.jpg', 'name': 'old stang' },
		{'imgSrc': 'img/image4.jpg', 'name': 'trap' },
		{'imgSrc': 'http://placehold.it/500x300', 'name': 'default' }];
	
	$scope.setPic = function(pic) {
		$scope.mainPic = pic;
	}

    function init() {
		$scope.mainPic = $scope.pics[1];
    }

    init();

});



























/*NavController

	localStorage.removeItem('pageSpot');
	localStorage.setItem('pageSpot', place);



HomeController


	result = localStorage.getItem('pageSpot');
	
	if (result) {
		console.log('try to SCROLL DOWN to ' + result);
		
		$timeout(function() {
			localStorage.removeItem('pageSpot');
		}, 1000);
		
		var id = result.toString();
		var someElement = angular.element(document.getElementById(id));
		$document.scrollToElement(someElement, -50, 1500);
	} */