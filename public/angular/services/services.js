//Articles service used for articles REST endpoint
angular.module('mean.bookingflow').factory("Reservations", ['$resource', function($resource) {
    return $resource('reservations/:reservationId', {
        reservationId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.bookingflow').factory("Services", ['$resource', function($resource) {
    return $resource('services/:serviceId', {
        serviceId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.bookingflow').factory("ServicesByType", ['$resource', function($resource) {
    return $resource('servicesbytype/:serviceType', {
        serviceType: '@serviceType'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.bookingflow').factory("Clients", ['$resource', function($resource) {
    return $resource('clients/:clientId', {
        clientId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.bookingflow').factory("Users", ['$resource', function($resource) {
    return $resource('users/:userId', {
        clientId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);