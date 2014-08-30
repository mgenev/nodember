App.User = DS.Model.extend({
    title: DS.attr('string'),
    name: DS.attr('string'),
    email: DS.attr('string'),
    username: DS.attr('string'),
    vendors: DS.hasMany('vendor')
});
