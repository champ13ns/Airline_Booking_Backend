const { StatusCodes } = require('http-status-codes');
const {  ErrorResponse } = require('./../utils/common/index.js')
const AppError = require('./../utils/errors/app-error.js')

function validateUpdateRequest(req,res,next){
    if(!req.params.id){
        ErrorResponse.success = false;
        ErrorResponse.message = 'id is missing'
        ErrorResponse.data={}
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    } else{
        next();
    }
}

function validateCreateRequest(req,res,next){
    console.log(req.body)
    if(!req.body.modelNumber || !req.body.capacity){
        ErrorResponse.data = {}
        ErrorResponse.error = new AppError(['Model number or id is missing '],[StatusCodes.BAD_REQUEST])
        ErrorResponse.success=false;
        ErrorResponse.message = 'Model number or id is missing'
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    } else{
        next();
    }
}

module.exports = {
    validateCreateRequest , validateUpdateRequest 
}
