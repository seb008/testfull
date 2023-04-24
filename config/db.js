const mongoose = require ("mongoose");


mongoose
    .connect("mongodb+srv://"+ process.env.DB_USER_PASS +"@cluster0.hft7ygi.mongodb.net/team_build")

    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDB" , err));