/**
* Project name: Assignment 1: Express Portfolio Site
* File name: portfolioController.js
* Author's name: Daria Davydenko
* Web-site: https://dariadavydenko.herokuapp.com/
* File description: This is a controller file with the functions to send information to the page.
* Pictures were taken from www.pexels.com
* Framework: materializecss.com
*/


exports.index = (req, res, next) => {
  res.render('index', {
    name: 'Home | Daria Davydenko',
    isActive: 'home',
  });
};

exports.about = (req, res, next) => {
  res.render('about-me', {
    name: 'About Me | Daria Davydenko',
    isActive: 'about',
  });
};

exports.projects = (req, res, next) => {
  res.render('projects', {
    name: 'Projects | Daria Davydenko',
    isActive: 'projects',
  });
};

exports.services = (req, res, next) => {
  res.render('services', {
    name: 'Services | Daria Davydenko',
    isActive: 'services',
  });
};

exports.contact = (req, res, next) => {
  res.render('contact-me', {
    name: 'Contact Me | Daria Davydenko',
    isActive: 'contact',
  });
};
