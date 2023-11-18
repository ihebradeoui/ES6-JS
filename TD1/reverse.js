function reverseIt(arr)
{
    newArr=[]
      for (var i = arr.length - 1; i >= 0; i--) {
       newArr.push(arr[i]) 
      }
      return newArr
}
names = ["iheb","samir","ahmed"]

console.log(reverseIt(names));