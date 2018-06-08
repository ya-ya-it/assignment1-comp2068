exports.index = (req, res, next) => {
  res.render('index', {
    name: 'Home',
  });
};

exports.about = (req, res, next) => {
  res.render('about-me', {
    name: 'About Me',
  });
};

exports.projects = (req, res, next) => {
  res.render('projects', {
    name: 'Projects',
  });
};

exports.services = (req, res, next) => {
  res.render('services', {
    name: 'Services',
  });
};

exports.contact = (req, res, next) => {
  res.render('contact-me', {
    name: 'Contact Me',
  });
};
