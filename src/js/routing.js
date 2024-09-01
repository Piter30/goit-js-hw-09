const repoName = '/goit-js-hw-09';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.href = repoName + link.getAttribute('href');
});
