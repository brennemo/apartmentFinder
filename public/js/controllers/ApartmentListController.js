app.controller('ApartmentListController', ['$scope', function($scope) {
    //var apartmentList = this;
    $scope.apartments = [
      {
		text:'Apartment 1', 
		price: 2000,
		date:  new Date('2016', '08', '01'), 
		photo: 'img/placeholder.png',
		likes: 0
	  },
      {
		text:'Apartment 2', 
		price: 2000,
		date:  new Date('2016', '08', '01'),
		photo: 'img/placeholder.png',
		likes: 0
	  },
      {
		text:'Apartment 3', 
		price: 2000,
		date:  new Date('2016', '08', '01'), 
		photo: 'img/placeholder.png',
		likes: 0
	  },
      {
		text:'Apartment 4', 
		done:false,
		date:  new Date('2016', '08', '01'),
		photo: 'img/placeholder.png',
		likes: 0
	  }
        
	];
}]);