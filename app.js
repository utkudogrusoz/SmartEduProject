const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');


const app = express();

// connect db 

mongoose.connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('db connected successfully');
});

//Template Engine

app.set("view engine", "ejs");

//Middlewares Engine
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routers 
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);

const port = 3000;
app.listen(port, () => {
    console.log('app started on port', port);
});