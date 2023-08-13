const {  AirportService  } = require('./../services/index.js');
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index.js')
 async function createAirport(req,res){
    try{
        console.log(req.body);
        const newAirport = await AirportService.createAirport({
            address : req.body.address,
            cityId : req.body.cityId,
            name : req.body.name
        })
        SuccessResponse.success = true;
        SuccessResponse.data = newAirport;
        SuccessResponse.message = 'created new aiport on db',
        SuccessResponse.error={};
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(err){
        throw  err;
    }
}

async function updateAirport(req,res){
    try{
        const newAirport = await AirportService.updateAirport({
            address : req.body.address,
            cityId : req.body.cityId,
            name : req.body.name
        },req.params.id)
        SuccessResponse.success = true;
        SuccessResponse.data = newAirport;
        SuccessResponse.message = 'updated aiport on db',
        SuccessResponse.error={};
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
    }
    catch(err){
        throw  err;
    }
}

async function getAirport(req,res){
    try{
        const newAirport = await AirportService.getAirpot(req.params.id)
        SuccessResponse.success = true;
        SuccessResponse.data = newAirport;
        SuccessResponse.message = 'updated aiport on db',
        SuccessResponse.error={};
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
    }
    catch(err){
        throw  err;
    }
}

async function getAllAirport(req,res){
    try{
        const allAirports = await AirportService.getAllAirport();
        SuccessResponse.success = true;
        SuccessResponse.data = allAirports;
        SuccessResponse.message = 'all aiport retrieved from db',
        SuccessResponse.error={};
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
    } catch(err){
        throw  err;
    }
}

async function deleteAirport(req,res){
    try{
        const deletedAirport = await AirportService.deleteAiport(req.params.id);
        SuccessResponse.success = true;
        SuccessResponse.data = {};
        SuccessResponse.message = 'updated aiport on db',
        SuccessResponse.error={};
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse)
    } catch(err){
        throw  err;
    }
}

module.exports = {
    getAirport,getAllAirport,updateAirport,createAirport,deleteAirport
}