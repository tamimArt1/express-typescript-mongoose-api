import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes';
import connectMongoDB from './db';

//------------- SETUP
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// ROUTES DECLARATION
app.get('/', (req, res) => {
  res.send('Hostel Api');
});

app.use('/api', apiRoutes);

// ------------- DRIVER FUNCTION
async function run(): Promise<void> {
  try {
    // CONNECT DATABASE
    await connectMongoDB();

    // SERVER START
    app.listen(process.env.PORT || 5000);
  } catch (error) {
    console.log(error);
  }
}

// GO
run().catch((err) => console.log(err));
