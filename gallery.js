document.addEventListener('DOMContentLoaded', function() {
    // This script could be used to add interactivity to your gallery
    // For example, to open a lightbox when a gallery thumbnail is clicked
    const galleryImages = document.querySelectorAll('.gallery-thumb');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    function openLightbox(imageSrc) {
        // Implementation for opening the lightbox
        console.log('Opening lightbox for', imageSrc);
        // You can expand this function to display the image in a full-screen view
    }
});
