   
App.ArticlesCreateController = Ember.Controller.extend({
         actions: {
            createArticle: function() {

                var article = this.store.createRecord('article', {
                    title: $(title).val(),
                    articleContent: $(articleContent).val()
                });

                var self = this;

                function transitionToArticle(article) {
                  self.transitionToRoute('articles.view', article);
                }

                function failure(reason) {
                  // handle the error
                  alert(reason);
                }

                article.save().then(transitionToArticle).catch(failure);
            }
        }
});
