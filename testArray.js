let cellArray = [
  "white0",
  "white1",
  "white2",
  "white3",
  "white4",
  "white5",
  "white6",
  "white7",
  "white8",
  "white9",
  "white10",
  "white11",
  "white12",
  "white13",
  "white14",
  "white15",
  "white16",
];

let randomCells = (number) => {
  let randomArray = [];

  while (randomArray.length < number) {
    let randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];

    if (number > cellArray.length) {
      console.log("Array length exceeded");
      return;
    }
    if (!randomArray.includes(randomCell)) {
      randomArray.push(randomCell);
    }
  }
  return randomArray
}

let newArray = randomCells(7)
console.log(newArray);

// console.log(randomCells(7));
