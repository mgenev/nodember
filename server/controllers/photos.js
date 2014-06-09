var path = require('path'),
    fs = require('fs'),
    join = path.join,
    root = require('../../root'),
    mongoose = require('mongoose'),
    Photo = mongoose.model('Photo'),
    _ = require('underscore');

exports.photo = function(req, res, next, id) {
    console.log('is it hitting?', id);
    Photo.load(id, function(err, photo) {
        if (err) return next(err);
        if (!photo) return next(new Error('Failed to load photo ' + id));
        photo = transformPath([photo]);
        req.photo = photo[0];
        next();
    });
};

/**
 * Show a photo
 */

exports.show = function(req, res) {
    res.send({
        photo: req.photo
    });
};

transformPath = function(photos) {
    var transformed = _.map(photos, function(photo) {
        var p = photo.path;
        photo.path = p.substr(p.indexOf("/public") + 7, p.length);
        return photo;
    });
    return transformed;
}

exports.index = function(req, res, next) {

    if (!_.isEmpty(req.query)) {
        Photo.query(req.query, function(err, photos) {
            if (err) return next(err);
            if (!photos) {
                res.send({
                    error: new Error('Failed to load photo for query')
                });
            } else {
                //transform to public path                
                photos = transformPath(photos);
                res.send({
                    photos: photos
                });
            }
        });
    } else {
        // else we find all
        Photo.find().sort('-created').populate('user', 'name username').exec(function(err, photos) {
            if (err) return next(err);
            if (!photos) {
                res.send({
                    error: new Error('Failed to load photo for query')
                });
            } else {
                //transform to public path                
                photos = transformPath(photos);
                res.send({
                    photos: photos
                });
            }
        });
    }
};

exports.upload = function(dir) {
    return function(req, res, next) {
        var img = req.files.file;
        var name = img.originalFilename;
        var exists = false;
        var path = root + '/public/img/uploads/';

        fs.exists(path, function(exists) {
            if (!exists) {
                fs.mkdirSync(path, '755');
            }

            var imgPath = join(path, img.name);

            fs.rename(img.path, imgPath, function(err) {
                if (err) return next(err);

                Photo.create({
                    name: name,
                    path: path
                }, function(err) {
                    if (err) return next(err);
                    res.redirect('/');
                });
            });
        })

    };
};

exports.download = function(dir) {
    return function(req, res, next) {
        var id = req.params.id;
        Photo.findById(id, function(err, photo) {
            if (err) return next(err);
            var path = join(dir, photo.path);
            res.download(path, photo.name + '.jpeg');
        });
    };
};
