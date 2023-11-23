/**
 * ReadCSV.js
 * This file contains code that reads in the data from the CSV file.
 */


// file directory
const filePath = "olympic-predictions.csv"

// requires 'csv-parser' module to be installed
let csv = require('csv-parser')
let fs = require('fs');
let { resourceLimits } = require('worker_threads');
let result = [];
fs.createReadStream(filePath)
    .pipe(csv({}))
    .on('data', (data) => result.push(data))
    .on('end', () => {
        console.log(result)
    });
