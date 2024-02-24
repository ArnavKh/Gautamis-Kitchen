const burger = document.querySelector('#burger');
const menu = document.querySelector('.menu');

// Code to use hamburger menu in nav bar
burger.addEventListener('click', () => {
     if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
     }

     else {
          menu.classList.add('hidden');
     }
});


// Dark Mode Toggle
//Icons
const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');

//Theme Variables
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

//Icon Toggling
const iconToggle = () => {
     moonIcon.classList.toggle('hidden');
     sunIcon.classList.toggle('hidden');
}

// Initial Theme Check
const themeCheck = () => {
     if (userTheme === 'dark' || (!userTheme && systemTheme)) {
          document.documentElement.classList.add('dark');
          moonIcon.classList.add('hidden');
          return;
     }
     sunIcon.classList.add('hidden');
}

// Manual Theme Switch
const themeSwitch = () => {
     const isDarkMode = document.documentElement.classList.contains('dark');
     
     if (isDarkMode) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
     }
     
     else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
     }

     iconToggle();
};

// Call theme switch on clicking buttons
sunIcon.addEventListener('click', () => {
     themeSwitch();
});

moonIcon.addEventListener('click', () => {
     themeSwitch();
});

// Invoke theme check on initial load
themeCheck();