const express = require('express');
const mongoose = require('mongoose');
const radioRoute = express.Router();
const app = express();

const Radio = require('../models/radio-model');

function validateId(req, res, next) {
    const radioId = req.params.radioId;
    if (!mongoose.Types.ObjectId.isValid(radioId)) {
        res.status(400).json({
            message: 'The ID for this radio doesn\'t exists'
        });
        return;
    }
    app.locals.radioId = radioId;
    next();
}

radioRoute.get('/', (req, res, next) => {
    Radio
        .find()
        .then(radioList => {
            res.json(radioList);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

radioRoute.get('/sortedByName', (req, res, next) => {
    Radio
        .find()
        .sort({name: 'asc'})
        .then(radioList => {
            res.json(radioList);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

radioRoute.get('/:radioId', validateId, (req, res, next) => {
    const {radioId} = app.locals;
    console.log(app.locals)

    Radio
        .findById(radioId)
        .then(radio => {
            res.json(radio);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

radioRoute.put('/:radioId', validateId, (req, res, next) => {
    const {radioId} = res.locals;

    Radio.findByIdAndUpdate(radioId, req.body)
        .then(() => {
            res.json({
                message: `Radio with the ID ${radioId} is successfully updated.`
            });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = radioRoute;