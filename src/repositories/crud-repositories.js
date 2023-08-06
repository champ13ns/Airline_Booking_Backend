const { Logger } = require("../config");

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data){
        try{
        const response = await this.model.destroy({
            where:{
                id:data
            }
        }) 
        } catch(error){
            Logger.error("Something wrong on repo layer, destroy ")
            throw error;
        }
    }

    async get(data){
        try{
            const response = await this.model.findByPk(data);
            return response;
        } catch(err){
            Logger.error("Something wrong on repo layer,get ");
            throw err;
        }
    }
    
    async getAll(){
        try{
            const response = await this.model.findAll();
            return response;
        } catch(err){
            Logger.error("Something wrong on repo layer, getAll");
            throw err;
        }
    }

    async update(data, id){
        try{
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            })
        } catch(err){
            Logger.error("Something wrong on repo layer, update");
            throw err;
        }
    }
}

module.exports = {
    CrudRepository
}
