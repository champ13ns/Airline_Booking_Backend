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
    const goa = await City.findByPk(6);
   const Goaairport = await goa.createAirport({name:'International Airport',code:'GOA',address:'Goa'})
    await goa.removeAirport(Goaairport)
    // const varanasi = await City.findByPk(1);
    // console.log("City is ",varanasi);
    // const IGAirport = await Airport.findByPk(2);
    // console.log(IGAirport)
    // await varanasi.removeAirport("AP is ",IGAirport);
})  

// netstat -ano , taskkill /PID 26316 /F
// lec-108