angular.module('mean.reservations').controller('ReservationsController', ['$scope', '$routeParams', '$location', 'Global', 'Reservations', function ($scope, $routeParams, $location, Global, Reservations) {
    $scope.global = Global;

    $scope.create = function() {
        var reservation = new Reservations({
            title: this.title,
            content: this.content
        });
        reservation.$save(function(response) {
            $location.path("reservations/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(reservation) {
        reservation.$remove();  

        for (var i in $scope.reservation) {
            if ($scope.reservations[i] == reservation) {
                $scope.reservations.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var reservation = $scope.reservation;
        if (!reservation.updated) {
            reservation.updated = [];
        }
        reservation.updated.push(new Date().getTime());

        reservation.$update(function() {
            $location.path('reservations/' + reservation._id);
        });
    };

    $scope.find = function() {
        Reservations.query(function(reservations) {
            $scope.reservations = reservations;
        });
    };

    $scope.findOne = function() {
        Reservations.get({
            reservationId: $routeParams.reservationId
        }, function(reservation) {
            $scope.reservation = reservation;
        });
    };
}]);