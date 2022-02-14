import mongoose from 'mongoose';

async function connectMongoDB() {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectMongoDB;
