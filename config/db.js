const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`mongodb is connected succesfully!`);
  } catch (err) {
    console.log(`error message is: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
