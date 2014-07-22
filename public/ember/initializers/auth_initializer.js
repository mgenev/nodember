      window.ENV = window.ENV || {};
      window.ENV['simple-auth'] = {
          authorizer: 'authorizer:custom'
      };

      Ember.Application.initializer({
          name: 'authentication',
          before: 'simple-auth',
          initialize: function(container, application) {
              // register the custom authenticator and authorizer so Ember Simple Auth can find them
              container.register('authenticator:custom', App.CustomAuthenticator);
              container.register('authorizer:custom', App.CustomAuthorizer);
          }
      });


       // the custom authenticator that authenticates the session against the custom server
      App.CustomAuthenticator = global.SimpleAuth.Authenticators.Base.extend({
          tokenEndpoint: '/users/session',

          restore: function(data) {
              return new Ember.RSVP.Promise(function(resolve, reject) {
                  if (!Ember.isEmpty(data.token)) {
                      resolve(data);
                  } else {
                      reject();
                  }
              });
          },

          authenticate: function(credentials) {
              var _this = this;
              return new Ember.RSVP.Promise(function(resolve, reject) {
                  Ember.$.ajax({
                      url: _this.tokenEndpoint,
                      type: 'POST',
                      data: JSON.stringify({
                          email: credentials.identification,
                          password: credentials.password
                      }),
                      contentType: 'application/json'
                  }).then(function(response) {
                      console.log('the response', response);
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
          },

          invalidate: function() {
              var _this = this;
              return new Ember.RSVP.Promise(function(resolve) {
                  Ember.$.ajax({
                      url: _this.tokenEndpoint,
                      type: 'DELETE'
                  }).always(function() {
                      resolve();
                  })
              });
          },
      });

       // the custom authorizer that authorizes requests against the custom server
      App.CustomAuthorizer = global.SimpleAuth.Authorizers.Base.extend({
          authorize: function(jqXHR, requestOptions) {
              if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
                  jqXHR.setRequestHeader('Authorization', 'Token: ' + this.get('session.token'));
              }
          }
      });
