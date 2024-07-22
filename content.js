var observer = null;

function hideSlovakReviews() {
    console.log("Hiding Slovak reviews...");
    const reviews = document.querySelectorAll('.reviewsTab-alz-7');
    reviews.forEach(review => {
        const flagImg = review.querySelector('img[src*="sk.svg"]');
        if (flagImg) {
            console.log(`Hiding review with Slovak flag: ${review.innerText.substring(0, 30)}...`);
            review.style.display = 'none';
        }
    });
}

function activateReviewBlocker() {
    console.log("Activating review blocker...");
    hideSlovakReviews();
    observer = new MutationObserver(hideSlovakReviews);
    observer.observe(document.body, { childList: true, subtree: true });
    console.log("Observer attached.");
}

function deactivateReviewBlocker() {
    console.log("Deactivating review blocker...");
    if (observer) {
        observer.disconnect();
        console.log("Observer disconnected.");
    }

    // Optionally reset styles of currently hidden reviews
    const reviews = document.querySelectorAll('.reviewsTab-alz-7');
    reviews.forEach(review => {
        review.style.display = '';
    });
}

chrome.storage.sync.get('isActive', data => {
    console.log(`Initial state from storage: isActive=${data.isActive}`);
    if (data.isActive) {
        activateReviewBlocker();
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(`Message received: ${message.command}`);
    if (message.command === "activate") {
        activateReviewBlocker();
    } else if (message.command === "deactivate") {
        deactivateReviewBlocker();
    }
});