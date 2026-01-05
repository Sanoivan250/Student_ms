const express = require('express');
const studentsRoutes = require('./Routes/routes');
const cors= require('cors')

const connectDB = require('./config/db');

connectDB();


const app = express();

app.use(express.json());

app.use('/students', studentsRoutes);

app.use(cors())

const PORT = process.env.PORT || 5000;
    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})