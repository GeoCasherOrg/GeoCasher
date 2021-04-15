const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'wearfhoaskdfjaksldf@#$324wlskjalfkjwealjl32@#@34';

mongoose.connect('mongodb+srv://geocasher:geocasheriscool@cluster0.k0h9x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}
)

const app = express() 
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

