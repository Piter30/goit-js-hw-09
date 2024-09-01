const repoName = '/goit-js-hw-09';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  console.log(`Original href: ${link.getAttribute('href')}`); // Logowanie oryginalnego href
  link.href = repoName + '/' + link.getAttribute('href');
  console.log(`Updated href: ${link.href}`); // Logowanie zaktualizowanego href
});
