import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('DB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
    process.exit(1);
  }
};

export default connectDB;
