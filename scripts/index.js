// Add the Color in the navbar when user scroll

// Get the menu toggle button and the menu itself
const toggleButton = document.querySelector(
  '[data-collapse-toggle="navbar-sticky"]'
);
const menu = document.getElementById('navbar-sticky');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
  const expanded = toggleButton.getAttribute('aria-expanded') === 'true';

  // Toggle the menu visibility
  toggleButton.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('hidden');
});

// Hide the menu on window resize if it's visible on small screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !menu.classList.contains('hidden')) {
    toggleButton.setAttribute('aria-expanded', false);
    menu.classList.add('hidden');
  }
});

// When user scroll 50px it's adds the Background color white
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'border-b');
  } else {
    navbar.classList.remove('bg-white', 'border-b');
  }
});

// Active the tabs 
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
