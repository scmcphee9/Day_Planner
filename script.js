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

$(".saveBtn").on("click", function () {
  var appointment = $(this).siblings(".description").val();

  console.log(appointment);

  var time = $(this).parent().attr("id");

  localStorage.setItem(time, appointment);
  console.log(time);
});

// var savedAppointment = localStorage.getItem("hour_9");

// $("#1").append(savedAppointment);
var timeOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < timeOfDay.length; i++) {
  // var firstTime = 0;
  // var secondTime = 1;

  $(`#hour_${timeOfDay[i]} .description`).val(
    localStorage.getItem(`hour_${timeOfDay[i]}`)
  );

  // This will display the hour of the day
  var realTime = date.getHours();

  // Use this to add or subtract time if you are outside the time displayed
  // realTime = realTime;
  // console.log(typeof realTime);

  // If statements read actual time and compare to time blocks
  // if in the past text box turns gray
  // if the present time, turn text box red
  // if in the future, turn text box green
  if (realTime === timeOfDay[i]) {
    $(`#textTime_${timeOfDay[i]}`).addClass("present");
  }
  if (realTime < timeOfDay[i]) {
    $(`#textTime_${timeOfDay[i]}`).addClass("future");
  }
  if (realTime > timeOfDay[i]) {
    $(`#textTime_${timeOfDay[i]}`).addClass("past");
  }
}
