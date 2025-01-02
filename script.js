// Select elements
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Next Button Click Event
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

// Prev Button Click Event
prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

// Update Progress Bar and Buttons
function update() {
    // Update active class on circles
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update the progress bar width
    const activeCircles = document.querySelectorAll('.circle.active');
    progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

    // Enable/Disable Buttons
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}
