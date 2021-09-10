function Time() {
 var clockDiv = document.getElementById("clock");
 var dateDiv = document.getElementById("date");
 var date = new Date(); // Sets the value of the current date
 
 var hour = date.getHours(); // Get current hour
 var minute = date.getMinutes(); // Get current minute 
 var second = date.getSeconds(); // Get current second
 var period = ""; // Variable to store AM / PM
 
 var month = date.getMonth()+1; // Get the current month
 var day = date.getDate(); // Get the current day
 var year = date.getFullYear(); // Get current year
 
 if (hour >= 12) {
 period = "PM"; // Assigning AM / PM according to the current hour
 } else {
 period = "AM";
 } 
 
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
 
function update(t) { 
 if (t < 10) { // Function to update time elements if they are less than 10
 return "0" + t;
 }
 else { // Append 0 before time elements if they are less than 10
 return t;
 }
}
Time();

var alarmTime = null; // sets value of alarmTime to 0
var alarmTimeout = null; // sets value of alarmTimeout to 0