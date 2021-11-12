const container = document.getElementById("container");
const text = document.getElementById("text");

//time variables
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; //  3 seconds
const holdTime = totalTime / 5; // 1.5 seconds

breatheAnimation();

function breatheAnimation() {
  text.innerText = "Inhale";
  container.className = "container grow";

  //timeout for hold function
  setTimeout(() => {
    text.innerText = "Hold";

    //timeout for exhale function
    setTimeout(() => {
      text.innerText = "Exhale";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

//set interval to repeat the breathe animation function after totalTime
setInterval(breatheAnimation, totalTime);
