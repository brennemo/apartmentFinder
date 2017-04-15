angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/apartmentListing.html',
			controller: 'ApartmentListController'
		})

	$locationProvider.html5Mode(true);

}]);