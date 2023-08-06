const express = require('express');

const {ServerConfig , Logger} = require('./config/index.js')
const apiRoutes = require('./routes')

const app = express();

// routes layer -> controller layer -> service layer -> repository layer -> model layer

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`server started at port ${ServerConfig.PORT}`)
    Logger.info("Successfully started the server","root",{});
})