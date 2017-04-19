angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/apartmentListing.html',
			controller: 'ApartmentListController'
		})
    
    .when('/add-apartment', {
			templateUrl: 'views/addApartment.html',
			controller: 'ApartmentListController'
		})
    .when('/edit-apartment/:apt_id', {
        templateUrl: 'views/addApartment.html',
    });

	//$locationProvider.html5Mode(true);

}]);