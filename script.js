// Add a leading zero to single-digit numbers (e.g. 5 -> "05")
function pad(num) {
  return num < 10 ? "0" + num : String(num);
}

function updateClock() {
  // Date object gives the current time
  const now = new Date();

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  // DOM selection + DOM update
  document.getElementById("clock").textContent =
    hours + ":" + minutes + ":" + seconds;

  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-ZA",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );
}

// Show the time immediately, then refresh every second
updateClock();
setInterval(updateClock, 1000);