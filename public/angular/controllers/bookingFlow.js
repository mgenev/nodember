angular.module('mean.bookingflow').controller('BookingFlowController', ['$scope', '$routeParams', '$location', 'Global', 'Reservations', 'Clients', 'Services', 'Users', 'ServicesByType',
    function($scope, $routeParams, $location, Global, Reservations, Clients, Services, Users, ServicesByType) {

        $('#startDate').pickadate();
        $('#endDate').pickadate();

        $scope.global = Global;
        $scope.reservation = {};
        $scope.selectedServices = [];


        $scope.start = function() {
            $location.path("bookingflow/datedestination");
        }

        $scope.calculateDays = function(startDate, endDate) {
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var firstDate = new Date(startDate);
            var secondDate = new Date(endDate);
            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

            return diffDays;
        };

        $scope.findClients = function() {

            Clients.query(function(clients) {

                $scope.clients = clients;
                // $scope.pickDateDestination = false;
                $scope.resortList = true;
                console.log($scope.clients);

            });

        };


        $scope.findResortServices = function() {

            ServicesByType.query({
                serviceType: 'lodging'
            }, function(services) {
                console.log('resort services are', services);
                $scope.services = services;
            });
        };

        $scope.findActivityServices = function() {

            ServicesByType.query({
                serviceType: 'activity'
            }, function(services) {
                console.log('activity services are', services);
                $scope.services = services;
            });
        };

        $scope.create = function() {

            var startDate = angular.element(document.querySelector('#startDate')).val();
            var endDate = angular.element(document.querySelector('#endDate')).val();

            var reservation = new Reservations({
                startDate: startDate,
                endDate: endDate,
                destination: $scope.destination
            });
            reservation.$save(function(response) {
                $location.path("bookingflow/service-lodging-list/" + response._id);
            });

            this.startDate = "";
            this.endDate = "";
            this.destination = "";
        };


        $scope.selectServices = function(e) {
            // here reservation has to equal the product of the find
            // console.log("fires", serviceId);
            $scope.selectedServiceId = e.srcElement.id;

            var pickers = angular.element(e.srcElement).next().removeClass("hidden");

            $('#startDate' + $scope.selectedServiceId).pickadate();
            $('#endDate' + $scope.selectedServiceId).pickadate();
        };

        $scope.postServiceDates = function() {
            var serviceId = $scope.selectedServiceId;

            Services.get({
                serviceId: serviceId
            }, function(service) {

                var startDate = angular.element(document.querySelector('#startDate' + serviceId)).val();
                var endDate = angular.element(document.querySelector('#endDate' + serviceId)).val();
                var amount = angular.element(document.querySelector('#amount' + serviceId)).val();

                var daysReserved = $scope.calculateDays(startDate, endDate);
                var calcedPrice = service.price * daysReserved * amount;

                var reservation = $scope.reservation;

                var datedService = {
                    service: service,
                    startDate: startDate,
                    endDate: endDate,
                    amount: amount
                };

                $scope.selectedServices.push(datedService);
                console.log($scope.selectedServices);
                // reservation.updated.push(new Date().getTime());

                reservation.services.push(datedService);
                console.log(reservation.services);

                reservation.$update(function(response) {
                    // $location.path("bookingflow/servicelist/" + response._id);
                    angular.element(document.querySelector('#listWrap' + serviceId)).addClass("hidden");
                    angular.element(document.querySelector('#selected' + serviceId)).text("Selected during " + startDate + " to " + endDate + " for " + amount + " guests" + " at a cost of $" + calcedPrice).removeClass("hidden");

                });

            });
        }

        $scope.changeToSelectActivity = function() {

            $location.path('bookingflow/service-activity-list/' + $scope.reservation._id);
        }

        $scope.changeToSelectLodging = function() {
            $location.path('bookingflow/service-lodging-list/' + $scope.reservation._id);
        }

        $scope.gotoConfirm = function() {
            $location.path('bookingflow/confirm-reservation/' + $scope.reservation._id);
        }

        $scope.confirmBooking = function() {
            $location.path('bookingflow/finished/' + $scope.reservation._id);
        }

        $scope.lodgingServiceDetails = function(e) {
            $scope.selectedServiceId = e.srcElement.id
            console.log("lodgingServiceDetails fired");
            $location.path('bookingflow/lodging-service-detail/' + $scope.selectedServiceId + "/" + $scope.reservation._id);
        }

        $scope.activityServiceDetails = function(e) {
            $scope.selectedServiceId = e.srcElement.id;
            console.log("activityServiceDetails fired");
            $location.path('bookingflow/activity-service-detail/' + $scope.selectedServiceId + "/" + $scope.reservation._id);
        }

        $scope.calculateTotalPrice = function(reservation) {

            var daysReserved;
            var totalPrice = 0;

            for (var i in reservation.services) {
                
                

                if (reservation.services[i].service) {
                    console.log("logging x ", i);
                    console.log(reservation.services[i].service);
                        daysReserved = $scope.calculateDays(reservation.services[i].startDate, reservation.services[i].endDate);
                        console.log("days", daysReserved);
                        console.log("price", reservation.services[i].service.price);
                        console.log("amount",reservation.services[i].amount);
                    if (reservation.services[i].service.price && daysReserved && reservation.services[i].amount) {
                        daysReserved = $scope.calculateDays(reservation.services[i].startDate, reservation.services[i].endDate);
                        console.log("days", daysReserved);
                        console.log("price", reservation.services[i].service.price);
                        console.log("amount",reservation.services[i].amount);
                        totalPrice = totalPrice +
                            (reservation.services[i].service.price * daysReserved * reservation.services[i].amount)
                    }
                }

            }

            $scope.total = totalPrice;
        }

        // $scope.removeService = function(reservation) {
        //     //reservation.$remove();  

        //     for (var i in $scope.reservation) {
        //         if ($scope.reservations[i] == reservation) {
        //             $scope.reservations.splice(i, 1);
        //         }
        //     }

        //     reservation.$update(function(response) {
        //             // $location.path("bookingflow/servicelist/" + response._id);
        //             angular.element(document.querySelector( '#listWrap'+serviceId ) ).addClass("hidden");
        //             angular.element(document.querySelector( '#selected'+serviceId ) ).text("Selected during " + startDate + " to " + endDate + " for " + amount + " guests").removeClass("hidden");

        //         });

        // };

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

        // $scope.find = function() {
        //     Reservations.query(function(reservations) {
        //         $scope.reservations = reservations;
        //     });
        // };

        $scope.findOneService = function() {
            Services.get({
                serviceId: $routeParams.serviceId
            }, function(service) {
                $scope.service = service;
                console.log("the service is", $scope.service)
            });
        };

        $scope.findOneReservation = function() {
            Reservations.get({
                reservationId: $routeParams.reservationId
            }, function(reservation) {
                $scope.reservation = reservation;
                $scope.calculateTotalPrice($scope.reservation);
                console.log("the reservation is", $scope.reservation)
            });
        };
    }
]);
