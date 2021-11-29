const container = document.getElementById("container");
const text = document.getElementById("text");
const breathsTimes = document.getElementsById("button-option");
let breathsLeft;

//time variables
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; //  3 seconds
const holdTime = totalTime / 5; // 1.5 seconds

window.onload = () => {
  breathsTimes.addEventListener("click", () => {
    breathsLeft = breathsTimes.value;
    console.log(breathsLeft);
  });
};

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

// const container = document.getElementById("container");
// const text = document.getElementById("text");
// const breathsTimes = document.getElementsByTagName("button");
// let breathsLeft;

// //time variables
// const totalTime = 7500;
// const breatheTime = (totalTime / 5) * 2; //  3 seconds
// const holdTime = totalTime / 5; // 1.5 seconds

// [].forEach.call(breathsTimes, (breathsTimes) => {
//   breathsTimes.addEventListener("click", () => {
//     breathsLeft = breathsTimes.value;
//     console.log(breathsLeft);
//   });
// });

// breatheAnimation();

// function breatheAnimation() {
//   text.innerText = "Inhale";
//   container.className = "container grow";

//   //timeout for hold function
//   setTimeout(() => {
//     text.innerText = "Hold";

//     //timeout for exhale function
//     setTimeout(() => {
//       text.innerText = "Exhale";
//       container.className = "container shrink";
//     }, holdTime);
//   }, breatheTime);
// }

// //set interval to repeat the breathe animation function after totalTime
// setInterval(breatheAnimation, totalTime);
