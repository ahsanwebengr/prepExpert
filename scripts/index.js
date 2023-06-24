// Add the Color in the navbar when user scroll

window.addEventListener('scroll', function () {
  const navbarElm = document.querySelector('nav');
  if (window.scrollY >= 40) {
    navbarElm.classList.add('scrolled');
  } else {
    navbarElm.classList.remove('scrolled');
  }
});

const mobileNav = document.querySelector('.mobile-nav');
const hamburgerMenu = document.querySelector('.menu-btn');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  hamburgerMenu.classList.toggle('close');
});

// If user click outside the navbar or link on the link of the it should close automatically

document.addEventListener('click', function (event) {
  // Check if the clicked element is within the mobile navigation or hamburger menu
  const isClickInsideNav = mobileNav.contains(event.target);
  const isClickInsideMenu = hamburgerMenu.contains(event.target);

  // If the clicked element is outside the mobile navigation and hamburger menu, close the mobile navigation
  if (!isClickInsideNav && !isClickInsideMenu) {
    mobileNav.classList.remove('active');
    hamburgerMenu.classList.toggle('close');
  }
});
