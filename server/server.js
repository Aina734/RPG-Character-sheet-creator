//Load packages for later security

const express = require("express");
const dotenv = require("dotenv"); 

//Load .env variables

//run express function 

const app = express();

// set a hard coded port that will be changed by using .env

const PORT = 3001;

console.log(`starting our test server on ${PORT}`);

//Our routes to the server
app.get("/api/test", (req, res)=>{
console.log(`GET request received from /`);
res.json({status:"ok"});
});

//start the server

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
    console.log(`visit http://localhost:3001/api/test to check server`);
})