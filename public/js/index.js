// Your JavaScript code goes here
console.log("Hello, world!");

// Add event listener to scroll links
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetOffsetTop = targetElement.offsetTop - 128;

        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
        });
    });
});


const offcanvasElementList = document.querySelectorAll('.offcanvas');
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl));

const offcanvasElement = document.getElementById('offcanvasResponsive');
const closeOffCanvasLinks = document.querySelectorAll('.closeOffCanvas');

document.querySelectorAll('.closeModalScroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetHref = this.getAttribute('href');
        const modalEl = this.closest('.modal');
        const modalInstance = bootstrap.Modal.getInstance(modalEl);

        modalEl.addEventListener('hidden.bs.modal', function handler() {
            modalEl.removeEventListener('hidden.bs.modal', handler);
            const targetElement = document.querySelector(targetHref);
            window.scrollTo({ top: targetElement.offsetTop - 128, behavior: 'smooth' });
        });

        modalInstance.hide();
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('hide.bs.modal', function () {
        this.querySelectorAll('iframe[src*="youtube.com"]').forEach(iframe => {
            iframe.dataset.src = iframe.src;
            iframe.src = '';
        });
    });
    modal.addEventListener('show.bs.modal', function () {
        this.querySelectorAll('iframe[data-src]').forEach(iframe => {
            iframe.src = iframe.dataset.src;
        });
    });
});

closeOffCanvasLinks.forEach(link => {
    link.addEventListener('click', (event) => {

        // Close the offcanvas menu and overlay using Bootstrap methods
        const offcanvasElement = document.getElementById('offcanvasResponsive');
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvasInstance.hide();

        const overlayElement = document.querySelector('.offcanvas-overlay');
        overlayElement.classList.remove('show');

        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetOffsetTop = targetElement.offsetTop - 100;

        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
        });
    });
});
