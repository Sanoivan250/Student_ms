const express = require('express');
const studentsRoutes = require('./Routes/routes');
const cors= require('cors')

const connectDB = require('./config/db');

connectDB();


const app = express();
app.use(cors({ origin: '*' }));
app.options('*', cors());
app.use(express.json());

app.use('/students', studentsRoutes);

module.exports = app;