angular.module('devmtnTravel').controller('booked', function($scope, mainSrv, $stateParams) {

    var place = mainSrv.travelInfo;
    console.log(place);
    var idx = $stateParams.id;
    console.log(idx);
    for (var i = 0; i < place.length; i++) {
        console.log(place[i].id);
        console.log(idx);
        if (idx == place[i].id) {
            $scope.place = place[i];
            console.log($scope.place);
        } else {
            console.log('cant find')
        }
    };

});
