import User from '../models/user.model.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const user = new User({
            username,
            email,
            password
        });

        user.save();
        res.send('User registered successfully');

    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
};

export const login = async (req, res) => {
    res.json('login route');
};