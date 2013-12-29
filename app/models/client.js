/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ClientSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    address: {
        city: {
            type: String,
            default: '',
            trim: true
        },
        country: {
            type: String,
            default: '',
            trim: true
        },
        street: {
            type: String,
            default: '',
            trim: true
        },
        zip: {
            type: String,
            default: '',
            trim: true
        },
    },
    activities: {
        type: Array,
        default: [],
        ref: 'Activity'
    },
    resorts: {
        type: Array,
        default: [],
        ref: 'Resorts'
    },
    type: {
        type: String,
        default: '',
        trim: true
    },
    // user: {
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // }
});

/**
 * Validations
 */
ClientSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
// ClientSchema.statics = {
//     load: function(id, cb) {
//         this.findOne({
//             _id: id
//         }).populate('user', 'name username').exec(cb);
//     }
// };

mongoose.model('Client', ClientSchema);
