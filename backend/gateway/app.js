import express from 'express';
import expressProxy from 'express-http-proxy';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/students', expressProxy(process.env.STUDENTS_SERVICE_URL));


app.listen(PORT, () => {
    console.log(`Gateway server running on port ${PORT}`);
});