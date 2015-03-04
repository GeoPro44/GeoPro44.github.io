var app = angular.module('testApp', []);

/*app.config(function ($routeProvider) {
    $routeProvider
    	.when('/',
		{
			controller: 'HomeController',
			templateUrl: 'templates/home.html'
		})
		.when('/page2',
		{
			controller: 'Page2Controller',
			templateUrl: 'templates/page2.html'
		});
    });*/

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

	$scope.$on('nav-button-clicked', function(event, args) {
	    var id = args.page;
		var someElement = angular.element(document.getElementById(id));
		$document.scrollToElement(someElement, 50, 1500);
	});
	
	$scope.nav2 = function(page) {
		if (page == 'other') {
			$scope.showMain = false;
			$scope.showPic = false;
			$scope.showR = true;
		} else if (page === 'pic') {
			$scope.showMain = false;
			$scope.showR = false;
			$scope.showPic = true;
		} else {
			$scope.showMain = true;
		}
	}

    function init() {
	

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