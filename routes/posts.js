const express = require('express')
const router = express.Router()

const postsController = require('../controllers/posts_controller')
const homeController = require('../controllers/home_controller')

router.get('/random',postsController.random)
router.get('/anotherhome',homeController.anotherhome)

module.exports = router