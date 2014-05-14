/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../config/config'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Photo Schema
 */
var PhotoSchema = new Schema({
        created: {
            type: Date,
            default: Date.now
        },
        name: {
            type: String,
            default: '',
            trim: true
        },
        path : {
            type: String,
            default: '',
            trim: true
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
 */
PhotoSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
PhotoSchema.statics = {
    // Load static finds by id, populates user nested object
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    },
    // query static finds by other query params, populates user nested object
    query: function (query, cb) {
         this.findOne(query).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Photo', PhotoSchema);