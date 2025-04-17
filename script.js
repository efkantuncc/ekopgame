// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.nav-buttons').classList.toggle('active');
});

// Product Quantity
document.querySelectorAll('.qty-btn').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        let value = parseInt(input.value);
        
        if (this.classList.contains('minus') && value > 1) {
            input.value = value - 1;
        } else if (this.classList.contains('plus')) {
            input.value = value + 1;
        }
    });
});

// Product Tabs
const tabNavItems = document.querySelectorAll('.tab-nav li');
const tabContents = document.querySelectorAll('.tab-content');

tabNavItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        // Remove active class from all items and contents
        tabNavItems.forEach(item => item.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked item and corresponding content
        this.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

// Thumbnail Image Selection
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Change main image (in a real scenario, you'd use the actual image source)
        mainImage.src = this.querySelector('img').src;
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});