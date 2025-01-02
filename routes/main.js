const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)

router.get('/log-in', authController.getLogIn)
router.post('/log-in', authController.postLogIn)
router.get('/log-out', authController.logOut)
router.get('/sign-up', authController.getSignUp)
router.post('/sign-up', authController.postSignUp)

module.exports = router