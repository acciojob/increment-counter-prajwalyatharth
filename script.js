// Get the button element correctly (without the `#` symbol)
let incrementButton = document.getElementById("incrementBtn");

// Add an event listener to trigger the function on button click
incrementButton.addEventListener("click", function () {
    let counterElement = document.getElementById("counter"); 
    let currentValue = parseInt(counterElement.innerText); // Get current counter value

    alert("Current value before increment: " + currentValue); // Alert un-incremented value

    counterElement.innerText = currentValue + 1; // Increment counter
});