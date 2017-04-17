angular.module('ApartmentListService', []).factory('ApartmentListService', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/apartments');
        },
        test: function() {
            return "BLORPS";
        }
    }       

}]);