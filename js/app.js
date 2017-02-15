var app = angular.module('biggestApp', []);  
   app.controller('biggestController', function($scope) {
 	 $scope.submit = function() {
      
     
     if ( $scope.a > $scope.b && $scope.a > $scope.c && $scope.a > $scope.d )
        $scope.Result = "First number is largest."
      else if ( $scope.b > $scope.c && $scope.b > $scope.d )
        $scope.Result = "Second number is largest."
      else if ( $scope.c > $scope.d )
        $scope.Result = "Third number is largest."

       else 
        $scope.Result = "Fourth number is largest."



 	}
 });