const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user')

//environment variable
env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.oaiy3.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
     `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.oaiy3.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected')
})


app.use(express.json());
app.use('/api', userRoutes);

app.use(bodyParser());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});