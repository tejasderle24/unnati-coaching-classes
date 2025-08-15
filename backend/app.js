import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';
import {connect} from './services/rabbit.js';

connect();

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// connect to MongoDB
connectDB();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Middleware for logging requests
// app.use(morgan('dev'));

// Middleware for cookie parsing
app.use(cookieParser());

// Use user routes
app.use('/', userRoutes);


export default app;