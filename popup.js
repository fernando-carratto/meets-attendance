// When "test" button is pressed, we send a message to Background
testButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({message: "buttonClicked"});
}); 