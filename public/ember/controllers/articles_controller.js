App.ArticlesCreateController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        createArticle: function() {
            var article = this.content,
                self = this;

            function transitionToArticle(article) {
                self.transitionToRoute('articles.article', article);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            article.save().then(transitionToArticle).
            catch (failure);
        }
    }
});


App.ArticlesArticleController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        editArticle: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var article = this.content;
            article.save();

            this.transitionToRoute('articles.article', article);
        }
    },
    isEditing: false
});

App.ArticlesController = Ember.Controller.extend({
    types: {
        'name': 'types',
        'question': 'Type',
        'choices': ['Blog', 'Article', 'Newsflash'],
        'answer': 'Blog'
    },
});
