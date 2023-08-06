const { CrudRepository } = require('./crud-repositories');
const { Airplane } = require('./../models')
class AirplaneRepo extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepo