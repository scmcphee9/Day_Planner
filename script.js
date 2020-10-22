var date = new Date();
var month = "January, February, March, April, May, June, July, August, September, October, November, December".split(
  ","
);
var dow = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday".split(
  ","
);
$("#currentDay").text(
  dow[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate()
);
// var dow = $("#currentDay").append(date.getDate());
// $("#currentDay").append(date.getFullYear());
// console.log(date);
// console.log(month);
