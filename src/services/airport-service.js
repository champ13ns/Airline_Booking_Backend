const { AirportRepository  } = require('./../repositories/index')

const airport = new AirportRepository();

async function createAirport(data){
    try{
        const newairport = await airport.create(data);
        return newairport
    } catch(err){
        throw err;
    }
   
}

async function deleteAiport(id){
    try{
        const deletedAiport = await airport.destroy(id);
        return deletedAiport
    } catch(err){
        throw err;
    }

}

async function updateAirport(data , id){
    try{
        const updatedAirport = await airport.update(data , id);
        return updatedAirport;
    } catch(err){
        throw err;
    }
  
}

async function getAirpot(id){
    try {
        const airportById = await airport.get(id);
        return airportById;
    }
    catch(err){
        throw err;
    }
}

async function getAllAirport(){
    try{
        const allAirports = await airport.getAll();
    return allAirports
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    createAirport , deleteAiport , updateAirport , getAirpot , getAllAirport
}