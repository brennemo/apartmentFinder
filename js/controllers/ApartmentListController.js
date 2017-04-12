app.controller('ApartmentListController', function() {
    var apartmentList = this;
    apartmentList.apartments = [
      {
		text:'Apartment 1', 
		done:true,
		price: 2000,
		date:  new Date('2016', '08', '01'), 
		photo: 'img/placeholder.png',
		likes: 0
	  },
      {
		text:'Apartment 2', 
		price: 2000,
		done:false,
		date:  new Date('2016', '08', '01'),
		photo: 'img/placeholder.png',
		likes: 0
	  }
	];
 
    apartmentList.addApartment = function() {
      apartmentList.apartments.push({text:apartmentList.apartmentText, done:false, price: 2000, date: new Date('2016', '08', '01'), photo: 'img/placeholder.png', likes:0});
      apartmentList.apartmentText = '';
    };
 
    apartmentList.remaining = function() {
      var count = 0;
      angular.forEach(apartmentList.apartments, function(apartment) {
        count += apartment.done ? 0 : 1;
      });
      return count;
    };
 
    apartmentList.archive = function() {
      var oldApartments = apartmentList.apartments;
      apartmentList.apartments = [];
      angular.forEach(oldApartments, function(apartment) {
        if (!apartment.done) apartmentList.apartments.push(apartment);
      });
    };
});