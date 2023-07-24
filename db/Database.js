const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://mahmoodna3n3:cstHO7bhqMkisEUr@cluster0.xdpgzxj.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
