// Smooth Scrolling for Navigation Links with Highlight
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Toggle Dark Mode with Transition and Local Storage
const darkModeButton = document.createElement('button');
darkModeButton.innerHTML = 'Toggle Dark Mode';
darkModeButton.classList.add('dark-mode-btn');
document.body.appendChild(darkModeButton);

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('darkMode', isDarkMode);
};

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeButton.innerHTML = 'Light Mode';
}

darkModeButton.addEventListener('click', toggleDarkMode);

// Scroll Animations with Fade and Slide
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Navbar Sticky Effect on Scroll
const navbar = document.querySelector('.navbar');
const stickyNavbar = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};
window.addEventListener('scroll', stickyNavbar);

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});

// Form Validation
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const validateForm = () => {
    let isValid = true;
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('invalid');
    }
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('invalid');
        isValid = false;
    } else {
        messageInput.classList.remove('invalid');
    }
    return isValid;
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields correctly.');
    }
});
