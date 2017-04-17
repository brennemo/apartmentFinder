angular.module('ApartmentListService', []).factory('ApartmentListService', ['$http', function($http) {

    return {
        getApartments : function() {
            return $http.get('/api/apartments');
        },
        
        getApartment : function(apt_id) {
            return $http.get('/api/apartments/' + apt_id);
        },
        
        insertApartment: function(apt_id) {
            return $http.post('/api/apartments', apt_id);
        },
            
        updateApartment: function(apt_id) {
            return $http.put('/api/apartments' + apt_id, apt_id);
        },
        
        deleteApartment: function(apt_id) {
            return $http.delete('/api/apartments' + apt_id);
        }
    }      

}]);