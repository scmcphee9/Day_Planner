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
