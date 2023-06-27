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
    if (mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      hamburgerMenu.classList.toggle('close');
    }
  }
});

const tabs = document.querySelectorAll('[data-tabs-toggle]');

tabs.forEach(function (tabsToggleEl) {
  const tabsToggleElementsId = tabsToggleEl.getAttribute('id');
  const tabsToggleElements = document.querySelectorAll(
    '#' + tabsToggleElementsId + ' [role="tab"]'
  );
  var activeTabToggleEl = null;
  var activeTabContentEl = null;

  tabsToggleElements.forEach(function (tabToggleEl, index) {
    tabToggleEl.addEventListener('click', function (event) {
      var tabToggleEl = event.target;
      var tabTargetSelector = tabToggleEl.getAttribute('data-tabs-target');
      var tabContentEl = document.querySelector(tabTargetSelector);

      // don't do anything if it's already active
      if (tabToggleEl !== activeTabToggleEl) {
        // find currently active tab toggle and content if not set
        if (!activeTabToggleEl && !activeTabContentEl) {
          activeTabToggleEl = document.querySelector(
            '#' + tabsToggleElementsId + ' [aria-selected="true"]'
          );
          activeTabContentEl = document.querySelector(
            activeTabToggleEl.getAttribute('data-tabs-target')
          );
        }

        // show and activate tab
        tabToggleEl.classList.add('active');
        tabToggleEl.setAttribute('aria-selected', true);
        tabContentEl.classList.remove('hidden');

        // hide and deactive currently active tab toggle and content
        activeTabToggleEl.setAttribute('aria-selected', false);
        activeTabToggleEl.classList.remove('active');
        activeTabContentEl.classList.add('hidden');

        // set currently active toggle and content tabs
        activeTabToggleEl = tabToggleEl;
        activeTabContentEl = tabContentEl;
      }
    });

    // Set the first tab as active by default
    if (index === 0) {
      tabToggleEl.classList.add('active');
      tabToggleEl.setAttribute('aria-selected', true);
      activeTabToggleEl = tabToggleEl;
      activeTabContentEl = document.querySelector(
        tabToggleEl.getAttribute('data-tabs-target')
      );
    }
  });
});
