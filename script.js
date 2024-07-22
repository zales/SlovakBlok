// Function to hide Slovak reviews based on presence of Slovak flag
function hideSlovakReviews() {
    const reviews = document.querySelectorAll('.reviewsTab-alz-7');

    reviews.forEach(review => {
        const flagImg = review.querySelector('img[src*="sk.svg"]');
        if (flagImg) {
            review.style.display = 'none';
        }
    });
}

// Run the hiding function on window load and on any changes to the DOM
window.addEventListener('load', hideSlovakReviews);
new MutationObserver(hideSlovakReviews).observe(document.body, { childList: true, subtree: true });
