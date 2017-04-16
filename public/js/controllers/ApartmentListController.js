//app.controller('ApartmentListController', ['$scope', function($scope) {
angular.module('AppCtrl', []).controller('ApartmentListController', ['$scope', function($scope, ApartmentListService) {
    
    $scope.apartments = ApartmentListService.get();

    //This will be replaced by MongoDB schema 
    /*$scope.apartments = [
      {
		address:'Apartment 1', 
		price: 2000,
		date:  new Date('2016', '08', '01'), 
		photo: 'img/placeholder.png',
	  },
      {
		address:'Apartment 2', 
		price: 2000,
		date:  new Date('2016', '08', '01'),
		photo: 'img/placeholder.png',
	  },
      {
		address:'Apartment 3', 
		price: 2000,
		date:  new Date('2016', '08', '01'), 
		photo: 'img/placeholder.png',
	  },
      {
		address:'Apartment 4', 
		price: 2000,
		date:  new Date('2016', '08', '01'),
		photo: 'img/placeholder.png',
	  }
        
	]*/
}]);