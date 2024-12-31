import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import authRouter from "./routes/authRouter.js"
import chatRouter from "./routes/chatRouter.js"
import { DBconnection } from "./config/conn.js"


DBconnection()

const port = 3000
const app = express()

app.use(express.json())
app.use(cors())


app.use("/api", authRouter)
app.use("/api", chatRouter)



app.get("/", (req, res)=>{
    res.send("Hello World!")  
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})