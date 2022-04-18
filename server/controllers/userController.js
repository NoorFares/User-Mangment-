const mysql = require('mysql');
// Connection Pool
const dotenv=require('dotenv');
const path=require('path');
dotenv.config({path:'./.env'});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'ums'
});


connection.connect(error => {
  if(error) {
    console.log(error);
  }else{
    console.log('MYSQL connected...*!');
  }
});
// View Users
exports.view = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
      // When done with the connection, release it
      if (!err) {
        let removedUser = req.query.removed;
        res.render('home.hbs', { rows, removedUser });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }
  // Find User by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
      if (!err) {
        res.render('home.hbs', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }
  
  
  