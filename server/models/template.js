/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Template Schema
 */
var TemplateSchema = new Schema({
        created: {
            type: Date,
            default: Date.now
        },
        // eg. home template
        name: {
            type: String,
            default: '',
            trim: true
        },
        // Object for the fields of the template. This is read out from the theme and is populated to the db
        // after that it is used at the UI page for editing an article to which is assigned this template
        templateSchema: {
            type: Object,
            default: {}
        },
        user: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        id: {
            type: ObjectId,
            trim: true
        }
    },
    {
        versionKey: false,
        id: true
    }
);

/**
 * Validations
//  */
// TemplateSchema.path('title').validate(function(title) {
//     return title.length;
// }, 'Title cannot be blank');

/**
 * Statics
 */
 // Load static finds by id, populates user nested object
TemplateSchema.statics = {
    // Load static finds by id, populates user nested object
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    },
    // query static finds by other query params, populates user nested object
    query: function (query, cb) {
         this.find(query).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Template', TemplateSchema);