const express = require('express');
const app = express(); //creates app 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('here');
    res.render('index', { text: 'World'});
    // res.download('server.js');
    // res.status(500).json({ message: "Error" });
    // res.send('Hi'); //wont use send that often 
});

const userRouter = require('./routes/users');

// link to path 
app.use('/users', userRouter);

app.listen(3000)

