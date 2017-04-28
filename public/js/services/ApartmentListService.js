angular.module('ApartmentListService', []).factory('ApartmentListService', ['$http', function($http) {

    return {
        getApartments : function() {
            return $http.get('/api/apartments');
        },
        
        getApartment : function(apt_id) {
            return $http.get('/api/apartments/' + apt_id);
        },
        
        insertApartment: function(apt) {
            return $http.post('/api/apartments', apt);
        },
            
        updateApartment: function(apt) {
            return $http.put('/api/apartments/' + apt.apt_id, apt);
        },
        
        deleteApartment: function(apt_id) {
            return $http.delete('/api/apartments/' + apt_id);
        }
    }      

}]);