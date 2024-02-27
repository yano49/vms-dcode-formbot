const titleTag = document.title;
window.addEventListener("blur", function() {
    this.document.title = "Come back ";
});

window.addEventListener("focus", function() {
    this.document.title = titleTag;
})

// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Close the menu if a menu item is clicked (optional)
document.querySelectorAll('.menu_bar a').forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('show');
    });
});


// Function to toggle the sticky class on the banner
function toggleSticky() {
    const banner = document.querySelector('.banner');
    banner.classList.toggle('sticky-banner', window.scrollY > banner.offsetTop);
}

// Add a scroll event listener to call the toggleSticky function
window.addEventListener('scroll', toggleSticky);

// Smooth scroll when clicking on the "Home" link
document.querySelector('.menu_bar a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for "About FormBot" link
document.querySelector('.menu_bar a[href="#about-formbot"]').addEventListener('click', function (e) {
    e.preventDefault();
    const aboutFormBotSection = document.getElementById('about-formbot');
    aboutFormBotSection.scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for "Contact Us" link
document.querySelector('.menu_bar a[href="#team"]').addEventListener('click', function (e) {
    e.preventDefault();
    const contactUsSection = document.getElementById('team');
    contactUsSection.scrollIntoView({ behavior: 'smooth' });
});

