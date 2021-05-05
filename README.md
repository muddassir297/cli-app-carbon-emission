# CO2 emission calculator

### The calculator tool is built using Javascript (ES6), Node and Yargs library.

## Folder Structure

    `src (Working Folder) --> root level <--
        --> class (Supporting class folder)
                --> Emission (folder)
                            --> Emission.js class (ececute all the logic)
                            --> Emission.test.js  (Unit test file for Emission class)

                --> PrintEmission (Folder)
                            --> PrintEmission.js class (Prints the output)
                            --> PrintEmission.test.js (Unit test file for PrintEmission class)

        --> data (folder contains json file)
                --> emission-data.json (contains json data)

        --> Comand.js (Main file that bootstrap the calculator tool).`

## Installing the dependencies
    run command `npm install` in the root level of the folder structure.

## Test the tool

    run command `npm test` in the root folder.

## Run the tool
    To run the tool, please follow below steps.

    At the root level of the folder structure please run comand `npm link` this will install the application on the system

    after installation run command `co2-calculator` followed by the transportation method and distance. Examples are below

    `co2-calculator --transportation-method <method in string> --distance <value of distance in number> --unit-of-distance <optional (km/m)> --output <optional (kg/g)>`.  can be used with ( ) or (=) sign between input and value

    ------------------------------------------------------------OR------------------------------------------------------------

    `co2-calculator -t <method in string> -d <value of distance in number> -u <optional (km/m)> --o <optional (kg/g)>`. can be used with ( ) or (=) sign between input and value.

 # Note: 
    In case of running the tool on Visual studio code editor terminal (powershell)  run the tool using comand `node ./src/comand.js -t <value> -d <value>`. Otherwise this tool will run as per the above given example comand on (cmd, bash etc..)
  