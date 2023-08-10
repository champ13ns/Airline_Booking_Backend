const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index');
const { AppError } = require('../utils/errors');
 

async  function createAirplane(req,res){
    try{
        const airplane =   await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane
        return res.status(StatusCodes.OK).json({
            SuccessResponse
        })
    } catch(err){
        if(err.name == 'SequelizeValidationError'){
            let explanation = [];
            err.errros.forEach((err) => {
                explanation.push(err);
            })
            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create new Airplace object ',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getAllAirplane(req,res){
    try{
    const all_airplanes = await AirplaneService.getAirplane();
    SuccessResponse.data = all_airplanes
    return res.status(StatusCodes.OK).json({
        SuccessResponse
    })
    } catch(err){
        throw new AppError('Cannot get all airplanes ' , StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function deleteAirplane(req,res){
    try{
        const airplane = await AirplaneService.deleteAirplane(req.params.id);
        return res.json({
            success:'true',
            data:airplane
        })
    }catch(err){
        if(err.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane requested is not present ',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of requested airplane ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function updateAirplane(req,res){
    try{
        const airplane = await AirplaneService.updateAirplane({
            id:req.body.id
        });
        return airplane;
    } catch(err){
        throw err;
    }
}


module.exports = {
     createAirplane,getAllAirplane,updateAirplane,deleteAirplane

}