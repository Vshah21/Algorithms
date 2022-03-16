 selectionSort=(array) =>{
    // loop through the array 
    for(let i=0; i<array.length-1; i++){
    // min value is set to first value i
      let min=i

    // loop through the array 
    // loop starts with the current pos+1

      for(let j=i+1; j<array.length; j++){
  
        // if the value is less than the current position of i
           if(array[j] < array[min]){
            //then replace the min value with the minimum value (j)
               min =j
            
           }
      }
    // assign temp variable to the current position
      let temp = array[i]
    //replace the current position with the minimum number
      array[i] = array[min]
      array[min]= temp
     
    }
   
    return array;
    // Only change code above this line
  }

  selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])