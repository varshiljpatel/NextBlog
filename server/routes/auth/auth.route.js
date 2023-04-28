const bodyParser = require('body-parser')
const authRouter = require('express').Router();
const User = require('../../models/user.model')

// parsing body json data
authRouter.use(bodyParser.json());
authRouter.use(bodyParser.urlencoded({ extended: false }));

authRouter.post('/signup', async (req, res, next) => {
    try {
        if (req.query.access_key == process.env.ACCESS_KEY || req.body.role == "admin") {
            const { username, email, password } = req.body
            const checkExist = await User.findOne({
                username,
            })
            if (checkExist) {
                console.log('User already exists', username);
                next()
            } else {
                console.log(req.body);
                const data = await User.create({
                    username,
                    email,
                    password,
                    role: req.body.role || 'user'
                });
                console.log('New user created with username :', data.username);
                res.status(201).json(data)
                try {
                    res.redirect('http://localhost:3000/');
                } catch (e) {
                    console.log('Error :', e.message);
                }
            }
        } else {
            throw new Error;
        }
    } catch (err) {
        next(err.message);
    }
})

// admin route signin
authRouter.get('/admin/signin', async (req, res, next) => {
    try {
        if (req.query.access_key == process.env.ADMIN_ACCESS_KEY) {
            const { username, email, password } = req.body
            const existAdmin = await User.findOne({
                username,
            })
            if (existAdmin.role == 'admin') {
                console.log("user is able to login as an admin", req.body.username, req.body.email);
            }
            res.status(200).send("user is able to login as an admin", req.body.username, req.body.email)
        } else {
            throw new Error;
        }
    } catch (err) {
        next(err.message);
    }
})

authRouter.get('/signin', (req, res) => {
    res.status(201).json({ message: 'Sign in' })
});

module.exports = authRouter;