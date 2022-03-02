const express = require('express');
const app = express(); //creates app 

// Static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// json request - parse JSON from the body 
app.use(express.json());

app.set('view engine', 'ejs');
// app.use(logger); //middleware 

// app.get('/', logger, (req, res) => {
//     res.render('index', { text: 'World'});
//     // res.download('server.js');
//     // res.status(500).json({ message: "Error" });
//     // res.send('Hi'); //wont use send that often 
// });

const userRouter = require('./routes/users');

// link to path 
app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
};

app.listen(3000)

