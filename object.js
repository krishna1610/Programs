let cylinder = {
    radius : 5,
    height : 6,
    surfaceArea: () => {
        // this == cylinder
        return (2 * Math.PI * this.radius * this.radius) +
          (2 * Math.PI * this.radius * this.height);
    },
    volume(){
        return Math.PI * this.radius * this.radius * this.height;
    }
}
console.log(cylinder.surfaceArea());
console.log(cylinder.volume());

const sphere = {
    radius: 10,
    methods: {
        surfaceArea: (radius) => {
            return 4 * Math.PI * radius * radius;
        }
    },
    volume(){
        //area * 1/3r;
        return this.methods.surfaceArea(this.radius) * (1/3) * this.radius;
    }
}

const sphere2 = {
    radius: 10,
    surfaceArea: () => {
       return 4 * Math.PI * this.radius * this.radius;
    },
    volume(){
        //area * 1/3r;
        return this.surfaceArea() * (1/3) * this.radius;
    }
}

const triangle = {
    a: 5,
    b: 7,
    c: 10,
    perimeter(){
        return this.a + this.b + this.c;
    },
    area(){
        let s = this.perimeter()/2;
        return Math.sqrt( s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

triangle.a = 20;

// find max value 
// find min value
// return (max - min)+1;
function range(arr){
    let max = arr[0];
    let min = arr[0];
    for(let num of arr){
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    return (max - min) + 1;
}

// count = 0;
// for loop
// check num is betweek count++
// return count
function countInRange(arr, min, max){
    let count = 0;
    for(let num of arr){
        if(num >= min && num <= max){
            count++;
        }
    }
    return count;
}

// for loop 
// i=0  < i=1
// 1, 2, 2, 3, 4, 5
// 1, 2, 3, 4, 7, 8 
function isSorted(arr){
    for(let i=0; i<arr.length - 1; i++){
        if(arr[i] >= arr[i+1]){
            return false;
        }
    }
    return true;
}
// sorted
// ascending --> increasing --> nondecreasing
// strictly increasing
// descending --> decreasing --> nonincreasing
// strictly decreasing

function mode(arr){
    let freq = {};
    for(let num of arr){
        if(freq[num] === undefined){
            freq[num] = 1;
        }else{
            freq[num]++;
        }
    }

    // {5: 10, 6: 10}
    // {6: 10, 5: 10}
    let maxValue = 0;
    let maxFreqKey;
    for(let key in freq){
        if(freq[key] > maxValue){
            maxValue = freq[key];
            maxFreqKey = key;
        }else if(freq[key] === maxValue){
            if(Number(key) < Number(maxFreqKey)){
                maxFreqKey = key;
            }
        }
    }
    return Number(maxFreqKey);
} 

function kthLargest(k,a){
    a.sort( (x,y) =>{
        return y - x;
    });
    return a[k];
}

function median(arr){
    arr.sort((a,b)=>a-b);
    if(arr.length % 2 === 0){
       return (arr[(arr.length)/2]  +
       arr[((arr.length)/2) - 1]) / 2 ;  
    }else{
        return arr[((arr.length+1)/2)-1];
    }
}

function minGap(arr){
    if(arr.length < 2){
        return 0;
    }
    let minGap = Number.MAX_VALUE;
    for(let i=0; i<arr.length-1; i++){
       if(arr[i+1] - arr[i] < minGap){
           minGap = arr[i+1] - arr[i];
       }
    }
    return minGap;
}
 
function percentEven(arr){
    let evenCount = 0;
    for(let num of arr){
        if(num % 2 === 0){
            evenCount++;
        }
    }
    return ((evenCount * 100)/arr.length);
}

function isUnique(arr){
    let obj = {};
    for(let num of arr){
        if(obj[num] === undefined){
            obj[num] = true;
        }else{
            return false;
        }
    }
    return true;
}

function findMin(arr) {
    let min = Number.MAX_VALUE;
    for (const num of arr) {
        min = Math.min(min, num);
    }
}

function priceIsRight(bids, price){

   let minGap = Number.MAX_VALUE;
   for(let num of bids){
       if(num <= price){
           minGap = Math.min(minGap, price - num);
       }  
   }
   if(minGap === Number.MAX_VALUE){
       return -1;
   }else{
       return price - minGap;
   }
}
console.log(priceIsRight([200, 300, 250, 999, 40],10));

function longestSortedSequence(arr){
    let longestSortedLength = 0;
    let currentSortedLength = 1;
    for(let i=0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i+1]) {
            currentSortedLength++;
        } else {
            currentSortedLength = 1;
        }
        longestSortedLength = Math.max(currentSortedLength, longestSortedLength);
    }
    return longestSortedLength;
}
console.log(longestSortedSequence([17, 42, 3, 5, 5, 5, 8, 2, 4, 6, 1, 19]));


function stdev(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    let mean = sum/arr.length;
    let squaredSum = 0;
    for(let num of arr){
        squaredSum += Math.pow(Math.abs(num - mean),2);
    }
    return Math.sqrt(squaredSum/(arr.length - 1));
}

console.log(stdev([5,7,3,7]));