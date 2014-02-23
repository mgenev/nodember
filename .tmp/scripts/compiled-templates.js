Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.HeaderView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <div class=\"container\" id=\"main\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("create template\n<section>\n	<form class=\"form-horizontal\">\n		<div class=\"control-group\">\n			<label class=\"control-label\" for=\"title\">Title</label>\n		\n			<div class=\"controls\">\n				<input type=\"text\" id=\"title\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" placeholder=\"Title\" required>\n				\n				</input>\n			</div>\n		</div>\n		<div class=\"control-group\">\n			<label class=\"control-label\" for=\"articleContent\">Body</label>\n			<div class=\"controls\">\n				");
  hashContexts = {'id': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0};
  hashTypes = {'id': "STRING",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'id': ("articleContent"),
    'cols': ("30"),
    'rows': ("10"),
    'placeholder': ("Article Content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"control-group\">\n			<div class=\"controls\">\n				<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createArticle", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Contract</button>\n			</div>\n		</div>\n	</form>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["articles/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("edit article template\n<section>\n	<form class=\"form-horizontal\">\n		<div class=\"control-group\">\n			<label class=\"control-label\" for=\"title\">Title</label>\n		\n			<div class=\"controls\">\n				<input type=\"text\" id=\"title\" ");
  hashContexts = {'value': depth0};
  hashTypes = {'value': "ID"};
  options = {hash:{
    'value': ("title")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" placeholder=\"Title\" required>				\n				</input>\n			</div>\n		</div>\n		<div class=\"control-group\">\n			<label class=\"control-label\" for=\"articleContent\">Article Content</label>\n			<div class=\"controls\">\n				");
  hashContexts = {'id': depth0,'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0};
  hashTypes = {'id': "STRING",'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'id': ("articleContent"),
    'value': ("articleContent"),
    'cols': ("30"),
    'rows': ("10"),
    'placeholder': ("Article Content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"control-group\">\n			<div class=\"controls\">\n				<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editArticle", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Update</button>\n			</div>\n		</div>\n	</form>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		<li>\n		    <span class=\"title\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "articles.view", "id", options) : helperMissing.call(depth0, "link-to", "articles.view", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</span>\n		    <span>by ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "user.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n		    <span>on ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatDate || depth0.formatDate),stack1 ? stack1.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  data.buffer.push("</span>	\n		    <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "content", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n		    <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "articleContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n		</li>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<h2>Index of articles:</h2>\n<div class=\"article-list\">\n	<ul>\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["articles/view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

  data.buffer.push("view article template\n<div class=\"article\">\n\n	    <h2>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n	    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatDate || depth0.formatDate),stack1 ? stack1.call(depth0, "created", "short", options) : helperMissing.call(depth0, "formatDate", "created", "short", options))));
  data.buffer.push("<span class=\"title\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "articles.edit", "id", options) : helperMissing.call(depth0, "link-to", "articles.edit", "id", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</span>\n	    \n	    <div>\n	   ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "articleContent", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <li class=\"dropdown\"> \n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "link.submenu", {hash:{},inverse:self.program(6, program6, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("            \n        	</li>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n 			  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                 \n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<b class=\"caret\"></b></a>\n        \n        <ul class=\"dropdown-menu\">\n			    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "subLink", "in", "link.submenu", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n			    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n			        <li>\n			        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "subLink.link", options) : helperMissing.call(depth0, "link-to", "subLink.link", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("	         \n			        </li>\n			    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "subLink.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n 			    	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "link.link", options) : helperMissing.call(depth0, "link-to", "link.link", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		    	");
  return buffer;
  }
function program7(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "link.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<header class=\"navbar navbar-inverse navbar-fixed-top bs-docs-nav\" role=\"banner\" data-ng-controller=\"HeaderController\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\" style=\"color: black;\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"../\" class=\"navbar-brand\">Full Stack JS Boilerplate</a>\n    </div>\n    <nav class=\"collapse navbar-collapse bs-navbar-collapse\" role=\"navigation\">\n	   <ul class=\"nav navbar-nav navbar-right\">        \n		  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "link", "in", "view.menu", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul> \n\n	<!-- \n      <ul class=\"nav navbar-nav navbar-right\" data-ng-hide=\"global.authenticated\">\n        <li><a href=\"signup\">Signup</a>\n        </li>\n        <li class=\"divider-vertical\"></li>\n        <li><a href=\"signin\">Signin</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\" data-ng-show=\"global.authenticated\">\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "global.user.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"/signout\">Signout</a>\n                </li>\n            </ul>\n        </li>\n      </ul> -->\n    </nav>\n  </div>\n</header>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"well\">\n    <h2>Welcome to the 100 Percent JS Boiler Plate</h2>\n    <h3>Core components</h3>\n    <ul>\n    	<li>Node</li>\n    	<li>Express</li>\n    	<li>Ember</li>\n    	<li>Bootstrap</li>\n    	<li>MongoDB</li>\n    </ul>\n    <h3>Additional Tools Available</h3>\n    <ul>\n    	<li>SASS - CSS pre-processor</li>\n    	<li>jQuery - Write less, do more\n	    <li>Grunt - The Javascript task runner</li>\n	    <li>Bower - Client-side dependency management</li>\n	    <li>RequireJS - Client-side module dependency and injection</li>\n	    <li>Handlebars - Advanced Client-side templating </li>\n	    <li>Hogan - Server-side templating</li>\n	    <li>Livereload - Automatic browser reload per save</li>\n	    <li>Mongoose - A NodeJS object modeler for MongoDB</li>\n	    <li>Passport - User Authentication</li>\n	    <li>Mocha - Unit Testing</li>\n	    <li>Font Awesome - CSS Icons</li>\n    </ul>    \n</div>");
  
});