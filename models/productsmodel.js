import mongoose from "mongoose";


const productScheme = mongoose.Schema({
    name : {
        type : String,
        required : true

    },
    description : {
        type : String,
        required : true

    }, image : {
        type : String,
        required : true

    },
    category : {
        type : String,
        required : true

    }, price : {
        type : Number,
        required : true

    },
    countInStock : {
        type : Number,
        required : true

    }
})


const product =mongoose.model("product", productScheme)


export default product;