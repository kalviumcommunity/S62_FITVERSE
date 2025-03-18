if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config();
}
const express = require('express');
const {getDB,connection} = require('./DB/mongo_client');
const userroute=require("./DB/routes/user.route.js")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    const checkStatus = await connection.connect();
    const readyState = connection.topology.isConnected()
    ? 'connected successfully'
    : 'disconnected';
    res.send(`<h3>Connection Status : ${readyState}</h3>`);

    
});

app.use('/details',userroute)

app.listen(port,()=>{
    console.log(`Your server is running on http://localhost:${port}`);
});