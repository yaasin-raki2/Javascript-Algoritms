// bubbleSort methode

function bubbleSort(arr){
   var len = arr.length;
   for (let i = len-1; i>=0; i--){
     for(let j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           let temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort([7,5,2,4,3,9]); // Big(O): -Time Complexity O(n^2) / -Space Complexity O(1) | (So freaking expensive) => {I hate bubble sort -_-}
