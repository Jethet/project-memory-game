const cellsArray = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
];

function selectRandom(number) {
  let randomIndexes = []

  while (randomIndexes.length < number) {
    let randomIndex = Math.floor(Math.random() * cellsArray.length)

    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex)
    }
  }
  console.log(randomIndexes);
  
}

selectRandom(5)