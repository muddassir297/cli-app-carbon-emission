const Emission = require('./Emission');

describe('getEmittedCo2', ()=>{

    it('should return message if no command is given',()=>{
        
        const emission = new Emission(null, undefined);        
        expect(emission.getEmittedCo2()).toBe("Provide executable command or check --help");
    })

    it('should return co2 in kg when for "medium-diesel-car" and with unit of distance "km"',()=>{
        
        const emission = new Emission("medium-diesel-car", 15,{unitOfDistance:'km'});        
        expect(emission.getEmittedCo2()).toEqual("2.6kg");
    })
    
    it('should return co2 in kg for "large-petrol-car" and with no unit of distance and weight',()=>{
        
        const emission = new Emission("large-petrol-car", 1800.5);        
        expect(emission.getEmittedCo2()).toEqual("507.7kg");
    })

    it('should return co2 in kg for "train" and with unit of distance "m" and weight "kg"',()=>{
        
        const emission = new Emission("train", 14500,{unitOfDistance:'m', unitOfWeight:'kg'});        
        expect(emission.getEmittedCo2()).toEqual("0.1kg");
    })

    it('should return co2 in kg for "train" and with unit of distance "m" and weight "g"',()=>{
        
        const emission = new Emission("train", 14500,{unitOfDistance:'m', unitOfWeight:'g'});        
        expect(emission.getEmittedCo2()).toEqual("87g");
    })

    it('should return co2 in kg for "large-petrol-car" and with no unit of distance and weight',()=>{
        
        const emission = new Emission("medium-diesel-car", 15);        
        expect(emission.getEmittedCo2()).toEqual("2.6kg");
    })
})