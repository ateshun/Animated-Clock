const secondHand = document.querySelector("#seconds"),
  minuteHand = document.querySelector("#minutes"),
  hourHand = document.querySelector("#hours");

(function updateClock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes() + seconds / 60;
  let hours = (now.getHours() % 12) + minutes / 60;
  let secRotationAngle = seconds * 6;
  let minRotationAngle = minutes * 6;
  let hrsRotationAngle = hours * 30;

  secondHand.setAttribute("transform", `rotate(${secRotationAngle}, 244, 251)`);
  minuteHand.setAttribute("transform", `rotate(${minRotationAngle}, 244, 251)`);
  hourHand.setAttribute("tranform", `rotate(${hrsRotationAngle}, 244, 251)`);

  let tick = new Audio("./media/tick.mp3");
  tick.currentTime = 0;
  tick.play();

  setTimeout(updateClock, 1000);
})();
