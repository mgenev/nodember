App.SignupController = Ember.Controller.extend({
    errorMessage: function () {

    }.property(),
    actions: {
        signup: function() {
            var _this = this;
            Ember.$.ajax({
                url: '/signup',
                type: 'POST',
                data: JSON.stringify({
                    email: this.get('email'),
                    password: this.get('password'),
                    username: this.get('username'),
                    name: this.get('name')
                }),
                contentType: 'application/json'
            }).then(function(response) {                
                _this.get('session').authenticate('authenticator:signup', response);
            }, function(xhr, status, error) {

                this.set('errorMessage', error);
            });
        }
    }
});
