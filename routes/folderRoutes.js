const {Router} = require('express')
const FolderController = require('../controllers/FolderController')
const auth = require('../middleware/authMiddleware')
const router = Router()
const Folder = new FolderController

router.post('/', auth, Folder.create)
router.get('/', auth, Folder.get)
// router.get('/:id')


module.exports = router