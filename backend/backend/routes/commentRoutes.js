const express = require('express')
const router = express.Router()
const {
  getComments,
  setComment,
  updateComment,
  deleteComment,
  getCommentsbyPost
} = require('../controllers/commentController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getComments).post(protect, setComment)
router.route('/bypost/:id').get(getCommentsbyPost)
router.route('/:id').delete(protect, deleteComment).put(protect, updateComment)

module.exports = router
