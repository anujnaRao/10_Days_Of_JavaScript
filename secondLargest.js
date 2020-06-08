'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getSecondLargest(nums) {
    nums = nums.sort();
    let first = nums[0], second = nums[0];
    for(let i=0;i<nums.length;i++){
        if( nums[i] >first){
            second = first;
            first = nums[i];
        }
        else if (nums[i] > second && nums[i] != first) 
            second = nums[i]; 
    }
    return second;
}

