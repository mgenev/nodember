/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../config/config'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Article Schema
 */
var VendorSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    homepage: {
        type: Schema.ObjectId,
        ref: 'Homepage'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        trim: true
    },
    services: {
        type: Array
    },
    id: {
        type: ObjectId,
        trim: true
    }
}, {
    versionKey: false,
    id: true
});

/**
 * Validations
 */
VendorSchema.path('name').validate(function(name) {
    return name.length;
}, 'Title cannot be blank');

/**
 * Statics
 */

VendorSchema.statics = {
    // Load static finds by id, populates user nested object
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    },
    // query static finds by other query params, populates user nested object
    query: function(query, cb) {
        this.findOne(query).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Vendor', VendorSchema);
