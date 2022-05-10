const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getUser
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
const { route } = require('./goalRoutes')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/getuser/:id', getUser)

module.exports = router
