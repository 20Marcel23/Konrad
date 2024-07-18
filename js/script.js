document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closeModal = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = thumbnail.src;
            captionText.innerHTML = thumbnail.alt;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
