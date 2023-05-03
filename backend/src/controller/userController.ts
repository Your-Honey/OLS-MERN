import User from '../models/userModel';
import generateToken from '../utils/generateToken';
import * as bcrypt from "bcryptjs";
import * as asyncHandler from "express-async-handler";


// Register a User
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, organisation } = req.body;
    if (!name || !email || !password || !organisation) {
        res.status(400);
        throw new Error("Please enter all the feilds");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password),
        organisation,
    });
    if (user) {
        res.status(201).send({
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                organisation: user.organisation,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            }
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            res.status(200).json(
                {
                    message: 'Login Successfully!',
                    data: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        organisation: user.organisation,
                        isAdmin: user.isAdmin,
                        token: generateToken(user._id),
                    }
                });
        }
    } else {
        res.status(400);
        throw new Error("Wrong email or password");
    }
});


export {
    registerUser,
    loginUser
}