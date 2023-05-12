import express  from "express";
import contectdb from "./mogdb/db.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

import dotenv from "dotenv";

dotenv.config()
contectdb()
const app = express()
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

const port= process.env.PORT || 5000

 

app.listen(port,()=>{
console.log(`server is running ${process.env.PORT}`)
})


