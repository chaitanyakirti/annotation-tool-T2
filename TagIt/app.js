const express =require('express');
const app = express();
const path = require('path');
const port = 80;
const hostname =  '127.0.0.1';

app.set('views', path.join(__dirname, 'view'));