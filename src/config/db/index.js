const mongoose = require('mongoose');


async function connect() {
   try {
      await mongoose.connect('mongodb://localhost:27017/test_education_dev', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB!!!');
   } catch (err) {
      console.log('Connect failed');
   }
}

module.exports = { connect };
