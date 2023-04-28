import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true

    },email : {
        type : String,
        required : true

    },number : {
        type : Number,
        required : true

    },password : {
        type : String,
        required : true

    },
    address : {
        type : String,
        required : true

    },
    isAdmin : {
        type : String,
        required : true,
        default: false

    },
})

const Users = mongoose.model("user", userSchema)

export default Users