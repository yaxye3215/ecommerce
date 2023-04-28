import express  from "express";
import contectdb from "./mogdb/db.js";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";

dotenv.config()
contectdb()
const app = express()
app.use(express.json())
app.use('/api/user', userRouter)

const port = 5000

app.listen(()=>{
console.log(`server is running ${port}`)
})


