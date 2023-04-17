import { Schema, model, models } from 'mongoose';
import { unique } from 'next/dist/build/utils';

const contentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: Array,
    },
}, {
    timestamps: true,
});

const Content = models.Content || model('Content', contentSchema);