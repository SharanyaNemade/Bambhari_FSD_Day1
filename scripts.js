document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should animate (matching our CSS classes)
    const boxes = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    // Check which boxes should be shown based on scroll position
    function checkBoxes() {
        // Trigger point: 4/5 of the viewport height from the top
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            // If the top of the box is within the viewport trigger zone
            if (boxTop < triggerBottom) {
                box.classList.add('active');
            } else {
                // Remove class to allow re-animation if scrolled out
                box.classList.remove('active');
            }
        });
    }

    // Initialize boxes on page load
    checkBoxes();

    // Listen for scroll events
    window.addEventListener('scroll', checkBoxes);
});
