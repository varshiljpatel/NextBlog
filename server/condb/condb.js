const mongoose = require('mongoose');

const condb = async (uri) => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.MONGO_DB || 'blog'
    });
    console.log('connected to database');
}

module.exports = condb;