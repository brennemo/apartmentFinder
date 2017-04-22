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
                                            
    $scope.updateApartment = function(apt_id) {
        console.log("updateApartment() will happen here.");  
        
    }
    
}]);