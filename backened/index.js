const express = require("express");
const app = express();
const cors = require("cors")
const authRouter = require("./router")
const errorMiddleware = require("./errorMiddleware")
app.use(cors());
app.use(express.json())
app.use("/api/v1/auth",authRouter)
app.use(errorMiddleware)
app.listen(3000,()=>{
  console.log("Server is running at port 3000....")
})