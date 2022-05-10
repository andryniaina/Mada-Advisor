const asyncHandler = require('express-async-handler')

const Comment = require('../models/commentModel')
const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find()

  res.status(200).json(comments)
})

const getCommentsbyPost = asyncHandler(async (req, res) => {
    const comments = await Comment.find({post: req.params.id})
  
    res.status(200).json(comments)
  })

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const comment = await Comment.create({
    text: req.body.text,
    user: req.user.id,
    post: req.body.postid,
  })

  res.status(200).json(comment)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPost)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (!comment) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (comment.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await comment.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getComments,
  setComment,
  updateComment,
  deleteComment,
  getCommentsbyPost,
}
