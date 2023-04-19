require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const condb = require('./condb/condb');
const HCL = require('./controllers/handle');
const router = require('./routes/api.route');

// connect with monodb uri
condb(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/');

const app = express();  
app.use(morgan('dev'));
app.use('/api/v1/blog', router)
app.use(express.json());

app.get('/', HCL.handleGet);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port : ", PORT);
});