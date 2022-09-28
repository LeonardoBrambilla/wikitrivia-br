require('dotenv').config()
const express = require("express")
const app = express()
const connectDB = require("./config/db")
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.use('/',require("./routes/router"))

const port = process.env.PORT || 5000

const start = async()=>{ 
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port,()=>
      console.log('Server is running on port 5000')
    )
  } catch(error){
    console.log(error)
  }
}

start()