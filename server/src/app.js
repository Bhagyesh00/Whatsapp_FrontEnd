// app.js
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(json());

// Use the authRoutes for authentication endpoints
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5454;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
