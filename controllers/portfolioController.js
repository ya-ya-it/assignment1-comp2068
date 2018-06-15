exports.index = (req, res, next) => {
  res.render('index', {
    name: 'Home',
    isActive: 'home',
  });
};

exports.about = (req, res, next) => {
  res.render('about-me', {
    name: 'About Me',
    isActive: 'about',
  });
};

exports.projects = (req, res, next) => {
  res.render('projects', {
    name: 'Projects',
    isActive: 'projects',
  });
};

exports.services = (req, res, next) => {
  res.render('services', {
    name: 'Services',
    isActive: 'services',
  });
};

exports.contact = (req, res, next) => {
  res.render('contact-me', {
    name: 'Contact Me',
    isActive: 'contact',
  });
};
