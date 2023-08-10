const  { CityRepository } = require('./../repositories/index')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index')
const AppError  = require('./../utils/errors/index.js')

const CityObj = new CityRepository();

async function createCity(data){
    try{
        const newCity = await CityObj.create(data);
        return newCity;
    } catch(err){
        throw err;
    }
}

async function updateCity(data){
    try{
        const updatedCity = await CityObj.update(data);
        return updateCity;
    } catch(err){
        throw err;
    }
}

async function getCity(id){
    try{
        const CityObj = await CityObj.get(id);
        return CityObj;
    } catch(err){
        throw err;
    }

}

async function getAllCities(){
    try{
        const allCities = await CityObj.getAll();
        return allCities;
    } catch(err){
        throw err;
    }
}

async function deleteCity(id){
    try{    
        const del_city = await CityObj.delete(id);
        return del_city;
    } catch(err){
        throw err;
    }
}

module.exports={
    createCity,updateCity,deleteCity,getCity,getAllCities
}