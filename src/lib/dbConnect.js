import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return true;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB is Connected Successfully!");
    return true;
  } catch (err) {
    console.log("Fail to connection MongoDD !", err);
    process.exit();
  }
};

export default dbConnect;
