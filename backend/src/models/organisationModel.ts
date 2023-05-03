import mongoose from 'mongoose'

const organisationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter organisation name"],
    }
}, { timestamps: true });

export default mongoose.model("Organisation", organisationSchema)
