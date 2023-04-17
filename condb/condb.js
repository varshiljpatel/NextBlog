import mongoose from 'mongoose';

const condb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.MONGO_DB,
            useNewUrlParser: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.log(err.message);
    }
}

export default condb;