const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/:title', linkController.redirect)

router.get('/', (req, res) => res.send('Hello World'))

router.post('/', express.urlencoded({ extended: true }), linkController.addLink)

module.exports = router
