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

  let time = `<span id='timeStr'>${h
    .toString()
    .padStart(2, 0)} : ${m} : ${s}</span><span id="sesson"> ${sesson}</span>`;

  document.getElementById("Time").innerHTML = time;

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
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

  let today = new Date();
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  date =
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
