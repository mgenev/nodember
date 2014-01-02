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
           actions: {
               createArticle: function() {
                  this.store.createRecord('article', { 
                  	title: title,
  					content: content
  				});
               }
           }
   });
