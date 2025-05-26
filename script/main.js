// Import all required modules
import renderAllContents from "./render-contents.js";
import handleAllAnimations from "./animations.js";
import emailSender from "./email-sender.js";

/**
 * Initialize the rendering of all contents
 */
renderAllContents();

/**
 * Initialize animations when the page is fully loaded
 */
window.addEventListener('load', () => {
  handleAllAnimations();
});

/**
 * Change dot color based on work status
 * - If the status is 'Available for work', activate the work status dot
 * - Otherwise, deactivate it
 */
const workStatusLabel = document.querySelector('.header__work-status-label')?.innerText;
const workStatusDot = document.querySelector('.header__work-status-dot');

if (workStatusLabel && workStatusDot) {
  if (workStatusLabel === 'Available for work') {
    workStatusDot.classList.add('active');
  } else {
    workStatusDot.classList.remove('active');
  }
}

/**
 * Initialize email sending feature
 */
emailSender();

/**
 * Update the footer height to match the screen height
 */
const updateFooterHeight = () => {
  const screenHeight = window.innerHeight;
  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.height = `${screenHeight}px`;
  }
};

// Update footer height on page load and window resize
updateFooterHeight();
window.addEventListener('resize', updateFooterHeight);




