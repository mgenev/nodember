    // // Articles
    // App.ArticlesIndexController = Ember.ArrayController.extend({


    // });

    App.ArticlesCreateController = Ember.Controller.extend({
        
        setupController: function(controller, model) {
            controller.set('model', 'model');
        },
        actions: {
            createArticle: function() {

                var article = this.store.createRecord('Article', {
                    title: $(title).val(),
                    articleContent: $(articleContent).val()
                });

                var self = this;
                var onSuccess = function(res) {                                        
                    self.transitionToRoute('articles.view', res._id);
                };

                var onFail = function(res) {
                    alert('fail');
                };

                article.save().then(onSuccess, onFail);
            }
        },

    });
