import mongoose from "mongoose";

const contectdb = ()=>{
    mongoose.connect(process.env.mongodbUrl).then(()=>{
        console.log('connect database')
    })
}

export default contectdb;