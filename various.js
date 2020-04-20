// Add button with event listener, plus function to change background color

let body = document.querySelector('.timer-body')
let toggleButton = false
let colorButton = document.querySelector(".color-button")
colorButton.addEventListener("click", function (e) {
  changeBackground()
  e.preventDefault()
})

function changeBackground() {
  toggleButton = !toggleButton
  if(toggleButton) {
    body.style.background = '#05E3EE'
  } else {
    body.style.background = '#AFDCFB'
  }
}

// Format the hours, minutes and seconds as 00:00:00
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

// Play sound and show alert message
  function play() {
    let alertSound;
    alertSound = new Audio("./audio/windchimes.wav");
    alertSound.play();
    setTimeout(function () {
      alert("The set time has elapsed");
    }, 1000);
  }
}
