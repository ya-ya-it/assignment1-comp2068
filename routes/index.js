/**
* Project name: Assignment 1: Express Portfolio Site
* File name: index.js
* Author's name: Daria Davydenko
* Web-site: https://dariadavydenko.herokuapp.com/
* File description: This is a js file with the routing system.
* Pictures were taken from www.pexels.com
* Framework: materializecss.com
*/


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
