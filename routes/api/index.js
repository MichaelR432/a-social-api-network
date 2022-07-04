const router = require('express').Router();

// routes required for thoughts and users
const userRoutes = require('./user-routes');
const thoughtsRoutes = require('./thoughts-routes');

router.use('/thoughts', thoughtsRoutes);
router.use('/user', userRoutes);


module.exports = router;