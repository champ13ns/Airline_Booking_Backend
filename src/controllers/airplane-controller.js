const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index')
 

async  function createAirplane(req,res){
 const airplane =   await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity: req.body.capacity
    });
    SuccessResponse.data = airplane
    return res.status(StatusCodes.OK).json({
        SuccessResponse
    })
}

async function getAllAirplane(req,res){
    try{
    const all_airplanes = await AirplaneService.getAirplane();
    SuccessResponse.data = all_airplanes
    return res.status(StatusCodes.OK).json({
        SuccessResponse
    })
    } catch(err){
        ErrorResponse.error = err;
        return res.status(err.statusCode).json({
            ErrorResponse
        })
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
        throw err;
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