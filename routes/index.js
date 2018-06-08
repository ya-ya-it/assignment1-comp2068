const express = require('express');
const portfolioController = require('../controllers/portfolioController');
const router = express.Router();


/* GET home page. */
router.get('/', portfolioController.index);
router.get('/about-me', portfolioController.about);
router.get('/projects', portfolioController.projects);
router.get('/services', portfolioController.services);
router.get('/contact-me', portfolioController.contact);

module.exports = router;
