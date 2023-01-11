const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: 'sad123',
  port: 3308,
  database: 'easy-order'
});

db.connect(function(err) {
  if(err) {
    throw err;
  } else {
    console.log('Connect DB');
  }
});

module.exports = db;