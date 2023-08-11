const { StatusCodes } = require('http-status-codes')
const {  ErrorResponse } = require('./../utils/common/index.js')
const { AppError } = require('../utils/errors')

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong on creating the city'
        ErrorResponse.error = new AppError(['City name not found in incoming req'], [StatusCodes.BAD_REQUEST]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

function validateDeleteRequest(req,res,next){
    if(!req.body.name || req.params.id){
        ErrorResponse.message = 'name or id missing'
        ErrorResponse.error = new AppError(['City name or id missing'] , [StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

function validateUpdateRequest(req,res,next){
    if(!req.body.name || req.params.id){
        ErrorResponse.message = 'name or id missing'
        ErrorResponse.error = new AppError(['City name or id missing'] , [StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

function validateGetRequest(req,res,next){
    if(!req.params.id){
        ErrorResponse.message = 'id missing for get request';
        ErrorResponse.error = new AppError(['Id missing'],[StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}


module.exports = {
    validateCreateRequest , validateDeleteRequest ,validateDeleteRequest , validateGetRequest , validateUpdateRequest
}