function Time() {
 
 var date = new Date(); // Creating object of the Date class
 var hour = date.getHours(); // Get current hour
 var minute = date.getMinutes(); // Get current minute 
 var second = date.getSeconds(); // Get current second
 var period = ""; // Variable to store AM / PM
 
 if (hour >= 12) {
 period = "PM";
 } else {
 period = "AM";
 } // Assigning AM / PM according to the current hour
 
 if (hour == 0) {
 hour = 12;
 } else {
 if (hour > 12) {
 hour = hour - 12;
 }
 } 
 
 
 hour = update(hour); // Converting the hour in 12-hour format
 minute = update(minute); // Updating hour, minute, and second
 second = update(second); // if they are less than 10
 
 document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period; // Adds time elements to the div
 
 setTimeout(Time, 1000); // Set Timer to 1 sec (1000 milliseconds)
}
 // Function to update time elements if they are less than 10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}
Time();