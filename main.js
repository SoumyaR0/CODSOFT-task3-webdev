function appendToDisplay(value) {
    if (value === 'AC') {
        clearDisplay();
    } else {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
