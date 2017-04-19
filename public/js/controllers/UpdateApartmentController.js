//app.controller('ApartmentListController', ['$scope', function($scope) {
angular.module('UpdateCtrl', []).controller('UpdateApartmentController', ['$scope', 'ApartmentListService', '$routeParams', function($scope, ApartmentListService, $routeParams) {
   $scope.status;    
   $scope.apartment;                                    

    var apt_id = $routeParams.apt_id;                               
    getApartment(apt_id);
    
    function getApartment(apt_id) {
        ApartmentListService.getApartment(apt_id) 
            .then(function(response) {
                $scope.apartment = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            });   
    }
                                            
                                                            
    //$scope.apartments;
    
    /*Search
    $scope.searchApt = '';
    */
    /*REST*/
    /*
    getApartments();
    
    function getApartments() {
        ApartmentListService.getApartments() 
            .then(function(response) {
                $scope.apartments = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            });  
    }
    */
                               
    //getApartment(apt_id);
    /*
    function getApartment(apt_id) {
        ApartmentListService.getApartment(apt_id) 
            .then(function(response) {
                $scope.apartment = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            });   
    }
    
    
    $scope.insertApartment = function(apt_id) {
        console.log("insertApartment() will happen here."); 
    }
    */
    $scope.updateApartment = function(apt_id) {
        console.log("updateApartment() will happen here.");  
        console.log(apt_id);
    }
    /*
    $scope.deleteApartment = function(apt_id) {
        //console.log("deleteApartment() will happen here.");    
        //console.log(apt_id);
        
        ApartmentListService.deleteApartment(apt_id)
            .then (function(response) {
                $scope.status = "Apartment deleted.";  
                getApartments();        //refresh apartments 
            });
    }
    */
    
}]);