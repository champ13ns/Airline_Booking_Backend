const { AirplaneRepo } = require('./../repositories/index.js')

const { StatusCodes } = require('http-status-codes')

const airplane = new AirplaneRepo();

async function createAirplane(data){
    try{
        const new_airplane = await airplane.create(data);
        return new_airplane;
    } catch(err){
        throw err;
    }
}

async function deleteAirplane(data){
    try{
        const deletedAirplane = await airplane.destroy(data);
        return deleteAirplane;
    } catch(err){
        throw err;
    }
}

async function updateAirplane(data){
    try{
        const updated_airplane = await airplane.update(data);
        return updated_airplane
    } catch(err){
        throw err;
    }
}

async function getAirplane(){
    try{
        const all_airplanes = await airplane.getAll();
        return all_airplanes;
    } catch(err){
        throw err;
    }
}

module.exports = {
    createAirplane , getAirplane , updateAirplane , deleteAirplane
}