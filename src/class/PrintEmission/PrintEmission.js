const Emission = require("../Emission/Emission")

class PrintEmission{
    printEmission = (transportMethod, distance, unitOfDistance, unitOfWeight)=>{
        
        const emission = new Emission(transportMethod, distance, {unitOfDistance, unitOfWeight});
        return`Your trip caused ${emission.getEmittedCo2()} of CO2-equivalent.`
    }
}
module.exports = PrintEmission;