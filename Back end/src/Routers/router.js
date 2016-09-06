var express = require('express');
var propertyRouter = express.Router();
var Property = require('../model/model');

propertyRouter.route("/")
    .get(function (req, res) {

        Property.find(function (err, allProperties) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(allProperties);
            }

        })
    })
    .post(function (req, res) {
        console.log(req.body);
        var newProperty = new Property(req.body);
        newProperty.save(function (err, newOneProperty) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newOneProperty);
            }
        })

    })

propertyRouter.route("/:id")
    .get(function (req, res) {
        Property.findById(req.params.id, function (err, getOneItem) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(getOneItem);
            }
        });
    })

.delete(function (req, res) {
    var propertyId = req.params.id;
    Property.findOneAndRemove({
        _id: propertyId
    }, function (err, deletedItem) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(deletedItem);
        }

    })

})

.put(function (req, res) {
    Property.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, updatedPost) {
         console.log(updatedPost);
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(updatedPost);
//            console.log(updatedPost);
        }
    });

});







module.exports = propertyRouter;