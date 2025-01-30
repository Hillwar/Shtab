// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Gallery Images
const galleryImages = [
    { src: 'images/event1.jpg', alt: 'Зимовка 2023' },
    { src: 'images/event2.jpg', alt: 'Учёба актива' },
    { src: 'images/event3.jpg', alt: 'Сбор старшеклассников' },
    { src: 'images/event4.jpg', alt: 'Соловки' },
    // Add more images as needed
];

// Load gallery images with animation
function loadGallery() {
    const gallery = document.querySelector('.gallery-grid');
    galleryImages.forEach((image, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        imgContainer.setAttribute('data-aos', 'fade-up');
        imgContainer.setAttribute('data-aos-delay', (index * 100).toString());
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        
        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', loadGallery); 