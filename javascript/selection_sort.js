function selectionSort(arr) {
  // type your code here
  let smallest
  let newArr = []
  let n = arr.length
  for (let j=0; j<n; j++){
    let position = 0
    smallest = arr[0]
    for (let i=1; i<arr.length; i++){
      if(arr[i] <= smallest){
        smallest = arr[i]
        position = i
      }
    }
    newArr.push(smallest)
    arr.splice(position, 1)
  }
  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-5, -1, 0, 2, 6, 8]");
  console.log("=>", selectionSort([2, -1, -5, 8, 0, 6]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const start = Date.now()

  for(let j=0; j<1000; j++){
    selectionSort([5, -1, 0])
    selectionSort(longInput)
  }

  console.log(Date.now()-start)/2000
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/* 
  const newArr = []
  const n = numbers of items in original array
  iterate n times on current array
    let smallest  = first item in the array
    iterate arr.length -1 times
      if any items is less than the smallest
        set smallest to that item
        position changed to that item position too
    newArr.push smallest num
    delete the smallest num from current array
  return newArr
*/
// And a written explanation of your solution
