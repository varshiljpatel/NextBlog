require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const condb = require('./condb/condb');
const HCL = require('./controllers/handle');
const router = require('./routes/api.route');
const authRouter = require('./routes/auth/auth.route');

// connect with monodb uri
condb(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/');

const app = express();
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use('/api/auth', authRouter)
app.use('/api/v1/blog', router)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', HCL.handleGet);
app.get('/api', HCL.handleGet);
app.get('/api/auth', HCL.handleGet);
app.get('*', HCL.handleGet);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port :", PORT);
});