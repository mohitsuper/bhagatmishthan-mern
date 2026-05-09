require('dotenv').config();
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const cors = require('cors');
const router = require('./Router/router');
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
const url = `${process.env.LOCAL_BASEURL}`

const baseurl = url;
module.exports={baseurl}


mongoose.connect(url)
.then(()=>console.log("Conntion defined successfull"))
.catch((error)=>console.log("Conntion define Error:",error))


app.use('/api',router)
// app.use('/upload', express.static('upload'));
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})