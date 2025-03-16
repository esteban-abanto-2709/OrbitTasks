import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/OrbitTasks');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed');
    }
}