function refreshTime() {
var today = dayjs().format('MMM D, YYYY, hh:mm:ss a')

document.getElementById("date-time").textContent=today;
};

refreshTime();
setInterval(refreshTime, 1000);