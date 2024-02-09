
document.getElementById("Hours").addEventListener("keypress", function (event) {
    // Check if the key pressed is the enter key (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the calculate function to calculate the result
        calculateResult();
    }
});

// Add event listener for "click" event on the "Get Quote" button
document.getElementById("Calculate").addEventListener("click", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Call the calculate function to calculate the result
    calculateResult();
});

document.getElementById("Calculate").addEventListener("click", function (event) {
    var hours = document.getElementById("Hours").value;
    var dollars = hours * 10; // Assuming $10 per hour
    document.getElementById("result").value = dollars

});


