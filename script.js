function greetUser() {
    let speech = new SpeechSynthesisUtterance("Hi! What kind of text should I read?");
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

function speakText() {
    let text = document.getElementById("text").value;
    if (text === "") {
        text = "Please enter some text for me to read.";
    }
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

function clearText() {
    document.getElementById("text").value = "";
}