const { StatusCodes } = require('http-status-codes')
const { SuccessResponse , ErrorResponse } = require('./../utils/common/index.js')
const { AppError } = require('../utils/errors')

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong on creating the city'
        ErrorResponse.error = new AppError(['City name not found in incoming req'], [StatusCodes.BAD_REQUEST]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}



module.exports = {
    validateCreateRequest
}