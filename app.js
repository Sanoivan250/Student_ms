const express = require('express');
const studentsRoutes = require('./Routes/routes');
const cors= require('cors')

const connectDB = require('./config/db');

connectDB();


const app = express();

/* ✅ CORS — MUST be first */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://student-ms-chi.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

/* ✅ Handle preflight explicitly */
app.options("*", cors());

app.use(express.json());

app.use('/students', studentsRoutes);

export default app;