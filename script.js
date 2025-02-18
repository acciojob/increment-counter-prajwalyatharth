function incrementBtn() {
    let counterElement = document.getElementById("counter"); 
    let currentValue = parseInt(counterElement.innerText); // Get current counter value

    alert("Current value before increment: " + currentValue); // Alert un-incremented value

    counterElement.innerText = currentValue + 1; // Increment counter
}
