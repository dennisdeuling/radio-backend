const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const radioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    frequency: {
        type: Number,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

const Radio = mongoose.model('Radio', radioSchema);

module.exports = Radio;