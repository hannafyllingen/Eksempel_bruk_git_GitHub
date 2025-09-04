let count = 0;

const button = document.getElementById("clickButton");
const display = document.getElementById("count");

button.addEventListener("click", function() {
    count += 1;
    display.textContent = count;
});