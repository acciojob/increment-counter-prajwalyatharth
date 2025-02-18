// Select the button and counter elements
let incrementButton = document.getElementById("incrementBtn");
let counterElement = document.getElementById("counter");

// Add a click event listener to the button
incrementButton.addEventListener("click", function () {
    let currentValue = parseInt(counterElement.innerText); // Get current counter value

    alert(currentValue); // Alert only the number (no extra text)

    counterElement.innerText = currentValue + 1; // Increment counter
});
