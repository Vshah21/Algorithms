
insertionSort = (array) =>{
    
    for(let i=1; i<array.length; i++){
        // set current to current pos of index 1 in the array
        let current = array[i];
        // set j to pos of i-1
        let j = i-1;
        // while prev pos value is greater than the current pos value 
        while( j>=0 && array[j] > current){
            // current pos assigns the prev value
            array[j+1] = array[j]
            // j decrements
            j--
        }
        
        array[j+1] = current
    }
    return array
}
insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
