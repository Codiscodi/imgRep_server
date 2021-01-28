const {Router} = require('express')
const UserController = require('../controllers/UserController')
const router = Router()
const User = new UserController

router.post('/register', User.register)
router.post('/login', User.login)

module.exports = router