const PrintEmission = require('./PrintEmission');

describe('getEmittedCo2', ()=>{

    it('should return co2 in kg when for "bus" and with with no unit of distance and weight',()=>{
        const printCo2Emission = new PrintEmission();
        expect(printCo2Emission.printEmission("bus", 15)).toBe("Your trip caused 0.4kg of CO2-equivalent.");
    })
    
    it('should return co2 in kg for "large-plugin-hybrid-car" and with no unit of distance and weight',()=>{
        const printCo2Emission = new PrintEmission();        
        expect(printCo2Emission.printEmission("large-plugin-hybrid-car", 35)).toBe("Your trip caused 4.4kg of CO2-equivalent.");
    })
    
})