angular.module('ApartmentListService', []).factory('ApartmentListService', ['$http', function($http) {

    return {
        getApartments : function() {
            return $http.get('/api/apartments');
        },
        
        getApartment : function(apt_id) {
            return $http.get('/api/apartments' + apt_id);
        }
        
        insertApartment: function(apt) {
            return $http.post('/api/apartments', apt);
        }
    }       

}]);