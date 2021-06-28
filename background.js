// Listening for "test" button message
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "buttonClicked") {
            // getting current tab
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                // sending message to active tab. content.js catches it
                // we send another message because popup, as far as i'm
                // concerned, can't communicate with content. 
                chrome.tabs.sendMessage(tabs[0].id, {message: "testButtonPressed"});
            });
        }
    }
);