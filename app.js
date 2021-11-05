const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");

function main() {
  option1.addEventListener("click", function () {
    window.location.href = "meditation.html";
    console.log("option1");
  });
  option2.addEventListener("click", function () {
    window.location.href = "breathe.html";
    console.log("option2");
  });
  option3.addEventListener("click", function () {
    window.location.href = "relaxingMusic.html";
    console.log("option3");
  });
}

main();
