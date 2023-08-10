const{ CityService }=require('./../services/index.js')
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index.js')
const { StatusCodes } = require('http-status-codes')
const {AppError} = require('./../utils/errors')

async function getAllCities(req,res){
    try{
        const allCities = await CityService.getAllCities();
        SuccessResponse.data = allCities;
        SuccessResponse.error={};
        SuccessResponse.message = "All cities successfully retrieved from server";
        SuccessResponse.success = true;
        res.status(StatusCodes.OK).json(SuccessResponse)
    } catch(err){
        throw err;
        // throw new AppError(err , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function createCity(req,res){
    try{
        const newCity = await CityService.createCity({
            name : req.body.name
        });
        SuccessResponse.data = newCity;
        SuccessResponse.error={};
        SuccessResponse.message = "Successfully created new city";
        SuccessResponse.success = true;
        res.status(StatusCodes.OK).json(SuccessResponse)
    } catch(err){
        throw err;

        // throw new AppError(err , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function deleteCity(req,res){
    try{
        const deletedCity = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = {};
        SuccessResponse.error={};
        SuccessResponse.message = "Successfully deleted city from server";
        SuccessResponse.success = true;
        res.status(StatusCodes.OK).json(SuccessResponse)
    } catch(err){
        throw err;

        // throw new AppError(err , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(req,res){
    try{
        const updatedCity = await CityService.updateCity(req.body);
        SuccessResponse.data = {};
        SuccessResponse.error={};
        SuccessResponse.message = "Successfully updated city on server";
        SuccessResponse.success = true;
        res.status(StatusCodes.OK).json(SuccessResponse)
    } catch(err){
        throw err;

       throw new AppError(err , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(req,res){
    try{
        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = { city };
        SuccessResponse.error={};
        SuccessResponse.message = "Successfully retrieved city from server";
        SuccessResponse.success = true;
        res.status(StatusCodes.OK).json(SuccessResponse)
    } catch(err){
        throw err;

        // throw new AppError(err , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports ={
    getAllCities , getCity , updateCity , deleteCity , createCity
}