app.directive('apartmentListing', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/apartmentListing.html' 
  }; 
});