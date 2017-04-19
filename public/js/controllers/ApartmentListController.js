//app.controller('ApartmentListController', ['$scope', function($scope) {
angular.module('AppCtrl', []).controller('ApartmentListController', ['$scope', 'ApartmentListService', function($scope, ApartmentListService) {
    $scope.status;
    $scope.apartments;
    
    /*Search*/
    $scope.sortType = 'dishwasher';
    $scope.sortReverse = false; 
    $scope.search = '';
    
    /*REST*/
    getApartments();
    
    function getApartments() {
        ApartmentListService.getApartments() 
            .then(function(response) {
                $scope.apartments = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            });  
    }
    
    $scope.getApartment = function(apt_id) {
        console.log("getApartment() will happen here.");    
    }
    
    $scope.insertApartment = function(apt_id) {
        console.log("insertApartment() will happen here."); 
    }
    
    $scope.updateApartment = function(apt_id) {
        console.log("updateApartment() will happen here.");  
        console.log(apt_id);
    }
    
    $scope.deleteApartment = function(apt_id) {
        //console.log("deleteApartment() will happen here.");    
        //console.log(apt_id);
        
        ApartmentListService.deleteApartment(apt_id)
            .then (function(response) {
                $scope.status = "Apartment deleted.";  
                getApartments();        //refresh apartments 
            });
    }
    
    
}]);