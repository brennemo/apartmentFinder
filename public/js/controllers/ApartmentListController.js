//app.controller('ApartmentListController', ['$scope', function($scope) {
angular.module('AppCtrl', []).controller('ApartmentListController', ['$scope', 'ApartmentListService', function($scope, ApartmentListService) {
    
    //$scope.apartments = ApartmentListService.get();
    $scope.status;
    $scope.apartments;
    
    getApartments();
    
    function getApartments() {
        ApartmentListService.get() 
            .then(function(response) {
                $scope.apartments = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            }); 
        
    }
    
    $scope.test = ApartmentListService.test();
    
}]);