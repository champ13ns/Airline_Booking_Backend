const  { CityRepo } = require('./../repositories/index')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index')
const AppError = require('./../utils/errors/index.js')

async function createCity(data){
    try{
        const newCity = await CityRepo.create(data);
        return newCity;
    } catch(err){
        throw new AppError(404,err.message);
    }
}

async function updateCity(data){
    try{
        const updatedCity = await CityRepo.update(data);
        return updateCity;
    } catch(err){
        throw new AppError(err);
    }
}

async function getCity(id){
    try{
        const city = await CityRepo.get(id);
        return city;
    } catch(err){
        throw new AppError(404 , err.message);
    }

}

async function getAllCities(){
    try{
        const allCities = await CityRepo.getAll();
        return allCities;
    } catch(err){
        throw new AppError(404,err.message);
    }
}

async function deleteCity(id){
    try{    
        const del_city = await CityRepo.delete(id);
        return del_city;
    } catch(err){
        throw new AppError(404,err.message);
    }
}

module.exports={
    createCity,updateCity,deleteCity,getCity
}