const asyncHandler = require('express-async-handler')

const Contact = require('../models/contactModel')

const sendContact = asyncHandler(async (req, res) => {
    if (!req.body.message) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const contact = await Contact.create({
      message: req.body.message,
      email: req.body.email,
      name: req.body.name,
      subject: req.body.subject,
    })
  
    res.status(200).json(contact)
  })

  module.exports = {sendContact}