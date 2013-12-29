angular.module('mean.reservations').controller('ClientsController', ['$scope', '$routeParams', '$location', 'Global', 'Clients', function ($scope, $routeParams, $location, Global, Clients) {
    $scope.global = Global;

    $scope.create = function() {
        var client = new Clients({
            name: this.name,
            type: this.type
        });
        client.$save(function(response) {
            $location.path("clients/" + response._id);
        });

        this.name = "";
        this.type = "";
    };

    $scope.remove = function(client) {
        client.$remove();  

        for (var i in $scope.client) {
            if ($scope.clients[i] == client) {
                $scope.clients.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var client = $scope.client;
        if (!client.updated) {
            client.updated = [];
        }
        client.updated.push(new Date().getTime());

        client.$update(function() {
            $location.path('clients/' + client._id);
        });
    };

    $scope.find = function() {
        Clients.query(function(clients) {
            $scope.clients = clients;
        });
    };

    $scope.findOne = function() {
        Clients.get({
            clientId: $routeParams.clientId
        }, function(client) {
            $scope.client = client;
        });
    };
}]);