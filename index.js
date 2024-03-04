import axios from "axios";
import bodyParser from "body-parser";
import express from 'express';

const app = express();
const port = 8080;


app.listen(port,(err)=>{
    if(err) throw err;
    console.log("server is running on port: "+port);
})