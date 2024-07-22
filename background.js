chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed. Setting initial active state to false.");
    chrome.storage.sync.set({ isActive: false });
  });