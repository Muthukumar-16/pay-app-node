const app = require('express')();
const path = require('path');
require("dotenv").config();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log("App is listening to", process.env.PORT)
})