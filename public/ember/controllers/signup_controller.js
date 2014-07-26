App.SignupController = Ember.Controller.extend({
    actions: {
        signup: function() {
            console.log('wtfffff');
            var _this = this;
            return new Ember.RSVP.Promise(function(resolve, reject) {
                Ember.$.ajax({
                    url: '/signup',
                    type: 'POST',
                    data: JSON.stringify({
                        email: credentials.identification,
                        password: credentials.password
                    }),
                    contentType: 'application/json'
                }).then(function(response) {

                    Ember.run(function() {
                        resolve({
                            token: response.session.token
                        });
                    });
                }, function(xhr, status, error) {
                    var response = JSON.parse(xhr.responseText);
                    Ember.run(function() {
                        reject(response.error);
                    });
                });
            });
        }
    }
});
