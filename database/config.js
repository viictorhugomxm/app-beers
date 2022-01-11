const mongoose = require('mongoose');

const dbConnnection = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
    });

    console.log('Base de datos online');

  } catch (error) {
    throw new Error('Error a la hora de iniciar la base de datos');
  }
}

module.exports = {
  dbConnnection
}