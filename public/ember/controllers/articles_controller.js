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
                    title: title,
                    content: content

                });

                console.log(article);

                this.set('model', article);
                article.save();
            }
        }
    });
