bgvideo = document.getElementById("bgvideo"); 
bgvideo.playbackRate = 0.9;

document.getElementById("bgvideo").addEventListener("ended", videoEnded);

i = true;

function videoEnded(){
    if (i){
        document.querySelector("#bgvideo > source").src = "img/bg2.mp4";
    }
    else {
        document.querySelector("#bgvideo > source").src = "img/bg.mp4";
    }
    bgvideo.load();
    i = !i;
}

let actualLanguage = 'es'; // Idioma per defecte

function setLanguaje(newLanguage) {
    const oldLanguageElements = document.getElementsByClassName(actualLanguage);
    
    for (element of oldLanguageElements) {   
        element.style.display = 'none';
    }
	
    actualLanguage = newLanguage;

    const newLanguageElements = document.getElementsByClassName(actualLanguage);
    for (element of newLanguageElements) {
        element.style.display = 'inline';
    }

    // Si canviem l'idioma per la URL, necessitem e codi següent
    const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + actualLanguage;
    window.history.replaceState({}, '', newURL);
}


// El següent codi es per obtenir l'idioma per la URL

const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
let urlParams = new URLSearchParams(querystring);

if (urlParams.get('lang')) actualLanguage = urlParams.get('lang');

const espLanguage = document.getElementsByClassName('es');
const enLanguage = document.getElementsByClassName('en');
const catLanguage = document.getElementsByClassName('cat');

if (actualLanguage === 'en') {
    for(element of enLanguage) {
        element.style.display = 'inline';
    }
    for(element of espLanguage){
        element.style.display = 'none';
    }
    for(element of catLanguage){
        element.style.display = 'none';
    }
} else if (actualLanguage === 'es') {
    for(element of enLanguage) {
        element.style.display = 'none';
    }
    for(element of espLanguage){
        element.style.display = 'inline';
    }
    for(element of catLanguage){
        element.style.display = 'none';
    }
}else if (actualLanguage === 'cat') {
    for(element of enLanguage) {
        element.style.display = 'none';
    }
    for(element of espLanguage){
        element.style.display = 'none';
    }
    for(element of catLanguage){
        element.style.display = 'inline';
    }
}

let saveFile = () => {

    // Get the data from each element on the form.
    const msg = document.getElementById('messageinput');
    const email = document.getElementById('mailinput');
    
    // This variable stores all the data.
    let data =
    'Email: ' + email.value + ' \r\n ' +
    'Message: ' + msg.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt'; // The file to save the data.
    
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    
    if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
    }
    
    newLink.click();
    }