function mergeArray(arr1, arr2){
    let result = [];
    let i=0, j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    if(i < arr1.length){
        for(let k=i; k<arr1.length; k++){
            result.push(arr1[k]);
        }
    }

    if(j < arr2.length){
        for(let k=j; k<arr2.length; k++){
            result.push(arr2[k]);
        }
    }

    return result;
}

console.log(mergeArray([1,2,3],[1,3,4]));
