App.IndexController = Ember.Controller.extend({    
    actions: {
        tooltip: function() {            
            $('.tool-tipped').tooltip('show');
            setTimeout(function(){
                $('.tool-tipped').tooltip('hide');                
            }, 1000);
        }
    }
});

