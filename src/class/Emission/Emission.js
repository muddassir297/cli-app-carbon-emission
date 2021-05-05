const emissionData = require('../../data/emission-data.json'); //import data
const emissionData_obj = emissionData.transportationMethods; 

class Emission {
    constructor (transportMethod, distance, {unitOfDistance='km', unitOfWeight='kg'}={}){ //Javscript builder pattern...
        this.transportMethod = transportMethod;
        this.distance = distance;
        this.unitOfDistance = unitOfDistance;
        this.unitOfWeight = unitOfWeight;
        
    }
    
    getEmittedCo2(){ // returns co2 emission depending on unit of distance and weight
        if (!this.transportMethod) return "Provide executable command or check --help";
        if (!this.distance) return "Provide executable command or check --help";
        
        const distance = this.getDistance(this.distance,this.unitOfDistance);
        const weight = this.getWeight(emissionData_obj[this.transportMethod], this.unitOfWeight);

        return this.changeToFloatValue((distance*weight),this.unitOfWeight)
     }
    
    //returns calculated distance depending on unit of the distance
    getDistance=(distance, unit)=> unit=== 'm'?(distance/1000):distance;

    // returns calculated weight depending on the unit of the weight
    getWeight=(weight, unit)=> unit==='g'? weight:weight/1000;

    // changes calculated value and provides precision upto 1 decimal place with unit of the weight
    changeToFloatValue =(number, unit)=>Number(parseFloat(number).toFixed(1))+`${unit}`;
}

module.exports = Emission;