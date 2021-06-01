
let randomArray = [];
let randomColor
let cellArray = ["white0", "white1", "white2", "white3", "white4", "white5", "white6", "white7", "white8", "white9"]

function randomCells(number) {

 while (randomArray.length < number) {
    let randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];

    if (number > cellArray.length) {
      console.log("Array length exceeded");
      return
    }  
    if (!randomArray.includes(randomCell)){
      randomArray.push(randomCell)
      return
    }
  }
  return randomArray
}

console.log(randomCells(14));
 
