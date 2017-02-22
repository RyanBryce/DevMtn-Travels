angular.module('devmtnTravel').controller('packages', function($scope, mainSrv) {
  $scope.package = mainSrv.travelInfo;

});
