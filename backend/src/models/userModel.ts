import mongoose from 'mongoose'
import validator from "validator";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, "Please enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more then 3 characters"]
    },
    email: {
        type: String,
        require: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid email"]
    },
    password: {
        type: String,
        require: [true, "Please enter your email"],
        minLength: [8, "Password should be grater then 8 characters"],
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organisation",

    },
    isAdmin: {
        type: Boolean,
        default: false
    },


},
    { timestamps: true });

export default mongoose.model("User", userSchema)
