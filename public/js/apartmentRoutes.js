angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/apartmentListing.html',
			controller: 'ApartmentListController'
		})
    
    .when('/add-apartment', {
			templateUrl: 'views/editApartment.html',
			controller: 'UpdateApartmentController'
		})
    .when('/edit-apartment/:apt_id', {
        templateUrl: 'views/editApartment.html',
        controller: 'UpdateApartmentController'
    });

	//$locationProvider.html5Mode(true);

}]);