    // // Articles
    // App.ArticlesIndexController = Ember.ArrayController.extend({


    // });

    App.ArticlesEditController = Ember.ArrayController.extend({
        actions: {
            editArticle: function() {
                var article = this.get('model');
                article.save();
            }
        }
    });



    App.ArticlesCreateController = Ember.Controller.extend({
        
        setupController: function(controller, model) {
            controller.set('model', 'model');
        },
        actions: {
            createArticle: function() {

                var article = this.store.createRecord('Article', {
                    title: $(title).val(),
                    content: $(content).val()
                });

                var self = this;
                var onSuccess = function(res) {
                    console.log(res);                    
                    self.transitionToRoute('articles.view', res);
                };

                var onFail = function(res) {
                    alert('fail');
                };

                article.save().then(onSuccess, onFail);
            }
        },

    });
