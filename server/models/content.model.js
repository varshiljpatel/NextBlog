const { Schema, model } = require('mongoose');

const contentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    imgUrl: {
        type: String,
    },
    views: [{
        timestamp: Number,
    }]
}, {
    timestamps: true
});

const Content = model('Content', contentSchema);
module.exports = Content;