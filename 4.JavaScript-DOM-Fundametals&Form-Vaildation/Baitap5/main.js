const input = document.getElementById('input');
const keyDisplay = document.getElementById('key');

input.addEventListener('keydown', function(event) {
    keyDisplay.textContent = event.key;

    if (event.key === ' ') {
        keyDisplay.textContent = 'Phím cách';
    }
});
