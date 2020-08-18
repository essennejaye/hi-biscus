const dbConn = require('../db/configDb');
const conTab = require('console.table');
const fs = require('fs');

// function to run all SQL SELECT statements that don't require paramaters using JSON file
runQueryJson = (jsonPath, queryKey) => {
    // console.log(`Running query ${queryKey} from file ${jsonPath}`);
    let stringData = fs.readFileSync(jsonPath, { encoding: 'utf8' });
    // console.log(stringData);

    // Parse the text from the file into a JSON object, then extract
    // the query text using the property passed through 'queryText'.
    let jsonObj = JSON.parse(stringData);
    let queryText = jsonObj[queryKey]; // if query isn't there will return undefined but,rest of code will still execute
    // console.log(queryText);

    if (queryText) {
        // This could be either a single string query or an array of strings if query is very long.
        // If it's an array, join the elements into a string before proceeding.
        if (Array.isArray(queryText)) {
            queryText = queryText.join('');
        }
        return new Promise(function (resolve, reject) {
            dbConn.query(queryText, (err, res) => {
                if (err) {
                    reject(new Error('error res is undefined'));
                } else {
                    console.table(res);
                    resolve(res);
                }
            });
        })
    }
}