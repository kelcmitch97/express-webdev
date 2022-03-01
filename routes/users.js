const express = require('express');
const router = express.Router(); //mini app separate from  main app 

// Nest inside parent route
router.get('/', (req, res) => {
    res.send('User List')
});

// create new user
router.post('/', (req, res) => {
    res.send('Create User');
});

// dynamic parameter
router.get('/:id', (req, res) => {
    req.params.id;
    res.send(`Get user with ID ${req.params.id}`);
});

router.get('/new', (req, res) => {
    res.send('User New Form')
});



module.exports = router;