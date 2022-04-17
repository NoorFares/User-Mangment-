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
