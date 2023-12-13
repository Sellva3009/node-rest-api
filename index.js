// importing required dependencies/libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require("./routes/auth");

// Intiate the app with express
const app = express();

// dotenv configuration for adding secret keys
dotenv.config();

// connecting the mongoDB
mongoose.connect(process.env.MONGO_URL);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use("/api/auth", authRoute);

// app is listening in the port 8800
app.listen(8800, () => {
    console.log('Backend server is running');
})