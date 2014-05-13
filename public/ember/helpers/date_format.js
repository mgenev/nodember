var DateFormats = {
       short: "DD MMMM - YYYY",
       long: "dddd DD.MM.YYYY HH:mm"
};

Ember.Handlebars.helper("formatDate", function(datetime, format) {
  if (moment) {
    f = DateFormats[format];
    return moment(datetime).format(f);
  }
  else {
    return datetime;
  }
});

Ember.Handlebars.helper("test", function(text, url) {
	return new Ember.Handlebars.SafeString(
    "<a href='" + url + "'>" + text + "</a>"
  );
});