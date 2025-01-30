// Gallery Images
const galleryImages = [
    { src: 'images/event1.jpg', alt: 'Winter Camp 2023' },
    { src: 'images/event2.jpg', alt: 'Education Activity' },
    { src: 'images/event3.jpg', alt: 'Senior Gathering' },
    // Add more images as needed
];

// Load gallery images
function loadGallery() {
    const gallery = document.querySelector('.gallery-grid');
    galleryImages.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    });
}

// Handle form submissions
document.getElementById('eventRegistration').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for registering! We will contact you soon.');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you shortly.');
});

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', loadGallery); 