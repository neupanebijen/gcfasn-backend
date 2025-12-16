import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import path from "path"

import pageRouter from "./routes/page.js"
import utilRouter from "./routes/util.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("src/public"))

const PORT = process.env.PORT 
const DB_URI =
  process.env.DB_URI 

app.use("/page", pageRouter)
app.use("/util", utilRouter)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/public/index.html"))
})

mongoose.connect(DB_URI, { useNewUrlParser: true }, () => {
  console.log("DB connection Success")
})

app.listen(PORT, () => {
  console.log("App running in port ", PORT)
})

