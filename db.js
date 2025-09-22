const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    console.log("🔎 MONGO_URI:", process.env.MONGO_URI); // debug
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
  }
};

module.exports = connectToMongo;


