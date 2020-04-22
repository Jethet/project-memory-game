function getIndexToIns(arr, num) {
  
  let sortArr = arr.sort(function(a, b){return a-b})
  
 
  let newArr = []
  for(let i = 0; i <= arr.length; i++) {
    if (arr[i] < num) {
      newArr.push(arr[i])
    } else {
    num = newArr.length
  }
  }
  return num;
}

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Check these with:
if (value) {
  // do something
  }
