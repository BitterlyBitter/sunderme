// script.js

// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const dateTimeString = now.toLocaleString('en-CA', options);
    document.getElementById('date-time').textContent = dateTimeString;
}

// Set an interval to update the time every second
setInterval(displayDateTime, 1000);

// Call the function once to display the date/time immediately
displayDateTime();