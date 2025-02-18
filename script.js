// Select the counter and button elements
let counterElement = document.getElementById("counter");
let incrementButton = document.getElementById("incrementBtn");

// Add click event listener to the button
incrementButton.addEventListener("click", function () {
    let currentValue = parseInt(counterElement.innerText); // Get current counter value

    alert("Current value before increment: " + currentValue); // Show alert before incrementing

    counterElement.innerText = currentValue + 1; // Increment counter
});
