bubbleSort =(array) => {
  
//Outer Loop through the array  
  for(let i=0; i<array.length;i++){
  
    // Inner Loop through the array a second time
    for(let j=0; j<array.length; j++){

        // if the curr pos is greater than the next pos 
        if(array[j]> array[j+1]){
        //   create temp placeholder for the value
          let temp = array[j+1]

        // swap the two positions
          array[j+1] = array[j]
          array[j] = temp
          
        }
    }
  
  }
   
    return array;
  }

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
