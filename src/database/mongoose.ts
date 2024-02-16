import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Get the default connection
const db = mongoose.connection;

// Log error if connection fails
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;
