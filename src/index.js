const express = require('express');

const {ServerConfig , Logger} = require('./config/index.js')
const apiRoutes = require('./routes')
const {City,Airport} = require('./models/index.js')

const app = express();

// routes layer -> controller layer -> repository layer -> service layer -> model layer

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,async ()=>{
    console.log("Server started on port ",ServerConfig.PORT);
})  

// netstat -ano , taskkill /PID 26316 /F
// lec-108