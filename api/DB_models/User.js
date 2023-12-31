import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },
    email: {
        type: 'String',
        required: true,
    },
    password: {
        type: 'String',
        required: true,
    },
    contact_no: {
        type: 'String',
        required: true,
    },
    // 
    location: {
        type: 'String',
        required: false,
    },
    //
},{timestamps : true})

const userCollection = mongoose.model('userCollection', userSchema, 'User')

// module.exports = userCollection;
export default userCollection