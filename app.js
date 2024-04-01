const express = require('express')
const app = express();
const router = require('./routes/router')
const mongoose = require('mongoose')
const cors = require('cors');
const port = '8080'
const mongodb = `mongodb+srv://bhaveshprajapati0601:VnCvvhTs49iZ2a0O@cluster0.auvwapq.mongodb.net/ecommerce-app?retryWrites=true&w=majority&appName=Cluster0`

app.use(express.json())

mongoose.connect(mongodb).then(() => {
    console.log('connected')
    console.log(`listening on port ${port}`)
}).catch(err => console.log(err));
app.listen(port);

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use('/api', router)
