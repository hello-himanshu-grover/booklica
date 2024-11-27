import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from "dotenv";
import authRoutes from "./routes/authRoutes/authRoute"
import bookRoutes from './routes/bookRoute/bookRoute';
import authMiddleware from './middlewares/authMiddleware';
import morgan from 'morgan';
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/books', authMiddleware,bookRoutes);


mongoose.connect(process.env.MONGO_URL as string)
  .then(() => 
    {
      console.log("mongodb is connected\n")
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
  .catch(err => console.error(err));