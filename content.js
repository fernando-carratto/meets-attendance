// precious list of participants. 
var lista = document.getElementsByClassName("ZjFb7c");
// receiving message from background
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "testButtonPressed") {
            if (lista != null) {
                // clicking button so list is visible. Must be done this way,
                // my theory is that the DOM doesn't update until we click the button.
                // manually locating (as it doesn't have an ID) it by JSpath
                let boton = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button");
                
                
                if (boton.ariaPressed === "false") {
                    boton.click();

                    // setting a small timeout so we give the web time to render 
                    // the content of the div & logging the list of participants.
                    setTimeout(() => {
                        for(i = 0; i < lista.length; i++) console.log(lista[i].innerHTML);
                        
                        boton.click();
                    }, 500);
                } else { for(i = 0; i < lista.length; i++) console.log(lista[i].innerHTML); }
            }
        }
    }
);