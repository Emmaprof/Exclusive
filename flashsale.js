// Get the countdown display elements
const daysElement = document.querySelector('.day');
const hoursElement = document.querySelector('.hrs');
const minutesElement = document.querySelector('.mins');
const secondsElement = document.querySelector('.secs');

// Define the initial countdown duration in seconds
const initialCountdownDuration = (3 * 24 * 60 * 60) + (23 * 60 * 60) + (19 * 60) + 60;

// Function to format time and update the DOM
function updateCountdownDisplay(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = Math.floor(seconds % 60);

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(secs).padStart(2, '0');
}

// Function to start the countdown
function startCountdown(duration) {
    let remainingTime = duration;

    const interval = setInterval(() => {
        updateCountdownDisplay(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(interval);
            // You can add additional logic here when the countdown ends
        } else {
            remainingTime -= 1;
        }
    }, 1000);
}

// Start the countdown with the initial duration
startCountdown(initialCountdownDuration);

// Scrolling effects

document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.querySelector('.today-image-section');
    const leftArrow = document.querySelector('.arrow-btn.left');
    const rightArrow = document.querySelector('.arrow-btn.right');

    let scrollInterval;

    const startScrolling = (direction) => {
        scrollInterval = setInterval(() => {
            productContainer.scrollBy({
                left: direction === 'left' ? -10 : 10, // Adjust the scroll speed as needed
                behavior: 'auto' // Use 'auto' to prevent the smooth scroll delay
            });
        }, 10); // Adjust the interval timing as needed
    };

    const stopScrolling = () => {
        clearInterval(scrollInterval);
    };

    leftArrow.addEventListener('mousedown', () => startScrolling('left'));
    rightArrow.addEventListener('mousedown', () => startScrolling('right'));

    document.addEventListener('mouseup', stopScrolling);
    document.addEventListener('mouseleave', stopScrolling);
});

