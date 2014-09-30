App.TemplatesCreateController = Ember.ObjectController.extend({
    needs: ['articles'],
    actions: {
        createTemplate: function() {
            var template = this.model,
                self = this;

            function transitionToTemplate(article) {
                self.transitionToRoute('templates.template', article);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            template.save().then(transitionToTemplate).catch(failure);
        }
    }
});


App.TemplatesTemplateController = Ember.ObjectController.extend({
    actions: {
        editTemplates: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var article = this.model;
            article.save();

            this.transitionToRoute('articles.article', article);
        }
    },
    isEditing: false
});

App.TemplatesLoadController = Ember.ObjectController.extend({
    actions: {
        loadTemplates: function() {
            Ember.$.ajax({
                url: '/templates/load',
                type: 'GET',
                contentType: 'application/json'
            }).then(function(response) {
                console.log(response);
            }, function(xhr, status, error) {
                Ember.run(function() {
                    reject(error);
                });
            });
        }
    }
});
