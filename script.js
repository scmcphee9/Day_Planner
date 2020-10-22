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
var timeOfDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < timeOfDay.length; i++) {
  var firstTime = 0;
  var secondTime = 1;

  $(`#hour_${timeOfDay[i]} .description`).val(
    localStorage.getItem(`hour_${timeOfDay[i]}`)
  );
}
