// Define variables of current date, and arrays of month and day of the week
var date = new Date();
var month = "January, February, March, April, May, June, July, August, September, October, November, December".split(
  ","
);
var dow = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday".split(
  ","
);
// use jQuery to display the text of current day of the week
$("#currentDay").text(
  dow[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate()
);

// using local storage to save appointment information
// when any save button is clicked, it will save that value entered in the description into the variable appointment
$(".saveBtn").on("click", function () {
  var appointment = $(this).siblings(".description").val();

  console.log(appointment);

  // this sets a variable for the key by selecting the id of the parent element, when the save button is clicked
  var time = $(this).parent().attr("id");

  // this sets the local storage to the key of variable time and value of appointment
  localStorage.setItem(time, appointment);
  console.log(time);
});

var timeOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// for loop to iterate through the time of day and retrieve local storage for each appropriate time, also changes colors of blocks further down
for (var i = 0; i < timeOfDay.length; i++) {
  $(`#hour_${timeOfDay[i]} .description`).val(
    localStorage.getItem(`hour_${timeOfDay[i]}`)
  );

  // This sets the variable to the hour of the day
  var realTime = date.getHours();

  // Use this to add or subtract time if you are outside the time displayed
  // realTime = realTime + 4;
  // console.log(typeof realTime);

  // If statements read actual time and compare to time blocks
  // if the present time, turn text box red
  if (realTime === timeOfDay[i]) {
    $(`#textTime_${timeOfDay[i]}`).addClass("present");
  }
  // if in the future, turn text box green
  if (realTime < timeOfDay[i]) {
    $(`#textTime_${timeOfDay[i]}`).addClass("future");
  }
  // if in the past text box turns gray
  if (realTime > timeOfDay[i]) {
    $(`#textTime_${timeOfDay[i]}`).addClass("past");
  }
}
