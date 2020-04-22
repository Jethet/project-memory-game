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


// Add delay to loop for making requests to API
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const list = [1, 2, 3, 4]
const doSomething = async () => {
  for (const item of list) {
    await sleep(1000)
    console.log('🦄')    
  }
}
doSomething()


// Randomize properties, example: color
this.color = colors[Math.floor(Math.rondom() * colors.length)]