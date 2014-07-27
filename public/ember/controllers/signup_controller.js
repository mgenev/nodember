App.SignupController = Ember.Controller.extend({
    errorMessage: function () {

    }.property(),
    actions: {
        signup: function() {

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
                console.log('now what');


            }, function(xhr, status, error) {


            });
        }
    }
});
