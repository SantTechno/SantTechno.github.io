function sumAll(arr) {
  arr.sort(function(a,b){
    return a - b
  })


  while (arr[0] < (arr[arr.length-1])-1) {
    arr.unshift(arr[0]+1)
  }

  return arr.sort(function(a,b){
    return a - b
  }).reduce(function(a, b) {
    return a + b;
  });
}

console.log(sumAll([4, 1]));