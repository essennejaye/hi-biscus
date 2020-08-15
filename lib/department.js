const dbConn = require('../db/configDb');
const conTab = require('console.table');

readDept = () => {
    dbConn.query(
        'SELECT * FROM departments', (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
};
module.exports = readDept;