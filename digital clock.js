function digiClock() {
  var date = new Date();
  let h = date.getHours();
  let m = `${date.getMinutes()}`.padStart(2, 0);
  let s = `${date.getSeconds()}`.padStart(2, 0);
  let sesson = "AM";

  if (Number(h) === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    sesson = "PM";
  }

  //h = h < 10 ? "0" + h : h;
  /*m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s; */

  var time = `<span id='timeStr'>${h
    .toString()
    .padStart(2, 0)} : ${m} : ${s}</span><span id="sesson"> ${sesson}</span>`;

  document.getElementById("Time").innerHTML = time;

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var today = new Date();
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date =
    "<br></br>" +
    curWeekDay +
    "," +
    " " +
    curDay +
    " " +
    curMonth +
    " " +
    curYear;

  document.getElementById("Date").innerHTML = date;

  setTimeout(digiClock, 1000);
}
