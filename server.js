// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
require("dotenv").config();



// Establish connection to MySQL server

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
});

// Connection to MySQL
connection.connect(function(err) {
    if(err)throw err;

    startApp();

});


// Function to begin the application
