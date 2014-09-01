App.Vendor = DS.Model.extend({
	user: DS.belongsTo('user'),
	name: DS.attr('string'),
	description: DS.attr('string')
});
