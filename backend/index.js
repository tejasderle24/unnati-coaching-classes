import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';
import homeRoutes from './routes/home.routes.js';
import cors from 'cors'

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 4000;

// Create an Express application
const app = express();

app.use('*')

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
app.use('/api/student', userRoutes);
app.use('/api/home', homeRoutes);


// Root endpoint - health check HTML
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unnati Coaching Classes Status</title>
        <style>
          body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
          .container { background: #f9fafb; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
          h1 { color: #2563eb; }
          .status { color: #16a34a; font-weight: bold; }
          .footer { margin-top: 30px; font-size: 0.9rem; color: #6b7280; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Unnati Coaching Classes API</h1>
          <p>Status: <span class="status">Online</span></p>
          <p>Server Time: ${new Date().toLocaleString()}</p>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} Unnati Coaching Classes. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
    console.log(`User server running on port ${PORT}`);
});
