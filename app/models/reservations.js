/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Reservation Schema
 */
var ReservationSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    services: {
        type: Array,
        default: [{
            services: {
                type: Schema.ObjectId,
                ref: 'Service'
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            },
            amount: {
                type: Number
            }
        }], // array of { servicesId: ref, startDate, endDate ] }
        ref: 'Activity'
    },
    destination: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
//  */
// ReservationSchema.path('title').validate(function(title) {
//     return title.length;
// }, 'Title cannot be blank');

/**
 * Statics
 */
ReservationSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Reservation', ReservationSchema);
