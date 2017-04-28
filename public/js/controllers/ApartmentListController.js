angular.module('AppCtrl', []).controller('ApartmentListController', ['$scope', 'ApartmentListService', function($scope, ApartmentListService) {
    $scope.status;
    $scope.apartments;
    $scope.numApts;
    
    /*Search*/
    $scope.searchApt = '';
    $scope.filterPets = false;
    $scope.filterLaundry = false;
    $scope.filterDishwasher = false;

    
    /*Load apartments*/
    getApartments();
    
    /*Favorites*/
    $scope.favorites = [];
    for (var i = 0; i < $scope.numApts; i++) {
      $scope.favorites.push('#fff');  
    }
    $scope.favorite = function(i) {
        if ($scope.favorites[i] == '#fff')
            $scope.favorites[i] = '#ff3366'; 
        else 
            $scope.favorites[i] = '#fff'; 
    };

    
    function getApartments() {
        ApartmentListService.getApartments() 
            .then(function(response) {
                $scope.numApts = response.data.length;
                $scope.apartments = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            });  
    }
    
    
    $scope.deleteApartment = function(apt_id) {
        ApartmentListService.deleteApartment(apt_id)
            .then (function(response) {
                $scope.status = "Apartment deleted.";  
                getApartments();        //refresh apartments 
            });
    }
    
    
}]);