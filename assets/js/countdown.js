// https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript
function setup() {
  noCanvas();
  let countdownDate = new Date("2022/06/27 21:00:00");

  let timeIt = setInterval((_) => {
    // Run timeIt every second
    let now = new Date().getTime();
    let timeleft = countdownDate - now;

    // Calculating the days, hours, minutes and seconds left
    let days = nf(floor(timeleft / (1000 * 60 * 60 * 24)), 2);
    let hours = nf(
      floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2
    );
    let minutes = nf(floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)), 2);
    let seconds = nf(floor((timeleft % (1000 * 60)) / 1000), 2);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("mins").innerHTML = minutes + "m ";
    document.getElementById("secs").innerHTML = seconds + "s ";

    // Display the message when countdown is over
    if (timeleft < 0) {
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = "";
      document.getElementById("hours").innerHTML = "";
      document.getElementById("mins").innerHTML = "";
      document.getElementById("secs").innerHTML = "";
      document.getElementById("end").innerHTML = "TIME UP!!";
    }
  }, 1000);
}
