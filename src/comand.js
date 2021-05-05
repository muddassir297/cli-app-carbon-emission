#!/usr/bin/env node

const PrintEmission = require("./class/PrintEmission/PrintEmission");

const argv = require('yargs')
    .scriptName("<---------------------------Co2-Emission-Calculator--------------------------->")     
    .command("$0","", yargs=> { 
        yargs
            .option("transportation-method", {
                alias: "t",
                describe: "Method of transportation",
                type: "string",
                nargs: 1,
                choices: ('t', 
                    [
                        "small-diesel-car", "small-petrol-car", "small-plugin-hybrid-car", "small-electric-car",
                        "medium-diesel-car", "medium-petrol-car", "medium-plugin-hybrid-car", "medium-electric-car",
                        "large-diesel-car", "large-petrol-car", "large-plugin-hybrid-car", "large-electric-car",
                        "bus", "train"
                    ]
                )
            })

            .option("distance", {
                alias: "d",
                describe: "Distance travelled by a vehicle",
                type: "number",
                nargs: 1        
            })

            .option("unit-of-distance", {
                alias: "u",
                describe: "Unit of Distance <km/m>",
                default: "km",
                type: "string",
                nargs: 1,
                choices: ('u', ["km", "m"])
            })

            .option("output", {
                alias: "o",
                describe: "Unit of Output <kg/g>",
                default: "kg",
                type: "string",
                nargs: 1,
                choices: ('o', ["kg", "g"])
            })
        }, argv=>{
            const printCo2Emission = new PrintEmission(); // Print object responsible for printing the output
            
            console.log(printCo2Emission.printEmission(argv.t, argv.d, argv.u, argv.o));
        }
    )    
    
    .demandOption(['transportation-method', 'distance'], 'Please provide both "transportation-method" and "distance" arguments to work with this tool')
    .help()
    .argv
    