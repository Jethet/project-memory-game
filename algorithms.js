function getIndexToIns(arr, num) {
  let sortArr = arr.sort(function(a, b){return a-b})
  console.log(sortArr)
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
