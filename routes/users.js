const express = require('express');
const { is } = require('express/lib/request');
const router = express.Router(); //mini app separate from  main app 

// Nest inside parent route
router.get('/', (req, res) => {
    req.query.name
    res.send('User List')
});

router.get('/new', (req, res) => {
    res.render("users/new");
});

// create new user
router.post('/', (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push( { firstName: req.body.firstName})
        res.redirect(`/users/${users.length -1}`)
    } else {
        console.log("error")
        res.render('/users/new', { firstName: req.body.firstName });
    }
});

// Same as code below
router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID ${req.params.id}`);
    }).put((req, res) => {
        req.params.id;
        res.send(`Update user with ID ${req.params.id}`);
    }).delete((req, res) => {
        req.params.id;
        res.send(`Delete user with ID ${req.params.id}`);
    });

// // dynamic parameter - always goes after the static routes
// router.get('/:id', (req, res) => {
//     req.params.id;
//     res.send(`Get user with ID ${req.params.id}`);
// });

// // Update user based on id
// router.put('/:id', (req, res) => {
//     req.params.id;
//     res.send(`Update user with ID ${req.params.id}`);
// });


// router.delete('/:id', (req, res) => {
//     req.params.id;
//     res.send(`Delete user with ID ${req.params.id}`);
// });


const users = [ {name: "Kyle "}, {name: "Sally "}];

// Whenever you find the param with 'id' run this, but it needs to see the 'next' function 
// param is a type of middleware - runs between the request and the response 
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next(); //the next piece is the route.get
})

module.exports = router;