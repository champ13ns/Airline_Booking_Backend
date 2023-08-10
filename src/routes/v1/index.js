const express = require('express');

const router = express.Router()
const {InfoController} = require('./../../controllers/index')
const { AirplaneController , CityController } = require('./../../controllers/index')

const { AirplaneMiddleware , AirportMiddleware , CityMiddleware } = require('./../../middlewares/index.js')

router.get('/info',InfoController.info)

router.post('/airplane',AirplaneMiddleware.validateCreateRequest ,  AirplaneController.createAirplane)
router.get('/airplane', AirplaneController.getAllAirplane)
router.delete('/airplane/:id',AirplaneController.deleteAirplane)
router.patch('/airplane',AirplaneController.updateAirplane)

router.get('/city/:id' , CityController.getCity);
router.get('/city' , CityController.getAllCities);
router.patch('/city',CityController.updateCity)
router.delete('/city/:id',CityController.deleteCity)
router.post('/city',CityController.createCity)

module.exports = router