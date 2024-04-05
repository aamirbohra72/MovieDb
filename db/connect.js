const mongoose = require("mongoose")

uri = "mongodb+srv://aamirbohra:9158047150@cluster0.bc9xa.mongodb.net/movie-app?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connect")
 return mongoose.connect(uri, {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
});
};
module.exports = connectDB;