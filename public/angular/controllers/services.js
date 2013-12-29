angular.module('mean.bookingflow').controller('ServicesController', ['$scope', '$routeParams', '$location', 'Global', 'Services', 'Clients', function ($scope, $routeParams, $location, Global, Services, Clients) {
    $scope.global = Global;

    $scope.create = function() {
        var clientId = $routeParams.clientId;
        var services = new Services({
            title: this.title,
            content: this.content,
            client: clientId
        });


        services.$save(function(response) {
            $location.path("services/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(service) {
        service.$remove();  

        for (var i in $scope.services) {
            if ($scope.services[i] == service) {
                $scope.services.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var service = $scope.service;
        if (!service.updated) {
            service.updated = [];
        }
        service.updated.push(new Date().getTime());

        service.$update(function() {
            $location.path('services/' + service._id);
        });
    };

    $scope.find = function() {
        Services.query(function(services) {
            $scope.services = services;
        });
    };

    $scope.findOne = function() {
        Services.get({
            serviceId: $routeParams.serviceId
        }, function(service) {
            $scope.service = service;
        });
    };
}]);