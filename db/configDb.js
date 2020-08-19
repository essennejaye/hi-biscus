const mysql = require('mysql2');

const dbConn = mysql.createConnection({ 
  host: 'localhost',
  // port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'sK5^@jkgX0Ad',
  database: 'company_db' 
});

dbConn.connect (err => {
  if (err) throw err;
  console.log('Database connected');
});

module.exports = dbConn;