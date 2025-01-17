if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config();
}
const express = require('express');
const {getDB,connection} = require('./DB/mongo_client');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const checkStatus = await connection.connect();
    const readyState = connection.topology.isConnected()
    ? 'connected successfully'
    : 'disconnected';
    res.send(`<h3>Connection Status : ${readyState}</h3>`);
});

app.listen(port,()=>{
    console.log(`Your server is running on http://localhost:${port}`);
});
