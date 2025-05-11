let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.replace("^", "**").replace("√", "Math.sqrt");
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

// 🎤 Voice Recognition Feature
function startVoice() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        display.value = event.results[0][0].transcript;
    };
    recognition.start();
}
