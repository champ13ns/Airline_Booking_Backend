'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Flight.init({
    flightNumber:{
      type:DataTypes.STRING,
      allowNull:false
    },
    airplaneId:{
    type:DataTypes.STRING,
    allowNull:false,
    references:{
      model:'Airplanes',
      key:'id'
    },
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
    } ,
    departureAirportId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Airports',
        key:'code'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
    arrivalIntegerId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Airports',
        key:'code'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE'
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate:{
      type:DataTypes.STRING,
      allowNull:false
    },
    totalSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};