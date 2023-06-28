const mongoose = require('mongoose');

const moeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    }}, {
    timestamps: {
        required: true
    }
});

module.exports = mongoose.model('MOE', moeSchema);