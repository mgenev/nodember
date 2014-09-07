      window.ENV = window.ENV || {};
      window.ENV['simple-auth'] = {
          store: 'simple-auth-session-store:local-storage'
      };

      Ember.Application.initializer({
          name: 'authentication',
          before: 'simple-auth',
          initialize: function(container, application) {
              // register the custom authenticator and authorizer so Ember Simple Auth can find them
              container.register('authenticator:custom', App.CustomAuthenticator);
              container.register('authenticator:signup', App.SignupAuthenticator);
          }
      });


       // the custom authenticator that authenticates the session against the custom server
      App.CustomAuthenticator = global.SimpleAuth.Authenticators.Base.extend({
          tokenEndpoint: '/users/session',

          restore: function(data) {
              return new Ember.RSVP.Promise(function(resolve, reject) {
                  if (data.authenticated) {
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
                      Ember.run(function() {

                          _this.container.lookup('controller:application').set('currentUser', response.user);
                          localStorage.setItem('user', JSON.stringify(response.user));

                          resolve({
                              authenticated: true
                          });
                      });
                  }, function(xhr, status, error) {
                      Ember.run(function() {
                          reject(error);
                      });
                  });
              });
          },

          invalidate: function() {
              var _this = this;
              localStorage.removeItem('user');
              return new Ember.RSVP.Promise(function(resolve) {
                  Ember.$.ajax({
                      url: '/signout',
                      type: 'GET'
                  }).always(function() {
                      resolve();
                  })
              });
          },
      });

      App.SignupAuthenticator = global.SimpleAuth.Authenticators.Base.extend({
          restore: function(data) {
              return new Ember.RSVP.Promise(function(resolve, reject) {
                  if (data.authenticated) {
                      resolve(data);
                  } else {
                      reject();
                  }
              });
          },

          authenticate: function(credentials) {
              var _this = this;
              return new Ember.RSVP.Promise(function(resolve, reject) {
                _this.container.lookup('controller:application').set('currentUser', credentials.user);
                localStorage.setItem('user', JSON.stringify(credentials.user));
                  resolve({
                      authenticated: true
                  });
              });
          }
      });
