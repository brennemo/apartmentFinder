angular.module('DtlCtrl', []).controller('ApartmentDetailsController', ['$scope', '$route', '$routeParams', 'ApartmentListService', function($scope, $route, $routeParams, ApartmentListService) {
    $scope.status;
    $scope.apartments;
    
    var apt_id = $routeParams.apt_id;   

    /*Load apartments*/
    getApartment(apt_id);

    
    function getApartment(apt_id) {
        ApartmentListService.getApartment(apt_id) 
            .then(function(response) {
                $scope.apartment = response.data;   
        }, function (error) {
                $scope.status = 'Unable to load apartment data: ' + error.message;
            });   
    }
    
    
}]);