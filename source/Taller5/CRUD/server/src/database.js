const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify :false
    })
    .then((db) => console.log('MongoDB database connection established successfully'))
    .catch((err) => console.error(err));

