const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port =process.env.PORT;
const mysql=require('mysql');
const dotenv = require('dotenv');
