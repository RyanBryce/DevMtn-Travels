angular.module('devmtnTravel').controller('locations', function($scope, mainSrv) {
    $scope.package = mainSrv.travelInfo;
    
});
