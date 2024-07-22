document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('blockerSwitch');

    // Load current state from storage and set switch position
    chrome.storage.sync.get('isActive', data => {
        console.log(`Loaded isActive=${data.isActive} from storage`);
        switchElement.checked = data.isActive;
    });

    // Handle change event of the switch
    switchElement.addEventListener('change', () => {
        const isActive = switchElement.checked;
        console.log(`Switch toggled: isActive=${isActive}`);
        chrome.storage.sync.set({ isActive }, () => {
            console.log(`State saved to storage: isActive=${isActive}`);
        });

        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            if (isActive) {
                console.log("Sending activate message to content script");
                chrome.tabs.sendMessage(tabs[0].id, { command: 'activate' });
            } else {
                console.log("Sending deactivate message to content script");
                chrome.tabs.sendMessage(tabs[0].id, { command: 'deactivate' });
            }
        });
    });
});