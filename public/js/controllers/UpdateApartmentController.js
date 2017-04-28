//app.controller('ApartmentListController', ['$scope', function($scope) {
angular.module('UpdateCtrl', []).controller('UpdateApartmentController', ['$scope', 'ApartmentListService', '$route', '$routeParams', function($scope, ApartmentListService, $route, $routeParams) {
   $scope.status;    
   $scope.title = "Edit apartment";
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
    
  
                                            
    $scope.updateApartment = function() {
        if (apt_id != null) console.log("updateApartment() will happen here.");  
        
        if (apt_id == null) console.log("Add!");
        console.log(apt_id);
        
        var postData = {
            apt_id: apt_id,
            address: $scope.apartment.address,
            price: $scope.apartment.price,
            beddrooms: $scope.apartment.bedrooms,
            pets: $scope.apartment.pets,
            laundry: $scope.apartment.laundry,
            dishwasher: $scope.apartment.dishwasher 
        };
        
        console.log(postData);
        
        ApartmentListService.updateApartment(postData).then(function(response) { $route.reload(); });
        
    }
    
}]);